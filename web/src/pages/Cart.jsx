import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart } = useContext(GlobalStateContext);
    const temporaryImageSize = { width: "300px", height: "300px"};
    const navigate = useNavigate();
    
    return(
        <div>
            <p onClick={() => navigate("/")}>Home</p>
            {cart.map(({image, description, price}, index) => {
                return(
                    <div key={`product-id${index}`}>
                        <p style={{color:"white"}}>Cart</p>
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
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;