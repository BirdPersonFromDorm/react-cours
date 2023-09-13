import React from 'react';
import pizzaOne from "../accets/img/1.webp";
import pizzaTwo from "../accets/img/2.webp";
import SmallBlock from "../components/SmallBlock";

const OftenOrder = () => {

    const pizzaArray = [
        {
            img: pizzaOne,
            title: 'Трюфельная с мортаделлой',
            price: '589'
        },
        {
            img: pizzaTwo,
            title: 'Пицца Миксик',
            price: '589'
        },

    ]

    return (
        <>
            <h1 className="title-order">
                Часто заказывают
            </h1>
            <div className="wrapper">
                {
                    pizzaArray.map((item) =>
                        <SmallBlock item={item}/>
                    )
                }
            </div>
        </>
    );
};

export default OftenOrder;