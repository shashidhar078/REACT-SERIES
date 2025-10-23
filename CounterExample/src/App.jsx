import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  //it will increment that value only once due to react batch re-rendering
  // const addValue=()=>{
  //   setCount(count+1);
  //   setCount(count+1);
  //   setCount(count+1);
  //   setCount(count+1);
  //   setCount(count+1);
  // }
  //This is how we implement proper incrementation if you need immediate change
  //By taking prev values
  const addValue=()=>{
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
  }
  return (
    <>
      <h1>Diffing algorithm changes for incrementing and showing changes</h1>
      <button onClick={addValue}>Increment</button>
      <br/>
      <br/>
      {/* //proper implementation of set method in using onClick */}
      <button onClick={()=>{setCount(count-1)}}>decrement</button>
      <h2>Result : {count}</h2>
    </>
  )
}

export default App
