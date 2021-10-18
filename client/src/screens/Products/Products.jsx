import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../services/products";
import { useLocation } from "react-router-dom";
import homeLife from "./bannerImages/homeLife.jpg";
import outdoor from "./bannerImages/outdoor.jpg";
import clothing from "./bannerImages/clothing.jpg";
import zeroWaste from "./bannerImages/zeroWaste.jpg";
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import Sort from "../../components/Sort/Sort"
import Search from "../../components/Search/Search";


function Products(props) {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [headerImage, setHeaderImage] = useState("");
  const [title, setTitle] = useState("");
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')
  let location = useLocation();
  const [input, setInput] = useState('')

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
      setSearchResult(allProducts)
    };
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    categoryName();
  });

  useEffect(()=>{
    handleSearch()
    // eslint-disable-next-line
  },[input])

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
  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  


  const handleSearch = (event) => {
    
    if (input !== ''){
      
    const results = products.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase())
    });
    setSearchResult(results)
    setApplySort(true)
  } else {
    setSearchResult(products)
  }
  }

  const handleSubmit = (event) => event.preventDefault()

    
  

  return (
    <div className="w-screen">
      <Layout user={props.user}>
        <div className="flex justify-center relative min-w-full h-80">
          <img src={headerImage} alt={title} className="object-cover w-full" />
          <div className="absolute top-1/3 bg-gray-800 bg-opacity-50">
            <h2 className="font-bold text-2xl text-gray-100 p-8">{title}</h2>
          </div>
        </div>
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} setInput = {setInput} />
        <Sort onSubmit={handleSubmit} handleSort={handleSort} />
        <div className="products h-full w-full flex flex-wrap justify-center">
          {input.length > 1 ? (
            searchResult.map((product,index) => (
              <Product
                  _id={product._id}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                  description={product.description}
                  key={index}
                />
            ))
          
          ) : (
          products
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
              )
            })
          )}
        </div>
      </Layout>
    </div>
  );
}

export default Products;
