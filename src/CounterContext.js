import React, {createContext, useReducer, useState} from "react";

export const Context = createContext()

const initialState = {count: 0}

const reducer = (state, action) =>{
    switch (action.type) {
        case 'PLUS_ONE':
            return {count: state.count + 1}
        case 'MINUS_ONE':
            return {count: state.count - 1}
        default:
            return state
    }
}

const CounterContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
};

export default CounterContext;