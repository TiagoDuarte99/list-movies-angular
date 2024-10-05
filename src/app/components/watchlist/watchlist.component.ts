import { ViewportScroller } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent {
  movies: Movie[];
  totalResults: number;
  public selectedSortOption: string = 'id';

  constructor(
    private watchListService: WatchListService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getWatchList();
  }


  public getWatchList(page = 1) {
    this.watchListService
      .getWatchList(page)
      .subscribe((res: HttpResponse<Movie[]>) => {
        this.movies = res.body;
        this.totalResults = parseInt(res.headers.get('X-Total-Count'));
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }
}
