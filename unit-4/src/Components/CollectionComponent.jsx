import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function CollectionComponent() {
    const data = [
        // {
        //     id : 1, width : "200px", height : "200px", 
        //     image : 'https://uidesign.gbtcdn.com/GB/image/2019/20191016_13248/vip_200b.png',
        //     price : "", name : ""
        // },
        {
            id : 2, 
            image : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16571/goods_thumb_220-v1/5cd047a2fbea.jpg',
            price : "$375.00",
            name : "Nimble Tech Store"
        },
        {
            id : 3, 
            image : 'https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16545/goods_thumb_220-v3/a75d89f4a160.jpg',
            price : "$269.99", name : "Orutur Official Store"
        },
        {
            id : 4, 
            image : 'https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg',
            price : "$169.99" , name : "Asseo Go Store"
        },
        {
            id : 5, 
            image : 'https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16495/goods_thumb_220-v1/7a45a54d7b10.jpg',
            price : "$27.38", name : "Eight Hours Store"
        },
        {
            id : 6, 
            image : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/4e5c7e4add41.jpg',
            price : "$8.90", name : "Clearance Sale"
        },
    ]
  return (
    <Box m="0 0 0 179.2px">
        <Box display="flex" alignItems={"center"}  p="0 0 15px"> 
            <Image w="22px" h="22px" src='https://cdn.iconscout.com/icon/premium/png-64-thumb/bag-1816266-1539631.png' alt="img"/>
            <Text m="0px 0px 0px 5px" fontWeight="700" fontFamily="OpenSans,Arial,Helvetica,sans-serif" fontSize="20px" color="#000">COLLECTION</Text>
        </Box>
        <Flex alignItems="start" textAlign={"center"} gap="62px" fontFamily=" OpenSans, Arial, Helvetica, sans-serif">
            {
                data.map((item)=>(
                    <Box border="1px solid #eaeaea" cursor="pointer" key={item.id}>
                        <Box w="186px" h="228px">
                            <Image src={item.image} p="15px" width="160px" height="160px" alt="name" />
                        </Box>
                        <Text p="0px 10px" mt="-20" fontSize="14px">{item.name}</Text>
                        <Text 
                            lineHeight={"50px"} fontSize="18px" bg="#f30240" color="#fff" 
                            textAlign="center" m="0"
                            transition= "transform .3s ease,-webkit-transform .3s ease" >
                            {item.price}
                        </Text>
                    </Box>
                ))
            }
        </Flex>
    </Box>
  )
}
