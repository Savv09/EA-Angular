import { Injectable } from '@angular/core';
import { cardGiochi } from './giochi';

@Injectable({
  providedIn: 'root'
})
export class GetGameService {
  getGames() {
    return cardGiochi;
  }


  constructor() { }
}
