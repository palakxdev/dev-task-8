import React from 'react';

const Cart = (props) => {
    const {name} = props.item;
    
        return (
            <div>
                <div className='p-2'>
                <h5>{name}</h5>
            </div>
            </div>
        );
};

export default Cart;