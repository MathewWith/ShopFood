import axios from 'axios';


export default function setRequestInterceptor(): void { axios.interceptors.request.use( (config) => {
    const token = localStorage.getItem("JWT")
    if (token) {
    config.headers.Authorization = `Bearer ${token} `
    }
  return config
})
}


