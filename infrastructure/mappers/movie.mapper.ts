import {Result} from '../interfaces/movide-db-respones';
import {
  MovieDBCast,
  MovieDBCastResponse
} from '../interfaces/movie-db-cast-response';
import {MovideDBDetailsResponse} from '../interfaces/movie-db-details-response';
import {Cast, Movie, MovieDetails} from '../interfaces/movie-interface';

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

  static fromTheMovieDBDetailsResponseToMovie = (
    movie: MovideDBDetailsResponse
  ): MovieDetails => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backDrop: `https://image.tmdb.orsg/t/p/w500${movie.backdrop_path}`,
      budget: movie.budget,
      genres: movie.genres.map((genre) => genre.name),
      duration: movie.runtime,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(
        (company) => company.name
      )
    };
  };
}
