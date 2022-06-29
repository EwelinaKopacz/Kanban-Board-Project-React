import React,{useEffect} from 'react';
import '../css/form.css';

const Confirmation = (props) => {
    const {show,changeIsValid} = props;

    useEffect(()=>{
        const intervalID = setTimeout(()=>{
            changeIsValid()
        },5000)

        return ()=>{
            clearTimeout(intervalID)
        }
    },[]);

    const showMessage =()=> {
        if(show === true){
            return (
                <div className='form__confirm'>Task was added!</div>
            )
        }
        return false;
    }

    return (
        showMessage()
    )
}

export default Confirmation;
