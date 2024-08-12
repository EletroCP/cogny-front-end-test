import React from "react";
import { useContext } from 'react';
import { GlobalStateContext } from "../context/context";
import Logo from "../components/Logo";
import MyCart from "../components/MyCart";

function Cart() {
    const { cart, setCart } = useContext(GlobalStateContext);

    const groupedCart = cart.reduce((acc, item) => {
        const key = `${item.image}-${item.description}-${item.price}`;
        if (!acc[key]) {
            acc[key] = { ...item, quantity: 0 };
        }
        acc[key].quantity += 1;
        return acc;
    }, {});

    const multipliesValies = (price, quantity) => {
        const multiplie = price * quantity;
        const format = multiplie.toFixed(2).replace(".", ",");
        return format;
    }

    const cartItems = Object.values(groupedCart);

    let cartValue = 0;

    cartItems.forEach(({price, quantity}) => cartValue += price * quantity)
    const formattedCartValue = cartValue.toFixed(2).replace(".", ",");
    
    return(
        <div>
            <Logo url="/"/>
            <MyCart url="/cart"/>
            <p>Produto</p>
            <p>Quantidade</p>
            <p>Preço</p>
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
                        <p>{price.toFixed(2).replace(".",",")}</p>
                    </div>
                    <div>
                        <p>Quantidade: {quantity}</p>
                    </div>
                    <div>
                        <h3>R${multipliesValies(price, quantity)}</h3>
                    </div>
                </div>
            ))}
            <input type="button" value="Finalizar pedido" onClick={() => {setCart([])}}/>
            <div>
                <p>Total:</p>
                <h1>R$: {formattedCartValue}</h1>
            </div>
        </div>
    );
}

export default Cart;