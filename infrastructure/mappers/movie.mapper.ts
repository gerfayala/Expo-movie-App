import {Result} from '../interfaces/movide-db-respones';
import {Movie} from '../interfaces/movie-interface';

export class MovieMapper {
  static fromTheMovieDBResponseToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backDrop: `https://image.tmdb.orsg/t/p/w500${movie.backdrop_path}`
    };
  };
}
