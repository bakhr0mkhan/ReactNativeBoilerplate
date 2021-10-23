import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.32.8:1304',
  responseType: 'json',
});
