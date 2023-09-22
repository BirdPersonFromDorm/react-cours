import React, {useEffect, useRef, useState} from 'react';

const Calculator = () => {

    const [count, setCount] = useState(1)

    const handlePlus = () =>{
        setCount((prev) => prev + 10)
        setCount((prev) => prev - 5)
    }

    const handleMinus = () =>{
        setCount(count - 1)
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