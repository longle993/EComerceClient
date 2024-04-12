import { get, post, put, remove } from './Api';

const getAllBill = async ()=>{
    return await get('api/hoadon/get-all-bill');
}

export {getAllBill}