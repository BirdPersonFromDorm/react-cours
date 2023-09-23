import React, {useState} from 'react';
import pizzaOne from "../accets/img/1.webp";
import pizzaTwo from "../accets/img/2.webp";
import pizzaThree from "../accets/img/3.webp";
import pizzaFour from "../accets/img/4.webp";
import CardPizza from "../components/CardPizza";

const PizzaSection = () => {

    const pizzaArray = [
        {
            img: pizzaOne,
            title: 'Трюфельная с мортаделлой',
            desc: 'Мортаделла, трюфельный соус, шампиньоны, красный лук, моцарелла, фирменный соус альфредо, чеснок',
            price: '589'
        },
        {
            img: pizzaTwo,
            title: 'Пицца Миксик',
            desc: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
            price: '589'
        },
        {
            img: pizzaThree,
            title: 'Пицца Жюльен',
            desc: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
            price: '589'
        },
        {
            img: pizzaFour,
            title: 'Пепперони фреш',
            desc: 'Цыпленок, моцарелла, фирменный соус альфредо',
            price: '589'
        },
    ]

    return (
        <>
            <h1 className="title">
                Пицца
            </h1>
            <div className="pizza-wrapper">
                {
                    pizzaArray.map((item) =>
                        <CardPizza item={item}/>
                    )
                }
            </div>
        </>
    );
};

export default PizzaSection;