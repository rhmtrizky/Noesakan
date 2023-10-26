import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { GiCirclingFish } from 'react-icons/gi';
import '../features/navbar.css';

export default function Loading() {
  return (
    <>
      <Box
        h={'100vh'}
        m={'auto 0px'}
        display="flex"
        justifyContent="center"
        alignItems={'center'}
        flexDirection={'column'}
      >
        <GiCirclingFish
          className="spin-animation"
          fontSize={'200px'}
        />
        <Flex
          alignItems={'center'}
          gap={1}
        >
          <Text
            fontWeight={'800'}
            mt={8}
            fontStyle={'20px'}
          >
            Tunggu sebentar yaa, lagi diupload
          </Text>
          <Box
            className="typing-animation-container"
            mt={7}
          >
            <Text
              fontSize={'25px'}
              fontWeight={'800'}
              className="typing-animation-char"
              color={'gray.600'}
            >
              ....
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> */}
    </>
  );
}
