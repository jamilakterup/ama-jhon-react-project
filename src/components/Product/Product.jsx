import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {category, name, ratings, shipping, price, img} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p className='price'>Price: $ {price}</p>
                <p>Catagory: {category}</p>
                <p>Shipping: $ {shipping}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;