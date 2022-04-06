import React,{ useContext} from 'react';
import {ColumnContext,TaskContext} from '../context';
import ColumnItem from './ColumnItem';
import Task from './Task';
import './styles.css'

const Columns = function() {
    const columns = useContext(ColumnContext)
    const items = useContext(TaskContext)

    const listOfTask = items.items;
    console.log(listOfTask);
    const moveToNextFn = items.moveToNext;

    function checkTaskId(id){
        return listOfTask.map(task => {
            if(task.idColumn === id){
                return <Task task={task} key={task.id} moveToNext={moveToNextFn}/>
            }
            return null
        })
    }

    function renderColumns(){
        return columns.map(item =>
            <ColumnItem column={item} key={item.id}>
                {checkTaskId(item.id)}
            </ColumnItem>
        )
    }

    return (
        <div className='board__columns'>
            {renderColumns()}
        </div>
    )
}

export default Columns;