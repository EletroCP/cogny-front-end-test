import React from 'react';
import '../style/ProductCard.css'
import { useContext } from 'react';
import { GlobalStateContext } from '../context/context';

function ProductCard({image, description, price, index}) {
    
    const { cart, setCart } = useContext(GlobalStateContext);

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
        <div key={`product-id ${index}`} id='main-card-container'>
                <img
                    src={image}
                    alt={description}
                    id='card-image' 
                />
                <p id='descripition-card'>
                    {description}
                </p>
                <p id='price-card'>
                    {`R$${price.toFixed(2).replace('.',',')}`}
                </p>
                
                <div id='button-container-card'>
                    <p id='qty-value-iten'>1</p>
                    <input 
                        type='button' 
                        value='Adicionar ao carrinho' 
                        onClick={() => addProduct(image, description, price)} 
                        id='buy-button-card'
                    />
                </div>
        </div>
    )
}

export default ProductCard;