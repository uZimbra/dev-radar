import axios from 'axios';

const api = axios.create({
  baseURL: 'your api url',
});

export default api;