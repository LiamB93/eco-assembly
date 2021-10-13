import Layout from "../../components/Layout/Layout";
import './Home.css'
import toothbrush from '../../toothbrush.jpg';
import bike from '../../bike.jpg';
import flask from '../../flask.jpg';
import straws from '../../straws.jpg';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className="home">
        <div className="home-image">
          <img className = 'toothbrush' alt ='tooth-brush' src  = {toothbrush} />
          <div className = 'inner-image-quote'>
              <h3> Do your part to help save the environment</h3>
              <Link className = 'image-link' to = '/products/homelife/6165eb6b064efd8834217b9e'>
                Explore Options
              </Link>
          </div>
        </div>
        <div className="mission">
          <h1>People & Planet</h1>
          <h3>Our mission is simple: Make finding earth-conscious products easy. We put people and the planet first when it comes to deciding which products to offer.</h3>
        </div>
      <div className = "customer-favorites">
        <div>
          Customer Favorites
        </div>
        <div className = "placeholder-products">
          <img className = 'place-holder-img' alt = 'bike' src ={bike} />
          <img className = 'place-holder-img' alt = 'straws' src ={straws} />
          <img className = 'place-holder-img' alt = 'flask' src ={flask} />
        </div>

      </div>
      </div>
    </Layout>
  )
}

export default Home;
