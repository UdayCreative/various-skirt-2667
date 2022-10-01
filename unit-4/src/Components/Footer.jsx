import { Box, Button, Flex, Grid, GridItem, Image, Input, Link, Text } from '@chakra-ui/react'

import React from 'react'
import FooterList from './FooterList'
import Partners from './Partners'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <>
        <Flex fontSize="14px" p="50px 50px" ml="30px"
            color= '#666' bg='#fafafa' lineHeight="1.2"
            fontFamily="OpenSans,Arial,Helvetica,sans-serif"> 
            <Box>
                <Text>Popular Searchs:</Text>
            </Box>
            <Grid m="14px 0px 0px 30px" rowGap="5" textAlign="center" alignItems="center" templateRows='repeat(2, 1fr)' templateColumns='repeat(7, 1fr)' >
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>realme buds q</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>xiaomi redmi 7 case</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>lenevo Ip1s tws</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>5g phone</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>projector 4k</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>mens's sports shoes</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>creality ender 3</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>xiaomi mi band 5</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>led light strip</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>360s7 robot vaccum cleaner</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>amazfit gts 2</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>roborock s5 max</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>xiaomi vaccum</GridItem></Link>
                <Link href='#' color="#666" textDecoration={"none"} _hover={{textDecoration:"underline"}}><GridItem>poco x3 nfc</GridItem></Link>
            </Grid>
        </Flex>
        <Flex m="50px 177.5px 0px" p="24px 0px 30px" bg="#fff" color="#000">

            <Box p="0px 70px" textAlign="center" verticalAlign="middle" color="#666"
                 textDecoration="none" fontSize="inherit" outline="none"
                w="340px" h="102px" cursor="pointer">
                 <Link textDecoration={"none"} href="#">
                    <Image
                        src='https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png'
                        alt="gearbest"
                        w="200px" h="43.48px" m="10px 0px"
                    />
                    <Text fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#000" fontSize="14px" m="0px" fontWeight="700">
                     AFFORDABLE<br /> QUALITY FUN SHOPPING</Text>
                </Link>
            </Box>
            <Box textAlign="center" verticalAlign="top" lineHeight="1" m="0px 18px"
                 textDecoration="none" fontSize="inherit" outline="none"
                w="158px" color="#000" cursor="default">
                <Image
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA/AD4DASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAcBAgMGCAX/xAA6EAABAwQABAIECgsAAAAAAAABAgMEAAUGEQcSITEUgRNBU2EVFjNVcXKSk6GxIiMyNjdRUmJzkbL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuNKVqtxDY24tKQf6jqg2pXLxMf27X2xTxMf27X2xQdaVy8TH9u19sV0BCgCkgg9iKDNKUoFQ3O3JmdcSmsdtk1yPGht6ddbUdA65iTo+XlVdym7N2PH51ydVyhhokfW7D8TUt4HQW3I10yGfIZRLnvKCStYB5d7J/wB7oPJXjBZsHJrbZI99lPOS+ZTi9qAaSNde/XvW0fA50jLLjYUX2SFRI6HQ6VK0sqAOtb99XYWyM/IE1oRnn20lAdQQVJB7jflWGrUhMxyUiKhMlxISt7lHMoDsCaCE4ngc7IrdMdF9lMSori2yyoqOynt6/XVA4D35+XZ5dluC1mZb3D0cO1cpPXf0HpXt48KFb3nPRuw2FrXzuAKCSpX8z76k82Q1hfGZuXHdQYF2P6zkUCCV996/vO6C6UrAIUAQdg9QazQedzvF05dYja1y3IqS4FlSNfpaB6H3dfwqC49g7twzadjKLtJZaiAkOIURvpvtX05UWwf+Nt8+hX5UHNfD3OMSk+KxS9LmIP7bTqup8j38q2lXvi3NQYjVoEVaunp0NEa8zsVa6UERh8Hr1NjLmX7IZCJi9qUhtZOvOvJYPgZyy+3KHIukhv4OcIS5vmJ0rXr7V9MPfIufVP5VHOCP73ZT/lX/AN0FgiM+Gissc5X6JCUcyu50NbrtSlAqLZHjeX45nUzIMYioltyx7iU7GiCKtNKCL/GTiv8AMyPuhT4ycV/mZH3Qq0UoIsrI+K6klJsyNEa+SFfu8HsTu9kcud0vraWZM5ew0CDoE7JOu3WqZSgUpSg//9k="
                    alt="home"
                    w="50px" h="50px"
                />
                <Text _hover={{color:" #ffda00"}} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#000" fontSize="14px" m="0px" fontWeight="700">
                    High Quality Selection 
                </Text>
                <Text fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#666" fontSize="12px" m="0px">
                    Total product quality <br/> control for peace of mind
                </Text>
            </Box>
            <Box textAlign="center" verticalAlign="top" lineHeight="1" m="0px 18px"
                 textDecoration="none" fontSize="inherit" outline="none"
                w="158px" color="#000" cursor="default">
                <Image 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAqAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcCAwYFCP/EADUQAAECBQIDAwkJAAAAAAAAAAECAwAEBQYRByESMVETYXEUFSM2QYGRsdE0Q3N1gpKhw/H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AeMEEEAQvbs1Hfp9bVQrboz1XqLaeJ7gVhDY9wOT8I1dy3JTLZpqp+rTAbaGyQBlS1dAOsLnSRM5M1Gu3Q8wplupvjsEL58Iyc+G4+EBq7Dv1m6XpmQm5F2m1aV3elHTnbqDgfKNlCKum6Kfa2snnaabfU15GEPJYSCokjbmQPZ1jZULWO1azUG5JPlso44cIVNNJSknplKjAMOCAEEZHKCAIpnSRJvkHBDasH3RdFE99imPwlfKA8ztPvTdl26Zt1b5NeWD2iirI9Htv4n4w6rpqy7ftqaqLEuHVS7YKW+Q/yEhI+pVu/n6/64eVzNT79vTbVJQ0ucU1htDyQpKu4g7bwGd02vCv11xxFTYlXZUo7RuZYxhBP3ZHPIES1wEo7YSn5hhBmUTKEsLCRxJUeePdGV0so1UYut+dRJOyEglktTDaiAlTwxnCQccwY0GqivONZtS3m91TE2H3E9Ujr/MAy7dS+mg08TRy8JdHGc+3EdGIoSEIShIwlIwB3RKAIg+32rLjeccaSnPiInBAKed0ieRaktSqdVQJuVnlTbbzjeBvjbHdwiKxZGo4Hre1+w/SG5BAKMWRqOOV3Mj9B+kdq0NO5mQrouC5qsqq1NCeFkkYS14QwoIAggggP//Z"
                    alt="thumb"
                    w="50px" h="50px"
                />
                <Text _hover={{color:" #ffda00"}} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#000" fontSize="14px" m="0px" fontWeight="700">
                    Addorable Prices
                </Text>
                <Text fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#666" fontSize="12px" m="0px">
                    Factory direct prices for <br/> maximum savings
                </Text>
            </Box>
            <Box textAlign="center" verticalAlign="top" lineHeight="1" m="0px 18px"
                 textDecoration="none" fontSize="inherit" outline="none"
                w="158px" color="#000" cursor="default">
                <Image 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAsAEADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAcFBgQI/8QAMxAAAAYCAAQCBgsBAAAAAAAAAAECAwQFBhEHEiExE1EUImFxkdIVFzM0QUJWZHJ1lLH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuIAAAAhuNUBcQJt5Z3t9ax3WLBcdtuI6SUkgu3QyPzG79UtN+pch/wBCfkAVUBLEcIqdaiSnJcg2f7lPyjJw/K4OCZPkGO311IVXRXE+iLkkpxZmZbV1SXtIBaQGdSXlXfRfSqiazKZ3ozbVvR+Rl3IaIAADlLXiDQ1ORN0MxySU5xSEpJDClJ2rt1AcZwd+7ZH/AG7v/CFCEWxrLkYj9P1iobz9w/arOPF5TIlc2iLZjoV5zkON2MdvOahuJCldW5DB83Iet6Mi7gKZH+3b/kQmNY3GPiRnz8mvYnGw0lxtp1slbMk70W/PWhrt8VsQbWlZz3D5T3omVdRxkG0ydmzus8qaPxaeevmWl1Rc/ho/MWvcYBwov3ZnFFSmK1qrZmRlE9EZ5iRtJbJWj7H0H0EIji99Dyni/V2VWlZtIrDS8Ro14avW2R/EuotwAOQy6ny+fZNvY3eQ4EZLREpt2MS1GvZ9dmR/hr4DrwAS27wPJ7GojzJdpDl5FAlFIivoZJtKk9PUUei31Lex5zx7Mc2uqxeXxYsGsrnSdNlB8xvrL2eQrQAMO1xOlsa2VCOtiNFIaU2bjbCSUnZa2R66GJq1S8R6+iXh8SPCcgGlTKLDm0ZNK3vp7jMWYAGDheMxcWoIlcwltTrTenXyQRKcUZmZmZ9+5jeAAH//2Q=="
                    alt="bus"
                    w="50px" h="50px"
                />
                <Text _hover={{color:" #ffda00"}} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#000" fontSize="14px" m="0px" fontWeight="700">
                    Express Shipping
                </Text>
                <Text fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#666" fontSize="12px" m="0px">
                    Fast, reliable delivery from <br/> global warehouse
                </Text>
            </Box>
            <Box textAlign="center" verticalAlign="top" lineHeight="1" m="0px 18px"
                 textDecoration="none" fontSize="inherit" outline="none"
                w="158px" color="#000" cursor="default">
                <Image 
                    src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA8AEADASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAcDBAUGCAIB/8QAMRAAAQMEAAQDBgYDAAAAAAAAAQIDBAAFBhEHEiExIkFRCBMUM2FxFSMlQoGRMsHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxpSlApSlApSlApSlApSrefNjW+K5KmvIZYbG1LWdAUFxWBzfImcXxyXc3SOdCNNJP7lnsP7rA3Di5iMPmCZyn1j9raCajrI8kPFPJrbbLWy+3bGFe8eLg1sjuelBc8PeIGQsZREj5U8swrr8guJACSTpOtDtvQqeKiDifi6Z2MNuQG+WRbk8zXJ0PKO4FfcW41WgWyLGviJDU1tAQ85y+FRHmKCXqVrNjzzG77IRHt1ybW8v8AxQrwkn061s1ArXs8xw5Tjcm2Ie904sbQo9uYdt/SthpQc88PG7LbLw5jGXWaNGuiFkMS3EDx/Qn6+RqX2oTEP8tlhtvl6eBIFaj7QNrtysWbuzrQTcGZCG2X0dFdQTo+o6VipkDMpWKWSZYpbrsplpK3WyAS4NdN+vSgkcgEaI2D5Vib/DxyHanrnkMaL8K0Oy0Daz6AeZqO5Fx4kZEWoDFsNtCVAPSEI1r77J0K88Sorr2UYvbrxJdehOeFaN6BVsAn+d0Hjh7i6stzAZHFt6LTZornMy22nl59dgP9mugh0GqoQYce3xGosNlDLDSQlCEDQAqvQKUpQRH7RUhSLBa46kqLC5fO4QOg5Qf+msXFzbJ8kiR7Tg1qVHjstIaVLdHoAN7qZbnbIN2jfDXOGxLYJCvdvoC07HY6NVYkWPDYQxEZbZZQNJQ2kJAH2oIaOM8R8V/U7fdPxRa/G/GO/wChs9a1LOMzOSSrL8VbHIV3gSNONkdFAkb1/IFdMVjplitM6W1Mm22I/JZ+W640lSkfYntQXUFanYUdxY0pTSVHfqRVelKD/9k='  
                    alt="star"
                    w="50px" h="50px"
                />
                <Text _hover={{color:" #ffda00"}} w="154px" fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#000" fontSize="14px" m="0px" fontWeight="700">
                    Worry-free After-sales
                </Text>
                <Text fontFamily="OpenSans,Arial,Helvetica,sans-serif" color="#666" fontSize="12px" m="0px">
                    Instant access to <br/> professional support
                </Text>
            </Box>
        </Flex>
        <Flex m="50px 177.7px 0px" justifyContent="space-between">
            <Box display="flex" float="left" w="615px">
                <Text fontWeight="700" color="#666" fontSize="14px"
                       alignItems="center" m="15px" verticalAlign="middle"
                      fontFamily={"OpenSans,Arial,Helvetica,sans-serif"}>
                    Newsletter
                </Text>
                <Input color="#ffff" w="300px" h="40px" p="3px 6px"
                       placeholder='Enter Email to get 50 points' />
                <Button w="121px" h="50px" m="0 0 0 -1px" color="#fff" p="1px 6px" bg="#000"
                        fontFamily={"OpenSans,Arial,Helvetica,sans-serif"}
                        fontSize="16px">
                    Suscribe
                </Button>
            </Box>
            <SocialMedia />
        </Flex>
        <Flex>
            <FooterList/>
        </Flex>
        <Box>
            <Partners/>
        </Box>
        <Box mt="50px" lineHeight="40px" bg="#000" color="#e0e0e0" textAlign="center"
             fontSize="12px" fontFamily={"OpenSans,Arial,Helvetica,sans-serif"}  >
            Copyright © 2014-2022 Gearbest.com. All Rights Reserved.
        </Box>
    </>
  )
}
