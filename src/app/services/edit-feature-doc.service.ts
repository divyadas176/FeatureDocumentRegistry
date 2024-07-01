import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {FeatureDoc} from '../models/featuredoc'


@Injectable({
  providedIn: 'root'
})
export class EditFeatureDocService {

  

  url="http://localhost:8081/featureDocReg/updateData/"
  response :any
  constructor(private http: HttpClient) { }

  editDocument(document:any){
    console.log("In Edit service")
    const putUrl = this.url+document.fid
    const options= new HttpHeaders({'Content-Type':'application/json'})
    this.response = this.http.put<FeatureDoc>(putUrl, document,{headers: options}).pipe(catchError(this.errorHandler))
    console.log("response from edit service: ",this.response)
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
