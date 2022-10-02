import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import {Link} from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
    const [inpval,setInpval] = useState({
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
  
        const getuserArr = localStorage.getItem("Data");
        console.log(getuserArr)
        if(getuserArr===null){
          alert("User account doesn't exist.Please Signup first")
          navigate("/register")
        }else{
        }
        const {email, password } = inpval;
         if (email === "") {
              alert('email field is requred')
  
          } else if (!email.includes("@")) {
            alert('plz enter valid email addres')
          } else if (password === "") {
            alert('password field is requred')
          } else if (password.length < 5) {
            alert('password length greater five')
          }else{
  
            if(getuserArr && getuserArr.length) {
              const userdata=JSON.parse(getuserArr)
              const userlogin = userdata.filter((el,k)=>{
                return el.email===email && el.password === password
              })
              if(userlogin.length===0){
                alert("Invalid User. Please Signup first")
                navigate("/register")
              }
              else{
                alert("Login Successfully")
               navigate("/")
              }
            }
          }
          }

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box>
    {/* <Box m="30px">This is Login Up Page</Box>   */}
      <Box>
        <Link href="/">
          <Image w="208px" h="45px" m="23px"
          src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' 
          alt='Gearbest'/>
        </Link>
      </Box>
      <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"520px", padding:"20px", height:'atuo', marginTop:"50px", marginLeft:"900px" }}>
        <Box  w={"500px"} h="auto"  color={"#241c15"} m="20px" textAlign='start' 
            fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif">
        <Box>
          <Heading fontFamily="OpenSans,Arial" fontSize={"32px"} fontWeight="500">
            Sign In
          </Heading>
          <Text p="0px 0px 24px" color={"#241c15"} fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif">
            Need a Gearbest account ? <Link textDecoration={"none"} color='#ffda00' href='/register'> Register </Link> Here
          </Text>
        </Box>
            <FormControl>
              <FormLabel>Email</FormLabel>
                <InputGroup w={"450px"} h="50px">
                  <Input
                    type='text'
                    name='email'
                    variant='filled'
                    onChange={getData}
                  />
                </InputGroup>
            </FormControl>
            {/* <FormControl isRequired p="12px 0px 0px"><FormLabel>Username</FormLabel><InputGroup w={"450px"} h="50px"><Input /></InputGroup></FormControl> */}
            <FormLabel p="12px 0px 0px">Password</FormLabel>
            <InputGroup size='md'mb={"20px"} w={"450px"} h="50px">
              <Input
                variant='filled' name="password"  onChange={getData}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
              />
              <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button bg='#ffda00' w={"450px"} h="50px" mt={"10px"} borderRadius="5px" onClick={addData}> 
                  Sign In
              </Button>
              <Box mt="20px" ml="-45px" display={"flex"} justifyContent="space-around" alignItems={"center"}>
                <Checkbox size={"lg"} checked>
                  <Box fontSize="16px"  fontFamily="OpenSans,Arial">
                      Keep me Logged In  
                  </Box>
                  </Checkbox> 
                  <Text><Link color='#ffda00' href='#'>Forgot password?</Link></Text>
              </Box>
              <Box>
                <Text textAlign={"center"} p="20px" ml="-60px">or connect via</Text>
                <Link href="#"><Image w="40px" ml="200px" textAlign={"center"} borderRadius={"50%"} border={"1px solid whitesmoke"} src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt='google' /></Link>
              </Box>
        </Box>
      </div>
    </Box>
  )
}
export default Login