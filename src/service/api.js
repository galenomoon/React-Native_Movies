import axios from 'axios';

const api_client = axios.create({
  baseURL: 'http://sujeitoprogramador.com/'
})

export default api_client;