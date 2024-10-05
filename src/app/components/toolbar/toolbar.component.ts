import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})

export class ToolbarComponent {
  public searchText: string;
  isDarkTheme: boolean;

  constructor(
    private dialog: MatDialog,
    public router: Router,
    private themeService: ThemeService
    ) 
    {
      this.isDarkTheme = this.themeService.getIsDarkTheme()
    }

public onSearchClick() {
  if (!this.searchText?.trim()) {
    this.openDialog();
    return;
  }
  this.router.navigate(['/search'], { queryParams: { searchText: this.searchText } });
  this.clearSearchField();
}

  openDialog(): void {
    const dialogRef: MatDialogRef<DialogErrorComponent> = this.dialog.open(DialogErrorComponent, {
      disableClose: true,
    });
  }

  public onClickClearSearchField() {
    this.clearSearchField();
  }

  private clearSearchField() {
    this.searchText = '';
  }

  reloadPage(route: string) {
    const currentRoute = this.router.url;
    if (currentRoute === route) {
      window.location.reload();
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.getIsDarkTheme();
  }
}
  
