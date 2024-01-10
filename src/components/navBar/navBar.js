import React from 'react';
import { Box, Flex, Spacer, Link, Heading, Text,  HStack,} from '@chakra-ui/react';

const Navbar = () => {
    return (
        // <Container maxW='md'>

        <Box w='100vw' position="fixed" top="0" pt={3}  zIndex="999" bg={' '} >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>ACMEFLARE</Heading>
                </Box>
                <Spacer />
                <HStack mr='200'>
                    <Text mr={10} ml={10} font-size='900' fontSize="md">Home</Text>
                    <Link mr={10} ml={10} fontSize="">Services</Link>
                    <Link ml={10} mr={10} fontSize="">Contact</Link>
                </HStack>
                <Spacer />
            </Flex>
        </Box>
        // </Container>
    );
};

export default Navbar;
