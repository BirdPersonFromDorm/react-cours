import React from 'react';

const Button = ({color, backColor}) => {
    return (
        <div
            className="card-bottom-button"
            style={{
                backgroundColor: backColor,
                color
            }}
        >
            Выбрать
        </div>
    );
};

export default Button;