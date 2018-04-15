import { Component, OnInit, Input} from '@angular/core';
import { Ucenik } from '../ucenik';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UcenikService }  from '../ucenik.service';

@Component({
  selector: 'app-ucenik-detail',
  templateUrl: './ucenik-detail.component.html',
  styleUrls: ['./ucenik-detail.component.css']
})
export class UcenikDetailComponent implements OnInit {
  @Input() ucenik: Ucenik;
  constructor(
    private route: ActivatedRoute,
    private ucenikService: UcenikService,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

}
