import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Geral-code/CarritoCannon_Vue3/',
  withCredentials: false,
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json'
  }
})


export default {
    getProducts() {
      return apiClient.get('/products')
    },
}