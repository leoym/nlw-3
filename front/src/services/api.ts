import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/nlw',
});

export default api;
