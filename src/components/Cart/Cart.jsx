import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart
    // const {cart}=props
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>selected items {quantity}</p>
            <p>Total price: $ {total}</p>
            <p>Total shipping: {shipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h6>Grand total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;