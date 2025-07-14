import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // let counter = 15

  const addValue = ()=>{
    counter = counter + 1
    setCounter(counter)
    if (counter == 10){
      setCounter(10)
      console.log("Counter has reached it's upper limit");
    }
  }
  const removeValue = ()=>{
    setCounter(counter-1)
    if (counter == 0){
      console.log("The counter has reached it's lower limit");
      setCounter(0)
    }
  }
    
  
  return (
    <>
     <h1>React day 2</h1>
     <h2>Counter value : {counter}</h2>

     <button 
     onClick={addValue}
     > Add value</button>

     <br />

     <button
     onClick={removeValue}
     > Remove value</button>

    </>
  )
}

export default App
