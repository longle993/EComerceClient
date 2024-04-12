import { Link, resolvePath } from 'react-router-dom';
import './style.scss';
import {memo, useEffect,useState} from 'react';
import { formater } from 'utills/formater';
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

    useEffect(()=> {
        console.log(bills)
    },[bills]);

    return (
        <>
            <h1>History Pages</h1>
        </>
    )
}

export default memo(History)