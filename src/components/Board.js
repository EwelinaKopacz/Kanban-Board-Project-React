import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Board = function(props) {
    const {children} = props;
    return (
        <section className="board__container">
            <h1 className='board__header'>React Kanban</h1>
            <div className="board__leftSide">
                {children[0]}
            </div>
            <div className="board__rightSide">
                {children[1]}
            </div>
        </section>
    );
}

Board.propTypes = {
    children:PropTypes.node.isRequired
}

export default Board;