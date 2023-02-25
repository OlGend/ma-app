import React from 'react';
import { useState } from 'react';

import Modal from '../component/Modal/Modal';
import Button from '../component/Button/Button';
import Task from './Task/Task';
import './Tasks.scss'

const Tasks = ({ className }) => {

    const [isModalOpened, setIsModalOpened] = useState(false);
    const [tasks, setTasks] = useState([ ]);
    const [inputValue, setInputValue] = useState("");

    const openModal = () => {
        setIsModalOpened(true);
    };

    const closeModal = () => {
        setIsModalOpened(false);
    };

    function handleInputChange(event) {
        setInputValue(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        setTasks([...tasks, { id: tasks.length + 1, value: inputValue }]);
        closeModal();
    };

    return (
        <div className='tasks'>
             {tasks.map((task) => (
                <Task isModalOpened={isModalOpened} openModal={openModal} key={task.id} handleInputChange={handleInputChange} inputValue={inputValue}/>
            ))}
            <Button onClick={openModal}>
                Add Task
            </Button>
            {isModalOpened && (
                <div className='overlay'>
                    <div className="modal-content">
                        <p>Modal Added Task!</p>
                        <form onSubmit={handleSubmit} className={`modal ${className}`}>
                            <input type="text" 
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <button onClick={closeModal}>X</button>
                            <button className='button btnForm'>Add task</button>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
    );
};


export default Tasks;