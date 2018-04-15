import { Predmet } from './predmet'


export class Ocena {
  id: number;
  vrednost: number;
  datum: string;
  polugodiste: number;
  zakljucna: boolean;
  predmet: Predmet;


}
