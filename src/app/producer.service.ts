import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Producer } from './interfaces/producer';
import { MessagesService } from './messages.service';
import { PRODUCERS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  private producersUrl = 'https://localhost:5001/api/Producer';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }

  private log(message: string) {
    this.messageService.add(`ProducerService: ${message}`);
  }

 
  getProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.producersUrl)
    .pipe(
      tap(_ => this.log('fetched producers')),
      catchError(this.handleError<Producer[]>(`getProducers`, []))
    )
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
