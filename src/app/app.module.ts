import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectAppComponent } from './components/select-app/select-app.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';
 import { MatTableModule } from '@angular/material/table';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';
// import {  NO_ERRORS_SCHEMA } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SelectAppComponent,
    GridComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     MatTableModule,
     BrowserAnimationsModule,
    // CommonModule
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  //schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
