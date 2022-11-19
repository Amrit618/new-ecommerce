import { useParams } from "react-router-dom";

import useProduct from "../hooks/useProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = useProduct(productId);

  return (
    <div>
      {product ? <div>{product.title}</div> : <div>Product doesnot exist </div>}
    </div>
  );
};

export default SingleProduct;
