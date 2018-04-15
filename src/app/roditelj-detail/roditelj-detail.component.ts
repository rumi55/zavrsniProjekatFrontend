import { Component, OnInit, Input} from '@angular/core';
import { Roditelj } from '../roditelj';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RoditeljService }  from '../roditelj.service';
import { Ucenik } from '../ucenik';
import { UcenikService }  from '../ucenik.service';

@Component({
  selector: 'app-roditelj-detail',
  templateUrl: './roditelj-detail.component.html',
  styleUrls: ['./roditelj-detail.component.css']
})
export class RoditeljDetailComponent implements OnInit {
  @Input() roditelj: Roditelj;
  constructor(
    private route: ActivatedRoute,
    private roditeljService: RoditeljService,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

}
