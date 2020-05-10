import { ADD_TODO, SELECT_FILTER, FETCH_TODOS } from "./actions";

const initialState = {
    todos: [],
    selectedFilter: 'ALL'
}

const toDosReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        
        case SELECT_FILTER: 
            return {
                ...state,
                selectedFilter: action.payload
            }

        default: return { ...state };
    }
}

export default toDosReducer;