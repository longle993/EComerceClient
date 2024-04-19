import { get, post, put, remove } from './Api';

const getAllBill = async ()=>{
    return await get('api/hoadon/get-all-bill');
}

const postBill = async (data)=> {
    return await post('api/hoadon/add-bill',data);
}

export {getAllBill,postBill}