import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";

function ProductCard() {
    const { productsDb, setProductsDb } = useContext(GlobalStateContext);
    return(
        <div>
            <div>
                <img alt='Tenis'/>
            </div>
            <p>
                test
            </p>
            <p></p>
            <input type='button' onClick={() => console.log(productsDb)}/>
        </div>
    )
}

export default ProductCard;