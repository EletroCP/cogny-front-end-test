import React from "react";
// import { useContext } from 'react';
// import { GlobalStateContext } from "../context/context";
import mockDataBase from "../mock/mock";

function ProductCard() {
    // const { productsDb } = useContext(GlobalStateContext);
    const productsDb = mockDataBase;
    return(
        <div>
            {productsDb.map((product, index) => {
                return(
                    <div>
                        <div key={`product-id${index}`}>
                            <img src={product.image} alt={product.description}/>
                        </div>
                        <div>
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div>
                            <p>
                                {product.price}
                            </p>
                        </div>
                        <div>
                            <input type='button' value="Comprar" onClick={() => console.log(productsDb)}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard;