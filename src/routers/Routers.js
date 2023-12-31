import React from "react";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";

import { Routes, Route, Navigate } from "react-router-dom";
import Favorite from "../pages/Favorite";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="favorite" element={<Favorite/>}/>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
