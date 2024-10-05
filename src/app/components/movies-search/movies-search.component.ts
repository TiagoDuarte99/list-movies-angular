import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  movies: Movie[];
  totalResults: number;
  searchText: string;

  constructor(
    private moviesService: MoviesService,
    private viewportScroller: ViewportScroller,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  ngOnDestroy(): void {
    this.movies = [];
    this.totalResults = 0;
    this.searchText = "";
  }

  private getPage() : void{
    this.route.queryParams.subscribe((params) => {
      this.ngOnDestroy ();
      this.searchText = params['searchText'];
      if (this.searchText) {
        this.getMoviesBySearch(this.searchText, 1);
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  public changePage(page: number) {
    this.getMoviesBySearch(this.searchText, page);
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  private getMoviesBySearch(q: string, page: number) {
    this.moviesService.getMoviesBySearch(q, page).subscribe((apiResponse: ApiResponse) => {
      this.movies = apiResponse.results;
      this.totalResults = apiResponse.total_results;
      if (this.movies.length === 0) {
        this.movies = [];
        this.totalResults = 0;
        this.router.navigate(['/no-movie-found']);
        this.viewportScroller.scrollToPosition([0, 0]);
      }
      
      this.paginator.firstPage();
    });
  }












  /*@ViewChild('paginator') paginator: MatPaginator;
  movies: Movie[];
  searchText: string;
  totalResults: number;
  
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private moviesService: MoviesService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      const state = window.history.state;
      if (state && state.movies) {
        this.movies = state.movies;
        this.totalResults = state.totalResults
      }
    });
  }



  public changePage(page: number) {
    this.searchText
      this.getMoviesBySearch(this.searchText, page)
      this.viewportScroller.scrollToPosition([0, 0]);
  }

  private clearMovies() {
    this.movies = [];
    this.totalResults = 0;
  }
  
  private getMoviesBySearch(q: string, page: number) {
    this.clearMovies();
    this.moviesService
      .getMoviesBySearch(q, page)
      .subscribe((apiResponse: ApiResponse) => {
        this.handleMovieResults(apiResponse.results);
        this.movies = apiResponse.results.filter((movie) => movie.poster_path);
        this.totalResults = apiResponse.total_results;
      });
  }
  
  private handleMovieResults(results: Movie[]) {
    if (results.length === 0) {
      this.router.navigate(['/no-movie-found']);
    } else {
      this.router.navigate(['/search'], { state: { movies: results } });
    }
  }*/

}
