import React from 'react';

const Task = function(props){
   const {taskName,user} = props.task
    return(
        <p>{taskName} {user}</p>
    )
}

export default Task;