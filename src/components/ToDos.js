import ToDo from './ToDo'

import React from 'react'

export default function ToDos() {
    const [todos, setToDos] = React.useState(['Explore Guice', 'Explore React Hooks'])

    return (
        todos.map(todo => <ToDo todo={todo}/>)
    );
}
