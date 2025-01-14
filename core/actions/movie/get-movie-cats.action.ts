import {movieApi} from '@/core/api/movide-db-api';
import {Cast} from '@/infrastructure/interfaces/cast-interface';
import {
  MovieDBCast,
  MovieDBCastResponse
} from '@/infrastructure/interfaces/movie-db-cast-response';

import {CastMapper} from '@/infrastructure/mappers/cast.mapper';

export const getMovieCats = async (movieId: number): Promise<Cast[]> => {
  try {
    const {data} = await movieApi.get<MovieDBCastResponse>(
      `${movieId}/credits`
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.error(error);
    throw 'Cannot load  now playing movies';
  }
};
