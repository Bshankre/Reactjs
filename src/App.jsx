import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Container from './Container/Container'
import About from './Container/About'
import Register from './Container/Register'
import Contactus from './Container/Contactus'
import './App.css'
import Home from './Container/Home'
import Fetchdetails from './Container/Fetchdetails'
import Editcourse from './Container/Editcourse'
import Deletecourse from './Container/Deletecourse'
import './index.css'

// npm i react-router-dom
const App = () => {
  let router=createBrowserRouter(
   [
    {
      path:'/',
      element:<Container></Container>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/studentlist',
          element:<Fetchdetails></Fetchdetails>
        },
        {
          path:'/edit/:id',
          element:<Editcourse></Editcourse>
        },
        {
          path:'/delete/:id',
          element:<Deletecourse></Deletecourse>
        },
        {
          path:'/contactus',
          element:<Contactus></Contactus>
        }
      ]
    }
   ]
    
  )
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
