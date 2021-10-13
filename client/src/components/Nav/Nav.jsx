import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="products-nav">
      <NavLink to="/products/homelife">Home & Life</NavLink>{" "}
      <NavLink to="/products/clothing">Clothing</NavLink>{" "}
      <NavLink to="/products/outdoor">Outdoor</NavLink>{" "}
      <NavLink to="/products/zerowaste">Zero Waste</NavLink>{" "}

    </div>
  )
}

export default Nav;
