import React, { useState } from 'react';
import { connect } from 'react-redux'

const InputToDo = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <React.Fragment>
           <h2>ToDo input</h2> 
           <input placeholder="What to do..." value={inputValue} onChange={handleChange}/>
           <button>Add ToDo</button>
        </React.Fragment>        
    );
}

export default InputToDo