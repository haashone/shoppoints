import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GiftsMockService } from './gifts-mock.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private REST_API_SERVER = "http://127.0.0.1:3000";

  constructor(private http: HttpClient, private giftsMock: GiftsMockService) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('api/cats/1').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }


}
