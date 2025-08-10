import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import {login , logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
//hame actually me dekhna padhega , jaise hi app load ho rha h ki user 
//logged in hai ya nhi h --> aur dekhegee kaha se -> hum direct apne state me se dekh lege agar user logged in hai to hum dikhayege usko kuch cheeze aur agar nhi h to hum usko uss hissab se outlet de dege


//jab aap application se data fetch krege (to appwrite koi local sysytem me to rakha nhi h -> to ho skta h ki network request me thoda time lag jaye ) to uske liye jab bhi kuch aisa ho ki databasse se kuch puchna ho , network se kuch puchna ho -> to ek loading state bana lena acha hota hai uske basis me aap conditional rendering kr skte ho if and else laga ke ki loading agar true hai to loading ka icon dikhayege , true nhi h to data dikahyege

  const [loading , setloading] = useState(true)
  const dispatch = useDispatch()

  //ab jaise hi application load ho to ek useEffect lo aur useeffect se pcuho uss service se ki aap logged in ho ya nhi ho

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData)=>{  ///agar useData hai to dispatch use krte h agar userData hai hi nhi to mtlb current user hai hi nhi to q dispatch krna
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }

    })
    .finally(() => setloading(false))
  } , [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         TODO:
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>

    </div>
  ): null  //assignment how can you improve the product what you can also use instead of null
}

export default App
