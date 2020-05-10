import { ADD_TODO, SELECT_FILTER, FETCH_TODOS, TOGGLE_TODO } from "./actions";

const initialState = {
    todos: [],
    selectedFilter: 'ALL'
}

const toDosReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case ADD_TODO: 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                    id: Math.round(Math.random() * 1000000),
                    text: action.payload,
                    isCompleted: false
                }]
            }
        
        case TOGGLE_TODO: 
            state.todos.map(todo => {
                if(todo.id === action.payload)
                    todo.status = 
            })
            return { ...state };

        default: return { ...state };
    }
}

export default toDosReducer;