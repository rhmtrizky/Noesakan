import { useState } from 'react';
import { API } from '../lib/api';
import { useNavigate, useParams } from 'react-router-dom';

export function useDeleteProduct() {
  const [product, setProduct] = useState<any>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [alertDelete, setAlertDelete] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [iconAlert, setIconAlert] = useState(false);

  async function fetchData() {
    try {
      const res = await API.get('/product');
      setProduct(res.data);
    } catch (error) {
      console.error({ error: 'error on fetch all data' });
    }
  }

  async function deleteProduct(productId: any) {
    try {
      const response = await API.delete(`/product/delete/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      fetchData();
      navigate('/MyStore/' + product.id);
      setAlertDelete('Succesful Delete Product');
      setIsShowAlert(true);
      setIconAlert(false);
      setTimeout(() => {
        setIsShowAlert(false);
        setAlertDelete('');
      }, 30000000);

      return response.data;
    } catch (error) {
      setAlertDelete('This is  not your product');
      setIsShowAlert(true);
      setIconAlert(true);
      setTimeout(() => {
        setIsShowAlert(false);
        setAlertDelete('');
      }, 3000);

      console.error({ error: 'error delete product' });
    }
  }

  return { deleteProduct, alertDelete, isShowAlert, iconAlert };
}
