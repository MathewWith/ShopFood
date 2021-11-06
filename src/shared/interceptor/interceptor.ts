import axios from 'axios';
import {StorageKeys} from '../models/storageKeys';

export default function setRequestInterceptor(): void { axios.interceptors.request.use( (config) => {
    const token = localStorage.getItem(StorageKeys.JWT)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  return config
}) 
}


