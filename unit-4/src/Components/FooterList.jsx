import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function FooterList() {
    const info = [
        {
            title : "Company Information",
            text1 : "About Us",
            text2 : "Top Searches",
            text3 : "Privacy Policy",
            text4 : "Terms and Conditions",
            text5 : "Interllectual Property",
            text6 : "Testimonials",
            text7 : "Contact Us",
            text8 : "Report Security Issue",
            text9 : "Sell on Gearbest",
            text10 : "Cookies Policy",
            text11 : "Top Brand",
            text12 : "Gearbest Official Blog"
        }
    ]
    const service = [
        {
            title : "Customer Service",
            text1 : "Shiping Information",
            text2 : "My Favorites",
            text3 : "FAQ For Newsletter Subscrition",
            text4 : "My Points",
            text5 : "Warranty and Return",
            text6 : "Payment Methods",
            text7 : "Deposite Expansion",
            text8 : "FAQ & Support",
            text9 : "Sitemap",
            text10 : "Gearbest Wallet Instruction",
            text11 : "FAQs about COVID-19",
        }
    ]
    const business = [
        {
            title : "Other Business",
            text1 : "Parnership Program",
            text2 : "Associate Program"
        }
    ]
    const app = [
        {
            title : "Download App!",
            text : "Save $3 with App & New User Only",
            imgBarcode : "https://w7.pngwing.com/pngs/506/620/png-transparent-qr-code-barcode-scanners-scanner-scan-miscellaneous-angle-text.png",
            imgStore : "https://245.tech/wp-content/uploads/2021/01/Google-Play-vs-Apple-Store-2.png"
        }
    ]
  return (
    <>             
    <Flex w="100%" h="auto" color="#666" fontSize="OpenSans,Arial,Helvetica,sans-serif"
        p="50px 30px" m="0px 150px" justifyContent="space-between" lineHeight="2">
        {
            info.map((item)=>(
                <Box key={item.id}>
                    <Heading fontSize="14px" m="0" color="#000" p="0 0 10px">{item.title}</Heading>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text1}</Text>
                    </Link> 
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text2}</Text>
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text3}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text4}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text5}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text6}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text7}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text8}</Text>
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#"> 
                        <Text fontSize="12px" m="0" color="#000">{item.text9}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text10}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text11}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text12}</Text> 
                    </Link>
                </Box>
            ))
        }
        {
            service.map((item)=>(
                <Box key={item.id}>
                    <Heading fontSize="14px" m="0" color="#000" p="0 0 10px">{item.title}</Heading>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text1}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text2}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text3}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text4}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text5}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text6}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text7}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text8}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text9}</Text> 
                    </Link>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text10}</Text>
                    </Link> 
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text11}</Text>
                    </Link> 
                </Box>
            ))
        }
        {
            business.map((item)=>(
                <Box key={item.id}>
                    <Heading fontSize="14px" m="0" color="#000" p="0 0 10px">{item.title}</Heading>
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text1}</Text>
                    </Link> 
                    <Link textDecoration={"none"} _hover={{textDecoration:"underline"}} href="#">
                        <Text fontSize="12px" m="0" color="#000">{item.text2}</Text>
                    </Link>
                </Box>
            ))
        }
        {
            app.map((item)=>(
                <Box key={item.id}>
                    <Heading fontSize="14px" m="0" color="#000" p="0 0 10px">{item.title}</Heading>
                    <Text fontSize="12px" m="0" color="#000">{item.text}</Text> 
                    <Box display="flex" columnGap={10}>
                        <Image w="100px" h="100px" src={item.imgBarcode} alt="item.title" /> 
                        <Image w="100px" h="100px" src={item.imgStore} alt="item.title" />
                    </Box>
                </Box>
            ))
        }
    </Flex>
    </>
  )
}
