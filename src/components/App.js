import React from 'react';
import Board from './Board';
import DataContext from '../context';

const App = function() {

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const columns = ([
        {id:1, columnName:'TO DO', limit: 6, width: 300},
        {id:2, columnName:'DOING', limit: 3, width: 300},
        {id:3, columnName:'DONE', limit: 3, width: 300},
    ])

    return(
        <DataContext.Provider value={columns}>
            <Board/>
        </DataContext.Provider>
    )
}

export default App;


