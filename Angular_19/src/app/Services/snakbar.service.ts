import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, action: string = 'OK', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-success'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  showError(message: string, action: string = 'OK', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-error'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  showInfo(message: string, action: string = 'OK', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-info'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}