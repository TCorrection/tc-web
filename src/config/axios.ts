import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
