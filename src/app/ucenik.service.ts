import { Injectable } from '@angular/core';
import { Ucenik } from './ucenik';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Ocena } from './ocena';
import { Predmet } from './predmet';
import { MessageService } from './message.service';
import { Message } from './Message';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
 export class UcenikService {
 private uceniciUrl = 'http://localhost:8080/api/v1/ucenik';
 private ucenikUrl = 'http://localhost:8080/api/v1/ucenik/jmbg/';
 private ucenikOceneUrl = 'http://localhost:8080/api/v1/ocena/ucenik/';
 private ucenikPredmetiUrl =  'http://localhost:8080/api/v1/predmet/ucenik/';

  getUcenici(): Observable<Ucenik[]> {
    return this.http.get<Ucenik[]>(this.uceniciUrl)
  }


  getUcenik(jmbg: string): Observable<Ucenik> {
    return this.http.get<Ucenik>(`${this.ucenikUrl}`+jmbg);
  }




  getOcene(id: number) {
    return this.http.get<Ocena[]>(`${this.ucenikOceneUrl}`+id);
  }



  getPredmeti(id: number) {
    return this.http.get<Predmet[]>(`${this.ucenikPredmetiUrl}`+id);
  }


    private log(message: string) {
      this.messageService.add('UcenikService: ' + message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ) { }
}
