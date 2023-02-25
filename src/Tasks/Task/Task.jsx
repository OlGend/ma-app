import React, { useState } from 'react';

import Button from '../../component/Button/Button';
import './Task.scss'

const Task = ({ inputValue }) => {
  const [task, setTask] = useState({ value: inputValue });
  const [editInputValue, setEditInputValue] = useState('');
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpened(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpened(false);
  };

  const handleInputChange = (event) => {
    setEditInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask({ ...task, value: editInputValue });
    handleCloseModal(true);
  };




  return (
    <div className='task'>
      <h3>{task.value}</h3>
        <Button 
            className='button' 
            onClick={handleEditClick}
        >
            Edit
        </Button>
      {isEditModalOpened && (
        <div className='overlay'>
           <div className="modal-content">
                <p>Modal Edited Task!</p>
                <form onSubmit={handleSubmit}>
                    <input value={editInputValue} onChange={handleInputChange} />
                    <button onClick={handleCloseModal}>X</button>
                    <button className='button btnForm' type="submit">Save</button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default Task;
