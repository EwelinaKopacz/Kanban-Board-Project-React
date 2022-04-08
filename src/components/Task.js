import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Task = function(props){
    const {task} = props;
    const {taskName,user,id,idColumn,limit} = task;
    const {moveToNext,moveToPrev} = props

    return(
        <div className='task__container'>
            <p className='task__content'>Task: {taskName} </p>
            <p className='task__user'>Responsible: {user} </p>
            <button type='button' className='task__button' onClick={() => moveToPrev(id,idColumn,limit)}> Move to Prev </button>
            <button type='button' className='task__button' onClick={() => moveToNext(id,idColumn)}> Move to Next </button>
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
    moveToPrev:PropTypes.func.isRequired
}

export default Task;