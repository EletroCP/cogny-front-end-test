import React from "react";
import '../style/EmptyCart.css'

const EmptyCart = () => {
    return(
        <div id='main-empty-cart-container'>
            <p id='empty-cart-main-text' className='text-empty-cart'>Seu carrinho está vazio.</p>
            <p id='back-to-store' className='text-empty-cart'>Voltar para loja.</p>
        </div>
    );
};

export default EmptyCart;