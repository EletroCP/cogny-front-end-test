import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseDb/firebaseDb'

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [productsDb, setProductsDb] = useState([]);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProductsDb(data.docs.map(doc => doc.data()));
    };

    getProducts();
  }, [productsCollectionRef, setProductsDb]);
  return (
    <GlobalStateContext.Provider value={{ productsDb, setProductsDb }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export{ GlobalStateContext, GlobalStateProvider };
