import { Link, resolvePath, useParams  } from 'react-router-dom';
import './style.scss';
import {memo, useEffect,useState} from 'react';
import { formater } from 'utils/formater';
import { getProductById,getSuggestProduct } from 'api/ProductsApi';
import Carousel from "react-multi-carousel";
import { useCartContext } from 'utils/Context';
import { FaShoppingCart    } from "react-icons/fa";
import { ROUTERS } from 'utils/router';
import { IoEyeOutline } from "react-icons/io5";


const Product = () => {
    const { idSP} = useParams();
    const [listImg,setImgList] = useState([]);
    const {cart, setCart,price,setPrice,setCount} = useCartContext();
    const [product, setProduct] = useState({});
    const [suggestProduct,setSuggest] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getProductById(idSP);
            setProduct(response.data);
            setImgList(response.data.hinhAnh);
            setCount(cart.length);
            setPrice(price);

            const responseSuggest = await getSuggestProduct(idSP);
            const data = responseSuggest.data;
            setSuggest(data)
          } catch (error) {
            console.error('Error fetching product data:', error);
          }
        };
        fetchData();
      }, [idSP]);

    useEffect(()=> {
      setCount(cart.length);
      setPrice(price + product.giaSp);
    },[cart])


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
            <div className='container'>
                <div className='row'>
                
                </div>
                <div className='row'>
                    <div className='col-lg-6 product-container'>
                        <div className='product-info'>
                            <div className='product-info-detail'>
                                <h3 id='productName'>{product.tenSanPham}</h3>
                                <span id='productPrice'>{formater(product.giaSp)}</span>
                                <p id='productDescribe'>Product Description <br/>
                                ~~~~~~~~~</p>
                                <button className='btnAddToCart' onClick={() => {
                                    const updatedCart = [...cart, product.idSanPham];
                                    setCart(updatedCart)
                                }}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='container'>
                  <div className='featured-products'>
                    <div className='section-title'>
                      <h2>Sản phẩm đề xuất</h2>
                    </div>
                    <div className='row'>
                    {
                    suggestProduct?.map((item,index)=> (
                      
                      <div className='col-lg-3' key={index}>
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
                    ))
                  }
                  </div>
                  </div>
                  
                </div>
            </div>
            
        </>
    )
}

export default memo(Product)