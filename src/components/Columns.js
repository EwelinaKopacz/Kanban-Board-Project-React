import React,{ useContext} from 'react';
import {ColumnContext,TaskContext} from '../context';
import ColumnItem from './ColumnItem';
import Task from './Task';
import './styles.css'

const Columns = function() {
    const columns = useContext(ColumnContext)
    const tasks = useContext(TaskContext)
    console.log(tasks);


    function checkTaskId(id){
        const temp = tasks.map(task => {
            if(task.idColumn === id){
                console.log(task.idColumn);
                console.log(id);
                // return <Task task={task} key={task.id}/>
                console.log(task)
                return task
            }
            return task
        })
        return <Task task={temp} key={temp.id}/>
    }

    function renderColumns(){
        return columns.map(item =>
            <ColumnItem column={item} key={item.id}>
                {checkTaskId(item.id)}
            </ColumnItem>
        )
    }

    return (
        <div className='columns__container'>
            {renderColumns()}
        </div>
    )
}

export default Columns;