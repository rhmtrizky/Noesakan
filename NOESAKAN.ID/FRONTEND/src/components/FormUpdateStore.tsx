import { Box, Button, Container, FormControl, FormLabel, Heading, Icon, IconProps, Input, InputGroup, SimpleGrid, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect, ChangeEvent } from 'react';

import API from '../lib/api';
import { useUpdateStore } from '../hooks/HooksUpdateStore';
import { useNavigate, useParams } from 'react-router-dom';
import { IStore } from '../interfaces/Store';

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="71"
        cy="61"
        r="111"
        fill=" #f785ff"
      />
      <circle
        cx="244"
        cy="106"
        r="139"
        fill="#fa8cff"
      />
      <circle
        cy="291"
        r="139"
        fill="#a953ff"
      />
      <circle
        cx="80.5"
        cy="189.5"
        r="101.5"
        fill="#c652ff"
      />
      <circle
        cx="196.5"
        cy="317.5"
        r="101.5"
        fill=" #717afd"
      />
      <circle
        cx="70.5"
        cy="458.5"
        r="101.5"
        fill=" #1740f4"
      />
      <circle
        cx="426.5"
        cy="-0.5"
        r="101.5"
        fill="#4299E1"
      />
    </Icon>
  );
};

export default function FormUpdateStore() {
  const { id } = useParams();
  const [store, setStore] = useState<any>([]);

  const [form, setForm] = useState<IStore>({
    name: '',
    userName: '',
    province: '',
    city: '',
    district: '',
    description: '',
    phoneNumber: 0,
    age: 0,
    bankAccount: 0,
    image: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleUpdateStore() {
    const token = localStorage.getItem('token');
    try {
      const response = await API.patch(`/store/update/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/MyStore/' + store.id);
      console.log('Update Store Success', response);
    } catch (err) {
      console.error('Error updating store', err);
    }
  }

  const navigate = useNavigate();

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
    <Box
      position={'relative'}
      objectFit={'cover'}
      bgImage={'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
      w={'full'}
    >
      <Container
        as={SimpleGrid}
        maxW={'100%'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 4, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 1 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            color={'blue.800'}
            ml={'30px'}
            lineHeight={1.1}
            mt={'100px'}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            className="animated-text"
          >
            NOESKAN.ID
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 4 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={2}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              textShadow="0 2px 4px rgba(0,0,128, 0.4)"
            >
              Edit Store
            </Heading>
          </Stack>

          <Box
            as={'form'}
            mt={1}
          >
            {/* <form
              onSubmit={UpdateStore}
              method="post"
            > */}
            <Stack spacing={2}>
              <FormControl
                id="name"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Nama Toko
                </FormLabel>
                <Input
                  defaultValue={store.name}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  // placeholder="Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="userName"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Username
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.userName}
                  type="text"
                  name="userName"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="province"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Provinsi
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.province}
                  type="text"
                  name="province"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="city"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Kota
                </FormLabel>
                <InputGroup>
                  <Input
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    defaultValue={store.city}
                    type="text"
                    name="city"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl
                id="district"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Kecamatan
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.district}
                  type="text"
                  name="district"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="description"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Deskripsi
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.description}
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="phoneNumber"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Nomor Telepon
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.phoneNumber}
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="age"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Tanggal Lahir
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.age}
                  type="text"
                  name="age"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                id="bankAccount"
                isRequired
              >
                <FormLabel
                  color={'black'}
                  ml={'10px'}
                >
                  Bank Akun
                </FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  defaultValue={store.bankAccount}
                  type="number"
                  name="bankAccount"
                  onChange={handleChange}
                />
              </FormControl>
              <Box>
                <label htmlFor="img">
                  <Icon
                    float={'right'}
                    fontSize={'30px'}
                    cursor="pointer"
                  ></Icon>
                </label>
                <Input
                  onChange={handleChange}
                  name="file"
                  type="file"
                  id="img"
                  hidden
                />
              </Box>
            </Stack>
            <Button
              onClick={() => {
                navigate('/MyStore/' + store.id);
                handleUpdateStore();
              }}
              type="submit"
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgColor={'blue.800'}
              bgGradient="linear(to-r, blue.400,blue.800)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, blue.500,blue.900)',
                boxShadow: 'xl',
              }}
            >
              Perbarui Toko
            </Button>
            {/* </form> */}

            {/* <Stack pt={6}>
              <Text color={"black"} align={'center'} onClick={()=> navigate("/auth/login")}>
                Sudah punya akun? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack> */}
          </Box>
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}
