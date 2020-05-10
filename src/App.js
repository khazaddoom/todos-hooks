import React  from 'react';
import ToDos from './components/ToDos';
import InputToDo from './components/InputToDo';
import FilterToDos from './components/FilterToDos';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toDosReducer from './redux/reducer'

const store = createStore(toDosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


function App() {

  return (
    <Provider store={store}>
      <div className="container_parent">
        <InputToDo />
        <hr />
        <ToDos />
        <hr />
        {/* <FilterToDos /> */}
      </div>
    </Provider>    
  );
}

export default App;
