import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import { useAppSelector } from "../hooks/appHook";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const { productList } = useAppSelector((state) => state.productReducer);

  return (
    <div className="container">
      <Slide>
        <div className="title">
          <h1
            style={{
              alignItems: "center",
              color: "white",
              paddingRight: "40px",
            }}
          >
            Free Shipping with heavy discount
          </h1>
          <img src="https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683__480.jpg" />
        </div>
        {productList.map((sortitems: any) => (
          <div key={sortitems.id}>
            <h1 style={{ textAlign: "center" }}>{sortitems.title}</h1>
            <img
              className="image_home"
              src={sortitems.images[0]}
              alt="imagespic"
            />
            <div className="button_home">
              <button>BUY NOW</button>
            </div>
          </div>
        ))}
      </Slide>
      <Newsletter/>
    </div>
  );
};
export default Home;
