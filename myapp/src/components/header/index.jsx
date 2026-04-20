import logo from "../../assets/react.svg";
import "./header.css";

function Header() {
  return (
    <header className="header_container">
      <div className="logo_container">
        <img className="logo" src={logo} />
        <span className="logo_heading">My App</span>
      </div>
      <nav className="header_navbar">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
