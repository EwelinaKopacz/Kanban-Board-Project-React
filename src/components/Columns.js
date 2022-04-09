import React,{ useContext} from 'react';
import {ColumnContext,TaskContext} from '../context';
import ColumnItem from './ColumnItem';
import Task from './Task';
import './styles.css'

const Columns = function() {
    const columns = useContext(ColumnContext)
    const items = useContext(TaskContext)
    const listOfTask = items.tasks;

    function checkTaskId(item){
        const {id}= item;
        return listOfTask.map(task => {
            if(task.idColumn === id){
                return <Task
                    task={task}
                    key={task.id}
                />
            }
            return null
        })
    }

    function renderColumns(){
        return columns.map(item =>
            <ColumnItem column={item} key={item.id}>
                {checkTaskId(item)}
            </ColumnItem>
        )
    }

    return (
        <div className='columns__section'>
            {renderColumns()}
        </div>
    )
}

export default Columns;