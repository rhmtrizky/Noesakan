import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import API from '../../lib/api';
import { IProducts } from '../../interfaces/Product';
import { useNavigate } from 'react-router-dom';

export default function UseProductCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState<IProducts>({
    productName: '',
    price: '',
    description: '',
    stock: '',
    image: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleCreateProduct();
  }

  async function handleCreateProduct() {
    const token = localStorage.getItem('token');

    // console.log(token);
    try {
      const formData = new FormData();
      formData.append('productName', form.productName as string);
      formData.append('price', form.price as string);
      formData.append('description', form.description as string);
      formData.append('stock', form.stock as string);
      formData.append('image', form.image as File);
      const response = await API.post('/product/create', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/MyStore/' + store.id);
      console.log('Selling Product Success', response.data);
    } catch (err) {
      console.log(err);
    }
  }
  const [store, setStore] = useState<any>([]);

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

  return {
    store,
    form,
    handleChange,
    handleSubmit,
    handleCreateProduct,
  };
}
