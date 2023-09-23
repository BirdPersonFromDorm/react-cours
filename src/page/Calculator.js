import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../CounterContext";
import {useDispatch, useSelector} from "react-redux";
import {setCounterMinus, setCounterPlus} from "../redux/slice/counter";

const Calculator = () => {

    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const handlePlus = () =>{
        dispatch(setCounterPlus())
    }

    const handleMinus = () =>{
        dispatch(setCounterMinus())
    }

    return (
        <div className="calcur-wrap">
            <div style={{fontSize: 25}}>
                {count}
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