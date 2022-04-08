import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Board = function(props) {
    const {left,right} = props;
    return (
        <section className="board__container">
            <h1 className='board__header'>React Kanban</h1>
            <div className="board__leftSide">
                {left}
            </div>
            <div className="board__rightSide">
                {right}
            </div>
        </section>
    );
}

Board.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired,
}

export default Board;