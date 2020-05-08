export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SELECT_FILTER = 'SELECT_FILTER';

export const addToDo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const deleteToDo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}

export const toggleToDo = (index) => {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}

export const selectFilter = (value) => {
    return {
        type: SELECT_FILTER,
        payload: value
    }
}