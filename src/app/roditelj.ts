import { Ucenik } from './ucenik';


export class Roditelj {
  id: number;
  ime: string;
  prezime: string;
  jmbg: string;
  email: string;
  ucenici: Ucenik[];
}

export class RoditeljDTO {
  id: number;
  ime: string;
  prezime: string;
  jmbg: string;
  email: string;
}
