import React from 'react';

const Cart = (props) => {
    const {name} = props.item;
    
        return (
            <div className='p-2'>
                <h5>{name}</h5>
            </div>
        );
};

export default Cart;