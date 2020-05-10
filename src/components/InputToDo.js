import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../redux/actions'

const InputToDo = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        props.addToDoToState(inputValue)
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

const mapDispatchToProps = (dispatch) => ({
    addToDoToState: (text) => dispatch(addToDo(text))
})
export default connect(null, mapDispatchToProps)(InputToDo);