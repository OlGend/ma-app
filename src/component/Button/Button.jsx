import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss'

const Button = ({ type = 'button', onClick, children }) => {
    return (
        <button 
            className='button'
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;