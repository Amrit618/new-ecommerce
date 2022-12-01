import { Link, Navigate, useNavigate } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useAppSelector } from "../hooks/appHook";

const SearchContainer = styled.div`
  height: 100px;
  font-size: 3em;
  width: 100%;
  float: left;
  padding-right: 120px;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const quantity = useAppSelector((state) => state.cartReducer.cartQuantity);

  return (
    <div className="navbar">
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/products">Products</Link>
      </ul>
      <ul>
        <Link to="/profile">Profile</Link>
      </ul>
      <div className="badge">
        <Badge color="primary">
          <ShoppingCartIcon
            style={{ display: "flex", margin: "5px", alignItems: "flex-end", cursor: 'pointer' }}
            onClick={() => navigate("/cart")}
          />
          <Link to="/ShoppingCartIcon" />
        </Badge>
        {/* } */}
        <input placeholder="search"></input>
        <Search className="search"></Search>
      </div>
    </div>
  );
};

export default Navbar;
