import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Header from './Components/Header'
import Signup from './pages/Signup'
import PrivateRoute from './Components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route element={<PrivateRoute/>}>
         <Route path='/profile' element={<Profile/>} />   
         </Route>
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
       </Routes>
    </BrowserRouter>
  )
}

