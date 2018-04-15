import { Component, OnInit, Input} from '@angular/core';
import { Administrator } from '../administrator';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdministratorService }  from '../administrator.service';

@Component({
  selector: 'app-administrator-detail',
  templateUrl: './administrator-detail.component.html',
  styleUrls: ['./administrator-detail.component.css']
})
export class AdministratorDetailComponent implements OnInit {
  @Input()
   administrator: Administrator;
  constructor(
    private route: ActivatedRoute,
    private ucenikService: AdministratorService,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

}
