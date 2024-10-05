import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NoMovieFoundComponent } from './components/no-movie-found/no-movie-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopComponent } from './components/top/top.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MoviesComponent,
    TopComponent,
    WatchlistComponent,
    MovieCardComponent,
    DialogErrorComponent,
    NoMovieFoundComponent,
    MovieDetailsComponent,
    TruncatePipe,
    ErrorNotFoundComponent,
    MoviesSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
