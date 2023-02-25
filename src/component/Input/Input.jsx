import React from 'react';

import './Input.scss';

const Input = ({ type = 'text', value, placeholder, onChangeHandler, name }) => {
    return (
        <input 
            className='input'
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChangeHandler}
            name={name}
        />
    );
};

export default Input;