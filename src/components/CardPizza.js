import React from 'react';
import Button from "./Button";

const CardPizza = ({item}) => {
    return (
        <div className="card">
            <img src={item.img} alt="" className="card-img"/>
            <div className="card-main-block">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
            <div className="card-bottom">
                <div className="card-bottom-price">
                    от {item.price} ₽
                </div>
                <Button
                    color={'#4864ec'}
                    backColor={'rgba(230, 235, 255, 0.5)'}
                />
            </div>
        </div>
    );
};

export default CardPizza;