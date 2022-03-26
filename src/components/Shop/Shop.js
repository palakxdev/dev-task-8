import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    };
        
    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product =><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
                <div className="cart-container m-2">
                
                    <h3>Your Selected Products</h3>
                    <hr />
                    {cart.map((item) => (
                <Cart key={item.id} item={item}></Cart>
                ))}
                </div>
            </div>
            
        </div>
    );
};

export default Shop;