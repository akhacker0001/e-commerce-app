import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart";
// import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Products from "./Components/Products";
import React, { useEffect, useState } from 'react';

const  App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        setLoading(true)
        let api = "https://fakestoreapi.com/products";
        const response = await fetch(api)
        setData(await response.json())
        setLoading(false)
    }
    getProducts();
}, []);


  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={[<Home />,<Products loading={loading} data={data} />]} />
          <Route path="products" element={<Products  loading={loading} data={data}/>} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart  data={data}/>} />
      </Routes>
    </BrowserRouter>
   




  );
}

export default App;
