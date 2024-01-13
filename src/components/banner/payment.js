import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ThemeBtn from '../setting/settings'

const Payment = () => {
    const backgroundImageUrl = useColorModeValue(
        'https://pngimg.com/uploads/credit_card/credit_card_PNG204.png',
        'https://www.bankbazaar.com/images/india/cc-image/large/common-credit-card.png'
      );
  

    return (
        <><Box w={'18vw'} boxShadow='2xl' h={'14vw'} bg={`url('${backgroundImageUrl}') no-repeat center center`} backgroundSize="cover" rounded='xl'>
            <ThemeBtn/></Box></>
    )
}

export default Payment