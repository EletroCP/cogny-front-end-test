import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/EmptyCart.css'

const EmptyCart = () => {
    const navigate = useNavigate()
    return(
        <div id='main-empty-cart-container'>
            <p id='empty-cart-main-text' className='text-empty-cart'>Seu carrinho está vazio.</p>
            <input
                type='button'
                value='Voltar para loja'
                id='back-to-store'
                className='text-empty-cart'
                onClick={() => navigate('/')} />
        </div>
    );
};

export default EmptyCart;