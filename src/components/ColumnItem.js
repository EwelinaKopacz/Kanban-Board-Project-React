import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const ColumnItem = function(props) {
    const {column,children} = props
    const {columnName,limit} = column;

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
    column:PropTypes.shape({
        columnName: PropTypes.string,
        limit: PropTypes.number
    }).isRequired,
    children: PropTypes.node.isRequired
}

export default ColumnItem;