import { Component , Inject} from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteRowService } from 'src/app/services/delete-row.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {
  successMessage= ""
  errorMessage=""
  dataGotFromGridRow:any
  constructor(public dialogRef: MatDialogRef<DeleteConfirmComponent>,  @Inject(MAT_DIALOG_DATA) public dialogData: any,
  private deleteRowService: DeleteRowService, private snackBar: MatSnackBar) {

    this.dataGotFromGridRow = dialogData;
   }
  
  closeDialog(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  deleteDocument(){
      this.deleteRowService.deleteDocument(this.dataGotFromGridRow.fid).subscribe({
          next: (data: { message: string; })=>{
            this.successMessage = data.message
            this.closeDialog()
            this.openSnackBar('Feature Doc Deleted Successfully', 'Close');
          },
          error: (error: any)=>{
            this.errorMessage ="Couldnt delete the document"
          }
      })
  }
}
