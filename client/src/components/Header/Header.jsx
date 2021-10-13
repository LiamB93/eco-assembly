import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom"

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
      <div className="header">
        <NavLink className="logo" to="/">ECOassembly</NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        <Nav />

      </div>
    </nav>
  )
}

export default Header;
