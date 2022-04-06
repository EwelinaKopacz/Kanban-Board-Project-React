import React from 'react';
import './styles.css'

const Task = function(props){
    const {taskName,user} = props.task;
    return(
        <div className='task__container'>
            <p className='task__content'>Task: {taskName} </p>
            <p className='task__user'>Responsible: {user}</p>
        </div>
    )
}

export default Task;