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
import { formater } from 'utills/formater';
import { getAllProducts,getProductType,getProductByType } from 'api/ProductsApi';
import Header from 'pages/theme/header';



const HomePage = () => {
  

    const [products, setProducts] = useState([]);
    const [listType, setType] = useState([]);
    const [featProducts, setFeatProducts] = useState({}); // Sử dụng useState để cập nhật featProducts
    const cart = [];
    useEffect(() => {
      const fetchData = async () => {
        try {
          //Get All product
          const response = await getAllProducts();
          const products = JSON.parse(response.data);
          setProducts(products);
    
          //Get All Type
          const responseType = await getProductType();
          const types = responseType.data;
    
          const featProductsTitle = {}; 
    
          types.forEach((item) => {
            const filterProducts = products?.$values.filter(product => product.IdLoaiSp === item.idLoaiSp)

            featProductsTitle[item.idLoaiSp] = {
              title: item.loaiSp,
              listProducts: filterProducts
            };
          });
    
          setType(types);
    
          setFeatProducts({
            all: {
              title: 'Toàn bộ',
              listProducts: products?.$values || []
            },
            ...featProductsTitle
          });
        } catch (exception) {
          console.log(exception);
        }
      };
    
      fetchData();
    }, []);  

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    
    
    const renderFeatProducts = (data) => {
      const tabList  = [];
      const tabPanels = [];
      console.log(featProducts);
      
      Object.keys(data).forEach((key,index) => {
        tabList.push(<Tab key={index}>{data[key].title}</Tab>);

        const tabPanel = [];
        data[key].listProducts.forEach((item,j) => {
          tabPanel.push(
            <div className='col-lg-3' key={j}>
              <div className='featured-item'>
                <div className='featured-item-pic'
                style={{
                  backgroundImage: `url(${item.HinhAnh.$values[0]})`
                }}>
                  <ul className='featured-item-pic-hover  '>
                    <li>
                      <IoEyeOutline/>
                    </li>
                    <li onClick={() => {
                      cart.push(item.IdSanPham);
                      console.log(cart);
                    }}>
                      <FaShoppingCart/>
                    </li>
                  </ul>
                </div>
                <div className='featured-item-text'>
                    <h6>
                      <Link to={'#'}>{item.TenSanPham}</Link>
                    </h6>
                    <h5>{formater(item.GiaSp)}</h5>
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
                <Carousel responsive={responsive} className='categories-slider'>
                    <div className='categories-slider-item'
                    style={{backgroundImage: `url(${$bannerImg})`}}
                    ><p>Acer Nitro 5</p></div>
                    <div className='categories-slider-item'
                    style={{backgroundImage: `url(${$bannerImg})`}}
                    ><p>Acer Nitro 5</p></div><div className='categories-slider-item'
                    style={{backgroundImage: `url(${$bannerImg})`}}
                    ><p>Acer Nitro 5</p></div>
                    <div className='categories-slider-item'
                    style={{backgroundImage: `url(${$bannerImg})`}}
                    ><p>Acer Nitro 5</p></div>
                    <div className='categories-slider-item'
                    style={{backgroundImage: `url(${$bannerImg})`}}
                    ><p>Acer Nitro 5</p></div>
                </Carousel>
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
                <img src='https://media.wired.com/photos/62311bfde5e91991368ff6e5/3:2/w_2400,h_1600,c_limit/Apple-iPad-Air-2022-Review-Gear.jpg' alt = 'banner'/>
              </div>
              <div className='banner-pic'>
                <img src='https://media.wired.com/photos/6580812d2c05e7fb0bdf4968/16:9/w_2400,h_1350,c_limit/Apple-suspending-sales-of-the-Apple-Watch-Gear-GettyImages-1683405578.jpg' alt = 'banner'/>
              </div>
            </div>
          </div>

        {/* Banner End */}
      </>
    );
}

export default memo(HomePage);