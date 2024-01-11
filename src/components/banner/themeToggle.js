import { Box } from '@chakra-ui/react'
import React from 'react'
import ThemeBtn from '../setting/settings'

const ThemeToggle = () => {
    return (
        <><Box w={'18vw'} boxShadow='2xl' rounded='xl' shadow={'lg'} h={'5vw'} bg={'gray.500'}>
            <ThemeBtn/></Box></>
    )
}

export default ThemeToggle