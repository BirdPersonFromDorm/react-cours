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
import LoginLayout from "./layout/LoginLayout";
import Login from "./page/Login";
import {useSelector} from "react-redux";

const App = () => {

    // const content = useRoutes(routes)
    const {login, role} = useSelector((state) => state.auth?.user)

    const shouldDisplayRoute = (route) =>{
        if (role === 'user'){
            const displayedRoutes = [
                'posts'
            ]
            return displayedRoutes.includes(route)
        }
        if (role === 'admin'){
            const displayedRoutes = [
                'posts',
                'todos',
                'todos-v2',
                'pizza',
                'counter',
            ]
            return displayedRoutes.includes(route)
        }
        if (role === 'manager'){
            const displayedRoutes = [
                'posts',
                'todos',
                'todos-v2',
            ]
            return displayedRoutes.includes(route)
        }
    }

    return (
        <Routes>
            {login ?
                <>
                    <Route path={'/app'} element={<MainLayout/>}>
                        {shouldDisplayRoute('posts') && (
                            <>
                                <Route path={'posts'} element={<Posts/>}/>
                                <Route path={'posts/:id'} element={<PostById/>}/>
                            </>
                        )}
                        {shouldDisplayRoute('todos') && (
                            <Route path={'todos'} element={<TodoList/>}/>
                        )}
                        {shouldDisplayRoute('todos-v2') && (
                            <Route path={'todos-v2'} element={<TodoListV2/>}/>
                        )}
                        {shouldDisplayRoute('pizza') && (
                            <Route path={'pizza'} element={<TodoList/>}/>
                        )}
                        {shouldDisplayRoute('counter') && (
                            <Route path={'counter'} element={<Calculator/>}/>
                        )}
                    </Route>
                    <Route path={'/'} element={<LoginLayout/>}>
                        <Route path={'/'} element={<Navigate to={'/app/posts'}/>}/>
                        <Route path={'*'} element={<Navigate to={'/app/posts'}/>}/>
                    </Route>
                </>
                :
                <Route path={'/'} element={<LoginLayout/>}>
                    <Route path={'login'} element={<Login/>}/>

                    <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                    <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                </Route>
            }

        </Routes>
    );
}

export default App;
