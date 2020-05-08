import { ADD_TODO, SELECT_FILTER } from "./actions";

const initialState = {
    todos: [],
    selectedFilter: 'ALL'
}

const reducer = (state = initialState, action) => {
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

export default reducer;