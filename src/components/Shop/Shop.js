import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container container-fluid row mt-4'>
            <div className="products-container col-8">
                <h3>Choose four product to generate best one: {products.length}</h3>
            </div>
            <div className="cart-container col-4">
                <h3>Your Selected Products</h3>
            </div>
        </div>
    );
};

export default Shop;