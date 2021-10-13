import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

function Product(props) {
    const { category } = useParams()
    return (
        <>
            <Link className = "product" to={`/products/${category}/${props._id}`}>
                <img className = "product-image" src = {props.imgURL} alt = {props.name} />
                <div className = "product-name">{props.name}</div>
                <div className = "price">{`$${props.price}`}</div>

            
            </Link>
            
        </>
    )
}

export default Product
