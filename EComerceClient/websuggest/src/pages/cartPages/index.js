import { Link } from 'react-router-dom';
import './style.scss';
import {memo} from 'react';
import { formater } from 'utills/formater';

const Cart = () => {
    return (
        <div className='container'>
            <div className='cart-border'>
                <div className='cart-items'>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHxMP7VWESAjnxcdDQ9exuOdrIPT-GTbJX-0rSXAp0A&s'></img>
                    <div className='cart-text-left'>
                        <h6>Tên sản phẩm</h6>
                        <div className='cart-quantity'>
                            <span>Số lượng: </span>
                            <span>1</span>
                        </div>
                        
                    </div>
                    <div className='cart-text-right'>
                        <button>Loại bỏ</button>
                        <span className='cart-total-item'>{formater(10000000)}</span>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default memo(Cart)