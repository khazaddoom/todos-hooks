import React from 'react'
import { connect } from 'react-redux';
import ToDo from './ToDo'

const ToDos =  ({todos})  => {    
    return (
        todos.map(todo => <ToDo key={todo.id} todo={todo}/>)
    );
}

const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}

export default connect(mapStateToProps)(ToDos);


