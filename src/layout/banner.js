import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import BannerLeft from '../components/banner/bannerLeft'
import BannerRigh from '../components/banner/bannerRigh'

const Banner = () => {
    return (
        <>
            <HStack gap={0}>
                <Box w={'50vw'} h={'80vh'} >
                    <BannerLeft />
                </Box >
                <Box w={'50vw'} h={'80vh'}   m={0}>
                    <BannerRigh />
                </Box>
            </HStack>
            Banner
        </>
    )
}

export default Banner