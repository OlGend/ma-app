import React from 'react';

import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({closeModal, handleSubmit, inputValue, handleInputChange, className, editSubmit, editMode}) => {

    const onSubmit = editMode ? editSubmit : handleSubmit;

    return (
        <div className="overlay">
            <div className="modal-content">
                <p>Modal</p>
                <form className={`modal ${className}`} onSubmit={onSubmit}>
                    <input type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                    />
                    <button className='button btnForm'>Change</button>
                </form>
                <Button
                    onClick={closeModal}
                >
                    X
                </Button>
            </div>
        </div>
    );
};


export default Modal;


