import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseDb/firebaseDb'

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [productsDb, setProductsDb] = useState([]);
  const [cart, setCart] = useState([])

  const productsCollectionRef = collection(db, "products");
  
  useEffect(() => {
    const getProducts = async () => {
      console.log('Fetching products...');
      const data = await getDocs(productsCollectionRef);
      setProductsDb(data.docs.map(doc => doc.data()));
    };

    getProducts();
  }, []);
  
  return (
    <GlobalStateContext.Provider value={{ productsDb, cart, setCart }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export{ GlobalStateContext, GlobalStateProvider };
