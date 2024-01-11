import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, HStack, Center, Flex, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

const Regulator = () => {
    const [brightness, setBrightness] = useState(50); // Initial brightness value (0-100)
    const backgroundImageUrl = useColorModeValue(
      'https://i.postimg.cc/y8yQGgpc/light.jpg',
      'https://i.postimg.cc/tgTTccNb/dark.jpg'
    );

    const handleSliderChange = (value) => {
        setBrightness(value);
    };

    return (
        <Box w={'18vw'} boxShadow='2xl' h={'14vw'} bg={`url('${backgroundImageUrl}') no-repeat center center`} backgroundSize="cover" rounded='xl'>
            <HStack>
                <Center>
                    <Flex minWidth='max-content' alignItems='center' gap='0' pl={'1vw'}>
                        <Slider onChange={handleSliderChange} aria-label='slider-ex-3' defaultValue={30} orientation='vertical' minH='10vw' >
                            <SliderTrack bg="white.1">
                                <SliderFilledTrack bg="white.1" />
                            </SliderTrack>
                            <SliderThumb bg="white.1" boxSize={90} shadow={0} />
                        </Slider>
                        <Text mt={14} fontSize='xl' opacity={0.55} textAlign="center">
                            {brightness}%
                        </Text>
                        <Slider colorScheme='pink'  focusBorderColor="none"  onChange={handleSliderChange} aria-label='slider-ex-3' defaultValue={30} orientation='vertical' minH='10vw'>
                            <SliderTrack bg="white.1">
                                <SliderFilledTrack bg="white.1" />
                            </SliderTrack>
                            <SliderThumb outline={'none'} bg="white.1" boxSize={'20vh'} shadow={0}/>
                        </Slider>
                    </Flex>
                </Center>
            </HStack>
        </Box>
    );
};

export default Regulator;
