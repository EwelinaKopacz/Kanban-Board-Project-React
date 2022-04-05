import React from 'react';
import Board from './Board';
import {ColumnContext, TaskContext} from '../context';

const App = function() {

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const columns = ([
        {id:1, columnName:'TO DO', limit: 6},
        {id:2, columnName:'DOING', limit: 3},
        {id:3, columnName:'DONE', limit: 3},
    ])

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const tasks = ([
        {id:1,taskName:'check Email', user:'Kamil',idColumn:1},
        {id:2,taskName:'send Email', user:'Kasia',idColumn:2},
        {id:3,taskName:'call Customer', user:'Asia',idColumn:2}
    ])

    return(
        <ColumnContext.Provider value={columns}>
            <TaskContext.Provider value={tasks}>
                <Board/>
            </TaskContext.Provider>
        </ColumnContext.Provider>
    )
}

export default App;


