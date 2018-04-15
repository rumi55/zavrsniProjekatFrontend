  import { Ucenik } from './ucenik';
  import { Roditelj } from './roditelj';
  import { Nastavnik } from './nastavnik';

  export class Administrator {
    id: number;
    ime: string;
    prezime: string;
    jmbg: string;

    ucenici: Ucenik[];
    nastavnici: Nastavnik[];
    roditelji: Roditelj[];




  }
