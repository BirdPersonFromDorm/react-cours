import React from "react";
import PizzaSection from "./section/PizzaSection";
import OftenOrder from "./section/OftenOrder";

const App = () => {

    return (
        <main>
            <PizzaSection/>
            <div style={{marginTop: 100}}/>
            <OftenOrder/>
        </main>
    );
}

export default App;
