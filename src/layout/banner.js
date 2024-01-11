import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import BannerLeft from '../components/banner/bannerLeft'
import BannerRigh from '../components/banner/bannerRigh'
import Regulator from '../components/banner/regulator'
import ThemeToggle from '../components/banner/themeToggle'

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
                            <Box pb={2}></Box>
                            <Box pb={2}></Box>
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