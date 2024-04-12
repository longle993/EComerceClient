import { get, post, put, remove } from './Api';


const getAllProducts = async() => {
    return await get('/api/sanpham/get-all-product');
}

const getProductType = async() => {
    return await get('api/sanpham/get-product-type');
}

const getProductByType = async(typeID) => {
    return await get(`api/sanpham-get-product-by-type?type=${typeID}`);
}
export{getAllProducts,getProductType, getProductByType}