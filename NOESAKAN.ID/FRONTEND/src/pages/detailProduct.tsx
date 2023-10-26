import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Navbar from '../features/navbar';
import Testimonials from './testimonials';
import Footer from './footer';
import API from '../lib/api';
import { Link, useParams } from 'react-router-dom';
import Product from './product';
import { AlertIcon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

import { Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, IconButton, Button, Stack, Flex } from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDeleteProduct } from '../hooks/HooksDeleteProduct';
import { GoAlert } from 'react-icons/go';

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

export default function DetailProduct() {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);
  const { id } = useParams();
  const [product, setProduct] = useState<any>([]);
  const { deleteProduct, alertDelete, isShowAlert } = useDeleteProduct();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function formatRupiah(saldo: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(saldo);
  }

  const handleDeleteProduct = () => {
    setIsModalOpen(true);
  };
  const confirmDelete = () => {
    deleteProduct(product.id)
      .then((response: any) => {
        setIsModalOpen(false);
      })
      .catch((err: any) => {
        console.error('Error deleting product:', err);
      });
  };

  async function fetchData() {
    try {
      const res = await API.get(`/product/${id}`);
      setProduct(res.data);
      // console.log('detail', res.data);
    } catch (error) {
      console.error({ error: 'salah ya ni' });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* MODAL TO CONFIRM DELETE THREAD  */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure to delete this product?</ModalBody>
          <ModalFooter>
            <Button
              m={2}
              colorScheme="red"
              onClick={confirmDelete}
            >
              Yes, Delete
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* -------------------  */}

      <Box backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 255, 0.2))`}>
        <Navbar />

        <Box
          pt={10}
          id="product"
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
              <GoAlert
                fontSize="20px"
                color="red"
                fontWeight="bold"
              />
              <Text fontWeight={'600'}>{alertDelete}</Text>
            </Flex>
          ) : (
            ''
          )}
          <Flex
            p={10}
            gap={10}
          >
            <Box
              height={'400px'}
              width={'650px'}
            >
              <Image
                objectFit={'cover'}
                h={'100%'}
                w={'100%'}
                borderRadius={10}
                src={product?.image}
              />
            </Box>
            <Box>
              <Flex
                flexDirection={'column'}
                pt={5}
              >
                <Flex
                  gap={20}
                  alignItems={'center'}
                >
                  <Text
                    fontWeight={'bold'}
                    fontSize={'35px'}
                  >
                    {product?.productName}
                  </Text>
                  <Flex
                    justifyContent="center"
                    mt={4}
                  >
                    <Popover
                      placement="bottom"
                      isLazy
                    >
                      <PopoverTrigger>
                        <IconButton
                          aria-label="More server options"
                          icon={<BsThreeDotsVertical />}
                          variant="solid"
                          w="fit-content"
                          bg={'none'}
                          fontSize={'25px'}
                          _hover={{ bg: 'none' }}
                        />
                      </PopoverTrigger>
                      <PopoverContent
                        w="fit-content"
                        _focus={{ boxShadow: 'none' }}
                      >
                        <PopoverArrow />
                        <PopoverBody>
                          <Stack>
                            <Button
                              w="194px"
                              variant="ghost"
                              rightIcon={<AiOutlineEdit />}
                              justifyContent="space-between"
                              fontWeight="normal"
                              fontSize="sm"
                            >
                              Edit
                            </Button>
                            <Button
                              w="194px"
                              variant="ghost"
                              rightIcon={<AiOutlineDelete />}
                              justifyContent="space-between"
                              fontWeight="normal"
                              colorScheme="red"
                              fontSize="sm"
                              onClick={handleDeleteProduct}
                            >
                              Delete
                            </Button>
                          </Stack>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Flex>
                <Text
                  fontSize={'23px'}
                  fontWeight="bold"
                  color="blue.700"
                >
                  {formatRupiah(product?.price)}/Kg
                </Text>
                <Text
                  fontWeight={'500'}
                  mb={2}
                >
                  {product?.store?.name}
                </Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
                <Text mt={5}>Keterangan Produk:</Text>
                <Text
                  w={'390px'}
                  textAlign={'justify'}
                >
                  {product?.description}
                </Text>
                <Link
                  target="_blank"
                  to={`https://wa.me/${product?.store?.phoneNumber}`}
                >
                  <Button
                    w={'50%'}
                    mt={5}
                    bgColor={`${colorCode}`}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    onClick={() => setColorCode(colorList[randomColor()])}
                  >
                    Hubungi Pembeli
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Product />
          {/* <ProductInDetail /> */}
          <Testimonials />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
