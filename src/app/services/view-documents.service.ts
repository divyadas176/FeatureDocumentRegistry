import { HttpClient, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {FeatureDoc} from '../models/featuredoc'

@Injectable({
  providedIn: 'root'
})
export class ViewDocumentsService {
  url="http://localhost:8081/featureDocReg/viewAllDocs/"
  response:any
  constructor(private http: HttpClient) { }

  getAllDocuments(appName,page: number, pageSize: number){
      let getUrl= this.url+appName
      const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
      this.response= this.http.get<FeatureDoc[]>(getUrl,{ params }).pipe(catchError(this.errorHandler))
      console.log("data got from view service :", this.response)
      return this.response
  }

  private errorHandler(err: HttpErrorResponse):any{
      let errMsg=''
      if(err.error instanceof Error){
        errMsg=err.error.message
      }
      return throwError(()=> err)
  }
}
