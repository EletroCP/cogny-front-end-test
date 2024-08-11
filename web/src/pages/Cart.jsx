import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import Logo from "../components/Logo";
import MyCart from "../components/MyCart";

function Cart() {
    const { cart } = useContext(GlobalStateContext);

    const groupedCart = cart.reduce((acc, item) => {
        const key = `${item.image}-${item.description}-${item.price}`;
        if (!acc[key]) {
            acc[key] = { ...item, quantity: 0 };
        }
        acc[key].quantity += 1;
        return acc;
    }, {});

    const cartItems = Object.values(groupedCart);
    
    return(
        <div>
            <Logo url="/"/>
            <MyCart url="/cart"/>
            {cartItems.map(({ image, description, price, quantity }, index) => (
                <div key={`product-id${index}`} style={{ backgroundColor: "white", padding: "10px", margin: "10px" }}>
                    <div>
                        <img
                            src={image}
                            alt={description}
                            style={{ width: "300px", height: "300px" }}
                        />
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p>{price.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Quantidade: {quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;