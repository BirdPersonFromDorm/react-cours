import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setRoute} from "../redux/slice/routes";
import {NavLink} from "react-router-dom";
import {setLoginData} from "../redux/slice/auth";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const {user} = useSelector((state) => state.auth)
    const {role} = useSelector((state) => state.auth?.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const onLogout = () =>{
        dispatch(setLoginData({}))
        navigate('/login')
    }

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
        <div className="header-wrap">
            <div className="header-nav">
                {
                    routes.map((item) =>
                        shouldDisplayRoute(item.path) &&
                        <NavLink to={item.path} className={({isActive}) => isActive ? 'active-link' : ''}>
                            {item.title}
                        </NavLink>
                    )
                }
            </div>
            <div className="header-into">
                <div className="header-user">
                    <img src={user?.photo} alt="" className="header-user-photo"/>
                    <div className="header-user-login">
                        {user.login}
                    </div>
                </div>
                <div className="header-logout" onClick={onLogout}>
                    Выйти
                </div>
            </div>

        </div>
    );
};

export default Header;