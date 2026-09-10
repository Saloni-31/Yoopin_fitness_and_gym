import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Categories from "./pages/Categories";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import AddCategory from "./pages/AddCategory";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./Context/CartContext";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  console.log("APP RENDERED");
  return (
    <CartProvider>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    );
}

export default App;