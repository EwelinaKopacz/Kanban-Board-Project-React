import React from 'react';
import PropTypes from 'prop-types';
import '../css/board.css';

const Board = function(props) {
    const {children} = props;
    const [alert,form,columns] = children;
    return (
        <section className="board__container">
            <div className="board__title">
                <h1 className='board__header'>Kanban Board</h1>
            </div>
            <div className="board__leftSide">
                {form}
            </div>
            <div className="board__rightSide">
                {alert}
                {columns}
            </div>
        </section>
    );
}

Board.propTypes = {
    children:PropTypes.node.isRequired
}

export default Board;