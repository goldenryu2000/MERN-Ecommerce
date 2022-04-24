import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <main className="py-3">
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
