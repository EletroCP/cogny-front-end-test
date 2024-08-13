import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from '../context/context';
import Logo from '../components/Logo';
import MyCart from '../components/MyCart';
import '../style/Cart.css';
import EmptyCart from '../components/EmptyCart';
import SpamBuy from '../components/SpamBuy';

function Cart() {
    const { cart, setCart, finishPurchase, setFinishPurchase } = useContext(GlobalStateContext);
    const [hasItems, setHasItems] = useState(false);

    useEffect(() => {
      const updateHasItems = () => {
        setHasItems(cart.length > 0);
      };
      updateHasItems();
    }, [cart]);

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
        const format = multiplie.toFixed(2).replace('.', ',');
        return format;
    };

    const addOne = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
    };

    const removeOne = (item) => {
        const itemIndex = cart.findIndex(cartItem => 
            cartItem.image === item.image &&
            cartItem.description === item.description &&
            cartItem.price === item.price
        );

        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(itemIndex, 1);
            setCart(updatedCart);
        }
    };

    const cartItems = Object.values(groupedCart);

    let cartValue = 0;

    cartItems.forEach(({price, quantity}) => cartValue += price * quantity);
    const formattedCartValue = cartValue.toFixed(2).replace('.', ',');

    return(
        <div id='cart-main-container'>
            { finishPurchase && <SpamBuy />}
            <div id='cart-header'>
                <Logo url={'/'}/>
                <MyCart url={'/cart'}/>
            </div>
            <div id='label-cart'>
                <div id='label-text-product'>
                    <p className='label-text'>Produto</p>
                </div>
                <div id='label-text-qty-price'>
                    <p className='label-text'>Quantidade</p>
                    <p className='label-text'>Preço</p>
                </div>
            </div>
            {cartItems.map((item, index) => (
                <div id='cart-cards-container' key={`product-id${index}`}>
                    <img
                        id='image-product-cart'
                        src={item.image}
                        alt={item.description}
                    />
                    <div id='cart-card-desciption-price'>
                        <p id='cart-card-description'>
                            {item.description}
                        </p>  
                        <p id='cart-card-price'>
                            {`R$${item.price.toFixed(2).replace('.',',')}`}
                        </p>   
                    </div>
                    <div id='label-qty-card'>
                        <input 
                            type="button" 
                            value="+" 
                            id="add-product" 
                            className='button-card-qty' 
                            onClick={() => addOne(item)} 
                        />
                        <p id='cart-card-qty'>
                            {item.quantity}
                        </p>
                        <input 
                            type="button" 
                            value="-" 
                            id="remove-product" 
                            className='button-card-qty' 
                            onClick={() => removeOne(item)} 
                        />
                    </div>
                    <div id='cart-card-price'>
                        R${multipliesValies(item.price, item.quantity)}
                    </div>   
                </div>
            ))}
            {
                hasItems ?
            <div id='finish-cart-label'>
                <input
                    id='finish-button-card'
                    type='button'
                    value='Finalizar pedido'
                    onClick={() => {setFinishPurchase(true)}}
                />
                <div id='final-price-cart-label'>
                    <p id='total-cart-text'>Total:</p>
                    <h1 id='final-price-text'>R$: {formattedCartValue}</h1>
                </div>
            </div> : <EmptyCart />
            }
        </div> 
    );
}

export default Cart;
