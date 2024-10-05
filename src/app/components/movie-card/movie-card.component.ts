import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: Movie;

  isDarkTheme: boolean;

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.getIsDarkTheme();
    this.themeService.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
