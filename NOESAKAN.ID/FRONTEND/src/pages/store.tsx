import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import Navbar from '../features/navbar';
import Footer from './footer';
import StoreProductInStore from './storeProductInStore';
import FormCreateProduct from '../components/cardProduct';
import API from '../lib/api';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteProduct } from '../hooks/HooksDeleteProduct';
import { GoAlert } from 'react-icons/go';
import Loading from '../components/Loading';
import UseProductCreate from '../features/Product/useProductCreate';

function randomColor() {
  return Math.floor(Math.random() * 2);
}

const colorList: string[] = ['#E83636', 'blue.500'];

const data = {
  isNew: true,
  imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
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

export default function Store() {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);

  const [store, setStore] = useState<any>([]);
  const navigate = useNavigate();
  const { iconAlert, alertDelete, isShowAlert } = useDeleteProduct();
  const { showLoading } = UseProductCreate();

  async function fetchData() {
    const token = localStorage.getItem('token');
    try {
      const res = await API.get('/store/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStore(res.data);
    } catch (error) {
      console.error({ error: 'salah ya ni' });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box backgroundImage={`linear-gradient(rgba(0, 0, 200, 0.3), rgba(255, 255, 255, 0.2))`}>
        <Navbar />
        <Box pt={10}>
          <Flex
            flexDir={['column', 'column', 'column', 'row']}
            p={10}
            gap={10}
          >
            {isShowAlert ? (
              <Flex
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'white'}
                mx={'auto'}
                w={'300px'}
                py={2}
                borderRadius={10}
                gap={1}
              >
                {iconAlert ? (
                  <GoAlert
                    fontSize="20px"
                    color="red"
                    fontWeight="bold"
                  />
                ) : (
                  'whehe'
                )}
                <Text fontWeight={'600'}>{alertDelete}</Text>
              </Flex>
            ) : (
              ''
            )}
            <Box>
              <Image
                borderRadius={10}
                minW={'600px'}
                maxW={'600px'}
                maxH={'400px'}
                minH={'400px'}
                objectFit={'cover'}
                src={store?.image}
              />
            </Box>
            <Box>
              <Flex
                flexDirection={'column'}
                pt={5}
              >
                <Flex
                  alignItems={'center'}
                  gap={10}
                >
                  <Text
                    fontWeight={'bold'}
                    fontSize={'35px'}
                  >
                    {store?.name}
                  </Text>
                  <Link to={'/store/update/' + store.id}>
                    <Button
                      onClick={() => navigate('/store/update/' + store.id)}
                      bg={'none'}
                      mt={3}
                      fontSize={'25px'}
                      _hover={{ bg: 'none', color: 'blue.500' }}
                    >
                      <AiOutlineEdit />
                    </Button>
                  </Link>
                </Flex>
                <Text
                  fontWeight={'500'}
                  mb={2}
                >
                  @{store?.userName}
                </Text>
                <Text mt={1}>Deskripsi Toko:</Text>
                <Text
                  w={'390px'}
                  textAlign={'justify'}
                  mb={3}
                >
                  {store?.description}
                </Text>
                <Box mb={4}>
                  <Rating
                    rating={data.rating}
                    numReviews={data.numReviews}
                  />
                </Box>
                <FormCreateProduct />
              </Flex>
            </Box>
          </Flex>
          <StoreProductInStore />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
