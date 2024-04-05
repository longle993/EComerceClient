import {memo} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import { FaFacebook,FaInstagram,FaLinkedin  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
    return (
        <>
        <div className='header-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header-top-left'>
                        <ul>
                            <IoMdMail/>
                            <li>le.duclong0909@gmail.com</li>

                        </ul>
                    </div>
                    <div className='col-6 header-top-right'>
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaLinkedin />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3 col-lg-3'>LOGO</div>
                <div className='col-xl-6 col-lg-6'>MENUS</div>
                <div className='col-xl-3 col-lg-3'>PHONE</div>

            </div>
        </div>
        
        </>
        
    );
}

export default memo(Header);