import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {TaskContext} from '../context';
import './styles.css'

const Task = function(props){
    const {task} = props;
    const {taskName,user,id,idColumn} = task;

    const items = useContext(TaskContext)
    const moveToNextFn = items.moveToNext;
    const moveToPrevFn = items.moveToPrev;
    const removeTaskFn = items.removeTask;

    return(
        <div className='task__container'>
            <p className='task__content'>Task: {taskName} </p>
            <p className='task__user'>Responsible: {user} </p>
            <button type='button' className='task__move' onClick={() => moveToPrevFn(id,idColumn)}> Move to Prev </button>
            <button type='button' className='task__move' onClick={() => moveToNextFn(id,idColumn)}> Move to Next </button>
            <div className='button__box'>
                <button type='button' className='task__remove'onClick={() => removeTaskFn(id)}> Remove </button>
            </div>
        </div>
    )
}

Task.propTypes = {
    task:PropTypes.shape({
        taskName: PropTypes.string,
        user: PropTypes.string,
        id: PropTypes.number,
        idColumn: PropTypes.number
    }).isRequired,
}

export default Task;