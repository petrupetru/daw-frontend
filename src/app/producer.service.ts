import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
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

  addProducer( producerData : any){
    this.http.post<any>(`${this.producersUrl}/create`, producerData).subscribe();
  }

  deleteProducer( id : string){
    var deleteURL = `${this.producersUrl}/delete${id}`;
    this.http.delete(deleteURL).subscribe();
    
  }

  updateProducer( producerData : any){
    this.http.put<any>(`${this.producersUrl}/update`, producerData).subscribe();
  }

  countLicenses(id : string) : Observable<any>{
    return this.http.get(`${this.producersUrl}/count${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
