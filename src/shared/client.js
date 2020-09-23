import axios from 'axios';
import config from '../config';
import store from '../redux/store';

const client = axios.create({
  baseURL: config.base_api_url,
});

client.interceptors.request.use(
  (response) => {
    const originalConfig = response;
    const token = store.getState().auth.auth.token;
    originalConfig.headers.Authorization = `Bearer ${token}`;
    return originalConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
