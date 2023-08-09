import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserLogin from './app/Component/auth/UserLogin'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './app/Component/Home'
import UserSignUp from './app/Component/auth/UserSignUp'
import ReviewPage from './app/Component/ReviewPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<UserLogin/>
  },
  {
    path:'/signup',
    element:<UserSignUp/>
  },
  {
    path:'/reviewpage',
    element:<ReviewPage/>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App