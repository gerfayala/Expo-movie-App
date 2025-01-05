import {movieApi} from '@/core/api/movide-db-api';
import {MovieDBResponse} from '@/infrastructure/interfaces/movide-db-respones';
import {MovieMapper} from '@/infrastructure/mappers/movie.mapper';

interface Options {
  page: number;
  limit?: number;
}

export const TopRatedAction = async ({page = 1, limit = 10}: Options) => {
  try {
    const {data} = await movieApi.get<MovieDBResponse>('/top_rated', {
      params: {
        page: page
      }
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBResponseToMovie);

    return movies;
  } catch (error) {
    console.error(error);
    throw 'Cannot load  now playing movies';
  }
};
