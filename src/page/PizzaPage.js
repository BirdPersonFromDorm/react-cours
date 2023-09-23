import React from 'react';
import PizzaSection from "../section/PizzaSection";
import OftenOrder from "../section/OftenOrder";
import {useDispatch, useSelector} from "react-redux";

const PizzaPage = () => {


    return (
        <>
            <PizzaSection/>
            <div style={{marginTop: 100}}/>
            <OftenOrder/>
        </>
    );
};

export default PizzaPage;