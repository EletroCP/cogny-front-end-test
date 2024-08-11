import React from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../context/context";
import ProductCard from "../components/productCard";
import Logo from "../components/Logo";

const Home = () => {
    const { productsDb } = useContext(GlobalStateContext);
    // const productsDb = mockDataBase;

    return(
        <div>
            <Logo url={"/cart"}/>
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