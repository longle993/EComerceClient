import {memo} from 'react';
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


const HomePage = () => {
    const imgTest2= 'https://storage-asset.msi.com/global/picture/image/feature/nb/GE/Raider-GE78-HX-13V/kv-pd.png';
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

    const featProducts = {
      all: {
        title: 'Toàn bộ',
        products: [
          {
            img: 'https://cdn.tgdd.vn/Products/Images/44/308489/acer-gaming-nitro-5-an515-57-53f9-i5-nhqensv008-thumb-600x600.jpg',
            name: 'Macbook Air M1 2020',
            price: 20000000
          },
          {
            img: 'https://cdn.tgdd.vn/Products/Images/44/308489/acer-gaming-nitro-5-an515-57-53f9-i5-nhqensv008-thumb-600x600.jpg',
            name: 'MSI GV72 7RD',
            price: 25000000
          },
          {
            img: imgTest2,
            name: 'MSI series',
            price: 45000000
          },
          {
            img: 'https://cdn.tgdd.vn/Products/Images/44/308489/acer-gaming-nitro-5-an515-57-53f9-i5-nhqensv008-thumb-600x600.jpg',
            name: 'MSI GV72 7RD',
            price: 25000000
          },
          {
            img: imgTest2,
            name: 'MSI series',
            price: 45000000
          }
        ]
      },
      laptop: {
        title: 'Laptop',
        products: [
          {
            img: imgTest2 ,
            name: 'iPhone 15 Pro Max',
            price: 20000000
          },
          {
            img: imgTest2,
            name: 'iPhone 15 Pro Max',
            price: 20000000
          },
          {
            img: imgTest2,
            name: 'iPhone 15 Pro Max',
            price: 20000000
          }
        ]
      },
      phone: {
        title: 'Điện thoại',
        products: [
          {
            img: imgTest2 ,
            name: 'iPhone 15 Pro Max',
            price: 20000000
          },
          {
            img: imgTest2,
            name: 'iPhone 15 Pro Max',
            price: 20000000
          },
          {
            img: imgTest2,
            name: 'iPhone 15 Pro Max',
            price: 20000000
          }
        ]
      },
      tablet: {
        title: 'Tablet',
        products: [
          {
            img: imgTest2,
            name: 'iPad Air',
            price: 12000000
          }
        ]
      },
      watch: {
        title: 'Đồng hồ',
        products: [
          {
            img: imgTest2,
            name: 'Apple Watch Series 9',
            price: 8000000
          }
        ]
      },
      accessory: {
        title: 'Phụ kiện',
        products: [
          {
            img: imgTest2,
            name: 'Tai nghe',
            price: 2000000
          }
        ]
      }
    }

    const renderFeatProducts = (data) => {
      const tabList  = [];
      const tabPanels = [];

      Object.keys(data).forEach((key,index) => {
        tabList.push(<Tab key={index}>{data[key].title}</Tab>);

        const tabPanel = [];
        data[key].products.forEach((item,j) => {
          console.log(item.img);
          tabPanel.push(
            <div className='col-lg-3' key={j}>
              <div className='featured-item'>
                <div className='featured-item-pic'
                style={{
                  backgroundImage: `url(${item.img})`
                }}>
                  <ul className='featured-item-pic-hover'>
                    <li>
                      <IoEyeOutline/>
                    </li>
                    <li>
                      <FaShoppingCart/>
                    </li>
                  </ul>
                </div>
                <div className='featured-item-text'>
                    <h6>
                      <Link to={'#'}>{item.name}</Link>
                    </h6>
                    <h5>{formater(item.price)}</h5>
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