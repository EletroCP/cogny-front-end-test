import React from 'react';
import Home from './pages/Home';
import './style/App.css';

function App() {
  return (
      <div>
        <header>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        </header>
        <body>
          <Home/>
        </body>
      </div>
  );
}

export default App;
