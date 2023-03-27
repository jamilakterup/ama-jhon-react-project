import React, {useEffect, useState} from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>{products.length} produccts comming here</h2>
                <div className="shop-products">
                    {
                        products.map(product => <Product {...product} key={product.id}></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h3>Order summery</h3>
            </div>
        </div>
    );
};

export default Shop;