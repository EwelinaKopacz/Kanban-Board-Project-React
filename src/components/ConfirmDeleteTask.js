/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/confirms.css';


const ConfirmDeleteTask = ({confirmDelete}) => {
    return (
        <div className='delete__container'>
            <p className='delete__text'>Are you sure?</p>
            <div className='delete__btns'>
                <button type='button' className='delete__btn' onClick={()=>confirmDelete(true)}>YES</button>
                <button type='button' className='delete__btn' onClick={()=>confirmDelete(false)}>NO</button>
            </div>
        </div>
    )
}

ConfirmDeleteTask.propTypes = {
    confirmDelete: PropTypes.func.isRequired
}

export default ConfirmDeleteTask;