import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function SocialMedia() {
    const SocialMeadia = [
        {
            img : "https://cdn.icon-icons.com/icons2/1129/PNG/512/facebookblacksocialbuttoncircle_79771.png"
        },
        {
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTdnuEyPEKoGa9OltINpKs_AEpzZL6X_IkNa1h_DJS3mkNMHlbiI_MVdGJMiRayvwzhA&usqp=CAU"
        },
        {
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhy2ICdt0psDT5Q4EX2NgG4RFlntrpcbhEl8yD1zxfbS3uI1Jv6tohBgRI0LQD5FbuTs&usqp=CAU"
        },
        {
            img : "https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png"
        },
        {
            img : 'https://www.iconpacks.net/icons/2/free-vk-icon-2173-thumb.png'
        },
        {
            img : "https://w7.pngwing.com/pngs/408/296/png-transparent-app-b-w-instagram-logo-media-popular-social-2018-social-media-black-and-white-logos-icon.png"
        },
        {
            img : "https://assets.website-files.com/5f77b2ecf3064018e8599370/5f788cb3b9e006494c3650d4_twitter.png"
        },
        {
            img : "https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-22.png"
        },
        {
            img : "https://www.freeiconspng.com/thumbs/tumblr-logo-icon/black-circle-tumblr-logo-icon-20.png"
        },
    ]
  return (
    <>
    {
        SocialMeadia.map((item)=>(
            <Box alignItems={"center"} cursor="pointer" textAlign="center" p={"10px"}
            key={item.id}>
                <Image w="30" h="30" src={item.img} alt="item.name" />
            </Box>
        ))
    }
    </>
  )
}
