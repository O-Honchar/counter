import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <span>{value}</span>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default App;
