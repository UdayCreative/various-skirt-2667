import React from 'react'
import { Box, Button, Flex, Image, Input, Link, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

export default function Navbar() {
  return (
    <>
      <Flex w="100%" textAlign="center" gap={"262px"} alignItems="center" justifyContent="center">
        <Box w="20%">
          <Link href='/'>
            <Image width={"200px"} margin={"25px 0px"}
              src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png'
              alt='gearbest'
            />
          </Link>
        </Box>

        <Box w="50%" p="10">
            <Box justifyContent={"space-between"}>
              <Popover placement='bottom-start'>
                <PopoverTrigger>
                  <Button cursor="pointer" fontize={"13px"} p="18px" fontFamily="OpenSans,Arial" color={"grey"} border={"none"} bg={"white"}>
                    <Image w={'20px'} 
                      src='https://cdn5.vectorstock.com/i/1000x1000/48/89/mobile-phone-icon-in-modern-design-style-for-web-vector-26504889.jpg' 
                      alt='mobile'/>
                    Save $3 with App
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"300px"} bg={"white"} p="10px" borderRadius="5px" border={"1px solid"}>
                  <Flex justifyContent={"space-between"}>
                  <PopoverHeader fontWeight='bold'>Download Apps!</PopoverHeader>
                  <PopoverArrow />
                  {/* <PopoverCloseButton border={"none"} w={"0px"} /> */}
                  </Flex>
                  <PopoverBody textAlign={"start"}>
                    <Text>Save $3 with App & New User Only</Text>
                    <Box display="flex" justifyContent="space-evenly">
                        <Image 
                          w="100px" 
                          src='https://w7.pngwing.com/pngs/506/620/png-transparent-qr-code-barcode-scanners-scanner-scan-miscellaneous-angle-text.png' 
                          alt="scan" /> 
                        <Image 
                          cursor={"pointer"}
                          w="100px" 
                          src='https://245.tech/wp-content/uploads/2021/01/Google-Play-vs-Apple-Store-2.png' 
                          alt="store" />
                    </Box>
                      
                    
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <Link href='/supportCenter' textDecoration={"underline"} fontSize={"13px"} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color={"grey"}>Support Center</Link>

              <Popover placement='bottom-start'>
                <PopoverTrigger>
                  <Button textDecoration={"underline"} cursor="pointer" fontize={"13px"} p="18px" fontFamily="OpenSans,Arial,Helvetica,sans-serif" color={"grey"} border={"none"} bg={"white"}>
                    Ship to <Image w={'20px'} 
                      src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041' 
                      alt='usa'/> / USD
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"350px"} bg="white" p="10px" borderRadius="5px" border={"1px solid"}>
                  <Flex justifyContent={"space-between"}>
                  <PopoverHeader fontWeight='bold'>Select Regional Settings</PopoverHeader>
                  <PopoverArrow />
                  {/* <PopoverCloseButton border={"none"} w={"0px"} /> */}
                  </Flex>
                  <PopoverBody textAlign={"start"}>
                    <Text>Ship to</Text>
                    <Box>
                      <select style={{width:"auto"}}>
                        <option value="United States">United States</option>
                        <option value="Brazil">Brazil</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Spain">Spain</option>
                        <option value="United States">United States</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Austalia">Austalia</option>
                        <option value="India">India</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Italy">Italy</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Malta">Malta</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Netherland">Netherland</option>
                        <option value="Philippines">Philippines</option>
                        <option value="South Africa">South Africa</option>
                      </select>
                    </Box>
                    <Text>
                      Currency
                    </Text>
                    <Box>
                      <select>
                        <option value="USD">$ USD</option>
                      </select>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <select value={""} style={{fontSize:"13px", color:"grey", border:"0px"}}>
                <option value="">Language </option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="Korean">Korean</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Irish">Irish</option>
                <option value="Dutch">Dutch</option>
                <option value="Greek">Greek</option>
                <option value="Latin">Latin</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Russian">Russian</option>
                <option value="Spanish">Spanish</option>
              </select>

              <select value={""} style={{fontSize:"13px", color:"grey", border:"0px"}}>
                <option value="">Country Website </option>
                <option value="English">Global(English)</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Portugal">Portugal</option>
                <option value="Italia">Italia</option>
                <option value="Deutschland">Deutschland</option>
                <option value="Brasil">Brasil</option>
                <option value="Turkey">Turkey</option>
                <option value="Polska">Polska</option>
                <option value="Japan">Japan</option>
              </select>
            </Box>
          <Box display={"flex"} mt={"20px"} alignItems="center" justifyContent="space-end">
            <select style={{width:"40px", height:"31.05px", border:"2px solid #ffda00", borderRight:"none", borderTopLeftRadius:"15px", borderBottomLeftRadius:"15px" }}>
              <option value="">All</option>
              <option value="">MARKETPLACE</option>
              <option value="">Gearbest Selection</option>
              <option value="">Women's Bags</option>
              <option value="">Cell Phones & Accessories</option>
              <option value="">Appliances</option>
              <option value="">Women</option>
              <option value="">Men's Fashion</option>
              <option value="">Women's Fashion</option>
              <option value="">Women</option>
              <option value="">Watches & Jewelry</option>
              <option value="">Outdoors, Fitness & Sports</option>
              <option value="">Motor & Car Electronics</option>
              <option value="">Industrial & Scientific</option>
              <option value="">Home & Garden</option>
              <option value="">Home Improvement & Technology</option>
              <option value="">Helth & Personal Care</option>
              <option value="">Computers, Tableets & Others & Personal Care</option>
              <option value="">Consumers Electronics & Personal Care</option>
              <option value="">Drones, Toys & Hobbies</option>  
            </select>
              <Input w={"360px"} h="25px" border={"2px solid #ffda00"} borderLeft="none" />
              <Button mr="20px" cursor="pointer" w="25px" p="1px 6px" h="31px" bg={"#ffda00"} border={"2px solid #ffda00"} borderRightRadius="15px">
                <SearchIcon />
              </Button>

              <Box display={"flex"} gap="20px">
                <Box display={"flex"} alignItems="center"> 
                  <Image w={"20px"} h="20px" src='https://freeiconshop.com/wp-content/uploads/edd/person-outline.png' alt='avatar' />
                  <Text color={"grey"} fontSize="14px">              
                    <Link href='/signin' textDecoration={"underline"} fontSize={"13px"} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color={"grey"}>
                      Sign-In
                    </Link>
                  </Text>
                </Box>

                <Box display={"flex"} alignItems="center"> 
                  <Image w={"20px"} h="20px" src='https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png' alt='heart' />
                  <Text color={"grey"} fontSize="14px">
                    <Link href='/favorites' textDecoration={"underline"} fontSize={"13px"} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color={"grey"}>
                      Favorites
                    </Link>
                  </Text>
                </Box>
                <Box display={"flex"} alignItems="center"> 
                  <Image w={"20px"} h="20px"  src='https://e7.pngegg.com/pngimages/164/964/png-clipart-shopping-cart-computer-icons-bag-shopping-cart-angle-text.png' alt='cart' />
                  <Text color={"grey"} fontSize="14px">
                    <Link href='/cart' textDecoration={"underline"} fontSize={"13px"} fontFamily="OpenSans,Arial,Helvetica,sans-serif" color={"grey"}>
                      Cart
                    </Link>
                  </Text>
                </Box>
              </Box>           
          </Box>
        </Box>
      </Flex>
      <Box w="100%" mt="-17px" justifyContent="center" alignItems={"center"} textAlign="left" display="flex">
        <Text bg="black" color="white" fontWeight="700" p="5px 118px">Category</Text>
        <Text bg="#ffda00" fontWeight="700" p="5px 109px">SUPER DEALS</Text>
        <Text bg="#ffda00" fontWeight="700" p="5px 109px">APP ONLY</Text>
        <Text bg="#ffda00" fontWeight="700" p="5px 107.5px">NEW ARRIVALS</Text>
      </Box>
  </>
  
  )
}
