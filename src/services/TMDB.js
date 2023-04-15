import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_API_KEY;

const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${tmdbApiKey}&page=${page}`,
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
