import {movieApi} from '@/core/api/movide-db-api';
import {MovieDBResponse} from '@/infrastructure/interfaces/movide-db-respones';
import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

export const nowPlayingActions = async () => {
  try {
    const {data} = await movieApi.get<MovieDBResponse>('/now_playing');

    const movies = data.results.map(MovieMapper.fromTheMovieDBResponseToMovie);

    return movies;
  } catch (error) {
    console.error(error);
    throw 'Cannot load  now playing movies';
  }
};
