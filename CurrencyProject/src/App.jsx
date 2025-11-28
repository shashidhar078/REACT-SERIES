import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <>
     <h1 className="text-3xl bg-orange-500">Currency with chai </h1>
    </>
  )
}

export default App
