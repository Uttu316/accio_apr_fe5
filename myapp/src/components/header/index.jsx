import { Link, NavLink } from "react-router";
import logo from "../../assets/react.svg";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Header(props) {
  const { title } = props;
  const { cartSize } = useContext(CartContext);
  return (
    <header className="header_container">
      <div className="logo_container">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <span className="logo_heading">{title}</span>
      </div>
      <nav className="header_navbar">
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/cart">
          Cart
          {cartSize !== 0 && (
            <span className="header_nav_badge">{cartSize}</span>
          )}
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
export default Header;
