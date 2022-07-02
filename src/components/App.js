/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {useState,useEffect} from 'react';
import {ColumnContext, TaskContext, FormContext} from '../context';
import Board from './Board';
import Form from './Form';
import Columns from './Columns'
import Alert from './Alert';
import columns from "../../data/columns.json";
import '../css/global.css';

const App = function() {

    const [tasks,setTasks] = useState ([
        {id:1,taskName:'check Email', user:'Kamil',idColumn:1},
        {id:2,taskName:'send Mail', user:'Kasia',idColumn:2},
        {id:3,taskName:'call Customer', user:'Asia',idColumn:3},
    ])

    const [limitColumn, setLimitColumn] = useState(false);
    const [limitFirstColumn, setLimitFirstColumn] = useState(false);

    useEffect(()=> {
        const data = window.localStorage.getItem("tasks"); // powtorzenie
        if(data){
            setTasks(JSON.parse(data));
        }
        else setTasks(tasks)
    },[])

    useEffect(()=> {
        window.localStorage.setItem('tasks', JSON.stringify(tasks)); // powtorzenie
    },[tasks])

    function checkTaskLimit(columnId){
        const checkLimit = columns.filter(item => item.id === columnId).map(item => item.limit);
        const limitNumber = checkLimit[0]

        const data = JSON.parse(window.localStorage.getItem("tasks")); // powtorzenie
        const numberOfTasks = data.filter(item => item.idColumn === columnId);
        const taskLenght = numberOfTasks.length + 1;

        if(taskLenght > limitNumber){
            setLimitColumn(true);
            return false;
        }
        return true;
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
        const data = JSON.parse(window.localStorage.getItem("tasks")); // powtorzenie
        const column1Lenght = data.filter(item => item.idColumn === 1);
        if(column1Lenght.length < 4){
            return true
        }
        return false
    }

    function addNewTask(task){
        const data = JSON.parse(window.localStorage.getItem("tasks")); // powtorzenie
        const largestId = Math.max(...data.map(item => item.id), 0);
        const nextId = largestId +1;

        const {taskName,user} = task;
        const newTask = {id:nextId,taskName,user,idColumn:1};

        if(checkTaskLenght()){
            data.push(newTask)
            setTasks(data)
            return true;
        }
        setLimitFirstColumn(true);
        return false;
    }

    function removeTask(id){
        const data = JSON.parse(window.localStorage.getItem("tasks")); // powtorzenie
        const updateTasks = data.filter(item => item.id !== id);
        setTasks(updateTasks)
    }

    const closeAlertColumns = (value) => setLimitColumn(value)

    const closeAlertFirstColumn = (value) => setLimitFirstColumn(value)

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
        <Board>
            {limitColumn ? <Alert text="Check the limit in column where you want to move a task." closeAlert={closeAlertColumns}/> : null }
            <FormContext.Provider value={formProviderValues}>
                {limitFirstColumn ? <Alert text="The limit in column TODO - max 4." closeAlert={closeAlertFirstColumn}/> : null }
                <Form />
            </FormContext.Provider>
            <ColumnContext.Provider value={columns}>
                <TaskContext.Provider value={taskProviderValues}>
                    <Columns />
                </TaskContext.Provider>
            </ColumnContext.Provider>
        </Board>
    );
}
export default App;


