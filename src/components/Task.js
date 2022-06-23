/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {TaskContext} from '../context';
import '../css/columns.css';

const Task = function(props){
    const {task} = props;
    const {taskName,user,id,idColumn} = task;

    const items = useContext(TaskContext)
    const moveToNextFn = items.moveToNext;
    const moveToPrevFn = items.moveToPrev;
    const removeTaskFn = items.removeTask;

    const renderButton = (idCol) => {
        if(idCol === 1){
            return <button type='button' className='task__move' onClick={() => moveToNextFn(id,idColumn)}> &#8594; </button>
        }
        else if(idCol === 3){
            return <button type='button' className='task__move' onClick={() => moveToPrevFn(id,idColumn)}> &#8592; </button>
        }
        else {
            return (
                <>
                    <button type='button' className='task__move' onClick={() => moveToPrevFn(id,idColumn)}> &#8592; </button>
                    <button type='button' className='task__move' onClick={() => moveToNextFn(id,idColumn)}> &#8594; </button>
                </>
            )
        }

    }

    return(
        <div className='task__container'>
            <p className='task__name task__content'>{taskName} </p>
            <p className='task__user task__content'>{user} </p>
            <div className='button__container'>
                {renderButton(idColumn)}
                <button type='button' className='task__remove'onClick={() => removeTaskFn(id)}> &times;</button>
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