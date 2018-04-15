import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { FormsModule } from '@angular/forms';
import { UcenikDetailComponent } from './ucenik-detail/ucenik-detail.component';
import { UcenikService } from './ucenik.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app.routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { RoditeljiComponent } from './roditelji/roditelji.component';
import {RoditeljService} from './roditelj.service';
import { NastavniciComponent } from './nastavnici/nastavnici.component';
import {NastavnikService} from './nastavnik.service';
import { RoditeljDetailComponent } from './roditelj-detail/roditelj-detail.component';
import { NastavnikDetailComponent } from './nastavnik-detail/nastavnik-detail.component';
import { AdministratoriComponent} from './administratori/administratori.component';
import {AdministratorService} from './administrator.service';
import { AdministratorDetailComponent} from './administrator-detail/administrator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UceniciComponent,
    MessageComponent,
    UcenikDetailComponent,
    RoditeljiComponent,
    NastavniciComponent,
    RoditeljDetailComponent,
    NastavnikDetailComponent,
    AdministratoriComponent,
    AdministratorDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ UcenikService, MessageService,RoditeljService, NastavnikService,AdministratorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
