import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const { user } = props;
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading....</h1>;
  }

  const handleDelete = async () => {
    await deleteProduct(product._id);
    history.push("/");
  };

  const authenticatedOptions = (
    <div className="button-container flex justify-evenly w-full md:w-2/3">
      <Link
        className="edit-button border bg-six mt-8 font-bold text-lg text-gray-100 px-8 py-1 rounded-lg hover:bg-gray-100 hover:text-six"
        to={`/products/${product._id}/edit`}
      >
        <p>Edit</p>
      </Link>
      <button
        className="delete-button border bg-six mt-8 font-bold text-lg text-gray-100 px-8 py-1 rounded-lg hover:bg-gray-100 hover:text-six"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
  return (
    <Layout user={props.user}>
      <div className="product-detail h-screen w-screen p-4">
        <div className="flex mt-36 flex-col place-items-center md:flex-row">
        <div className="mx-4 rounded-xl shadow-2xl w-3/5 overflow-hidden flex justify-center">
          <img
            className="product-detail-image w-48 md:w-96"
            src={product.imgURL}
            alt={product.name}
          />
        </div>
        <div className="detail md:w-2/3 md:flex md:flex-col md:justify-center md:place-items-center">
          <div className="name text-xl font-bold text-six">{product.name}</div>
          <div className="price text-five font-bold text-md lg:text-2xl">{`$${product.price}`}</div>
          <div className="description text-three text-lg font-semibold">
            {product.description}
          </div>
          {user ? authenticatedOptions : ""}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
