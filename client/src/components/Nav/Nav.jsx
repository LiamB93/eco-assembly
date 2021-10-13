import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <div className="products-nav">
      <div className="links">
        <NavLink to="/products/homelife">Home & Life</NavLink>{" "}
        <NavLink to="/products/clothing">Clothing</NavLink>{" "}
        <NavLink to="/products/outdoor">Outdoor</NavLink>{" "}
        <NavLink to="/products/zerowaste">Zero Waste</NavLink>{" "}
      </div>

    </div>
  )
}

export default Nav;
