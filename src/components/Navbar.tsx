// import { Link } from "react-router-dom";
import "../style/navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
