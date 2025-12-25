import tmdbClient from '@/lib/axios';
import { Movie, PaginatedResponse } from '@/types/movie';

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdbClient.get<PaginatedResponse<Movie>>('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    // In a real app, you might throw a custom error or return an empty array
    return [];
  }
};


export const getTrendingMovies = async (): Promise<Movie[]> => {
    try {
        const response = await tmdbClient.get<PaginatedResponse<Movie>>('/movie/trending');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
};

export const getNowPlayingMovies = async () : Promise<Movie[]> => {
    try {
        const response = await tmdbClient.get<PaginatedResponse<Movie>>('/movie/now_playing');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        return [];
    }
};

