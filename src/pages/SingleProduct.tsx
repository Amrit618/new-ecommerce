import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import styled from "styled-components";
import { ProductInCart } from "../types/Products";
import { addToCart } from "../redux/reducers/cartReducer";


const Container = styled.div`
text-align: center
`
const SingleProduct = () => {
  const { productId } = useParams();
  const product = useProduct(productId);  


  return (
    <Container>
      {product ? (
        <div>
          <h3>Product Id: {product.id}</h3>
          <h3>Product Name: {product.title}</h3>
          <img src={product.images[0]}/> 
          <p>{product.description}</p>
          <h4>Price:{product.price}</h4>
          <button>Add to cart</button>
        </div>
      ) : (
        <div>Product doesnot exist </div>
      )}
    </Container>
  );
};

export default SingleProduct;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

