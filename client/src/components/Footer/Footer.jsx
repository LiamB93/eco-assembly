import { NavLink } from "react-router-dom";

function Footer() {
  return (

    <footer>
      <nav>
        <NavLink className="logo" to="/">ECOassembly</NavLink>

        <h3>Meet the Team</h3>
        <p>Liam Baker, Ray Morrison, and Miguel Galindo contributed to ECOassembly</p>

      </nav>

    </footer>

  )
}

export default Footer;
