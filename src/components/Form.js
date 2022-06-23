import React, {useState,useReducer,useContext} from 'react';
import {FormContext} from '../context';
import '../css/form.css';

const initialState = {
    taskName:'',
    user:'',
}

const reducer = (state,action) => {
    const {type, value} = action;
    if(type === 'resetInputs'){
        return value
    }
    return {...state, [type]:value}
}

const Form = function () {

    const [state, dispatch] = useReducer(reducer,initialState);
    const [isValid, setIsValid] = useState(false);
    const {taskName, user} = state;
    const item = useContext(FormContext);
    const {addNewTask} = item

    function handleChange(e) {
        const action = {
            type: e.target.name,
            value: e.target.value
        }
        dispatch(action)
    }

    function resetInputs(){
        const action = {
            type: 'resetInputs',
            value: initialState
        }
        dispatch(action)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(taskName && user) {
            setIsValid(true)
            addNewTask(state);
            resetInputs()
        }
        return null
    }

    return (
        <div className="form__section">
            <h2>Add task</h2>
            <form className='form__container'>
                {isValid ? <div className='form__confirm'>Task was added!</div>: null}
                <div className='input__box'>
                    <label htmlFor="task-id" > Task: </label>
                    <input id="task-id" type='text' className='input__task' name="taskName" value={taskName} onChange={handleChange}/>
                </div>

                <div className='input__box'>
                    <label htmlFor="person-id"> Person: </label>
                    <input id="person-id" type='text' className='input__person' name="user" value={user} onChange={handleChange} />
                </div>

                <div className='button__box'>
                    <button type='submit' className='button__submit' onClick={handleSubmit}> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default Form;