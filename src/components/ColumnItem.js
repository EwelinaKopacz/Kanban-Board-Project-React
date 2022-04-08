import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const ColumnItem = function(props) {
    const {columnName,limit} = props.column;
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
    columnName: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

export default ColumnItem;