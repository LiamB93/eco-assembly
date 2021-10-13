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
const alwaysOptions = (
  <>
    <NavLink className="link" to="/">ECOassembly</NavLink>
  </>
)

function Header({ user }) {
  return (
    <nav>
      <div className="top-header">
        <div className="header-links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
      <div className="bottom-header">
        <Link to="/" className="home-link"><img src = {logo} /></Link>
      </div>
      <Nav />


    </nav>
  )
}

export default Header;
