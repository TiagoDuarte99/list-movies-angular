import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovie(id: string) {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=02dd4e4bf4792803c07f78fb41cab31b&language=en-US`
    );
  }

  getPopularMovies(page: number) {
    return this.http.get<ApiResponse>(
      `https://api.themoviedb.org/3/movie/popular?api_key=02dd4e4bf4792803c07f78fb41cab31b&language=en-US&page=${page}`
    );
  }

  getMoviesBySearch(query: string, page: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `https://api.themoviedb.org/3/search/movie?api_key=02dd4e4bf4792803c07f78fb41cab31b&query=${query}&page=${page}`
    );
  }

  getTopMovies(page: number) {
    return this.http.get<ApiResponse>(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=02dd4e4bf4792803c07f78fb41cab31b&language=en-US&page=${page}`
    );
  }
}
