import { Odeljenje } from './odeljenje';
import { Predmet } from './predmet';

export class Nastavnik {
  id: number;
  ime: string;
  prezime: string;
  jmbg: string;
  email: string;
  odeljenja: Odeljenje[];
  predmeti: Predmet[];




}
