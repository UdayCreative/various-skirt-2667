import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {  
  const navigate=useNavigate()
    const [inpval,setInpval] = useState({
      name:"",
      email:"",
      password:""
    })
  
    const [data,setData] = useState([])
    const getData=(e)=>{
      const {value,name} = e.target;
      setInpval(()=>{
        return{
          ...inpval,
          [name]:value
        }
      })
    }
  
      const addData=(e)=>{
        e.preventDefault();
        
        const { name,email,date, password } = inpval;
          if (name === ""){
            alert("name field is required")
          }
          else if(date === ""){
            alert("date field is")
          }
           else if (email === "") {
              alert('email field is requred')
          } else if (!email.includes("@")) {
            alert('plz enter valid email addres')
          } else if (password === "") {
            alert('password field is requred')
          } else if (password.length < 5) {
            alert('password length greater five')
          }else{
            navigate("/Signin")
          }
          console.log(inpval)
          localStorage.setItem("Data",JSON.stringify([...data,inpval]))
          }

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box>
    {/* <Box m="30px">This is Sign Up Page</Box>   */}
      <Box>
        <Link href="/">
          <Image w="208px" h="45px" m="23px" 
          src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' 
          alt='Gearbest'/>
        </Link>
      </Box>

      <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding:"15px", width:"500px", height:'630px', marginLeft:"900px" }}>
        <Box  w={"400px"} h="auto" ml="200px" color={"#241c15"} m="20px" textAlign='start' 
            fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif">

        <Box>
          <Heading fontFamily="OpenSans,Arial" fontSize={"32px"} fontWeight="500">
            Register
          </Heading>
          <Text p="0px 0px 24px" color={"#241c15"} fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif">
              Create a free account or 
              <Link textDecoration={"none"} color='#ffda00' href='/signin'> Sign In</Link>
          </Text>
        </Box>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                variant='filled'
                type='text'
                name='email'
                onChange={getData}   
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired p="12px 0px 0px">
              <FormLabel>Username</FormLabel>
              <InputGroup>
                  <Input
                  variant='filled'
                  type='text'
                  name='name'
                   onChange={getData} />
              </InputGroup>
              
            </FormControl>

            <FormLabel p="12px 0px 0px">Password</FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                variant='filled'
                name='password'
                type={show ? 'text' : 'password'}
                // placeholder='Enter password'
                onChange={getData}
              />
              <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Checkbox size={"lg"}  checked>
              <Box m={"35px 0px 0px 20px"} alignItems="center" fontSize="13px" textAlign="start" fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif">
              <Text>By creating an account, you agree to our<Link textDecoration={"none"} color='teal.500' href='#'> Terms </Link>
                  and have read and acknowledge the
                  <br /><Link textDecoration={"none"} color='teal.500' href='#'> Global Privacy Statement.</Link></Text>
              </Box>
              </Checkbox> 
              <Button bg='#ffda00' w={"145px"} h="48px" mt={"12px"} borderRadius="5px" onClick={addData}> Register </Button>
              <Box>
                <Text textAlign={"center"} p="20px" ml="45px">or connect via</Text>
                <Link href="#"><Image w="40px" ml="200px" textAlign={"center"} borderRadius={"50%"} border={"1px solid whitesmoke"} src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt='google' /></Link>
              </Box>
        </Box>
      </div>
    </Box>
  )
}
export default SignUp