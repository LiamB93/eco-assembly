import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Product(props) {
  const { category } = useParams();
  return (
    <div className="productCard w-1/4 flex justify-center pt-16 pb-4 hover:opacity-75">
          <Link className="flex flex-col place-items-center " to={`/products/${category}/${props._id}`}>
              <div className="imgContainer">
          <img className="product-image w-48" src={props.imgURL} alt={props.name} />
          </div>
          <div className="product-name text-six text-lg font-bold">{props.name}</div>
          <div className="price text-six text-lg font-bold">{`$${props.price}`}</div>
      </Link>
    </div>
  );
}

export default Product;
