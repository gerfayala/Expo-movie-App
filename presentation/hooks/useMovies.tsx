import {nowPlayingActions} from '@/core/actions/movies/now-playing.action';
import {PopularMoviesAction} from '@/core/actions/movies/popular.action';
import {TopRatedAction} from '@/core/actions/movies/top-rated.action';
import {upcomingMoviesAction} from '@/core/actions/movies/upcoming.action';
import {useQuery} from 'react-query';

export const useMovies = () => {
  //Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: PopularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24
  });
  const topRatedQuery = useQuery({
    queryKey: ['movies', 'top_rated'],
    queryFn: TopRatedAction,
    staleTime: 1000 * 60 * 60 * 24
  });
  const upComingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery
  };
};
