/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/alert.css';

const Alert = ({text,closeAlert}) => {
    const handleClose =()=>{
        closeAlert(false)
    }
    return (
        <div className='alert__container'>
            <p className='alert__text'>{text}</p>
            <button type='button' className='alert__btn' onClick={handleClose}>OK</button>
        </div>
    )
}

export default Alert;

Alert.propTypes = {
    text:PropTypes.string.isRequired,
    closeAlert:PropTypes.func.isRequired
}