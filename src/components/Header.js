import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setRoute} from "../redux/slice/routes";
import {NavLink} from "react-router-dom";

const Header = () => {

    const routes = [
        {
            id: 5,
            path: 'posts',
            title: 'Посты'
        },
        {
            id: 1,
            path: 'todos',
            title: 'Todo list v1'
        },
        {
            id: 2,
            path: 'todos-v2',
            title: 'Todo list v2'
        },
        {
            id: 3,
            path: 'pizza',
            title: 'Pizza'
        },
        {
            id: 4,
            path: 'counter',
            title: 'Calculator'
        },
    ]

    return (
        <div className="header">
            {
                routes.map((item) =>
                    <NavLink to={item.path} className={({isActive}) => isActive ? 'active-link' : ''}>
                        {item.title}
                    </NavLink>
                )
            }
        </div>
    );
};

export default Header;