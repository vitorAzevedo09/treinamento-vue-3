import axios from "axios";
import AuthService from './auth.js';
import { useRouter } from 'vue-router'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

const router = useRouter()

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }
  return error
})

export default {
  auth: AuthService(httpClient)
}
