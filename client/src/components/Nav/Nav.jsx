import { NavLink } from "react-router-dom";
import "./Nav.css"
import Search from "../Search/Search";

function Nav() {
  return (
    <div className="products-nav">
      <div className="links">
        <NavLink className="home-life" to="/products/homelife">Home & Life</NavLink>{" "}
        <NavLink className="clothing" to="/products/clothing">Clothing</NavLink>{" "}
        <NavLink className="outdoor" to="/products/outdoor">Outdoor</NavLink>{" "}
        <NavLink className="zero-waste" to="/products/zerowaste">Zero Waste</NavLink>{" "}
      
      </div>

    </div>
  )
}

export default Nav;
