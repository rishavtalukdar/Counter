import {useState} from "react"
function App() {
  const [value, setvalue] =useState(0)

  const increment =()=>{
    setvalue((prevValue)=>prevValue + 1)
  }

  const decrement =()=>{
    setvalue((prevValue)=>prevValue - 1)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4>Counter: {value}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
