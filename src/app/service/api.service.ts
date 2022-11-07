import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'https://api-rest-mongo.vercel.app/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createBus(data): Observable<any> {
    let url = `${this.baseUri}/bus`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all employees
  getBuses() {
    return this.http.get(`${this.baseUri}/buses`);
  }
  // Get employee
  getBus(id): Observable<any> {
    let url = `${this.baseUri}/busid/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update employee
  updateBus(id, data): Observable<any> {
    let url = `${this.baseUri}/bus/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete employee
  deleteBus(id): Observable<any> {
    let url = `${this.baseUri}/bus/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
