import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Task = function(props){
    const {task} = props;
    const {taskName,user,id,idColumn} = task;
    const {moveToNext,moveToPrev, removeTask, limit} = props

    // tutaj tez mozna rozbić button na komponent
    return(
        <div className='task__container'>
            <p className='task__content'>Task: {taskName} </p>
            <p className='task__user'>Responsible: {user} </p>
            <button type='button' className='task__move' onClick={() => moveToPrev(id,idColumn,limit)}> Move to Prev </button>
            <button type='button' className='task__move' onClick={() => moveToNext(id,idColumn,limit)}> Move to Next </button>
            <div className='button_box'>
                <button type= 'button' className='task__remove'onClick={() => removeTask(id)}> Remove </button>
            </div>
        </div>
    )
}

Task.propTypes = {
    // task:PropTypes.element.isRequired,
    // taskName: PropTypes.string.,
    // user: PropTypes.string.isRequired,
    // id:PropTypes.number.isRequired,
    // idColumn:PropTypes.number.isRequired,
    // limit:PropTypes.number.isRequired,
    moveToNext:PropTypes.func.isRequired,
    moveToPrev:PropTypes.func.isRequired,
    removeTask:PropTypes.func.isRequired
}

export default Task;