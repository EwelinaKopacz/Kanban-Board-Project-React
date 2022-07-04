import {useState,useEffect} from 'react';

export default function useTasksStorage(initTasks){
    const [tasks,setTasks] = useState(initTasks)

    useEffect(()=> {
        const data = window.localStorage.getItem("tasks");
        if(data){
            setTasks(JSON.parse(data));
        }
    },[])

    function saveTasks(newTasks){
        setTasks(newTasks);
        window.localStorage.setItem('tasks',JSON.stringify(newTasks));
    }

    return [tasks,saveTasks]
}

