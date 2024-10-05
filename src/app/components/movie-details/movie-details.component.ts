import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie;
  public showNotFound = false;
  public showWatchListButton: boolean;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private watchListService: WatchListService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.moviesService
        .getMovie(params['id'])
        .pipe(finalize(() => this.verifyIfMovieExistsInWatchList()))
        .subscribe({
          next: (movie: Movie) => (this.movie = movie),
          error: () => (this.showNotFound = true),
        });
    });
  }


  public addMovieToWatchList() {
    this.watchListService
      .addMovieToWatchList(this.movie)
      .pipe(finalize(() => this.verifyIfMovieExistsInWatchList()))
      .subscribe();
  }

  public deleteMovieToWatchList() {
    this.watchListService
      .deleteMovieToWatchList(this.movie.id)
      .pipe(finalize(() => this.verifyIfMovieExistsInWatchList()))
      .subscribe();
  }

  private verifyIfMovieExistsInWatchList() {
    this.watchListService.getMovieToWatchList(this.movie?.id).subscribe({
      next: () => (this.showWatchListButton = false),
      error: () => (this.showWatchListButton = true),
    });
  }
}
