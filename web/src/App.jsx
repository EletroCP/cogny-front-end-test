import logo from './logo.svg';
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from './firebaseDb/firebaseDb';

function App() {

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      console.log(data);
    };

    getProducts();
  }, [productsCollectionRef]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
