import React from 'react';
import Columns from './Columns';

const Board = function() {
    return (
        <section>
            <h1 className='board__header'>React Kanban</h1>
            <Columns/>
        </section>
    )
}

export default Board;