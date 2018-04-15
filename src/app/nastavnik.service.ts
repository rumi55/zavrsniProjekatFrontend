import { Injectable } from '@angular/core';
import { Nastavnik } from './nastavnik';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Odeljenje } from './odeljenje';
import { Ucenik } from './ucenik';
import {Predmet} from './predmet';
import {Ocena} from './ocena';
import { HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NastavnikService {
  private nastavniciUrl = 'http://localhost:8080/api/v1/nastavnik';
 private nastavnikUrl = 'http://localhost:8080/api/v1/nastavnik/jmbg/';
 private odeljenjaUrl = 'http://localhost:8080/api/v1/odeljenje/nastavnik/';
  private predmetiUrl = 'http://localhost:8080/api/v1/predmet/nastavnik/';
 private uceniciOdeljenjaUrl = 'http://localhost:8080/api/v1/ucenik/odeljenje/';
  private predmetiRazredaUrl = 'http://localhost:8080/api/v1/predmet/razred/';
  private oceneUrl = 'http://localhost:8080/api/v1/ocena/';

 constructor(
   private http: HttpClient
 ) { }



  getNastavnici(): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(this.nastavniciUrl)

  }




  getNastavnik(jmbg: string): Observable<Nastavnik> {
    return this.http.get<Nastavnik>(`${this.nastavnikUrl}`+jmbg);
  }



  getPredmeti(id: number): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(`${this.predmetiUrl}`+id);
  }



  getOdeljenja(id: number): Observable<Odeljenje[]> {
    return this.http.get<Odeljenje[]>(`${this.odeljenjaUrl}`+id);
}



  getUceniciByOdeljenje(id:number): Observable<Ucenik[]> {
    return this.http.get<Ucenik[]>(`${this.uceniciOdeljenjaUrl}`+id);
}



  getPredmetiByRazred(id: number): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(`${this.predmetiRazredaUrl}`+id);
  }



  getOceneByUcenikByNastavnik(ucenikId: number, nastavnikId: number): Observable<Ocena[]> {
    return this.http.get<Ocena[]>(`${this.oceneUrl}` + 'ucenik/' + ucenikId + '/nastavnik/' + nastavnikId);
  }



  dodajOcenu(ocena: Ocena, nastavnikId: number, ucenikId: number, predmetId: number): Observable<Ocena> {
    let params = new HttpParams();
    params = params.append('predmetId', predmetId.toString());
    params = params.append('ucenikId', ucenikId.toString());
    params = params.append('nastavnikId', nastavnikId.toString());
    return this.http.post<Ocena>(`${this.oceneUrl}`, ocena, {params:params});
  }

}
