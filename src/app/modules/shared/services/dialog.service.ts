import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private openedL = false;
  private opened = false;
  private dialogRefLoading!: MatDialogRef<LoadingDialogComponent>;

  private dialogRefError!: MatDialogRef<ErrorDialogComponent>;

  constructor(private matDialog: MatDialog) { }

  openErrorDialog(message: string, status?: number) {
    if (!this.opened)
      this.dialogRefError = this.matDialog.open(ErrorDialogComponent, {
        data: { message, status },
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      });

    this.dialogRefError.afterClosed().subscribe(() => {
      this.opened = false;
    })
  }

  openLoadingDialog() {
    this.dialogRefLoading = this.matDialog.open(LoadingDialogComponent,
      {
        data: undefined,
        maxHeight: '100%',
        width: '400px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      })

    this.dialogRefLoading.afterClosed().subscribe(() => {
      this.openedL = false;
    });

  }

  hideLoadingDialog() {
    this.matDialog.closeAll();
  }
}
