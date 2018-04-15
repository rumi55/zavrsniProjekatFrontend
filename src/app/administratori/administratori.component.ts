import { Component, OnInit } from '@angular/core';
import { Administrator} from '../administrator';
import { Ucenik} from '../ucenik';
import { UcenikDTO,UcenikRoditeljDTO} from '../ucenik';
import { Roditelj, RoditeljDTO} from '../roditelj';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-administratori',
  templateUrl: './administratori.component.html',
  styleUrls: ['./administratori.component.css']
})
export class AdministratoriComponent implements OnInit {
  administratori: Administrator[];

  trazeni_jmbg: string = "";
  trazeni_administrator: Administrator;
  ucenici: Ucenik[];
  prikazi_dijalog: string = "none";
  prikazi_dijalogDodavanje: string = "none";
  ucenik_izmena:UcenikDTO = new UcenikDTO();
  ucenik_novi: UcenikDTO = new UcenikDTO();
  ucenik_novi_razred: number;
  ucenik_novi_odeljenje: string;
  ucenik_novi_roditelj: RoditeljDTO = new RoditeljDTO();

  constructor(private administratorService: AdministratorService) { }

  ngOnInit() {

  }

  goBack(): void {
    this.trazeni_jmbg = "";
    this.trazeni_administrator = undefined;
  }

  getAdministratori(): void {
    this.administratorService.getAdministratori()
    .subscribe(administratori => this.administratori = administratori);
  }

  search(): void {
    this.administratorService.getAdministrator(this.trazeni_jmbg).subscribe(
      administrator => {
        this.trazeni_administrator = administrator;
                this.administratorService.getUcenici().subscribe(
                    ucenici => {
                      this.ucenici = ucenici;
                    }
                );
            });
    }



    otvoriDodavanje() {
      this.prikazi_dijalogDodavanje = "block";

    }


    dodajUcenika() {
      this.prikazi_dijalogDodavanje = "none";

      this.administratorService.dodajUcenika(this.ucenik_novi, this.ucenik_novi_roditelj, this.ucenik_novi_razred, this.ucenik_novi_odeljenje).subscribe(
        ucenik => {
        }
      );
    }


    zatvoriDodaj() {
      this.prikazi_dijalog = "none";
    }


    brisiUcenika(ucenikId: number) {
      this.administratorService.obrisiUcenika(ucenikId).subscribe(
        ucenik => {

        }

      );
    }


    otvori(ucenikId: number) {
      this.prikazi_dijalog = "block";
      this.ucenik_izmena.id = ucenikId;
    }

    izmeniUcenika() {
      this.prikazi_dijalog = "none";
      this.administratorService.izmeniUcenika(this.ucenik_izmena).subscribe(
        ucenik => {
        }
      );
    }

    zatvori() {
      this.prikazi_dijalog = "none";
    }

}
