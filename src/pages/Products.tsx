import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Card, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/appHook";
import {
  deleteProductAsync,
  fetchAllProducts,
} from "../redux/reducers/productReducer";
import { AddProductAsync } from "../redux/reducers/productReducer";
import { addToCart } from "../redux/reducers/cartReducer";
import { Product, ProductInCart } from "../types/Products";
import { products } from "../test/reducers/fixtures/testProduct";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
const Products = () => {
  const { productList } = useAppSelector((state) => state.productReducer);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(30);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onDelete = (id: string) => {
    dispatch(deleteProductAsync(id));
  };
  const onAdd = (id: string) => {
    dispatch(AddProductAsync(id));
  };
  const handleAddCart = (product: ProductInCart) => {
    dispatch(addToCart(product));
  };

  const onChangePage = (input: "left" | "Right") => {
    if (page > 0 && input === "left") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
    dispatch(
      fetchAllProducts({
        offset: page,
        limit: perPage,
      })
    );
  };

  const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    position:relative;
    top: 13px;
    margin: 0px;
    cursor: pointer;
    opacity: 0.5;
    
  `;

  return (
    <div>
      <h1
        style={{
          padding: "10px",
          backgroundColor: "lightblue",
          textAlign: "center",
        }}
      >
        Scroll down to Find more Amazing Products
      </h1>

      <Box className="images_container">
        {productList.map((product: any) => (
          <Card className="card" key={product.id}>
            <CardHeader title={product.title} />
            <p>Price €{product.price}</p>
            <img
              onClick={() => navigate(`${product.id}`)}
              className="image_product"
              src={product.images[0]}
              alt="imagespic"
            />

            <button onClick={() => handleAddCart(product)}>
              Store in Cart
            </button>
          </Card>
        ))}
        <Arrow>
          <ArrowLeftOutlined
            style={{ right: "1px" }}
            onClick={() => onChangePage("Right")}
          />
          <ArrowRightOutlined onClick={() => onChangePage("Right")} />
        </Arrow>
      </Box>
    </div>
  );
};

export default Products;
