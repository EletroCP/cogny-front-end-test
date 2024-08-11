import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import { useNavigate } from "react-router-dom";
// import mockDataBase from "../mock/mock";

function ProductCard({image, description, price, index}) {
    const { cart, setCart } = useContext(GlobalStateContext);
    const temporaryImageSize = { width: "300px", height: "300px"};
    
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
        <div style={{backgroundColor: "withe"}}>
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
        </div>
    )
}

export default ProductCard;