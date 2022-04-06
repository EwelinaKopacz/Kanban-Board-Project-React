import React, {useState,useEffect} from 'react';
import './styles.css'

const Form = function(){

    return(
        <section className='form__section'>
            <h2>Add task</h2>
            <form className='form__container'>
                <div className='input__box'>
                    <label> Task: </label>
                    <input type='text' className='input__task' />
                </div>

                <div className='input__box'>
                    <label> Person: </label>
                    <input type='text' className='input__person' />
                </div>

                <div className='button__box'>
                    <button type='button' className='button__submit'> Submit </button>
                </div>
            </form>
        </section>
    )
}

export default Form;