import Box from "@mui/material/Box";
import React from "react";
import { useAppSelector } from "../hooks/appHook";

const Home = () => {
  const { productList } = useAppSelector((state) => state.productReducer);

  return (
    <Box className="images_container">
      <div><h1>Warm Welcome to our FakeShopping</h1></div>
      {productList.map((sortitems:any) => (
        <div key= {sortitems.id}>
          
          <img
            
            className="image_product"
            src={sortitems.images[0]}
            alt="imagespic"
          />
        </div>
      ))}
    </Box>
  );
};
export default Home;
