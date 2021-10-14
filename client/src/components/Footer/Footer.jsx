import { NavLink } from "react-router-dom";
import "./Footer.css"
import logo from '../../ecologo.png'

function Footer() {
  return (

    <footer className="footer">

      <NavLink className="logo" to="/"><img src={logo} alt = "logo" /></NavLink>

      <h3 className="meet-team">Liam Baker, Ray Morrison, and Miguel Galindo contributed to ECOassembly</h3>
      <div className="newsletter">
        <label className="label">Newsletter</label> <br />
        <form className="form">
          <input className="px-2 rounded-lg focus:outline-none"
            placeholder="Enter your email"
            type="email"
          />
          <br />
          <button onClick={ () =>window.open('https://mailchi.mp/8d6bbf366357/ztmmig', '_blank')} className="button">Subscribe</button>
        </form>
      </div>





    </footer >

  )
}

export default Footer;
