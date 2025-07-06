import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"tanya",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-white p-10 rounded-xl'>hello miss</h1>
     {/* <Cards channel="chaiaurtum" someObj={myObj}/> */}
     <Cards username="tanya ji"/>
     <Cards/>
 
    </>
  )
}

export default App
