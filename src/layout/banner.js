import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import BannerLeft from '../components/banner/bannerLeft'
import Regulator from '../components/banner/regulator'
import ThemeToggle from '../components/banner/themeToggle'
import CreditCard from '../components/banner/vcard'
import Payment from '../components/banner/payment'

const Banner = () => {
    return (
        <>
            <HStack gap={0}>
                <Box w={'50vw'} h={'80vh'} >
                    <BannerLeft />
                </Box >
                <Box w={'50vw'} h={'80vh'} m={0}>
                    <HStack>
                        <VStack>
                            <Box pt={180} pb={2}><Regulator /></Box>
                            <Box pb={2}><ThemeToggle /></Box>
                        </VStack>
                        <VStack pl={2}>
                            <Box pt={10} pb={2}><Regulator /></Box>
                            <Box pb={2}><CreditCard/></Box>
                            <Box pb={2}><Payment/></Box>
                            <Box pb={2}></Box>
                        </VStack>
                    </HStack>
                </Box>
            </HStack>
            Banner
        </>
    )
}

export default Banner