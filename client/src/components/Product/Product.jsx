import { Link } from 'react-router-dom'

function Product(props) {
    return (
        <>
            <Link className = "product" to={`/products/${props._id}`}>
                <img className = "product-image" src = {props.imgURL} alt = {props.name} />
                <div className = "product-name">{props.name}</div>
                <div className = "price">{`$${props.price}`}</div>

            
            </Link>
            
        </>
    )
}

export default Product
