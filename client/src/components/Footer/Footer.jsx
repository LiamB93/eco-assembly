import { NavLink } from "react-router-dom";
import "./Footer.css"
import logo from '../../ecologo.png'

function Footer() {
  return (

    <footer className="footer">

      <NavLink className="logo" to="/"><img src={logo} alt="logo" /></NavLink>

      <h3 className="meet-team"><p><span class="span">Meet the Team</span> <br /><span className="liam cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/liam-baker-5b101b198/', '_blank')} >Liam Baker, </span><span className="ray cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/rlmorrison74', '_blank')}>Ray Morrison,</span> and <span className="miguel cursor-pointer" onClick={() => window.open("https://linkedin.com/in/miguelgg/", "_blank")}>Miguel Galindo</span><br />contributed to <span className="ga cursor-pointer" onClick={() => window.open("https://github.com/LiamB93/eco-assembly", "_blank")}>ECOassembly</span></p></h3>
      <div className="newsletter">
        <label className="label">Newsletter</label>
        <p className="text">Stay up to date with our latest news and content</p>
        <button onClick={() => window.open('https://mailchi.mp/8d6bbf366357/ztmmig', '_blank')} className="button">Subscribe</button>
      </div>





    </footer >

  )
}

export default Footer;
