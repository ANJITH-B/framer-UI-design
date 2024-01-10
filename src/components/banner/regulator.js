import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, HStack, Center, Flex } from '@chakra-ui/react';
import { useState } from 'react';
const Regulator = () => {
    const [brightness, setBrightness] = useState(50); // Initial brightness value (0-100)

    const handleSliderChange = (value) => {
        setBrightness(value);
        // Here you can add logic to adjust brightness based on the slider position
    };

    return (
        <Box w={'20vw'}  h={'20vw'} bg="url('https://i.postimg.cc/zGbqtvqB/img.jpg') no-repeat center center" backgroundSize="cover" rounded='xl' >
            {/* <Slider aria-label="Brightness" value={brightness}
                onChange={handleSliderChange} min={0} max={100} step={1} >
                <SliderTrack bg="white.1" />
                <SliderFilledTrack bg={`hsl(60, 100%, ${brightness}%)`} /> {/* Adjust the brightness */}
                {/* <SliderThumb boxSize={10} bg="white.1" z-zIndex={19} shadow={0} />
            </Slider> */} 
            <HStack>
            <Center>
            <Flex minWidth='max-content' alignItems='center' gap='0' pl={'1vw'}>

                <Slider onChange={handleSliderChange} aria-label='slider-ex-3' defaultValue={30} orientation='vertical' minH='20vw' >
                    <SliderTrack bg="white.1">
                        <SliderFilledTrack bg="white.1" />
                    </SliderTrack>
                    <SliderThumb bg="white.1" boxSize={100} shadow={0} />
                </Slider>
                <Text mt={0} fontSize='xl' textAlign="center">
                    {brightness}%
                </Text>
                <Slider onChange={handleSliderChange} aria-label='slider-ex-3' defaultValue={30} orientation='vertical' minH='20vw'>
                    <SliderTrack bg="white.1">
                        <SliderFilledTrack bg="white.1" />
                    </SliderTrack>
                    <SliderThumb bg="white.1" boxSize={100} shadow={0} />
                </Slider>
            </Flex>
            </Center>
            </HStack>
            
        </Box>
    );
};

export default Regulator; 