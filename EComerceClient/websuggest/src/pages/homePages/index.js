import {memo} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import $bannerImg from 'assets/user/image/banner.jpg';
import './style.scss';
const HomePage = () => {

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
    return (
        //Categories Begin
        <>
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
        </>
        //Categories End

    );
}

export default memo(HomePage);