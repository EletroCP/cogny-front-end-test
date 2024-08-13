import React from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import '../style/MyCart.css';

const MyCart = ({url}) => {
    const { cart } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(url)} id='header-mycart-container'>
            <h4 id='header-mycart-text'>Meu carrinho</h4>
            <p id='header-mycart-itens'>{`${cart.length} itens`}</p>
        </div>
    )
};

export default MyCart;