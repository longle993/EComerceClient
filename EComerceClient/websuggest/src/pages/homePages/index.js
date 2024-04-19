import {memo} from 'react';
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import $bannerImg from 'assets/user/image/banner.jpg';
import './style.scss';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingCart    } from "react-icons/fa";
import { formater } from 'utils/formater';
import { getProductType,getFrequentProduct} from 'api/ProductsApi';
import { useCartContext } from 'utils/Context';
import { ROUTERS } from 'utils/router';


const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [listType, setType] = useState([]);
    const [featProducts, setFeatProducts] = useState({}); // Sử dụng useState để cập nhật featProducts
    const {cart, setCart,price,setPrice,setCount} = useCartContext();

    useEffect(() => {
      const fetchData = async () => {
        try {
          //Get Frequence Product
          const responseFrequence = await getFrequentProduct();
          const frequenceProducts = responseFrequence.data;
          setProducts(frequenceProducts);

          //Get All Type
          const responseType = await getProductType();
          const types = responseType.data;

          const featProductsTitle = {}; 
    
          types.forEach((item) => {
            const filterProducts = frequenceProducts?.filter(product => product.idLoaiSp === item.idLoaiSp)

            featProductsTitle[item.idLoaiSp] = {
              title: item.loaiSp,
              listProducts: filterProducts
            };
          });
    
          setType(types);
    
          setFeatProducts({
            all: {
              title: 'Toàn bộ',
              listProducts: frequenceProducts || []
            },
            ...featProductsTitle
          });
        } catch (exception) {
          console.log(exception);
        }
      };
    
      fetchData();
    }, []);  
    useEffect(() => {
      const count = cart.length;
      setCount(count);
      let currentPrice = 0;
      if (products) { 
        for (let i = 0; i < cart.length; i++) {
          const currentProduct = products.find(item => item.idSanPham == cart[i]);
          if (currentProduct) { 
            currentPrice += currentProduct.giaSp;
          }
        }
      }
      setPrice(currentPrice);
    }, [cart, products]);

    const renderFeatProducts = (data) => {
      const tabList  = [];
      const tabPanels = [];
      
      Object.keys(data).forEach((key,index) => {
        tabList.push(<Tab key={index}>{data[key].title}</Tab>);

        const tabPanel = [];
        data[key].listProducts.forEach((item,j) => {
          tabPanel.push(
            <div className='col-lg-3' key={j}>
              <div className='featured-item'>
                <div className='featured-item-pic'
                style={{
                  backgroundImage: `url('')`
                }}>
                  <ul className='featured-item-pic-hover  '>
                    <li>
                      <Link to={`${ROUTERS.USER.PRODUCTS}/${item.idSanPham}`}>
                        <IoEyeOutline/>
                      </Link>
                    </li>
                    <li onClick={() => {
                      const updatedCart = [...cart, item.idSanPham];
                      setCart(updatedCart)
                    }}>
                      <FaShoppingCart/>
                    </li>
                  </ul>
                </div>
                <div className='featured-item-text'>
                    <h6>
                      <Link to={'#'}>{item.tenSanPham}</Link>
                    </h6>
                    <h5>{formater(item.giaSp)}</h5>
                </div>
              </div>
            </div>
          )          
        });

        tabPanels.push(tabPanel);
      })

      return (
        <Tabs>
          <TabList>
            {tabList}
          </TabList>

          {
            tabPanels.map((item,key) => (
              <TabPanel key = {key}>
                <div className='row'>
                  {item}
                </div>
              </TabPanel>
            ))
          }
          
        </Tabs>
      )
    }
    return (
      <>
        {/* Categories Begin */}
        
            <div className='container container-categories-slider'>
            {/* <Carousel responsive={responsive} className='categories-slider'>
                  {
                    products?.$values.map((item,index)=> (
                      <div key = {index} className='categories-slider-item'
                      style={{backgroundImage: `url(${item.HinhAnh.$values[0]})`}}
                      ><p>{item.TenSanPham}</p></div>
                    ))
                  }
                </Carousel> */}
            </div>
        {/* Categories End */}
        {/* FeatureBegin */}
        <div className='container'>
          <div className='featured'>
            <div className='section-title'>
              <h2>Sản phẩm nổi bật</h2>
            </div>
            {renderFeatProducts(featProducts)}

          </div>
        </div>
        {/* FeatureEnd */}

        {/* Banner Begin */}
          <div className='container'>
            <div className='banner'>
              <div className='banner-pic'>
                <img src='https://png.pngtree.com/background/20230525/original/pngtree-3d-grocery-store-with-orange-goods-in-the-background-picture-image_2738856.jpg' alt = 'banner'/>
              </div>
              <div className='banner-pic'>
                <img src='https://previews.123rf.com/images/drogatnev/drogatnev1710/drogatnev171000048/87355938-supermarket-store-interior-with-goods-big-shopping-mall-interior-store-inside.jpg' alt = 'banner'/>
              </div>
            </div>
          </div>

        {/* Banner End */}
      </>
    );
}

export default memo(HomePage);