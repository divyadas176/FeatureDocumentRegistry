import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { AddDataService } from 'src/app/services/add-data.service';
import { ViewDocumentsService } from 'src/app/services/view-documents.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {EditFeatureDocService} from '../../services/edit-feature-doc.service';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  constructor(private router: Router, public dialog: MatDialog, private addDataService: AddDataService,
    private viewDocumentsService: ViewDocumentsService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar,
    private editFeatureDocService: EditFeatureDocService, private cdr: ChangeDetectorRef){}
  
  successMsgOnAdd=''
  errorMsgOnAdd=''
  errorMsgOnView=''
  applicationName= ''
  successMsgOnEdit=''
   myData: any[] = [];

   // Pagination settings
  pageSize = 10;
  currentPage = 0;
  totalItems = 0;

  
  ngOnInit(){
       this.initialization()
  }

initialization(){
  this.applicationName = this.activatedRoute.snapshot.paramMap.get('applicationName')
       this.viewDocumentsService.getAllDocuments(this.applicationName, this.currentPage, this.pageSize).subscribe({
        next: (data: any[] | null)=>{
          console.log(typeof data);
          if(data!==null){
            console.log("data from db :", data)
            
            this.myData = data
            this.totalItems = data.length;
            
          }else{
            this.errorMsgOnView = "No Docs find"
            this.myData = [];
          }
        },
        error: (error: any)=>{
          this.errorMsgOnView = "No Docs find"
          this.myData = [];
        }
       })
}

refreshData(){
  this.initialization()
}

onPageChange(event: any) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.refreshData();
}

  
  displayedColumns = ['releaseNo', 'ppmNo', 'pdsmNo','businessCapabilityName','category','highLevelDesc','busVsTech','impactedLocs','addBtn','icon1'];

  toggleEditMode(myDataRow: any) {
    myDataRow.addBtn=false
    myDataRow.editable = !myDataRow.editable;
    myDataRow.editBtn=true
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

 
  
  deleteRow(myDataRow: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1000px';
    dialogConfig.data = myDataRow; // Pass data to the dialog

    const dialogRef = this.dialog.open(DeleteConfirmComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.refreshData()
      console.log('The dialog was closed');
    });
  }

  
  addNewRow(){
    console.log("inside addNewRow")
    const newRow = { releaseNo: this.myData.length + 1, ppmNo:'', pdsmNo : '', businessCapabilityName:'',category:'New Feature',highLevelDesc:'',busVsTech:'Business',impactedLocs:'',editable: true, showAddButton: true};
    console.log(newRow)
    
    this.myData.push(newRow);
    this.myData = [...this.myData];
    
    console.log(this.myData)
  }

  addDocument(document:any){
      document.applicationName = this.applicationName
      console.log(document)
      this.addDataService.addDocument(document).subscribe({
        next: (data: { message: string; })=>{
          this.successMsgOnAdd= data.message
          document.editable =false
          this.openSnackBar('Feature Doc Added Successfully', 'Close');
          this.refreshData()
        },
        error: (error: any)=>{
          this.errorMsgOnAdd="Couldnt Add document to DB"
        }
      })
  }

  editDocument(document:any){
    console.log("In Edit Doc")
    document.applicationName = this.applicationName
    console.log("appName : ", document.applicationName)
    this.editFeatureDocService.editDocument(document).subscribe({
      next: (data:any)=>{
        
        this.successMsgOnEdit= data.message

        console.log("success from editDoc: ",this.successMsgOnEdit)
        this.openSnackBar('Feature Doc Edited Successfully', 'Close');
        this.refreshData()
      },
      error: (error: any)=>{
        this.errorMsgOnAdd="Couldnt Edit document to DB"
      }
    })

  }
}
