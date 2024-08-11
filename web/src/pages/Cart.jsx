import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/productCard";
import Logo from "../components/Logo";

function Cart() {
    const { cart } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    
    return(
        <div>
            <Logo url="/"/>
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