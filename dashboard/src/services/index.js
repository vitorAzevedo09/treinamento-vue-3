import axios from "axios";
import AuthService from './auth.js';
import UserService from './users.js';
import router from '../router/index.js'
import { setGlobalLoading } from '../store/global.js'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})


httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
})

httpClient.interceptors.response.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  
  let canThrowAnError = false
  
  if(error){
   canThrowAnError = error.request.status === 0 ||
    error.request.status === 500
  }

  if (canThrowAnError) {
    setGlobalLoading(false)
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    setGlobalLoading(false)
    router.push({ name: 'Home' })
  }
  
    setGlobalLoading(false)
  return error
})

export default {
  auth: AuthService(httpClient),
  user: UserService(httpClient)
}
