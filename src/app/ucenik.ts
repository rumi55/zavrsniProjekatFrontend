import { Ocena } from './ocena';
import { Predmet } from './predmet';
import {Evidencija} from './evidencija';
import {Roditelj} from './roditelj';
import {RoditeljDTO} from './roditelj';
export class Ucenik {
  id: number;
  ime: string;
  prezime: string;
  jmbg: string;
  ocene: Ocena[];
  predmeti: Predmet[];
  evidencija: Evidencija;
  telefon: string;
  adresa: string;
}

export class UcenikDTO {
  id: number;
  ime: string;
  prezime: string;
  jmbg: string;
  telefon: string;
  adresa: string;
}
export class UcenikRoditeljDTO {
  ucenik: UcenikDTO;
  roditelj: RoditeljDTO;
}
