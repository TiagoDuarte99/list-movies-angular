import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TopComponent } from './components/top/top.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { NoMovieFoundComponent } from './components/no-movie-found/no-movie-found.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies-details/:id', component: MovieDetailsComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'top', component: TopComponent },
  { path: 'no-movie-found', component: NoMovieFoundComponent},
  { path: 'search', component: MoviesSearchComponent},
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
