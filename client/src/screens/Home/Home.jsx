import Layout from "../../components/Layout/Layout";
import './Home.css'

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className="home">
        <div className="home-image">
          <img src = {} />
        </div>
        <div className="mission">
          <h1>People & Planet</h1>
          <h3>Our mission is simple: Make finding earth-conscious products easy. We put people and the planet first when it comes to deciding which products to offer.</h3>
        </div>

      </div>
    </Layout>
  )
}

export default Home;
