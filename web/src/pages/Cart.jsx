import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import ProductCard from "../components/productCard";
import Logo from "../components/Logo";
import MyCart from "../components/MyCart";

function Cart() {
    const { cart } = useContext(GlobalStateContext);
    
    return(
        <div>
            <Logo url="/"/>
            <MyCart url="/cart"/>
            {cart.map(({image, description, price}, index) => (
                    <ProductCard 
                        key={`product-id${index}`}
                        image={image} 
                        description={description} 
                        price={price}
                    />
            ))}
        </div>
    )
}

export default Cart;