/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css'

const ColumnItem = function(props) {
    const {columnName,limit} = props.column;
    return (
        <div className='columnItem__container'>
            <div className='columnItem__head'>
                <header className='columnItem__header'>{columnName} </header>
                <span>task limit: {limit}</span>
            </div>
            <div className='columnItem__tasks'>
                {props.children}
            </div>
        </div>
    )
}

export default ColumnItem;