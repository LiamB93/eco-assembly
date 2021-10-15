import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../services/products";
import { useLocation } from "react-router-dom";
import homeLife from "./bannerImages/homeLife.jpg";
import outdoor from "./bannerImages/outdoor.jpg";
import clothing from "./bannerImages/clothing.jpg";
import zeroWaste from "./bannerImages/zeroWaste.jpg";

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
      setHeaderImage(homeLife);
      setTitle("Home & Life");
    } else if (category === "clothing") {
      setHeaderImage(clothing);
      setTitle("Clothing");
    } else if (category === "outdoor") {
      setHeaderImage(outdoor);
      setTitle("Outdoor");
    } else {
      setHeaderImage(zeroWaste);
      setTitle("Zero Waste");
    }
  }, [category]);

  return (
    <div className="w-screen">
      <Layout user={props.user}>
        <div className="flex justify-center relative min-w-full max-h-96">
          <img src={headerImage} alt={title} className="object-cover w-full" />
          <div className="absolute top-1/2 bg-gray-800 bg-opacity-50">
            <h2 className="font-bold text-2xl text-gray-100 p-8">{title}</h2>
          </div>
        </div>
        <div className="products h-full w-full flex flex-wrap justify-center">
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