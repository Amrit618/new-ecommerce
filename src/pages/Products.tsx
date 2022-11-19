import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Card, CardHeader } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/appHook";
import { deleteProductAsync, fetchAllProducts } from "../redux/reducers/productReducer";
import { AddProductAsync } from "../redux/reducers/productReducer";
import { addToCart } from "../redux/reducers/cartReducer";
import { Product, ProductInCart } from "../types/Products";
import { products } from "../test/reducers/fixtures/testProduct";

const Products = () => {
  const { productList } = useAppSelector((state) => state.productReducer);
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(30)
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

  const onChangePage = (input: 'left'|'Right')=>{
    if (page>0 && input === 'left'){
      setPage(page-1)
    }else {
      setPage(page+1)
    }
    dispatch(fetchAllProducts({
      offset:page,
      limit:perPage
    }))
  }
  

  return (
    <Box className="images_container">
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
          {/* <button onClick={() => onDelete(product.id)}>Details</button> */}
          <button onClick={() => handleAddCart(product)}>Store in Cart</button>
        </Card>
      ))}
      <IconButton onClick={()=>onChangePage('left')}>
        <ChevronLeftIcon />
        Previous
      </IconButton>
      {/* <input type="number" onChange={(e)=>setPerPage(Number(e.target.value))} /> */}
      <IconButton onClick={() =>onChangePage('Right')}>
        <ChevronRightIcon />
        Next
      </IconButton>
    </Box>
  );
};

export default Products;
