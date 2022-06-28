import React,{useState,useEffect} from 'react';
import '../css/form.css';

const Confirmation = () => {
    const [show, setShow] = useState(null);
    console.log(show);

    useEffect(()=>{
        setShow(true)
    },[])

    useEffect(()=>{
        const intervalID = setTimeout(()=>{
            setShow(false)
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
        return null;
    }


    return (
        showMessage()
    )
}

export default Confirmation;