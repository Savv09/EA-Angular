import { Injectable } from '@angular/core';
import { cardGiochi } from '../Objects/giochi';


@Injectable({
  providedIn: 'root'
})
export class GetGameService {
  getGames() {
    return cardGiochi;
  }


  constructor() { }
}
