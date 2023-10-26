import { Avatar, Box, Button, Flex, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { PiShareFat } from 'react-icons/pi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function randomColor() {
  return Math.floor(Math.random() * 5);
}

const colorList: string[] = ['#E53E3E', '#38A169', 'blue.300', '#9377EF', '#ED64A6'];

export default function RoomDiscuss() {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Box
      h={'100vh'}
      background={`linear-gradient(rgba(0, 0, 255, 0.1), rgba(255, 255, 255, 0.8)`}
      pt={isMobile ? '40px' : '60px'}
    >
      <Flex
        h={'100%'}
        px={isMobile ? '20px' : isTablet ? '40px' : '150px'}
        py={5}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Box
          position="relative"
          borderTopLeftRadius={'50%'}
          borderBottomLeftRadius={isMobile ? '0' : '10'}
          borderTopRightRadius={isMobile ? '10' : '10'}
          borderBottomRightRadius={isMobile ? '10' : '10'}
          w={isMobile ? '100%' : isTablet ? '80%' : '65%'}
          bgColor={`${colorCode}`}
          zIndex={1}
        >
          <Flex flexDirection={'column'}>
            <Text
              display={'flex'}
              pt={isMobile ? '20px' : isTablet ? '40px' : '70px'}
              fontSize={isMobile ? '30px' : isTablet ? '35px' : '40px'}
              fontWeight={'bold'}
              fontStyle={'italic'}
              color={'blue.900'}
            >
              "Ruang Diskusi"
            </Text>
            <Text
              mt={isMobile ? '20px' : isTablet ? '20px' : '30px'}
              ml={isMobile ? '20px' : isTablet ? '20px' : '50px'}
              w={isMobile ? '100%' : isTablet ? '90%' : '70%'}
              textAlign={'justify'}
              color={'white'}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quod asperiores illum, explicabo est consectetur, alias voluptatum provident praesentium consequatur repellendus voluptates odio aspernatur quis beatae nemo quos ducimus voluptatibus!
            </Text>
            <Text
              mt={isMobile ? '20px' : isTablet ? '20px' : '30px'}
              ml={isMobile ? '20px' : isTablet ? '20px' : '50px'}
              w={isMobile ? '100%' : isTablet ? '90%' : '70%'}
              fontWeight={'bold'}
              fontSize={isMobile ? '18px' : '20px'}
              fontStyle={'italic'}
              color={'blue.900'}
            >
              Makin banyak relasi,
            </Text>
            <Text
              ml={isMobile ? '20px' : isTablet ? '20px' : '50px'}
              fontWeight={'bold'}
              fontSize={isMobile ? '18px' : '20px'}
              fontStyle={'italic'}
              color={'blue.900'}
            >
              makin sehat dan bergizi.
            </Text>
            <Flex
              mt={isMobile ? '20px' : isTablet ? '20px' : '30px'}
              ml={isMobile ? '20px' : isTablet ? '20px' : '50px'}
              justifyContent="start"
              alignItems="center"
            >
              <Link to="/DiscussGrup">
                <Button
                  px={isMobile ? '6' : '8'}
                  bg={useColorModeValue('blue.900', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  onClick={() => setColorCode(colorList[randomColor()])}
                >
                  Bergabung
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Box
          position={isMobile ? "static" : "absolute"}
          ml={isMobile ? '20px' : isTablet ? '20px' : '500px'}
          mt={isMobile ? '20px' : isTablet ? '20px' : '45px'}
          w={isMobile ? '100%' : isTablet ? '80%' : '40%'}
          h={'520px'}
          bg={'white'}
          boxShadow={'2xl'}
          borderRadius={isMobile ? 0 : 20}
          zIndex={2}
        >
          <Flex
            h={'100%'}
            flexDirection={'column'}
            gap={'2'}
            p={3}
          >
            <Box
              boxShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
              borderRadius={10}
              h={'25%'}
            >
              <Flex gap={0}>
                <Box
                  w={'70px'}
                  h={'70px'}
                >
                  <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                </Box>
                <Flex flexDirection={'column'}>
                  <Text fontWeight={'bold'}>Fauzan Ahmad</Text>
                  <Text fontSize={'14px'}>@ahmad90</Text>
                  <Text fontSize={'15px'}>Toko saya lagi ready nih cumi 40kg</Text>
                  <Flex
                    justifyContent={'space-between'}
                    w={'130px'}
                    mt={2}
                  >
                    <BiLike />
                    <BiCommentDetail />
                    <PiShareFat />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              boxShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
              borderRadius={10}
              h={'25%'}
            >
              <Flex gap={0}>
                <Box
                  w={'70px'}
                  h={'70px'}
                >
                  <Avatar src="https://images.unsplash.com/photo-1537033206914-9d3551ff8103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlnfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                </Box>
                <Flex flexDirection={'column'}>
                  <Text fontWeight={'bold'}>Erwin</Text>
                  <Text fontSize={'14px'}>@erwin123</Text>
                  <Text fontSize={'15px'}>Makan udang pake sambel enak kali ya</Text>
                  <Flex
                    justifyContent={'space-between'}
                    w={'130px'}
                    mt={2}
                  >
                    <BiLike />
                    <BiCommentDetail />
                    <PiShareFat />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              boxShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
              borderRadius={10}
              h={'25%'}
            >
              <Flex gap={0}>
                <Box
                  w={'70px'}
                  h={'70px'}
                >
                  <Avatar src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                </Box>
                <Flex flexDirection={'column'}>
                  <Text fontWeight={'bold'}>Ali Syamsie</Text>
                  <Text fontSize={'14px'}>@syamsi_</Text>
                  <Text fontSize={'15px'}>Saya lagi butuh ikan patin 30kg, ada yg ready?</Text>
                  <Flex
                    justifyContent={'space-between'}
                    w={'130px'}
                    mt={2}
                  >
                    <BiLike />
                    <BiCommentDetail />
                    <PiShareFat />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              boxShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
              borderRadius={10}
              h={'25%'}
            >
              <Flex gap={0}>
                <Box
                  w={'70px'}
                  h={'70px'}
                >
                  <Avatar src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
                </Box>
                <Flex flexDirection={'column'}>
                  <Text fontWeight={'bold'}>Puja Ayu</Text>
                  <Text fontSize={'14px'}>@pujaaa88</Text>
                  <Text fontSize={'15px'}>Bikin pindang pake ikan dari noesakan emang the best👍</Text>
                  <Flex
                    justifyContent={'space-between'}
                    w={'130px'}
                    mt={2}
                  >
                    <BiLike />
                    <BiCommentDetail />
                    <PiShareFat />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Link to="/DiscussGrup">
              <Button
                w={'30%'}
                fontStyle={'italic'}
                bg={useColorModeValue('blue.700', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Read more
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
