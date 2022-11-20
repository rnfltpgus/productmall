import axios from 'axios';

const Instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: process.env.REACT_APP_AUTHORIZATION,
  },
  timeout: 1000,
  responseType: 'json',
  responseEncoding: 'utf8',
});

export default Instance;
