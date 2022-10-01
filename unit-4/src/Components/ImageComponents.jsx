import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function ImageComponents() {

  return (
    <>
        <Box display="flex" m="50px 180.2px" gap="10px">
            <Grid textAlign="center" justifyContent="space-evenly" bg="#666" w="230px" gridTemplateColumns="repeat(2,115px)" gridTemplateRows="repeat(2,60px)">
                <GridItem>
                    <Image w="28px" pt="8px"
                           h="28px" m="0px 48px"
                           src="https://cdn-icons-png.flaticon.com/512/2020/2020773.png"
                        alt="24"/>
                        <Text m="0px" fontSize="12px" color="#bababa"
                              fontFamily="OpenSans,Arial,Helvetica,sans-serif">Services</Text>
                </GridItem>
                <GridItem>
                    <Image w="28px" pt="8px"
                           h="28px" m="0px 48px" 
                           src="https://t3.ftcdn.net/jpg/02/28/23/68/240_F_228236846_oV2K0RViTXbfGxQB5USIy4Nt6jSBEIjt.jpg"
                            alt="multi-language"/>
                    <Text m="0px" fontSize="12px" color="#bababa"
                          fontFamily="OpenSans,Arial,Helvetica,sans-serif">Multi-language</Text>
                </GridItem>
                <GridItem>
                    <Image w="28px"
                           h="28px" m="0px 48px"
                            src="https://cdn-icons-png.flaticon.com/512/6913/6913917.png"
                            alt="protection"/>
                    <Text m="0px" fontSize="12px" color="#bababa"
                          fontFamily="OpenSans,Arial,Helvetica,sans-serif">Protection</Text>
                </GridItem>
                <GridItem>
                    <Image w="28px"
                           h="28px" m="0px 48px"
                            src="https://cdn-icons-png.flaticon.com/512/5652/5652458.png"
                           alt="payment" />
                    <Text m="0px" fontSize="12px" color="#bababa"
                          fontFamily="OpenSans,Arial,Helvetica,sans-serif">Payments</Text>
                </GridItem>
            </Grid>
            <Image w="230px" h="120px" src="https://uidesign.gbtcdn.com/GB/image/8823/master3_230%C3%97120_en.jpg"
                   alt="img" />
            <Image w="230px" h="120px" src="https://uidesign.gbtcdn.com/GB/image/8823/HURLEY_230X120_en.jpg"
                   alt="img" />
            <Image w="230px" h="120px" src="https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg"
                   alt="img" />
            <Image w="230px" h="120px" src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg"
                   alt="img" />
        </Box>
    </>
  )
}
