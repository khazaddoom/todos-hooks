import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/actions'

const InputToDo = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(addToDo(inputValue))
        setInputValue('')
    }

    return (
        <React.Fragment>
           <h2>ToDo input</h2> 
           <input placeholder="What to do..." value={inputValue} onChange={handleChange}/>
           <button onClick={handleSubmit}>Add ToDo</button>
        </React.Fragment>        
    );
}
export default InputToDo;