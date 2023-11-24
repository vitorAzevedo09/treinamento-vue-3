import axios from "axios";
import AuthService from './auth.js';
import UserService from './users.js';
import router from '../router/index.js'
import { setGlobalStore } from '../store/global.js'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})


httpClient.interceptors.request.use(config => {
  setGlobalStore(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
})

httpClient.interceptors.response.use((response) => {
  setGlobalStore(false)
  return response
}, (error) => {
  
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    setGlobalStore(false)
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    setGlobalStore(false)
    router.push({ name: 'Home' })
  }
  
    setGlobalStore(false)
  return error
})

export default {
  auth: AuthService(httpClient),
  user: UserService(httpClient)
}
