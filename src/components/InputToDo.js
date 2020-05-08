import React from 'react';

const InputToDo =  () => {
    return (
        <React.Fragment>
           <h2>ToDo input</h2> 
           <input placeholder="What to do..."/>
           <button>Add ToDo</button>
        </React.Fragment>        
    );
}

export default InputToDo;