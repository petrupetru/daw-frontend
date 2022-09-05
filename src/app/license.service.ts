import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { License } from './interfaces/license';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  private licensesUrl = 'https://localhost:5001/api/License';  // URL to web api


  constructor(
    private messageService : MessagesService,
    private http: HttpClient) { }

  private log(message: string) {
    this.messageService.add(`LicenseService: ${message}`);
  }

  getLicenses(): Observable<License[]>{
    return this.http.get<License[]>(this.licensesUrl)
    .pipe(
      tap(_ => this.log('fetched licenses')),
      catchError(this.handleError<License[]>(`getLicenses`, []))
    )
  }
  getLicense(id: string): Observable<License> {
    return this.http.get<License>(`${this.licensesUrl}/${id}`)
    .pipe(
      tap(_ => this.log('fetched licenses')),
      catchError(this.handleError<License>(`getLicenses`))
    )
  }

  addLicense( licenseData : any ) {
    this.http.post<any>(`${this.licensesUrl}/create`, licenseData).subscribe();
  }

  deleteLicense( id: string){
    this.http.delete(`${this.licensesUrl}/delete${id}`).subscribe();
  }

  updateLicense( licenseData : any){
    this.http.put<any>(`${this.licensesUrl}/update`, licenseData).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
