import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movies) => movies.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movies) => movies.id !== parseInt(id));
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
