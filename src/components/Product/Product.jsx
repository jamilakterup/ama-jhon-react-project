import React from 'react';
import './Product.css'

const Product = ({category, name, ratings, price, img}) => {
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p className='price'>Price: {price}$</p>
                <p>{category}</p>
                <p>{ratings} stars</p>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;