import { Link } from 'react-router-dom';
import './style.scss';
import {memo} from 'react';
import { FaFacebook,FaInstagram,FaLinkedin   } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
                        <div className='footer-about'>
                            <h1 className='footer-about-logo'>
                            ELEC SHOP
                            </h1>
                            <ul>
                                <li>Địa chỉ: 279 Nguyễn Tri Phương</li>
                                <li>Điện thoại: 0879511207</li>
                                <li>Email: le.duclong0909@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <div className='footer-widget'>
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to={''}>Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to={''}>Thông tin về chúng tôi</Link>
                                </li><li>
                                    <Link to={''}>Sản phẩm kinh doanh</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to={''}>Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to={''}>Giỏ hàng</Link>
                                </li>
                                <li>
                                    <Link to={''}>Danh sách ưa thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        <div className='footer-widget'>
                            <h6>Khuyến mãi và ưu đãi</h6>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action='#' >
                                <div className='input-group'>
                                    <input type='text' placeholder='Nhập email tại đây'>
                                    </input>
                                    <button type='submit' className='button-submit'>Đăng ký</button>
                                </div>
                                <div className='footer-widget-social'>
                                    <div>
                                        <FaFacebook/>
                                    </div>
                                    <div>
                                        <FaInstagram/>
                                    </div>
                                    <div>
                                        <FaLinkedin/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                

            </div>
        </footer>
    );
}

export default memo(Footer);