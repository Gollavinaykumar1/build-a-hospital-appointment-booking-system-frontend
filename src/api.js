import axios from 'axios';
const BASE_URL = 'https://example.com/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const bookAppointment = async (data) => {
  try {
    const response = await api.post('/appointments', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const viewAppointments = async () => {
  try {
    const response = await api.get('/appointments');
    return response.data;
  } catch (error) {
    throw error;
  }
};