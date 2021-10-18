import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
    <div className="w-full">
      <div className="button-container flex justify-evenly md:justify-start w-full ">
        <Link
          className="edit-button w-1/2 md:w-1/3 px-2 "
          to={`/products/${product._id}/edit`}
        >
          <button className="w-full border bg-six mt-8 font-bold text-lg text-gray-100 px-8 py-1 rounded-lg hover:bg-gray-100 hover:text-six">
            Edit
          </button>
        </Link>
        <div className="w-1/2 md:w-1/3 px-2">
          <button
            className="delete-button w-full border bg-six mt-8 font-bold text-lg text-gray-100 px-8 py-1 rounded-lg hover:bg-gray-100 hover:text-six"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <Layout user={props.user}>
      <div className="product-detail h-screen w-screen p-4">
        <div className="flex my-8 flex-col place-items-center md:flex-row">
          <div className="img-container mx-4 rounded-xl shadow-2xl w-3/5 overflow-hidden flex justify-center">
            <img
              className="product-detail-image w-72 md:w-96"
              src={product.imgURL}
              alt={product.name}
            />
          </div>
          <div className="detail h-full my-8 md:w-2/3 md:ml-16 flex flex-col place-items-center">
            <div className="flex flex-col md:place-items-start w-full">
              <div className="name text-xl font-bold text-six">
                {product.name}
              </div>
              <div className="price text-five font-bold text-md lg:text-2xl">{`$${product.price}`}</div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="description my-8 w-1/2 md:w-2/3 flex text-left text-three text-lg font-semibold">
                {product.description}
              </div>
            </div>
            {user ? authenticatedOptions : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
