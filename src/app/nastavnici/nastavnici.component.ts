import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
import {Odeljenje} from '../odeljenje';
import {Ocena} from '../ocena';
import {Evidencija} from '../evidencija';

@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css']
})
export class NastavniciComponent implements OnInit {
  nastavnici: Nastavnik[];

  trazeni_jmbg = '';
  trazeni_nastavnik: Nastavnik;
  prikazi_dijalog: string = "none";
  nova_ocena_vrednost: number;
  nova_ocena_datum: string;
  nova_ocena: Ocena;
  nova_ocena_predmet_id: number;
  nova_ocena_ucenik_id: number;

  constructor(private nastavnikService: NastavnikService) { }

  ngOnInit() {

  }

  goBack(): void {
    this.trazeni_jmbg = "";
    this.trazeni_nastavnik = undefined;
  }


  zatvori() {
    this.prikazi_dijalog = "none";
  }

  otvori(polugodiste:number, zakljucna: boolean, predmetId: number, ucenikId: number) {
    this.prikazi_dijalog = "block";
    this.nova_ocena = new Ocena();
    this.nova_ocena.polugodiste = polugodiste;
    this.nova_ocena.zakljucna = zakljucna;
    this.nova_ocena_predmet_id = predmetId;
    this.nova_ocena_ucenik_id = ucenikId;
  }

  dodajOcenu() {
    this.nova_ocena.vrednost = this.nova_ocena_vrednost;
    this.prikazi_dijalog = "none";
    this.nastavnikService.dodajOcenu(this.nova_ocena, this.trazeni_nastavnik.id, this.nova_ocena_ucenik_id, this.nova_ocena_predmet_id).subscribe(
      ocena => {

      }


    );

  }

  getNastavnici(): void {
    this.nastavnikService.getNastavnici()
    .subscribe(nastavnici => this.nastavnici = nastavnici);
  }

  search(): void {
    this.nastavnikService.getNastavnik(this.trazeni_jmbg).subscribe(
      nastavnik => {
        this.trazeni_nastavnik = nastavnik;
                this.nastavnikService.getPredmeti(this.trazeni_nastavnik.id).subscribe(
                  predmeti => {
                    this.trazeni_nastavnik.predmeti = predmeti;


                    this.nastavnikService.getOdeljenja(this.trazeni_nastavnik.id).subscribe(
                      odeljenja => {
                        this.trazeni_nastavnik.odeljenja = odeljenja;
                        for (let i = 0; i < this.trazeni_nastavnik.odeljenja.length; i++) {

                          const odeljenjeId = this.trazeni_nastavnik.odeljenja[i].id;
                          const razredId = this.trazeni_nastavnik.odeljenja[i].razred.id;

                          this.nastavnikService.getUceniciByOdeljenje(odeljenjeId).subscribe(
                            ucenici => {
                              this.trazeni_nastavnik.odeljenja[i].ucenici = ucenici;
                              for (let j = 0; j < this.trazeni_nastavnik.odeljenja[i].ucenici.length; j++) {
                                const ucenik = this.trazeni_nastavnik.odeljenja[i].ucenici[j];

                                this.nastavnikService.getOceneByUcenikByNastavnik(ucenik.id, this.trazeni_nastavnik.id).subscribe(
                                  ocene => {
                                    ucenik.evidencija = this.napraviEvidenciju(ocene);
                                  }

                                );

                              }

                            }
                          );

                          this.nastavnikService.getPredmetiByRazred(razredId).subscribe(
                            predmetiRazreda => {
                              this.trazeni_nastavnik.odeljenja[i].predmeti = predmetiRazreda;
                            }

                          );

                        }
                      }
                    );
                  }
                );
            });
          }


  daLiSlusajuPredmet(odeljenje: Odeljenje, predmetId: number): boolean {
    if (odeljenje.predmeti == undefined) return false; // ako jos nije ucitano

    let slusaju = false;
    for (let i = 0; i < odeljenje.predmeti.length; i++ ) {
      if (odeljenje.predmeti[i].id === predmetId) {
        slusaju = true;
        break;
      }
    }
    return slusaju;
  }

  napraviEvidenciju(ocene: Ocena[]) {
    const evidencija = new Evidencija();
    for (let i = 0; i < ocene.length; i++) {
      const ocena = ocene[i];
      if (ocena.polugodiste == 1 && ocena.zakljucna == false) {
        evidencija.ocenePrvo.push(ocena.vrednost);
      } else if (ocena.polugodiste == 1 && ocena.zakljucna == true) {
        evidencija.zakljucnaPrvo = ocena.vrednost;
      } else if (ocena.polugodiste == 2 && ocena.zakljucna == false) {
        evidencija.oceneDrugo.push(ocena.vrednost);
      } else if (ocena.polugodiste == 2 && ocena.zakljucna == true) {
        evidencija.zakljucnaDrugo = ocena.vrednost;
      }
    }
    return evidencija;
  }

}
