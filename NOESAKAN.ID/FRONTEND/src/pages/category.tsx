import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';

export default function Category() {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Box
      mx={isMobile ? '20px' : '90px'} // Mengubah margin untuk perangkat mobile
      my={isMobile ? '30px' : '60px'} // Mengubah margin untuk perangkat mobile
    
    >
      <Flex
     flexDirection={isMobile ? 'column' : 'row'} // Mengubah arah tata letak untuk perangkat mobile
     gap={isMobile ? 3 : 5} // Mengubah jarak antar elemen untuk perangkat mobile
     justifyContent={'space-around'}
     alignItems={isMobile ? 'center' : 'flex-start'} // Mengubah penataan vertikal untuk perangkat mobile
      >
        <Button
         h={isTablet ? '180px' : '220px'} // Mengubah tinggi tombol untuk perangkat tablet
         w={isTablet ? '180px' : '200px'} // Mengubah lebar tombol untuk perangkat tablet
         bg={'none'}
        >
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Box
              h={isTablet ? '150px' : '180px'} // Mengatur tinggi gambar berdasarkan perangkat
              w={isTablet ? '150px' : '180px'} // Mengatur lebar gambar berdasarkan perangkat
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
