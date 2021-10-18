import Layout from "../../components/Layout/Layout";
import { createProduct } from "../../services/products";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
    category: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout user={props.user}>
      <div className="h-screen w-screen flex flex-col place-items-center px-4">
        <h1 className="text-4xl italic font-bold pt-4">Create a Product</h1>
        <div className="form-container w-full h-auto my-4 md:w-5/12 md:py-2 bg-six rounded-lg flex flex-col place-items-center justify-center">
          <form
           className="w-full h-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full justify-center place-items-center">
            <div className="flex flex-col place-items-start w-full px-2 md:w-4/5 md:px-8 py-2">
              <label className="font-semibold text-white">Product Name</label>
              <input
                className="input-name border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                placeholder="Name"
                value={product.name}
                name="name"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start w-full px-2 md:w-4/5 md:px-8 py-2">
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
            <div className="flex flex-col place-items-start w-full px-2 md:w-4/5 md:px-8 py-2">
              <label className="font-semibold text-white">Product Description</label>
              <textarea
                className="textarea-description border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                rows={10}
                placeholder="Description"
                value={product.description}
                name="description"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start w-full px-2 md:w-4/5 md:px-8 py-2">
              <label className="font-semibold text-white">Image URL</label>
              <input
                className="input-image-link border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                placeholder="Image Link"
                value={product.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start w-full px-2 md:w-4/5 md:px-8 py-2">
              <select
                className="input-category border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                placeholder="Category"
                name="category"
                required
                onChange={handleChange}
              >
                <option value="">Category</option>
                <option value="homeLife">Home & Life</option>
                <option value="clothing">Clothing</option>
                <option value="outdoor">Outdoor</option>
                <option value="zeroWaste">Zero Waste</option>
              </select>
            </div>
            <button
              type="submit"
              className="submit-button border bg-gray-100 my-8 font-bold text-lg text-six px-8 py-1 rounded-lg hover:bg-six hover:text-white"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProductCreate;
