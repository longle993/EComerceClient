import { get, post, put, remove } from './Api';


const getAllProducts = async() => {
    return await get('/api/sanpham/get-all-product');
}

const getProductType = async() => {
    return await get('api/sanpham/get-product-type');
}

const getProductByType = async(typeID) => {
    return await get(`api/sanpham/get-product-by-type?type=${typeID}`);
}

const getProductById = async(idSP) => {
    return await get(`api/sanpham/get-product-by-id?id=${idSP}`);
}

const getSuggestProduct = async() => {
    return await get('/api/sanpham/get-suggest-product');
}

const getFrequentProduct = async()=> {
    return await get ('/api/sanpham/get-frequence-product');
}
export{getAllProducts,getProductType, getProductByType,getProductById,getSuggestProduct, getFrequentProduct}