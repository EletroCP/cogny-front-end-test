import React from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from '../context/context';
import ProductCard from '../components/productCard';
import Logo from '../components/Logo';
import MyCart from '../components/MyCart';
import '../style/Home.css';

const Home = () => {
    const { productsDb } = useContext(GlobalStateContext);

    return(
        <div>
            <div id='home-header'>
                <Logo url={'/'}/>
                <MyCart url={'/cart'}/>
            </div>
            <div id='home-cards-container'>
                {productsDb.map(({image, description, price}, index) => (
                    <div key={`product-id${index}`}>
                        <ProductCard 
                            key={`product-id${index}`}
                            image={image} 
                            description={description} 
                            price={price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;