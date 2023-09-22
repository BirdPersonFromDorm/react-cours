import React, {useRef, useState} from "react";
import PizzaSection from "./section/PizzaSection";
import OftenOrder from "./section/OftenOrder";
import PizzaPage from "./page/PizzaPage";
import Calculator from "./page/Calculator";
import TodoList from "./page/TodoList";
import TodoListV2 from "./page/TodoListV2";

const App = () => {

    return (
        <main>
           {/*<PizzaPage/>*/}
           {/*<Calculator/>*/}
           {/*<TodoList/>*/}
           <TodoListV2/>
        </main>
    );
}

export default App;
