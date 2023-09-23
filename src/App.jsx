import React, {createContext, useEffect, useRef, useState} from "react";
import PizzaPage from "./page/PizzaPage";
import Calculator from "./page/Calculator";
import TodoList from "./page/TodoList";
import TodoListV2 from "./page/TodoListV2";
import Posts from "./page/Post/Posts";
import MainLayout from "./layout/MainLayout";
import {Routes, Route, Navigate, useRoutes} from 'react-router-dom'
import PostById from "./page/Post/PostById";
import {routes} from "./routes";

const App = () => {

    const content = useRoutes(routes)

    return (
        <>
            {content}
        </>
        // <Routes>
        //     <Route path={'/'} element={<MainLayout/>}>
        //
        //         <Route path={'/posts'} element={<Posts/>}/>
        //         <Route path={'/posts/:id'} element={<PostById/>}/>
        //
        //         <Route path={'/todos'} element={<TodoList/>}/>
        //         <Route path={'/todos-v2'} element={<TodoListV2/>}/>
        //         <Route path={'/pizza'} element={<PizzaPage/>}/>
        //         <Route path={'/counter'} element={<Calculator/>}/>
        //
        //         <Route path={'/'} element={<Navigate to={'/posts'}/>}/>
        //         <Route path={'*'} element={<Navigate to={'/posts'}/>}/>
        //     </Route>
        // </Routes>
    );
}

export default App;
