import axios from 'axios'

const httpInstancePublic = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2&albumId=3',
  timeout: 50000
})

export { httpInstancePublic }
