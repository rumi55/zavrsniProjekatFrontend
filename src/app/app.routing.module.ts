import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UceniciComponent }      from './ucenici/ucenici.component';
import { UcenikDetailComponent }  from './ucenik-detail/ucenik-detail.component';
import { RoditeljiComponent }      from './roditelji/roditelji.component';
import { NastavniciComponent }      from './nastavnici/nastavnici.component';
import {RoditeljDetailComponent }  from './roditelj-detail/roditelj-detail.component';
import {NastavnikDetailComponent }  from './nastavnik-detail/nastavnik-detail.component';
import { AdministratoriComponent }      from './administratori/administratori.component';
import { AdministratorDetailComponent }  from './administrator-detail/administrator-detail.component';

const routes: Routes = [
  { path: 'ucenici', component: UceniciComponent },
  { path: 'roditelji', component: RoditeljiComponent },
  { path: 'nastavnici', component: NastavniciComponent },
  { path: 'administratori', component: AdministratoriComponent },
  { path: 'detail/:id', component: UcenikDetailComponent },
  { path: 'detail/:id', component: RoditeljDetailComponent },
  { path: 'detail/:id', component: NastavnikDetailComponent },
  { path: 'detail/:id', component: AdministratorDetailComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
