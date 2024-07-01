import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteRowService {
  url="http://localhost:8081/featureDocReg/delete/"
  response:any
  constructor(private http: HttpClient) { }

  deleteDocument(fid){
      const deleteUrl=this.url+fid
      console.log("deleteURL :", deleteUrl)
       this.response = this.http.delete<any>(deleteUrl).pipe(catchError(this.errorHandler))
       console.log("response from delete service:", this.response)
       return this.response
  }

  private errorHandler(err:HttpErrorResponse): any{
    let errMsg =''
    let successMsg = ''
    if(err.error instanceof Error){
      errMsg = err.error.message
      successMsg=''
    }
    return throwError(()=> err)
  }
}
