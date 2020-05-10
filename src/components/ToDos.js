import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from './ToDo'

const ToDos =  ()  => {    

    const todos = useSelector(state => [...state.todos])

    if(todos.length > 0)
        return (
            todos.map(todo => <ToDo key={todo.id} todo={todo}/>)
        );
    else
        return(<h1>Add some ToDos please... </h1>)
    
}

export default ToDos;


