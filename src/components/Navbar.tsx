import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SearchContainer = styled.div`
  height: 100px;
  font-size: 3em;
  width: 100%;
  float: left;
  padding-right: 120px;
`;
const Input = styled.div``;
const Navbar = () => {
  const links = ["Home", "Products", "Profile", "ShoppingCartIcon"];

  return (
    <div className="navbar">
      {links.map((link) => (
        <Link className="link" key={link} to={link}>
          {link}
        </Link>
        
      ))}
      <ShoppingCartIcon/>
    </div>
  );
};

export default Navbar;
