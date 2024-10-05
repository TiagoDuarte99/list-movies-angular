import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private isDarkTheme = true;

    themeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    toggleTheme(): void {
      this.isDarkTheme = !this.isDarkTheme;
      this.themeChanged.emit(this.isDarkTheme);
      this.updateBodyStyles();
    }
  
    getIsDarkTheme(): boolean {
      return this.isDarkTheme;
    }
  
  private updateBodyStyles(): void {
    const body = document.querySelector('body');
    if (body) {
      if (this.isDarkTheme) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    }
  }

}
