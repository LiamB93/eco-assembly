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
    <div className="button-container">
      <Link className="edit-button" to={`/products/${product._id}/edit`}>
        <p>Edit</p>
      </Link>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
  return (
    <Layout user={props.user}>
      <div className="product-detail h-full">
        <img
          className="product-detail-image"
          src={product.imgURL}
          alt={product.name}
        />
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="price text-five font-bold text-2xl">{`$${product.price}`}</div>
          <div className="description">{product.description}</div>
        {user ? authenticatedOptions : ""}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
