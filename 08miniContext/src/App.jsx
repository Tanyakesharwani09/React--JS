
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and Tanya loves chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
