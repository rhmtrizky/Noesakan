import { Grid, GridItem, Image, Input, Text, Box, Button, chakra, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import FilterCategory from '../features/filterCategory';
import Search from '../features/search';
import { PiFishFill } from 'react-icons/pi';
import { GiCirclingFish } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../lib/api';
import { ReactNode } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { FaRegSadCry } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const data = {
  isNew: true,
  imageURL: 'https://images.unsplash.com/photo-1605493725784-585f8d90fe82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWthbiUyMGd1cmFtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: '1' }}
              />
            );
          }
          return (
            <BsStar
              key={i}
              style={{ marginLeft: '1' }}
            />
          );
        })}
      <Box
        as="span"
        ml="2"
        color="gray.600"
        fontSize="sm"
      >
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

interface StatsCardProps {
  title: string;
  // stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel
            fontWeight={'medium'}
            isTruncated
          >
            {title}
          </StatLabel>
          <StatNumber
            fontSize={'2xl'}
            fontWeight={'medium'}
          >
            {/* {stat} */}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Product() {
  const [product, setProduct] = useState<any>([]);
  const [inputCity, setInputCity] = useState<string>('');
  const [inputProductName, setInputProductName] = useState<string>('');

  async function fetchDataAll() {
    try {
      const res = await API.get('/product');
      setProduct(res.data);
    } catch (error) {
      console.error({ error: 'error on fetch all data' });
    }
  }
  // console.log(product);

  async function fetchDataLocation(city: string) {
    try {
      const res = await API.get(`/product/location/${city}`);
      setProduct(res.data);
      setInputCity('');
    } catch (error) {
      console.error({ error: 'error on fetch data by location' });
    }
  }
  async function fetchDataProductName(productName: string) {
    try {
      const res = await API.get(`/product/productName/${productName}`);
      setProduct(res.data);
      setInputProductName('');
    } catch (error) {
      console.error({ error: 'error on fetch data by Product Name' });
    }
  }

  const handleFetchDataAll = async () => {
    await fetchDataAll();
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleFetchDataLocation = () => {
    fetchDataLocation(inputCity);
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProductName(e.target.value);
  };

  const handleFetchDataProductName = () => {
    fetchDataProductName(inputProductName);
  };

  useEffect(() => {
    fetchDataAll();
  }, []);
  return (
    <>
      <Box background={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(0, 0, 255, 0.1))`}>
        <Box
          maxW="6xl"
          mx={'auto'}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <chakra.h1
            textAlign={'center'}
            fontSize={'2xl'}
            py={10}
            fontWeight={'bold'}
          >
            Choose Your Category
          </chakra.h1>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            <Button
              onClick={handleFetchDataAll}
              bg={'none'}
              h={'100px'}
              _hover={{
                bg: 'none',
                transform: 'translateY(-2px)',
              }}
            >
              <StatsCard
                title={'Lihat Semua'}
                // stat={'5,000'}
                icon={<FiServer size={'3em'} />}
              />
            </Button>
            <Box
              border={'1px solid black'}
              borderRadius={10}
              p={3}
              px={6}
              bg={'none'}
              h={'100px'}
              _hover={{
                bg: 'none',
              }}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box>
                <Text
                  fontWeight={'500'}
                  fontSize={'14px'}
                  textAlign={'center'}
                  mb={2}
                >
                  Lokasi Terdekat
                </Text>
                <Flex gap={2}>
                  <Input
                    placeholder="Type your location"
                    type="text"
                    id="cityInput"
                    onChange={handleCityChange}
                    value={inputCity}
                    w={'80%'}
                  />
                  <Button
                    fontSize={'1.5em'}
                    color={'black'}
                    bg={'none'}
                    onClick={handleFetchDataLocation}
                    _hover={{
                      bg: 'none',
                      color: 'blue.700',
                    }}
                  >
                    <GoLocation size={'1.5em'} />
                  </Button>
                </Flex>
              </Box>
              {/* <Box>
              </Box> */}
            </Box>
            <Button
              onClick={handleFetchDataAll}
              bg={'none'}
              h={'100px'}
              _hover={{
                bg: 'none',
              }}
            >
              <StatsCard
                title={'Lihat Semua'}
                // stat={'5,000'}
                icon={<FiServer size={'3em'} />}
              />
            </Button>
          </SimpleGrid>
        </Box>

        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor="rgba(255, 255, 255, 1)"
            height={'40px'}
            borderRadius={10}
            mt={10}
            mx={'300px'}
            boxShadow={'md'}
          >
            <Flex
              w={'100%'}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={2}
            >
              <Flex
                alignItems={'center'}
                gap={1}
                // flexDirection={'column'}
              >
                <PiFishFill fontSize={'25px'} />
                <Input
                  onChange={(e) => {
                    handleProductNameChange(e);
                    handleFetchDataProductName();
                  }}
                  type="text"
                  placeholder="Mau makan ikan apa hari ini?"
                  color={'black'}
                  border={'none'}
                  w={'590px'}
                  // value={inputProductName}
                  _hover={{
                    bg: 'none',
                    border: 'none',
                  }}
                />
              </Flex>
              <GiCirclingFish fontSize={'25px'} />
            </Flex>
          </Box>
        </Flex>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'start'}
          gap={6}
          pt={10}
          px={7}
        >
          {product.length === 0 ? (
            <Flex
              flexDirection={'column'}
              gap={2}
              textAlign={'center'}
              w={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Text
                fontSize={'18px'}
                fontStyle={'italic'}
              >
                Product is not found
              </Text>
              <Box fontSize={'35px'}>
                <FaRegSadCry />
              </Box>
            </Flex>
          ) : (
            product.map((item: any, index: number) => (
              <Box
                key={index}
                scale={1.0}
                _hover={{ scale: 1.1 }}
                boxShadow={'xl'}
                h={'350px'}
                borderRadius={10}
              >
                <Link to={`/productDetail/${item?.id}`}>
                  <Flex flexDirection={'column'}>
                    <Box
                      width={'280px'}
                      height={'250px'}
                    >
                      <Image
                        borderTopRightRadius={10}
                        borderTopLeftRadius={10}
                        objectFit={'cover'}
                        h={'100%'}
                        w={'100%'}
                        src={item?.image ? item?.image : 'https://images.unsplash.com/photo-1605493725784-585f8d90fe82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWthbiUyMGd1cmFtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'}
                      />
                    </Box>
                    <Flex
                      p={2}
                      flexDirection={'column'}
                    >
                      <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                      >
                        <Text
                          fontSize={'23px'}
                          fontWeight="bold"
                          color={'blue.900'}
                        >
                          {item?.productName}
                        </Text>
                        <Text>Stok: {item?.stock}</Text>
                      </Flex>
                      <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                      >
                        <Text>{item?.store?.city}</Text>
                        <Text>Rp.{item?.price}/kg</Text>
                      </Flex>

                      <Rating
                        rating={data.rating}
                        numReviews={data.numReviews}
                      />
                    </Flex>
                  </Flex>
                </Link>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </>
  );
}
