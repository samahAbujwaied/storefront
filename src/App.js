import './App.css';
import React from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Catigories from "./components/catigories";
import Products from "./components/products";
function App () {
  return (
    <>
      <Header />
     {/* <Catigories/> */}
     <Products/>
      <Footer />
    </>
  );
}

export default App;
