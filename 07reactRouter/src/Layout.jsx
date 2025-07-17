import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

 export default function Layout(){
    return(
        <>
        <Header/> 
        {/* same rahega */}
        <Outlet/>
        {/* change hogi --> This is the main content area that changes based on the current route.
For example:
If you're at /about, <About /> gets injected here.
If you're at /contact, <Contact /> shows up.
This keeps routing modular and dynamic. */}
        <Footer/>
        {/* same rahega */}


        </>
    )
}