import { Injectable } from '@angular/core';
import { CardNovit√† } from '../Objects/cards';

@Injectable({
  providedIn: 'root',
})
export class GetCardsService {
  getCards() {
    return CardNovit√†;
  }
  constructor() {}
}
