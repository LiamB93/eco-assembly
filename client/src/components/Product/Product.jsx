import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Product(props) {
  const { category } = useParams();
  return (
    <div className="productCard w-1/4 flex justify-center border-black border">
          <Link className="flex flex-col place-items-center" to={`/products/${category}/${props._id}`}>
              <div className="imgContainer">
          <img className="product-image" src={props.imgURL} alt={props.name} />
          </div>
          <div className="product-name">{props.name}</div>
          <div className="price">{`$${props.price}`}</div>
      </Link>
    </div>
  );
}

export default Product;
