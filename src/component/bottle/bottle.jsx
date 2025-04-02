import React from 'react';
import './bottle.css'

const Bottle = ({ bottle, purchaseProduct }) => {
    const { img, name, price } = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price : ${price}</h3>
            <button onClick={() => purchaseProduct(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;