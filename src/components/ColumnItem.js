import React from 'react';
import PropTypes from 'prop-types';
import '../css/columns.css';

const ColumnItem = function(props) {
    const {column,children,className,classIcon} = props;
    const connectClass = `${className} columnItem__container`;
    const {columnName,limit} = column;

    return (
        <div className={connectClass} >
            <div className='columnItem__head'>
                <i className={classIcon}/>
                <header className='columnItem__header'>{columnName} <span className='columnItem_limit'>{limit}</span> </header>
            </div>
            <div className='columnItem__tasks'>
                {children}
            </div>
        </div>
    )
}

ColumnItem.propTypes = {
    column:PropTypes.shape({
        columnName:PropTypes.string,
        limit:PropTypes.number,
    }).isRequired,
    children:PropTypes.node.isRequired,
    className:PropTypes.string.isRequired,
    classIcon:PropTypes.string.isRequired
}

export default ColumnItem;