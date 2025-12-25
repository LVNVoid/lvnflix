import axios from 'axios';
import { TMDB_BASE_URL } from '@/utils/constants';

const tmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`, 
    'Content-Type': 'application/json',
  },
  params: {
    api_key: process.env.TMDB_API_KEY, 
  }
});

export default tmdbClient;
