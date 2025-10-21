import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './Components/Card.jsx'

function App() {
  
  const Objs={
    mykey:"Bankai",
    yourchild:"Kageyeshi"
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-sky-400">Tailwind test</h1>
      <br/>
      <Card username="Shashidhar Nagunuri" myObj={Objs}/>
      <br/>
      <Card username="Senbozakura"/>
    </>
  )
}

export default App
