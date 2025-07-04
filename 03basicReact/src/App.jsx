import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter , setCounter] = useState(0)

  // let counter =15;

  const increaseValue =() =>{
    // console.log("clicked" , counter);
    //counter = counter +1;
    if(counter == 20){
      alert("Value can't be greater than 20")
    }
    else{
      setCounter(counter +1)
    }
  }

  const decreaseValue =() =>{
    // console.log("clicked" , counter);
    //counter = counter-1;
    if(counter == 0 ){
      alert("VAlue can't be  in negative")
    }
    else{
      setCounter(counter+1)
    }
  }
  

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase value {counter}</button>
      <br></br>
      <button onClick={decreaseValue}>Decrease value{counter}</button>
      <p> footer: {counter}</p>
    </>
  )
}

export default App
