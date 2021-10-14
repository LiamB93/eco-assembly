import { NavLink } from "react-router-dom";
import "./Footer.css"
import logo from '../../ecologo.png'

function Footer() {
  return (

    <footer className="footer">

      <NavLink className="logo" to="/"><img src={logo} alt="logo" /></NavLink>

      <h3 className="meet-team"><span>Meet the Team</span> <br /><p className="liam" onClick={() => window.open('https://www.linkedin.com/in/liam-baker-5b101b198/', '_blank')} >Liam Baker,</p><p className="ray" onClick={() => window.open('https://www.linkedin/in/rlmorrison74', '_blank')}>Ray Morrison,</p> and <a className="miguel" onClick={() => window.open("https://linkedin.com/in/miguelgg/")}>Miguel Galindo</a><br /> contributed to ECOassembly</h3>
      <div className="newsletter">
        <label className="label">Newsletter</label> <br />
        <p className="text">Stay up to date with our<br /> latest news and content</p>
        <button onClick={() => window.open('https://mailchi.mp/8d6bbf366357/ztmmig', '_blank')} className="button">Subscribe</button>
      </div>





    </footer >

  )
}

export default Footer;
