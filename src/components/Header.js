import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setRoute} from "../redux/slice/routes";

const Header = () => {

    const dispatch = useDispatch()

    const {route} = useSelector((state) => state.routes)

    const onChangeRoute = (state) =>{
        dispatch(setRoute(state))
    }

    return (
        <div className="header">
            <h3
                onClick={() => onChangeRoute(1)}
                style={{
                    backgroundColor: route === 1 && '#74e880'
                }}
            >
                Посты
            </h3>
            <h3
                onClick={() => onChangeRoute(2)}
                style={{
                    backgroundColor: route === 2 && '#74e880'
                }}
            >
                Todo list v1
            </h3>
            <h3
                onClick={() => onChangeRoute(3)}
                style={{
                    backgroundColor: route === 3 && '#74e880'
                }}
            >
                Todo list v2
            </h3>
            <h3
                onClick={() => onChangeRoute(4)}
                style={{
                    backgroundColor: route === 4 && '#74e880'
                }}
            >
                Pizza
            </h3>
            <h3
                onClick={() => onChangeRoute(5)}
                style={{
                    backgroundColor: route === 5 && '#74e880'
                }}
            >
                Calculator
            </h3>
        </div>
    );
};

export default Header;