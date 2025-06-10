// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

instance.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem('access');

    // ✅ Do NOT send auth token for public endpoints
    const publicEndpoints = ['/users/register/', '/users/login/'];
    if (!publicEndpoints.includes(config.url)) {
      if (access) {
        config.headers['Authorization'] = `Bearer ${access}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
