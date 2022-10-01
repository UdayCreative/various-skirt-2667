import React from 'react'
import CategoryList from './CategoryList'
import CollectionComponent from './CollectionComponent'
import Footer from './Footer'
import ImageComponents from './ImageComponents'
import Navbar from './Navbar'
import Slider from './Slider'
import { countries } from './SliderImages'

export default function Home() {
  return (
    <>
      <Navbar/>
      <div style={{
          justifyContent:"space-evenly",
          textAlign:"center", 
          alignItems:"center",
          margin:"0px 170.2px",
          display:"flex"}} >
        <CategoryList/>
        <Slider images={countries} />
      </div>
      <div><ImageComponents/></div>
      <CollectionComponent/>
      <Footer/>
    </>
  )
}
