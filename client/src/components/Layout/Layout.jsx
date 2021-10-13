import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Header user={props.user} />
      <div className="layout-children bg-gray-100">
        {props.children}
      </div>
      <Footer />

    </div>
  )
}

export default Layout;
