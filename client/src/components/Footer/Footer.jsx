import { NavLink } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (

    <footer className="footer">

      <NavLink className="logo" to="/">ECOassembly</NavLink>

      <h3 className="meet-team">Liam Baker, Ray Morrison, and Miguel Galindo contributed to ECOassembly</h3>
      <div className="newsletter">
        <label className="label">Newsletter</label> <br />
        <form>
          <input
            placeholder="Enter your email"
            type="email"
          />
          <br />
          <button className="button">Subscribe</button>
        </form>
      </div>





    </footer >

  )
}

export default Footer;
