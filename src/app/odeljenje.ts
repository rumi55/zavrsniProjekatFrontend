import { Ucenik } from './ucenik';
import { Razred } from './razred';
import {Predmet} from './predmet';

export class Odeljenje {
  id: number;
  oznaka: string;
  razred: Razred;
  ucenici: Ucenik[];
  predmeti: Predmet[];
}
