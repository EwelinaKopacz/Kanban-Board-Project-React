/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {useState,useEffect} from 'react';
import {ColumnContext, TaskContext, FormContext} from '../context';
import Board from './Board';
import Form from './Form';
import Columns from './Columns'

import './styles.css';

const App = function() {
    const [tasks,setTasks] = useState ([
        {id:1,taskName:'check Email', user:'Kamil',idColumn:1},
        {id:2,taskName:'send Email', user:'Kasia',idColumn:2},
        {id:3,taskName:'call Customer', user:'Asia',idColumn:3},
        {id:4,taskName:'call CEO', user:'Iwona',idColumn:3},
    ])

    useEffect(()=> {
        const data = localStorage.getItem("tasks");
        if(data){
            setTasks(JSON.parse(data));
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])


    function moveToNext(taskId,columnId){
        const newItem = tasks.map(item => {
            if(item.id === taskId && columnId < 3){
                return {...item, idColumn:item.idColumn + 1};
            }
            return item;
        })
        setTasks(newItem)
    }

    // spr limitu nie działa, mam limit obecnej kolumn, a potrzebny mi limit w tym wypadku poprzedniej
    function moveToPrev(taskId,columnId,limit){
        const getTasks = localStorage.getItem('tasks');
        const getTasksInFormat = JSON.parse(getTasks)
        const columnCheck = getTasksInFormat.filter(item => item.idColumn === columnId - 1)

        console.log('Limit kolumny z ktorej przenosimy taska',limit);
        console.log(columnCheck);
        console.log('ilosc tasków w poprzedniej kolumnie:', columnCheck.length);

        const newItem = tasks.map(item => {
            if(item.id === taskId && columnId > 1 ){ // && columnCheck.length < limit
                return {...item, idColumn:item.idColumn - 1};
            }
            return item;
        })
        setTasks(newItem)
    }

    // brakuje wywołania, aby po dodaniu pojawiło sie na tablicy, a nie dopiero po odświezeniu
    // przydałoby sie sprawdzanie czy mozna dodac kolejny task - limit - z tym mam problem, brakuje mi pomysłu jak to zrobić
    function addNewTask(task){
        const data = JSON.parse(localStorage.getItem("tasks"));
        const largestId = data.map(item => item.id).sort((a,b)=> a-b)[data.length-1]
        const nextId = largestId +1;

        // zakładam ze kady nowy task laduje na liste TO DO (czyli kolumna 1)
        const {taskName,user} = task;
        const newTask = {id:nextId,taskName,user,idColumn:1};

        data.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(data));
    }

    const columns = ([
        {id:1, columnName:'TO DO', limit: 4},
        {id:2, columnName:'DOING', limit: 2},
        {id:3, columnName:'DONE', limit: 3},
    ])

    const taskProviderValues = {
        tasks,
        moveToNext,
        moveToPrev
    }

    const formProviderValues = {
        addNewTask,
    }

    return (

        <Board
            left={
                <FormContext.Provider value={formProviderValues}>
                    <Form />
                </FormContext.Provider>
            }
            right={
                <ColumnContext.Provider value={columns}>
                    <TaskContext.Provider value={taskProviderValues}>
                        <Columns />
                    </TaskContext.Provider>
                </ColumnContext.Provider>
            }
        />
    );
}
export default App;


