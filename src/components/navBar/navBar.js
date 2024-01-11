import React from 'react';
import { Box, Flex, Spacer, Link, Heading, Text, HStack, useColorModeValue } from '@chakra-ui/react';

const Navbar = ({ activeTab }) => {
    const defaultOpacity = useColorModeValue(0.5, 0.75); // Adjust the default opacity as needed

    return (
        // <Container maxW='md'>

        <Box w='100vw' position="fixed" boxShadow={'sm'} top="0" pt={3} pb={2.9} zIndex="999" bg={' '} style={{
            backdropFilter: 'blur(10px)',
        }} blur='2px' >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>AcmeFlare</Heading>
                </Box>
                <Spacer />
                <HStack mr='200'>
                    <Text mr={10} ml={10} font-size='900' fontSize="md"  opacity={0.85} >Home</Text>
                    <Text mr={10} ml={10} fontSize="" opacity={0.85}> Services</Text>
                    <Text ml={10} mr={10} fontSize="" opacity={0.85}>Contact</Text>
                </HStack>
                <Spacer />
            </Flex>
        </Box>
        // </Container>
    );
};

export default Navbar;
