import React from "react";
import MainLayout from "./layout/MainLayout";
import Posts from "./page/Post/Posts";
import PostById from "./page/Post/PostById";
import TodoList from "./page/TodoList";
import TodoListV2 from "./page/TodoListV2";
import PizzaPage from "./page/PizzaPage";
import Calculator from "./page/Calculator";

export const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {path: 'posts', element: <Posts/>},
            {path: 'posts/:id', element: <PostById/>},
            {path: 'todos', element: <TodoList/>},
            {path: 'todos-v2', element: <TodoListV2/>},
            {path: 'pizza', element: <PizzaPage/>},
            {path: 'counter', element: <Calculator/>},

            {path: '/', element: <Posts/>},
            {path: '*', element: <Posts/>},
        ]
    }
]