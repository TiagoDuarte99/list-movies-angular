import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiResponse } from 'src/app/models/apiResponse';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  movies: Movie[];
  totalResults: number;
  searchText: string;
  currentPage: number = 1;


  constructor(
    private moviesService: MoviesService,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    this.getPopularMovies(1);
    this.listenSearchChange();
  }

  public changePage(page: number) {
      this.getPopularMovies(page);
      this.viewportScroller.scrollToPosition([0, 0]);
  }

  public getPopularMovies(page: number) {
    this.moviesService
      .getPopularMovies(page)
      .subscribe((apiResponse: ApiResponse) => {
        this.movies = apiResponse.results.filter((movie) => movie.poster_path);
        this.totalResults = apiResponse.total_results;
      });
  }

  private listenSearchChange() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.paginator.firstPage();
    } else {
      this.getPopularMovies(1);
    }
  }

}
