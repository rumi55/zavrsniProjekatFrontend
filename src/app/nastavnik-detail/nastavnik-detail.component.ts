import { Component, OnInit, Input} from '@angular/core';
import { Nastavnik } from '../nastavnik';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NastavnikService }  from '../nastavnik.service';

@Component({
  selector: 'app-nastavnik-detail',
  templateUrl: './nastavnik-detail.component.html',
  styleUrls: ['./nastavnik-detail.component.css']
})
export class NastavnikDetailComponent implements OnInit {
  @Input() nastavnik: Nastavnik;
  constructor(
    private route: ActivatedRoute,
    private ucenikService: NastavnikService,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }


}
