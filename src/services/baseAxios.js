import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL || `http://localhost:3000/api/v1`,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
