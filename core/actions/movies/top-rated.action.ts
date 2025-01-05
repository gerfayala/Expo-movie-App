import {movieApi} from '@/core/api/movide-db-api';
import {MovieDBResponse} from '@/infrastructure/interfaces/movide-db-respones';
import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

export const TopRatedAction = async () => {
  try {
    const {data} = await movieApi.get<MovieDBResponse>('/top_rated');

    const movies = data.results.map(MovieMapper.fromTheMovieDBResponseToMovie);

    return movies;
  } catch (error) {
    console.error(error);
    throw 'Cannot load  now playing movies';
  }
};
