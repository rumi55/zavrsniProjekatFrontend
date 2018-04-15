import { Component, OnInit } from '@angular/core';
import { Roditelj } from '../roditelj';
import { RoditeljService } from '../roditelj.service';

@Component({
  selector: 'app-roditelji',
  templateUrl: './roditelji.component.html',
  styleUrls: ['./roditelji.component.css']
})
export class RoditeljiComponent implements OnInit {
  roditelji: Roditelj[];

  trazeni_jmbg: string = "";
  trazeni_roditelj: Roditelj;

  constructor(private roditeljService: RoditeljService) { }

  ngOnInit() {

  }

  goBack(): void {
    this.trazeni_jmbg = "";
    this.trazeni_roditelj = undefined;
  }

  getRoditelji(): void {
    this.roditeljService.getRoditelji()
    .subscribe(roditelji => this.roditelji = roditelji);
  }

  search(): void {
    this.roditeljService.getRoditelj(this.trazeni_jmbg).subscribe(
      roditelj => {
        this.trazeni_roditelj = roditelj;

        this.roditeljService.getDeca(this.trazeni_roditelj.id).subscribe(
          deca => {
            this.trazeni_roditelj.ucenici = deca;
          }

        );
            });
          }
}
