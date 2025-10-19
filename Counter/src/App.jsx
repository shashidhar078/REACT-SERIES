import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  const changeValue=()=>{
    console.log("value of counter : ",counter);
    counter=counter+1;
    setCount(counter)
  }
  const removeValue=()=>{
    console.log("value of counter : ",counter);
    counter=counter-1;
    setCount(counter)
  }
  return (
    <>
      <h1>Welcome to Soul society</h1>
      <h2>Value of count : {counter}</h2>
      <button onClick={changeValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
