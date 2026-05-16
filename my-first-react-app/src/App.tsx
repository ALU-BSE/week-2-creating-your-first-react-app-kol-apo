import { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;