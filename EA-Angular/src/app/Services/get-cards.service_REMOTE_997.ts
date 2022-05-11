import { Injectable } from '@angular/core';
import { CardNovità } from '../Objects/cards';

@Injectable({
  providedIn: 'root',
})
export class GetCardsService {
  getCards() {
    return CardNovità;
  }
  constructor() {}
}
