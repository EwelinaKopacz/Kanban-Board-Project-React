import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const ColumnItem = function(props) {
    const {column} = props
    const {columnName,limit} = column;
    const {children} = props;
    return (
        <div className='columnItem__container'>
            <div className='columnItem__head'>
                <header className='columnItem__header'>{columnName} </header>
                <span>task limit: {limit}</span>
            </div>
            <div className='columnItem__tasks'>
                {children}
            </div>
        </div>
    )
}

ColumnItem.propTypes = {
    column: PropTypes.element.isRequired,
    columnName: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

export default ColumnItem;