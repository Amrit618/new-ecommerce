import { Card, CardMedia } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/appHook";
import { addToCart } from "../redux/reducers/cartReducer";
import { ProductInCart } from "../types/Products";
const Cart = () => {
  const { products } = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className="cartItem">
      {products.length > 0 &&
        products.map((cartItem) => (
          <div key={cartItem.id} className="cartItem-container-card">
            <CardMedia
              component="img"
              image={cartItem.images[0]}
              alt="Itemsincart"
              className="cartItem-card-image"
              onClick={() => navigate(`/products/${cartItem.id}`)}
            ></CardMedia>
            <div>Price:{cartItem.price}</div>
            <div><button>Checkout</button></div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
