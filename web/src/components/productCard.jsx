import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import mockDataBase from "../mock/mock";

function ProductCard() {
    const { cart, setCart } = useContext(GlobalStateContext);
    const temporaryImageSize = { width: "300px", height: "300px"};
    const productsDb = mockDataBase;

    const addProduct = (image, description, price) => {
        const productObjet = {
            image,
            description,
            price
        }
        const updateCart = [...cart, productObjet];
        setCart(updateCart);
    };

    return(
        <div>
            {productsDb.map(({image, description, price}, index) => {
                return(
                    <div key={`product-id${index}`}>
                        <div >
                            <img
                                src={image}
                                alt={description}
                                style={temporaryImageSize}
                            />
                        </div>
                        <div>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div>
                            <p>
                                {price}
                            </p>
                        </div>
                        <div>
                            <input type='button' value="Comprar" onClick={() => addProduct(image, description, price)}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard;