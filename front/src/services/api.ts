import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-22-9-46.us-east-2.compute.amazonaws.com/nlw',
});

export default api;
