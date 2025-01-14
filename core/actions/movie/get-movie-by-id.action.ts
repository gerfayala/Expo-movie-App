import {movieApi} from '@/core/api/movide-db-api';
import {MovideDBDetailsResponse} from '@/infrastructure/interfaces/movie-db-details-response';
import {MovieDetails} from '@/infrastructure/interfaces/movie-interface';
import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

export const getMovieById = async (
  id: number | string
): Promise<MovieDetails> => {
  try {
    const {data} = await movieApi.get<MovideDBDetailsResponse>(`${id}`);

    return MovieMapper.fromTheMovieDBDetailsResponseToMovie(data);
  } catch (error) {
    console.error(error);
    throw 'Cannot load  now playing movies';
  }
};
