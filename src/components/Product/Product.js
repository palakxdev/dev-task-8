import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {addToCart} = props;
    const {img, name, price} = props.product;
    
    return (
            <div className='product'>
            <div className="product-info">
                <img className='img-fluid mt-3' src={img} alt="" />
                <h4 className='mt-4 mb-4'>Name: {name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => addToCart(props.product)} className="product-btn"><p className='btn-text'>Add To Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;