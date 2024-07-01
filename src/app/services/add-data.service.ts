import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {FeatureDoc} from '../models/featuredoc'

@Injectable({
  providedIn: 'root'
})
export class AddDataService {
 // url1="https://freeapi.miniprojectideas.com/api/amazon"
  url1="http://localhost:8081/featureDocReg/addData"
  response :any
  constructor(private http: HttpClient) { }

  addDocument(document:any){
    const options= new HttpHeaders({'Content-Type':'application/json'})
    this.response = this.http.post<FeatureDoc>(this.url1, document,{headers: options}).pipe(catchError(this.errorHandler))
    return this.response
  }

  private errorHandler(err: HttpErrorResponse): any{
      let errMsg =''
      if(err.error instanceof Error){
        errMsg = err.error.message
      }
      return throwError(()=> err)
  }
}
