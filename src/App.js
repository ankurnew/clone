import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Cart from "./Components/Cart";
import sample from "./sample.mp4";

const App = () => {
  return (
    <>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="createuser" element={<CreateUser />} /> */}
          <Route path="cart_products" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
