import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit flex flex-col h-screen w-screen mt-12">
        <h1 className="text-4xl italic font-bold pb-4">Edit Product</h1>
        <div className="image-form-container flex justify-center h-2/3 w-full pt-4">
          <div className="image-container w-5/12 mx-4 border rounded-xl overflow-hidden shadow-2xl flex flex-col place-items-center">
            <img
              className="edit-product-image"
              src={product.imgURL}
              alt={product.name}
            />
            <div className="w-5/6">
            <form onSubmit={handleSubmit} className="w-full">
             
            </form>
            </div>
          </div>
          <div className="form-container w-5/12 px-12 py-2 bg-six rounded-lg">
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="flex flex-col place-items-start py-1">
                <label className="font-semibold text-white">Product Name</label>
                <input
                  autoFocus
                  className="input-name border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                  placeholder="Name"
                  value={product.name}
                  name="name"
                  required
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col place-items-start py-1">
                <label className="font-semibold text-white">Price</label>
                <input
                  className="input-price border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                  placeholder="Price"
                  value={product.price}
                  name="price"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col place-items-start py-1">
                <label className="font-semibold text-white">
                  Product Description
                </label>
                <textarea
                  className="textarea-description border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                  rows={10}
                  cols={78}
                  placeholder="Description"
                  value={product.description}
                  name="description"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col place-items-start py-1">
              <label className="font-semibold text-white">Image URL</label>
                <input
                  className="edit-input-image-link border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                  placeholder="Image Link"
                  value={product.imgURL}
                  name="imgURL"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="save-button border bg-gray-100 mt-4 font-bold text-lg text-six px-8 py-1 rounded-lg hover:bg-six hover:text-white"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductEdit;
