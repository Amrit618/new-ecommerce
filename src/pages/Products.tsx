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

  interface myProps {
    direction: string;
  }

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
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: ;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
  `;

  return (
    <Box className="images_container">
      <ArrowLeftOutlined
        style={{ right: "1px" }}
        onClick={() => onChangePage("Right")}
      />
      {productList.map((product: any) => (
        <Card key={product.id}>
          <CardHeader title={product.title} />
          <img
            onClick={() => navigate(`${product.id}`)}
            className="image_product"
            src={product.images[0]}
            alt="imagespic"
          />
          <p>Price:{product.price}</p>
          <button onClick={() => handleAddCart(product)}>Store in Cart</button>
        </Card>
      ))}
            <ArrowRightOutlined
        style={{ right: "100px" }}
        onClick={() => onChangePage("Right")}
      />
    </Box>
  );
};

export default Products;
