import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from '../context/context';
import Logo from '../components/Logo';
import MyCart from '../components/MyCart';
import '../style/Cart.css'
import EmptyCart from '../components/EmptyCart';

function Cart() {
    const { cart, setCart } = useContext(GlobalStateContext);
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
    }

    const cartItems = Object.values(groupedCart);

    let cartValue = 0;

    cartItems.forEach(({price, quantity}) => cartValue += price * quantity);
    const formattedCartValue = cartValue.toFixed(2).replace('.', ',');
    
    return(
        <div>
            {hasItems ? 
            <div id='cart-main-container'>
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
            {cartItems.map(({ image, description, price, quantity }, index) => (
                <div id='cart-cards-container' key={`product-id${index}`}>
                        <img
                            id='image-product-cart'
                            src={image}
                            alt={description}
                        />
                        <div id='cart-card-desciption-price'>
                            <p id='cart-card-description'>
                                {description}
                            </p>  

                            <p id='cart-card-price'>
                                {`R$${price.toFixed(2).replace('.',',')}`}
                            </p>   
                        </div>

                        <div id='label-qty-card'>
                            <input type="button" value="+" id="add-product" className='button-card-qty' />
                            <p id='cart-card-qty'>
                                {quantity}
                            </p>
                            <input type="button" value="-" id="remove-product" className='button-card-qty' />
                        </div>
                        <div id='cart-card-price'>
                            R${multipliesValies(price, quantity)}
                        </div>   
                </div>
            ))}
            <div id='finish-cart-label'>
                <input
                    id='finish-button-card'
                    type='button'
                    value='Finalizar pedido'
                    onClick={() => {setCart([])}}
                />
                <div id='final-price-cart-label'>
                    <p id='total-cart-text'>Total:</p>
                    <h1 id='final-price-text'>R$: {formattedCartValue}</h1>
                </div>
            </div>
            </div> : 
            <EmptyCart />
            }
            
        </div>
    );
}

export default Cart;