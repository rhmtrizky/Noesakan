import { useState } from 'react';
import { API } from '../lib/api';
import { useNavigate, useParams } from 'react-router-dom';

export function useUpdateStore() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [dataName, setName] = useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const [dataUserName, setUserName] = useState('');
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserName(value);
  };

  const [dataProvince, setProvince] = useState('');
  const handleProvinceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProvince(value);
  };

  const [dataCity, setCity] = useState('');
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCity(value);
  };

  const [dataDistrict, setDistrict] = useState('');
  const handleDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDistrict(value);
  };

  const [dataDescription, setDescription] = useState('');
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDescription(value);
  };

  const [dataPhoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const [dataDate, setDate] = useState('');
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(value);
  };

  const [dataBankAccount, setBankAccount] = useState('');
  const handleBankAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setBankAccount(value);
  };

  const [dataImage, setDataImage] = useState<File | null | Blob | string>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];
    setDataImage(selectedImage);
    handlePreviewImage(event);
  };

  const [previewImage, setPreviewImage] = useState<string | undefined>();

  function handlePreviewImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  }

  const UpdateStore = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', dataName);
    formData.append('userName', dataUserName);
    formData.append('province', dataProvince);
    formData.append('city', dataCity);
    formData.append('district', dataDistrict);
    formData.append('description', dataDescription);
    formData.append('phoneNumber', dataPhoneNumber); // Fix the field name
    formData.append('bankAccount', dataBankAccount); // Fix the field name
    formData.append('age', dataDate);
    if (dataImage) {
      formData.append('image', dataImage);
    }

    try {
      const response = await API.patch(`/store/update/${id}`, formData);
      const updatedStore = await API.get('/store/get');
      navigate('/');
      console.log('form data', formData);
      console.log('Update store successful', response.data);
      console.log('Update store successful', updatedStore.data);
    } catch (error) {
      console.error('Error updating store', error);
    }
  };

  return {
    UpdateStore,
    handleUserNameChange,
    handleNameChange,
    handleProvinceChange,
    handleCityChange,
    handleDistrictChange,
    handleDescriptionChange,
    handleImageChange,
    handlePreviewImage,
    previewImage,
    handlePhoneNumberChange,
    handleDateChange,
    handleBankAccountChange,
  };
}
