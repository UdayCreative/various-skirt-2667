import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Favorites from '../Components/Favorites'
import Home from '../Components/Home'
import SignIn from '../Components/SignIn'
import SupportCenter from '../Components/SupportCenter'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/supportCenter' element={<SupportCenter/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  )
}
