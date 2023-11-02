import axios from 'axios';
import { ENVS } from '../env';

export const catalogValApi = axios.create({
  baseURL: ENVS.API_URL,
});

catalogValApi.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
