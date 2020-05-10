export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SELECT_FILTER = 'SELECT_FILTER';
export const FETCH_INPROGRESS = 'INPROGRESS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_TODOS = 'FETCH_TODOS';

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

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const selectFilter = (value) => {
    return {
        type: SELECT_FILTER,
        payload: value
    }
}

export const fetchInProgress = () => {
    return {
        type: FETCH_INPROGRESS
    }
}

export const fetchFailed = () => {
    return {
        type: FETCH_FAILED
    }
}

export const fetchSuccess = (todos) => {
    return {
        type: FETCH_SUCCESS,
        payload: [...todos]
    }
}


export function fetchToDos () {
    
    return function (dispatch) {

        dispatch(fetchInProgress())

        setTimeout(() => {
            const data = [];
            dispatch(fetchSuccess(data))
        }, 2500);
    }
}