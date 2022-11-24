import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./hooks/appHook";
import { fetchAllProducts } from "./redux/reducers/productReducer";
import { fetchAllUsers } from "./redux/reducers/profileReducer";
import Footer from "./components/Footer";
import { ShoppingCartOutlined } from "@material-ui/icons";
/* import Newsletter from "./components/Newsletter"; */

function App() {
  const dispatch = useAppDispatch();
  // const productList = useAppSelector(state=>state.productReducer)
  
  useEffect(() => {
    dispatch(fetchAllProducts({ offset: 0, limit: 30 }));
  }, []);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      {/* <Newsletter/> */}
      <Footer />
    </>
  );
}

export default App;
