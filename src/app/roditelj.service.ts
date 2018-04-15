import { MessageService } from './message.service';
import { Message ,MessageR} from './Message';import { Injectable } from '@angular/core';
import { Roditelj } from './roditelj';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Ucenik } from './ucenik';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoditeljService {
  private roditeljiUrl = 'http://localhost:8080/api/v1/roditelj';
 private roditeljUrl = 'http://localhost:8080/api/v1/roditelj/jmbg/';
 private decaUrl = 'http://localhost:8080/api/v1/ucenik/roditelj/';


  getRoditelji(): Observable<Roditelj[]> {
    return this.http.get<Roditelj[]>(this.roditeljiUrl)
  }

  getRoditelj(jmbg: string): Observable<Roditelj> {
    return this.http.get<Roditelj>(`${this.roditeljUrl}`+jmbg);

}




  getDeca(id: number): Observable<Ucenik[]> {
    return this.http.get<Ucenik[]>(`${this.decaUrl}`+id);
  }

  private log(message: string) {
    this.messageService.add('RoditeljService: ' + message);
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
