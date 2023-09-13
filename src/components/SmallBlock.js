import React from 'react';

const SmallBlock = ({item}) => {

    return (
        <div className="order-item">
            <img src={item.img} alt=""/>
            <div className="order-item-main">
                <h3>{item.title}</h3>
                <p>от {item.price} ₽</p>
            </div>
        </div>
    );
};

export default SmallBlock;