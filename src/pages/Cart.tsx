import {  CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {  useAppSelector } from "../hooks/appHook";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const AddItems = styled.div`
  height: 30px;
  width: 20px;`
  const MinusItems = styled.div``

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
            <AddItems><button>+</button></AddItems>
            <MinusItems><button>-</button></MinusItems>
            <div>Price:{cartItem.price}</div>
            <div><button>Checkout</button></div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
