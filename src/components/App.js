import React from 'react';
import Board from './Board';
import ColumnContext from '../context';

const App = function() {

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const columns = ([
        {id:1, columnName:'TO DO', limit: 6},
        {id:2, columnName:'DOING', limit: 3},
        {id:3, columnName:'DONE', limit: 3},
    ])

    return(
        <ColumnContext.Provider value={columns}>
            <Board/>
        </ColumnContext.Provider>
    )
}

export default App;


