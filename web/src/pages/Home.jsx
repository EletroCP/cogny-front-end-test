import React from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/productCard";

const Home = () => {
    const { cart, productsDb } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    // const productsDb = mockDataBase;

    return(
        <div>
            <p onClick={() => navigate("/cart")}>Carrinho: {cart.length}</p>
            {productsDb.map(({image, description, price}, index) => (
                    <ProductCard 
                        key={`product-id${index}`}
                        image={image} 
                        description={description} 
                        price={price}
                    />
            ))}
        </div>
    );
};

export default Home;