import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default function Category() {
  return (
    <Box
      mx={'90px'}
      my={'60px'}
    >
      <Flex
        gap={5}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Button
          h={'220px'}
          w={'200px'}
          bg={'none'}
        >
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Box
              h={'180px'}
              w={'180px'}
              bg={'yellow'}
              bgImage={`url("https://img.freepik.com/premium-photo/fresh-fish-sea-food_161021-265.jpg?w=900")`}
              bgSize={'cover'}
              borderRadius={'50%'}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
            ></Box>
            <Text>Lihat Semua</Text>
          </Flex>
        </Button>
        <Button
          h={'220px'}
          w={'200px'}
          bg={'none'}
        >
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Box
              h={'180px'}
              w={'180px'}
              bg={'yellow'}
              bgImage={`url("https://img.freepik.com/premium-photo/fresh-fish-sea-food_161021-265.jpg?w=900")`}
              bgSize={'cover'}
              borderRadius={'50%'}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
            ></Box>
            <Text>Lihat Semua</Text>
          </Flex>
        </Button>
        <Button
          h={'220px'}
          w={'200px'}
          bg={'none'}
        >
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Box
              h={'180px'}
              w={'180px'}
              bg={'yellow'}
              bgImage={`url("https://img.freepik.com/premium-photo/fresh-fish-sea-food_161021-265.jpg?w=900")`}
              bgSize={'cover'}
              borderRadius={'50%'}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
            ></Box>
            <Text>Lihat Semua</Text>
          </Flex>
        </Button>
        <Button
          h={'220px'}
          w={'200px'}
          bg={'none'}
        >
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Box
              h={'180px'}
              w={'180px'}
              bg={'yellow'}
              bgImage={`url("https://img.freepik.com/premium-photo/fresh-fish-sea-food_161021-265.jpg?w=900")`}
              bgSize={'cover'}
              borderRadius={'50%'}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
            ></Box>
            <Text>Lihat Semua</Text>
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
}