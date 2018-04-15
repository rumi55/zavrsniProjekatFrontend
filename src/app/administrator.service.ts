import { Injectable } from '@angular/core';
import { Administrator } from './administrator';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Ucenik, UcenikDTO } from './ucenik';
import { HttpParams } from '@angular/common/http';
import { Roditelj, RoditeljDTO} from './roditelj';
import { UcenikRoditeljDTO} from './ucenik';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
  export class AdministratorService {
  private administratoriUrl = 'http://localhost:8080/api/v1/administrator';
  private administratorUrl = 'http://localhost:8080/api/v1/administrator/jmbg/';
  private uceniciUrl = 'http://localhost:8080/api/v1/ucenik';

  getAdministratori(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this.administratoriUrl)

  }


  getAdministrator(jmbg: string): Observable<Administrator> {
    return this.http.get<Administrator>(`${this.administratorUrl}`+jmbg);

  }



    getUcenici(): Observable<Ucenik[]> {
      return this.http.get<Ucenik[]>(this.uceniciUrl)

    }

    izmeniUcenika(ucenik: UcenikDTO): Observable<Ucenik> {
      let params = new HttpParams();
      params =params.append('ime', ucenik.ime);
      params =params.append('prezime', ucenik.prezime);
      params =params.append('jmbg', ucenik.jmbg);
      params =params.append('adresa', ucenik.adresa);
      params =params.append('telefon', ucenik.telefon);
      return this.http.put<Ucenik>(`${this.uceniciUrl}/`+ucenik.id, {}, {params: params});
    }

    obrisiUcenika(ucenikId: number):Observable<Ucenik> {
      return this.http.delete<Ucenik>(`${this.uceniciUrl}/`+ucenikId);
    }

    dodajUcenika(ucenik: UcenikDTO, roditelj: RoditeljDTO, razred: number, odeljenje: string): Observable<Ucenik> {
        let params = new HttpParams();
        params =params.append('razred', razred.toString());
        params =params.append('odeljenje', odeljenje);
        let ucenik_roditelj: UcenikRoditeljDTO = new UcenikRoditeljDTO();
        ucenik_roditelj.ucenik = ucenik;
        ucenik_roditelj.roditelj = roditelj;
        return this.http.post<Ucenik>(`${this.uceniciUrl}`, ucenik_roditelj, {params: params});
      }



  constructor(
    private http: HttpClient) { }
}
