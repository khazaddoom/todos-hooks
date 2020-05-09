import ToDo from './ToDo'

import React from 'react'

export default function ToDos() {
    const [todos, setToDos] = React.useState([
        {
            id: 1, 
            text: 'Explore Guice',
            isCompleted: false
        },
        {
            id: 2,
            text: 'Explore React Hooks',
            isCompleted: true
        }])

    return (
        todos.map(todo => <ToDo key={todo.id} todo={todo}/>)
    );
}
