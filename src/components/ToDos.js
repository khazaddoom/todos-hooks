import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from './ToDo'

const ToDos =  ()  => {    

    const todos = useSelector(state => [...state.todos])

    return (
        todos.map(todo => <ToDo key={todo.id} todo={todo}/>)
    );
}

export default ToDos;


