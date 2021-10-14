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
          <div className = "toothbrush-div">
            <img className = 'toothbrush' alt ='tooth-brush' src  = {toothbrush} />
            </div> 
          <div className = 'inner-image-quote'>
              <div className = "quote"> Do your part to help save the environment</div>
              <p className = "quote1"> Grab Your Pack of Eco Friendly Tooth Brush Today!</p>
              <Link className = 'image-link' to = '/products/homelife/6165eb6b064efd8834217b9e'>
               <div className = "explore">Explore Options</div>
              </Link>
          </div>
        </div>
        <div className="mission">
          <h1 className = "people">People & Planet</h1>
          <h3 className = "mission-statement">Our mission is simple: Make finding earth-conscious products easy. We put people and the planet first when it comes to deciding which products to offer.</h3>
        </div>
      <div className = "customer-favorites">
        <div className = "customer">
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
