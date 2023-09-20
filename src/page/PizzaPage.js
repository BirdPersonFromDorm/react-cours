import React from 'react';
import PizzaSection from "../section/PizzaSection";
import OftenOrder from "../section/OftenOrder";

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