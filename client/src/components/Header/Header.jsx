import Nav from "../Nav/Nav";
import { Link, NavLink } from "react-router-dom"
import "./Header.css";
import logo from '../../ecologo.png'


const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">Add Product</NavLink>
    <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">Sign Up</NavLink>
    <NavLink className="link" to="/sign-in">Log In</NavLink>
  </>
)


function Header({ user }) {
  return (
    <nav>
      <div className="top-header">
        <div className="promo">
          <p className="ten-percent">SAVE 10% SITEWIDE + PLANT 5 TREES WITH EACH PURCHASE</p>
          <p>USE CODE: PLANTSTREES<br />Free Shipping $50+ | Free Returns | Best Price Guaranteed</p>
        </div>
        <div className="header-links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
      <div className="bottom-header">
        <Link to="/" className="logo"><img src={logo} alt="logo" /></Link>
      </div>
      <Nav />


    </nav>
  )
}

export default Header;
