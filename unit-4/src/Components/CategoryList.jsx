import { Link } from '@chakra-ui/react'
import React from 'react'

export default function CategoryList() {
    const category = [
        {
            text1 : "Consumer Electronics",
            id : 1
        },
        {
            text2 : "Industrial & Accessories",
            id : 2
        },
        {
            text3 : "Cell Phones & Accessories",
            id : 3
        },
        {
            text4 : "Appliances",
            id : 4
        },
        {
            text5 : "Outdoors, Fitness & Sports",
            id : 5
        },
        {
            text6 : "Computers, Tablets & Office",
            id : 6
        },
        {
            text7 : "Health & Personal Care",
            id : 7
        },
        {
            text8 : "Home Improvement & Tools",
            id : 8
        },
        {
            text9 : "Drones, Toys & Hobbies",
            id : 9
        },
        {
            text10 : "Home & Garden",
            id : 10
        },
        {
            text11 : "Motor & Car Electronics",
            id : 11
        },
        {
            text12 : "Men's Fashion",
            id : 12
        },
        {
            text13 : "Watches & Jewelry",
            id : 13
        },
        {
            text14 : "Gearbest Promotion",
            id : 14
        },
    ]

  return (
    <div>
        {
            category.map((item)=>(
                <div key={item.id}
                    style={{padding:"0px 10px", marginLeft:"30px",marginTop:"-2px", textAlign:"start", color:"#000", 
                            lineHeight:"2.2",fontSize:"14px", 
                            fontFamily:"OpenSans,Arial,Helvetica,sans-serif"}}>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text1}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text2}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text3}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text4}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text5}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text6}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text7}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text8}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text9}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text10}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text11}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text12}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text13}</Link>
                    <Link href='#' color="#666" textDecoration={"none"} _hover={{color:"black", fontWeight:"700"}}>{item.text14}</Link>
                </div>
            ))
        }
    </div>
  )
}
