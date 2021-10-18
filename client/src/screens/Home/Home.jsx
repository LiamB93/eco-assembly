import Layout from "../../components/Layout/Layout";
import './Home.css'
import toothbrush from '../../toothbrush.jpg';
import { Link } from 'react-router-dom';
import React from "react";

const images = ['https://images.unsplash.com/photo-1554327075-31266866daa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'https://images.unsplash.com/photo-1555667865-f4be32e8cc29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdhdGVyJTIwZmxhc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1629334816860-30f93f1406ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjB0cmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60','https://images.unsplash.com/photo-1592372554345-22ced975691d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFtYm9vJTIwdG9vdGhicnVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60','https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW53cmFwcGVkJTIwc29hcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
  // Images are placed using inline flex. We then wrap an image in a div
  // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
  // Finally the image itself will be 100% of a parent div. Outer div is
  // set with position relative, so we can place our cotrol buttons using
  // absolute positioning on each side of the image.
    <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} alt ="carousel "className="w-full object-contain" />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

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
              <Link className = 'image-link' to = '/products/homelife/616d80fcccfd0209809f10da'>
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
        <div className="w-screen flex justify-center">
        <Carousel />
       </div>

      </div>
      </div>
    </Layout>
  )
}

export default Home;
