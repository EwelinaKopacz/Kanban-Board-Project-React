import React from 'react';

const ColumnItem = function(props) {
    const {columnName,limit} = props.column;
    return (
        <div>
            <p>{columnName}: {limit}</p>
        </div>
    )
}

export default ColumnItem;