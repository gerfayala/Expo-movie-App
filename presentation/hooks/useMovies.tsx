import {nowPlayingActions} from '@/core/actions/movies/now-playins.acion';
import {useQuery} from 'react-query';

export const useMovies = () => {
  //Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24
  });

  return {
    nowPlayingQuery
  };
};
