import React from 'react';
import './styles.css'

const Task = function(props){
    const {taskName,user,id} = props.task;
    const {moveToNext} = props;

    return(
        <div className='task__container'>
            <p className='task__content'>Task: {taskName} </p>
            <p className='task__user'>Responsible: {user} </p>
            <button type='button' className='task__button'  >Move to Prev</button>
            <button type='button' className='task__button' onClick={() => moveToNext(id)}>Move to Next</button>
        </div>
    )
}

export default Task;