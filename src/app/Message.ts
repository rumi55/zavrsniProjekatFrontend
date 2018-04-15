import { Ucenik } from './ucenik';
import {Roditelj} from './roditelj';

export class Message{
  public Err:string;
  public Data:Ucenik[]|null;
}

export class MessageR{
  public Err:string;
  public Data:Roditelj[]|null;
}
