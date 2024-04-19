import { Link, json, resolvePath } from 'react-router-dom';
import './style.scss';
import {memo, useEffect,useState} from 'react';
import { formater } from 'utils/formater';
import { getAllBill } from 'api/BillsApi';


const History = () => {
    const[bills,setBill] = useState([]);

    useEffect(()=> {
        const fetchData = async() =>{
            const response = await  getAllBill();
            setBill(response.data);
        }
        fetchData();
    },[]);


    return (
        <>
            <div className='container'>
                {
                    bills?.map((item,index)=> {
                        const jsonObject = JSON.parse(item.sanPham);

                        return(
                        <div key={index} className='row'>
                            <div className='formBill'>
                                <h3>Mã hoá đơn: {item.idHoaDon}</h3>
                                <div className='listItem'>
                                    <ul>
                                    {
                                        jsonObject.map((value,j) => (
                                            <li key = {j}>Mã hàng: {value.IdSanPham}<br/>{value.TenSanPham}</li>

                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        )
                    })
                }
                
            </div>
        </>
    )
}

export default memo(History)