import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Products from "../Components/Products";
import Cart from "../Components/Cart";
import ProductInfo from "../Components/ProductInfo";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
