import {getMovieById} from '@/core/actions/movie/get-movie-by-id.action';
import {getMovieCats} from '@/core/actions/movie/get-movie-cats.action';
import {useQuery} from 'react-query';

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    staleTime: 1000 * 60 * 60 * 24
  });
  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCats(id),
    staleTime: 1000 * 60 * 60 * 24
  });
  return {movieQuery, castQuery};
};
