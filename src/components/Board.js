import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Board = function(props) {
    const {left,right,title} = props;
    return (
        <section className="board__container">
            <h1 className='board__header'>{title}</h1>
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
    title: PropTypes.string.isRequired
}

export default Board;