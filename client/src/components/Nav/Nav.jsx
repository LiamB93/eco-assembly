import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="products-nav">
      <NavLink to="/products">Home & Life</NavLink>{" "}
      <NavLink to="/products">Clothing</NavLink>{" "}
      <NavLink to="/products">Outdoor</NavLink>{" "}
      <NavLink to="/products">Zero Waste</NavLink>{" "}

    </div>
  )
}

export default Nav;
