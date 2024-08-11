import React from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../context/context";
import { useNavigate } from "react-router-dom";
const MyCart = ({url}) => {
    const { cart } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(url)}>
            <p>Meu carrinho</p>
            <p>{`${cart.length} itens`}</p>
        </div>
    )
};

export default MyCart;