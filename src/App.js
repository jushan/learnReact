import React from 'react';  

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';

function App() {
  console.log(React)
  return (
    <div className="main">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
