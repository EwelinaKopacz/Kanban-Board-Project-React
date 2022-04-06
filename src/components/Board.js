import React from 'react';
import Columns from './Columns';
import './styles.css'

const Board = function() {
    return (
        <section className='board__container'>
            <h1 className='board__header'>React Kanban</h1>
            <Columns/>
        </section>
    )
}

export default Board;