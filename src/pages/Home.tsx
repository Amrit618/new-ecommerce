import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import { useAppSelector } from "../hooks/appHook";
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';

const Home = () => {
  const { productList } = useAppSelector((state) => state.productReducer);

  return (
    <div className="container">
    <Slide>
      <div className="title">
        <h1 style={{alignItems: "center"}}>Free Shipping and discount</h1>
        <img src="https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683__480.jpg"/>
      </div>
      {productList.map((sortitems: any) => (
        <div key={sortitems.id}>
          <img 
            className="image_home"
            src={sortitems.images[0]}
            alt="imagespic"
          />
        </div>
      ))}
      <Footer/>
    </Slide>
    </div>
  );
};
export default Home;
