import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Called");
    return () => {
      console.log('Cleanup');
    }
  })

  return (
    <div>
      <h1>Hello world!!!</h1>
      <h3>{count}</h3>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
