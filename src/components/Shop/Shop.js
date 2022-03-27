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
        if(cart.length > 3) {
            alert('Maximum Product Added!')
        }
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
                    {
                        cart.map(item =><Cart key={item.id} item={item}></Cart>)
                    }
                    <div className='p-2 text-center'>
                    <button className='reset-btn'>Reset</button>
                    <br />
                    <button className='Choose-btn mt-2'>Generate One</button>
                    </div>
                </div>
            </div>
                <div className="container mt-4 mb-2 p-4">
                    <h1>How React works?</h1>
                    <p>Answer:</p>
                    <p>React is a JavaScript library. It works like a tree method. We can pass data through a component in React. React gets data and shows it dynamically in the user interface (UI). React works from the parent node to the child node. That means we can send data using props from a react parent node to a child node. But we can't pass data from the child node to the parent node. Because react works unidirectional. It follows one-way data binding. React can handle state by using the useState method. Also, it can show data from our local storage or database. React shows outside data to our react app by using the useEffect method. Rect gives us an opportunity to handle the click event listener. React follows the useState method to change the state of the UI. React saves a virtual dom in their database and when we make some changes or add some activity on our website, it matches it with the virtual dom tree. Then make the changes to the specific nodes.</p>
                    <h1>Difference between props and state?</h1>
                    <p>Answer:</p>
                    <p>Props:</p>
                    <p>Props are like properties. Props are read-only types of data. We can get or receive different types of data as props. Basically, props send the data into an object. We can get an array, object, or function as a prop, and we can destructure or directly use the data in our code. Also, we can dynamically show data in our application UI from the props. We can not reset the props data. Also, we can not make changes to the prop. We can destructure data from the props. </p>
                    <p>State:</p>
                    <p>When we write a react component, we have to use state. Because when users use our app, they will either make some changes or they can do some activities. The state can understand that and change the state for the user. That means states are changeable. Basically, the state contains the data for the react component. Every react component could have one or more states depending on the react app.</p>
                </div>
            </div>
    );
};

export default Shop;