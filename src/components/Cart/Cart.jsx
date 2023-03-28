import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart
    // const {cart}=props
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>selected items {cart.length}</p>
            <p>Total price: $ {total}</p>
            <p>Total shipping: {shipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h6>Grand total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;