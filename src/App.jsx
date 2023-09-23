import React, {createContext, useEffect, useRef, useState} from "react";
import PizzaSection from "./section/PizzaSection";
import OftenOrder from "./section/OftenOrder";
import PizzaPage from "./page/PizzaPage";
import Calculator from "./page/Calculator";
import TodoList from "./page/TodoList";
import TodoListV2 from "./page/TodoListV2";
import CounterContext from "./CounterContext";
import {TodoProvider} from "./context";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import {fetchData} from "./redux/slice/todos";
import Posts from "./page/Posts";
import MainLayout from "./layout/MainLayout";

const App = () => {

    const {route} = useSelector((state) => state.routes)

    return (
        <MainLayout>
            {route === 1 &&
            <Posts/>
            }
            {route === 2 &&
            <TodoList/>
            }
            {route === 3 &&
            <TodoListV2/>
            }
            {route === 4 &&
            <PizzaPage/>
            }
            {route === 5 &&
            <Calculator/>
            }
        </MainLayout>

    );
}

export default App;
