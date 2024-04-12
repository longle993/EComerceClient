import axios from 'axios';

const BASE_URL = 'https://localhost:7100'; // Thay thế bằng URL cụ thể của API của bạn

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Các headers khác nếu cần
  },
});

// Phương thức GET
export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw error;
  }
};

// Phương thức POST
export const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error while posting data:', error);
    throw error;
  }
};

// Phương thức PUT
export const put = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error while updating data:', error);
    throw error;
  }
};

// Phương thức DELETE
export const remove = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error while deleting data:', error);
    throw error;
  }
};
