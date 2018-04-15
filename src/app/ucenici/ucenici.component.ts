import { Component, OnInit, Input } from '@angular/core';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import {Evidencija} from '../evidencija';

@Component({
  selector: 'app-ucenici',
  templateUrl: './ucenici.component.html',
  styleUrls: ['./ucenici.component.css']
})
export class UceniciComponent implements OnInit {
  ucenici: Ucenik[];
  trazeni_jmbg: string = "";
  @Input() trazeni_ucenik: Ucenik;
  pred_ocena_mapa: any;
  hideSearch: string = "no";

  constructor(private ucenikService: UcenikService) { }

  @Input()
  set trazeni_jmbg_(jmbg: string) {
    this.trazeni_jmbg = jmbg;
    this.hideSearch = "yes";
    this.search();
}


  ngOnInit() {

  }

  getUcenici(): void {
    this.ucenikService.getUcenici()
    .subscribe(ucenici => this.ucenici = ucenici);
  }

  goBack(): void {
    this.trazeni_jmbg = "";
    this.trazeni_ucenik = undefined;
  }


  search(): void {
    this.ucenikService.getUcenik(this.trazeni_jmbg).subscribe(
      ucenik => {
        this.trazeni_ucenik = ucenik;
        this.ucenikService.getPredmeti(this.trazeni_ucenik.id).subscribe(
          predmeti => {
            this.trazeni_ucenik.predmeti = predmeti;
            this.inicijalizujPredmete();
            this.ucenikService.getOcene(this.trazeni_ucenik.id).subscribe(
              ocene => {
                this.trazeni_ucenik.ocene = ocene;
                this.grupisiOcenePoPredmetima();
            });
          }
        );
      }
    );
  }

inicijalizujPredmete() {
  this.pred_ocena_mapa = {};
  for (let i = 0; i < this.trazeni_ucenik.predmeti.length; i++) {
      let predmet = this.trazeni_ucenik.predmeti[i];
      this.pred_ocena_mapa[predmet.id] = new Evidencija()
  }
}


grupisiOcenePoPredmetima() {
    for (let i = 0; i < this.trazeni_ucenik.ocene.length; i++) {
      let ocena = this.trazeni_ucenik.ocene[i];
      let predmet = ocena.predmet;
      if (ocena.polugodiste == 1 && ocena.zakljucna == false) {
		this.pred_ocena_mapa[predmet.id].ocenePrvo.push(ocena.vrednost);
      } else if (ocena.polugodiste == 1 && ocena.zakljucna == true){
		this.pred_ocena_mapa[predmet.id].zakljucnaPrvo = ocena.vrednost;
	  } else if (ocena.polugodiste == 2 && ocena.zakljucna == false){
		this.pred_ocena_mapa[predmet.id].oceneDrugo.push(ocena.vrednost);
	  } else if (ocena.polugodiste == 2 && ocena.zakljucna == true){
		this.pred_ocena_mapa[predmet.id].zakljucnaDrugo = ocena.vrednost;
	  }
	}
}



}
