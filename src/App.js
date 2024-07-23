// src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductPage from "./Components/ProductPage";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <BrowserRouter basename="/e-commerce-website">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop/collection" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/shop/product/:id" element={<ProductPage />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
         
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;

