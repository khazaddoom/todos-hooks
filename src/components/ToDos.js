import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ToDo from './ToDo'

const ToDos =  ()  => {    

    let todos = useSelector(state => [...state.todos])
    const filter = useSelector(state => state.selectedFilter)

    switch(filter) {
        case 'TODO': todos = todos.filter(todo => !todo.isCompleted); break;
        case 'DONE': todos = todos.filter(todo => todo.isCompleted); break;
        default: break;
    }

    if(todos.length > 0)
        return (
            <div className="list_container">
                { todos.map(todo => <ToDo key={todo.id} todo={todo}/>) }
            </div>
            
        );
    else
        return(<div className="list_container"><h1>Add some ToDos please... </h1></div>)
    
}

export default ToDos;


