import {nowPlayingActions} from '@/core/actions/movies/now-playing.action';
import {PopularMoviesAction} from '@/core/actions/movies/popular.action';
import {TopRatedAction} from '@/core/actions/movies/top-rated.action';
import {upcomingMoviesAction} from '@/core/actions/movies/upcoming.action';
import {useInfiniteQuery, useQuery} from 'react-query';

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
  const topRatedQuery = useInfiniteQuery({
    queryKey: ['movies', 'top_rated'],
    initialPageParam: 1,
    queryFn: ({pageParam}) => {
      return TopRatedAction({page: pageParam});
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1
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
