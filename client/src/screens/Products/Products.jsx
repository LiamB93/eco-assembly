import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../services/products";
import { useLocation } from "react-router-dom";

function Products(props) {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [headerImage, setHeaderImage] = useState("");
  const [title, setTitle] = useState("");
  let location = useLocation();

  const categoryName = () => {
    if (location.pathname === "/products/homelife") {
      setCategory("homeLife");
    } else if (location.pathname === "/products/clothing") {
      setCategory("clothing");
    } else if (location.pathname === "/products/outdoor") {
      setCategory("outdoor");
    } else {
      setCategory("zeroWaste");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    categoryName();
  });

  useEffect(() => {
    if (category === "homeLife") {
      setHeaderImage("google.com/images");
      setTitle("Home & Life");
    } else if (category === "clothing") {
      setHeaderImage("google.com/images");
      setTitle("Clothing");
    } else if (category === "outdoor") {
      setHeaderImage("google.com/images");
      setTitle("Outdoor");
    } else {
      setHeaderImage("google.com/images");
      setTitle("Zero Waste");
    }
  }, [category]);

  return (
    <div>
      <Layout user={props.user}>
        <div>
          <h2>{title}</h2>
          <img src={headerImage} alt={title} />
        </div>
        <div className="products">
          {products
            .filter((product) => product.category === category)
            .map((product, index) => {
              return (
                <Product
                  _id={product._id}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                  description={product.description}
                  key={index}
                />
              );
            })}
        </div>
      </Layout>
    </div>
  );
}

export default Products;
