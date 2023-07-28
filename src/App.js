import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Product } from "./pages/product/product";
import { Contact } from "./pages/contact/contact";
import { Navigation } from "./layouts/Navigation";
import { Footer } from "./layouts/Footer";
import { Coeur } from "./pages/coup-coeur/coeur";
import { Panier } from "./pages/panier/panier";

export const App = () => {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/producs" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coeur" element={<Coeur />} />
        <Route path="/panier" element={<Panier />} />




        
      </Routes>
      <Footer/>
    </>
  );
};
