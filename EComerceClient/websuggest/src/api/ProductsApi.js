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

const getSuggestProduct = async(productId) => {
    return await get(`/api/sanpham/get-suggest-product?productId=${productId}`);
}

const getFrequentProduct = async()=> {
    return await get ('/api/sanpham/get-frequence-product');
}

const getTop8Suggest = async(productId) => {
    return await get(`api/TMDT/danh-sach-phoi-hop/${productId}`);
}
export{getAllProducts,getProductType, getProductByType,getProductById,getSuggestProduct, getFrequentProduct,getTop8Suggest}