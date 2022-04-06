import React, {useState,useEffect} from 'react';
import Board from './Board';
import {ColumnContext, TaskContext} from '../context';
import Form from './Form';

const App = function() {

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const columns = ([
        {id:1, columnName:'TO DO', limit: 6},
        {id:2, columnName:'DOING', limit: 3},
        {id:3, columnName:'DONE', limit: 3},
    ])

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const [items,setItem] = useState ([
        {id:1,taskName:'check Email', user:'Kamil',idColumn:1},
        {id:2,taskName:'send Email', user:'Kasia',idColumn:2},
        {id:3,taskName:'call Customer', user:'Asia',idColumn:3},
    ])

    useEffect(()=> {
        localStorage.setItem('items', JSON.stringify(items))
    },[items])

    function moveToNext(taskId){
        console.log('taskid przekazany do f-cji:', taskId);
        items.filter(item => {
            if(item.id === taskId){
                console.log('task ktory sie zgadza z klikniętym:', item);
                console.log('itemid kliknietego task:', item.id);
                console.log('itemidColumn kliknietego task:', item.idColumn);
                setItem(items => ([
                    ...items,
                    item.idColumn +1
                ])
                )
            }
        })
    }
    console.log('stan po wywolaniu f-cji', items);

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const taskProviderValues = {
        items,
        moveToNext
    }


    return(
        <>
            <ColumnContext.Provider value={columns}>
                <TaskContext.Provider value={taskProviderValues}>
                    <Board/>
                </TaskContext.Provider>
            </ColumnContext.Provider>
            <Form/>
        </>
    )
}

export default App;


