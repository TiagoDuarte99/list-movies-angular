import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/apiResponse';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  movies: Movie[];
  totalResults: number;

  constructor(
    private moviesService: MoviesService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getTopMovies();
  }

  public getTopMovies(page = 1) {
    this.moviesService
      .getTopMovies(page)
      .subscribe((apiResponse: ApiResponse) => {
        this.movies = apiResponse.results.filter((movie) => movie.poster_path);
        this.totalResults = apiResponse.total_results;
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }
}
