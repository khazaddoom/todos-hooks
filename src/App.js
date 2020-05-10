import React  from 'react';
import ToDos from './components/ToDos';
import InputToDo from './components/InputToDo';
import FilterToDos from './components/FilterToDos';

import { createStore, Provider } from 'react-redux';
import { toDosReducer } from './redux/reducer';

// const store = createStore(toDosReducer)


function App() {

  return (
    <Provider>
      <div className="container_parent">
        <InputToDo />
        <hr />
        <ToDos />
        <hr />
        <FilterToDos />
      </div>
    </Provider>    
  );
}

export default App;
