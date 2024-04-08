import {Children, memo, useState} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import { FaFacebook,FaInstagram,FaLinkedin,FaShoppingCart,FaPhone    } from "react-icons/fa";
import { IoMdMail  } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { formater } from 'utills/formater';
import { ROUTERS } from 'utills/router';

const Header = () => {
    const [isShowCategories,setShowCategories] = useState(true)
    const [menus, setMenus] = useState([
        {
            name: 'Trang chủ',
            path: ROUTERS.USER.HOME
        },
        {
            name: 'Lịch sử mua hàng',
            path: ROUTERS.USER.HISTORY
        },
        {
            name: 'Sản phẩm',
            path: ROUTERS.USER.PRODUCTS,
            isShowSubmenu: false,
            child:[{
                name:'Laptop',
                path:'',
            },
            {
                name:'Điện thoại',
                path:'',
            },
            {
                name:'Tablet',
                path:'',
            },
            {
                name:'Đồng hồ',
                path:'',
            },
            {
                name:'Phụ kiện',
                path:'',
            }           
        ]
        }
    ])
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
                <div className='col-xl-3'>
                    <div className='header-logo'>
                        <h1>Elec Shop</h1>
                    </div>
                </div>
                <div className='col-xl-6'>
                    <nav className='header-menu'>
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key = {menuKey} className={menuKey === 0? 'active': ''}>
                                        <Link to={menu?.path}>{menu.name}</Link>
                                        {
                                            menu.child && (
                                                <ul className='header-dropdown-menu'>
                                                    {
                                                        menu.child.map((childItem,childKey) => (
                                                            <li key={`${menuKey} - ${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                    
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>
                </div>
                <div className='col-xl-3'>
                    <div className='header-cart'>
                        <div className='header-cart-price'>
                            <span>{formater(100000)}</span>
                        </div>
                        <ul>
                        <li>
                            <Link to={""}>
                                <FaShoppingCart/>
                                <span>10</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className='container'>
            <div className='row categories-container'>
                <div className='col-lg-3 categories'>
                    <div className='categories-all' onClick={() => setShowCategories(!isShowCategories)}>
                        <IoMenu />
                        Danh sách sản phẩm
                    </div>
                    {isShowCategories && (
                        <ul className={isShowCategories ? '' : 'hidden'}>
                            <li>
                                <Link to={'#'}>Laptop</Link>
                            </li>
                            <li>
                                <Link to={'#'}>Điện thoại</Link>
                            </li>
                            <li>
                                <Link to={'#'}>Tablet</Link>
                            </li>
                            <li>
                                <Link to={'#'}>Đồng hồ</Link>
                            </li>
                            <li>
                                <Link to={'#'}>Phụ kiện</Link>
                            </li>
                        </ul>
                    )}
                    
                </div>
                <div className='col-lg-9 search-container'>
                    <div className='search'>
                        <div className='search-form'>
                            <form>
                                <input type='text' placeholder='Bạn đang tìm gì?'/>
                                <button type='submit'>Tìm kiếm</button>
                            </form>
                        </div>
                        <div className='search-phone'>
                            <div className='search-phone-icon'>
                                <FaPhone />
                            </div>
                            <div className='search-phone-text'>
                                <p>0879511207</p>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-text'>
                            <span>Thiết bị thông minh</span>
                            <h2>Hiện đại <br/>
                            Phong cách</h2>
                            <p>Miễn phí giao hàng tận nơi</p>
                            <Link to={'#'} className='primary-btn'>Mua ngay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default memo(Header);