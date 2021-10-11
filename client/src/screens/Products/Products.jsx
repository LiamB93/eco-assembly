import { useState, useEffect } from 'react';
import   Product   from '../../components/Product/Product';
import Layout from '../../components/Layout/Layout';
import { getProducts } from '../../services/products';

function Products(props) {

    const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            setProducts(allProducts);
        }
        fetchProducts();
    }, [])


    return (
        <div>
            <Layout user = {props.user}>
                <div className = "products">
                    {products.map((product, index)=>{
                        return (
                            <Product 
                                _id = {product._id}
                                name = {product.name}
                                imgURL = {product.imgURL}
                                price = {product.price}
                                description = {product.description}
                                key = {index}
                            />
                        )
                    })}

                </div>
            </Layout>
        </div>
    )
}

export default Products
