import { ADD_TODO, TOGGLE_TODO } from "./actions";

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
            let todoToUpdate = state.todos.find(todo => todo.id === action.payload)
            todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
            return { ...state };

        case 'SELECT_FILTER':
            return {
                ...state,
                selectedFilter: action.payload
            }

        default: return { ...state };
    }
}

export default toDosReducer;