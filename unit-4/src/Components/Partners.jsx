import { Box, Grid, Image } from '@chakra-ui/react'
import React from 'react'

export default function Partners() {
    const arr = [
        {
            id : 1,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png",
            w : "64.28px", h :'27px'
        },
        {
            id : 2,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png",
            w : "64.28px", h :'27px'
        },
        {
            id : 3,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png",
            w : "176.89px", h :'27px'
        },
        {
            id : 4,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png",
            w : "40px", h :'27px'
        },
        {
            id : 5,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png",
            w : "42px", h :'27px'
        },
        {
            id : 6,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png",
            w : "42px", h :'27px'
        },
        {
            id : 7,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png",
            w : "41px", h :'27px'
        },
        {
            id : 8,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png",
            w : "42px", h :'27px'
        },
        {
            id : 9,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png",
            w : "42px", h :'27px'
        },
        {
            id : 10,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png",
            w : "48px", h :'27px'
        },
        {
            id : 11,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png",
            w : "31px", h :'27px'
        },
        {
            id : 12,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png",
            w : "50px", h :'27px'
        },
        {
            id : 13,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png",
            w : "46px", h :'27px'
        },
        {
            id : 14,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png",
            w : "102px", h :'27px'
        },
        {
            id : 15,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png",
            w : "44px", h :'27px'
        },
        {
            id : 16,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png",
            w : "44px", h :'27px'
        },
        {
            id : 17,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png",
            w : "50px", h :'27px'
        },
        {
            id : 18,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png",
            w : "50px", h :'27px'
        },
        {
            id : 19,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png",
            w : "44px", h :'27px'
        },
        {
            id : 20,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png",
            w : "60px", h :'27px'
        },
        {
            id : 21,
            image : "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png",
            w : "60px", h :'27px'
        },
        {
            id : 22,
            image : "https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png",
            w : "27px", h :'27px'
        },
        {
            id : 23,
            image : "https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png",
            w : "27px", h :'27px'
        },
    ]
  return (
    <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(14, 1fr)'  w="1175px" h="74px" m="0px 177.7px" textAlign="justify" alignItems="center">
        {
            arr.map((item)=>(
                <Box key={item.id} justifyContent="center" >
                    <Image src={item.image} 
                           alt={item.name}
                           w={item.w}
                           h={item.h}
                           m="0px 10px 10px" 
                    />
                </Box>
            ))
        }
    </Grid>
  )
}
