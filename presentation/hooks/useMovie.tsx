import {getMovieById} from '@/core/actions/movie/get-movie-by-id.action';
import React from 'react';
import {useQuery} from 'react-query';

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    staleTime: 1000 * 60 * 60 * 24
  });
  return {movieQuery};
};
