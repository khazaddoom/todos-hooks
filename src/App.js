import React  from 'react';
import ToDos from './components/ToDos';
import InputToDo from './components/InputToDo';
import FilterToDos from './components/FilterToDos';

function App() {


  return (
    <div>
      <InputToDo />
      <hr />
      <ToDos />
      <hr />
      <FilterToDos />
    </div>
  );
}

export default App;
