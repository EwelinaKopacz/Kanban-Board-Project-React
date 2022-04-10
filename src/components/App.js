/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {useState,useEffect} from 'react';
import {ColumnContext, TaskContext, FormContext} from '../context';
import Board from './Board';
import Form from './Form';
import Columns from './Columns'

import './styles.css';

const App = function() {

    const columns = ([
        {id:1, columnName:'TO DO', limit: 4},
        {id:2, columnName:'DOING', limit: 2},
        {id:3, columnName:'DONE', limit: 3},
    ])

    const [tasks,setTasks] = useState ([
        {id:1,taskName:'check Email', user:'Kamil',idColumn:1},
        {id:2,taskName:'send Mail', user:'Kasia',idColumn:2},
        {id:3,taskName:'call Customer', user:'Asia',idColumn:3},
    ])

    useEffect(()=> {
        const data = window.localStorage.getItem("tasks");
        if(data){
            setTasks(JSON.parse(data));
        }
        else setTasks(tasks)
    },[])

    useEffect(()=> {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    function checkTaskLimit(columnId){
        const checkLimit = columns.filter(item => item.id === columnId).map(item => item.limit);
        const limitNumber = checkLimit[0]

        const data = JSON.parse(window.localStorage.getItem("tasks"));
        const numberOfTasks = data.filter(item => item.idColumn === columnId);
        const taskLenght = numberOfTasks.length + 1;

        if(taskLenght > limitNumber){
            return false // przydałyby sie informacja ze limit przekroczony
        }
        return true
    }

    function moveToNext(taskId,columnId){
        if(checkTaskLimit(columnId + 1)){
            const newItem = tasks.map(item => {
                if(item.id === taskId && columnId < 3){
                    return {...item, idColumn:item.idColumn + 1};
                }
                return item;
            })
            setTasks(newItem)
        }
    }

    function moveToPrev(taskId,columnId){
        if(checkTaskLimit(columnId - 1)){
            const newItem = tasks.map(item => {
                if(item.id === taskId && columnId > 1 ){
                    return {...item, idColumn:item.idColumn - 1};
                }
                return item;
            })
            setTasks(newItem)
        }
    }

    function checkTaskLenght(){
        const data = JSON.parse(window.localStorage.getItem("tasks"));
        const column1Lenght = data.filter(item => item.idColumn === 1);
        if(column1Lenght.length < 4){
            return true
        }
        return false
    }

    function addNewTask(task){
        const data = JSON.parse(window.localStorage.getItem("tasks"));
        const largestId = data.map(item => item.id).sort((a,b)=> a-b)[data.length-1]
        const nextId = largestId +1;

        // zakładam ze kazdy nowy task ląduje na liste TO DO (czyli kolumna 1)
        const {taskName,user} = task;
        const newTask = {id:nextId,taskName,user,idColumn:1};

        if(checkTaskLenght()){
            data.push(newTask)
            setTasks(data)
        }
        else alert('Max limit TASK in TO DO list = 4');
    }

    function removeTask(id){ // brak potwierdzenia czy chce usunac taska
        const data = JSON.parse(window.localStorage.getItem("tasks"));
        const updateTasks = data.filter(item => item.id !== id);
        setTasks(updateTasks)
    }

    const taskProviderValues = {
        tasks,
        moveToNext,
        moveToPrev,
        removeTask
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
            title='React Kanban'
        />
    );
}
export default App;


