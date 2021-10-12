import Layout from "../../components/Layout/Layout";
import { createProduct } from "../../services/products";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router";

const ProductCreate = (props) => {
  const {category} = useParams()
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
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={product.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={product.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <select
          className="input-category"
          placeholder="Category"
          name="category"
          required
          onChange={handleChange}
        >
          <option value=''>Category</option>
          <option value="homeLife">Home & Life</option>
          <option value="clothing">Clothing</option>
          <option value="outdoor">Outdoor</option>
          <option value="zeroWaste">Zero Waste</option>
        </select>
               <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProductCreate;
