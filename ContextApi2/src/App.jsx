import React,{ useState,useEffect } from 'react'
import './App.css'
import {ThemeProvider} from "./Context/Theme.js"
import ThemeBtn from "./components/ThemeBtn.jsx"
import Card from "./components/Card.jsx"

function App() {
  const [ThemeMode,setTheme]=useState("light")

   function lightTheme(){
     setTheme("light")
  }

  function darkTheme(){
    setTheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(ThemeMode);
  }, [ThemeMode]);
  


  return (
    <ThemeProvider value={{ThemeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

      </ThemeProvider>
  )
}

export default App
