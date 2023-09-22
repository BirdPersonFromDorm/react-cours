import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../CounterContext";

const Calculator = () => {

    const {state, dispatch} = useContext(Context)

    const handlePlus = () =>{
        dispatch({type: 'PLUS_ONE'})
    }

    const handleMinus = () =>{
        dispatch({type: 'MINUS_ONE'})
    }

    return (
        <div className="calcur-wrap">
            <div style={{fontSize: 25}}>
                {state.count}
            </div>
            <div className="calcur-wrap-buttons">
                <div
                    onClick={handleMinus}
                    className="calcur-button"
                    style={{backgroundColor: '#ff5252'}}
                >
                    Отнять 1
                </div>
                <div
                    onClick={handlePlus}
                    className="calcur-button"
                    style={{backgroundColor: '#52ff55'}}
                >
                    Добавить 1
                </div>
            </div>
        </div>
    );
};

export default Calculator;