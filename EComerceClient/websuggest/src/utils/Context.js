import React, {useState, useContext, useEffect} from "react";

const cartContext = React.createContext();

export function useCartContext(){
    return useContext(cartContext);
}

export const CartProvider = (props) => {
    const [cart,setCart] = useState([]);
    const [price,setPrice] = useState(0);
    const [countProduct,setCount] = useState(0);


    const value = {
        cart,
        setCart,
        price,
        setPrice,
        countProduct,
        setCount
    }
    return (
        <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    )
}