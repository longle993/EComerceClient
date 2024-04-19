import { Link } from 'react-router-dom';
import './style.scss';
import { memo, useEffect, useState } from 'react';
import { formater } from 'utils/formater';
import { useCartContext } from 'utils/Context';
import { getProductById } from 'api/ProductsApi';
import { postBill } from 'api/BillsApi';

const Cart = () => {
    const { cart, setCart, price, setPrice, setCount } = useCartContext();
    const [products, setProducts] = useState([]);
    const [pay,isPay] = useState(false)
    const listItem = [];


    //Tạo mã hoá đơn
    function generateUniqueCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    const uniqueCode = generateUniqueCode();
    useEffect(() => {

        const fetchData = async () => {
            const productsData = [];
            let currentPrice = 0;
            for (let i = 0; i < cart.length; i++) {
                const response = await getProductById(cart[i]);
                productsData.push(response.data);
                if(productsData.length > 0){
                    currentPrice += response.data.giaSp;
                }
            }
            setProducts(productsData);
            setPrice(currentPrice);
            setCount(productsData.length);

            console.log(cart);
        };

        fetchData();
    }, []);

    useEffect(() => {
        setCount(cart.length);
    }, [cart]);

    useEffect(()=> {
        isPay(false);
        const newCart = [];
        setCart(newCart);

    },[pay])

    return (
        <div className='container'>
            <div className='row'>
                <h2>Giỏ hàng của bạn</h2>
            </div>
            <div className='container-pay'>
                <p>Tổng tiền: {formater(price)}</p>
                <button className='btnPay' onClick={()=> {
                    products?.map((item)=> {
                        listItem.push({
                            "IdSanPham": item.idSanPham,
                            "TenSanPham": item.tenSanPham
                        });
                    })
                    
                    const jsonString = JSON.stringify(listItem);
                    const pushBill = async()=> {
                        const currentBill = {
                            "idHoaDon": uniqueCode,
                            "sanPham": jsonString
                        }
                        await postBill(currentBill);
                    }

                    pushBill();
                    isPay(true);
                }}>Thanh toán</button>

            </div>
            {products?.map((item, index) => (
                <div key={index} className='row'>
                    <div className='col-lg-9 cart-items'>
                        <img className='col-lg-3' src={item.hinhAnh[0]} alt={item.tenSanPham} />
                        <div className='col-lg-6 cart-text-left'>
                            <h6>{item.tenSanPham}</h6>
                            <div className='cart-quantity'>
                                <span>Số lượng: </span>
                                <span>1</span>
                            </div>
                        </div>
                        <div className='col-lg-3 cart-text-right'>
                            <button onClick={() => {
                                const productIdToRemove = item.idSanPham;
                            
                                // Cập nhật lại danh sách sản phẩm và tổng giá tiền
                                const updatedProducts = products.filter(product => product.idSanPham !== productIdToRemove);
                                const newCart = []
                                updatedProducts.map((item)=> {
                                    newCart.push(item.idSanPham)
                                })
                                setCart(newCart);
                                const updatedPrice = updatedProducts.reduce((totalPrice, product) => totalPrice + product.giaSp, 0);
                                setProducts(updatedProducts);
                                setPrice(updatedPrice);
                            }}>Loại bỏ</button>
                            <span className='cart-total-item'>{formater(item.giaSp)}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default memo(Cart);
