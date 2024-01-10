import React, { useState } from 'react'
import { FormControl, FormHelperText, Input, Image, Center, Button, Toast, Alert, AlertIcon, FormErrorMessage, InputGroup, TagLabel, Box } from '@chakra-ui/react';
import { FiUpload } from 'react-icons/fi';
import { IconButton, Icon } from '@chakra-ui/react';

const GoogleImg = 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png';
const AppleImg = 'https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png';

const SignUp = ({ onClose }) => {

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [conformpassword, setconformpassword] = useState()
    const [password, setpassword] = useState()
    const [pic, setpic] = useState()
    const [loding, setLoding] = useState(false)

    const postDetail = (pics) => {
        setLoding(true)
        if (pic === undefined) {

        }
    }

    const handleSignUpClick = () => {
        Toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        onClose();
    };

    return (
        <>
            <FormControl isRequired>
                <Input placeholder='First name' type='name' onChange={(e) => setname(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='Email address' type='email' onChange={(e) => setemail(e.target.value)} />
                <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='create password' type='password' onChange={(e) => setpassword(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='conform password' type='conform password' onChange={(e) => setconformpassword(e.target.value)} />
            </FormControl>
            <FormControl>
                <Box
                    mt={3}
                    as="label"
                    htmlFor="file-upload"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    bg="blue.500" // Blue background color
                    color="white" // White text color
                    p={2} // Padding around the label
                    borderRadius="md" // Rounded corners
                    _hover={{ bg: 'blue.600' }} // Darker blue on hover
                >
                        <Center ml={10} htmlFor="file-upload" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <Icon as={FiUpload} mr={2} />
                            Upload Profile Picture
                        </Center>
                    
                    <Input id="file-upload" type="file" accept="image/*" onChange={(e) => postDetail(e.target.value)} opacity={0} position="absolute" zIndex="-1" />
                </Box>
            </FormControl>

            <FormControl >
                
                <Center><FormHelperText>or</FormHelperText></Center>
            </FormControl>
            <Center mt={2} >
                <Button colorScheme='blue' width={"100vh"} variant='outline' mr={0} ml={0} isFitted>
                    <Image width={5} mr={2} src={GoogleImg} alt='Dan Abramov' />
                    Continue with Google
                </Button>
            </Center>
            {/* <Center mt={3} >
                    <Button colorScheme='blue' width={"100vh"} variant='outline' mr={0} ml={0} isFitted>
                        <Image width={10} ml={-5} src={AppleImg} alt='Dan Abramov' />
                        Continue with Apple
                    </Button>                 
                </Center> */}
            <Center mt={4} >
                <Button colorScheme='blue' mr={0} w={"100vh"} onClick={handleSignUpClick}>Sign up</Button>
            </Center>
            <Alert status='error' variant='subtle' mt={3}>
                    <AlertIcon />
                    please fill all mandatory fields
                </Alert>

        </>
    )
}

export default SignUp;