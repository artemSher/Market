import client from './client';

export const getProducts = async (params = {}) => {
  const response = await client.get('/products', { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await client.get(`/products/${id}`);
  return response.data;
};
