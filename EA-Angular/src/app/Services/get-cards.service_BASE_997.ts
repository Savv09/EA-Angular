import { Injectable } from '@angular/core';
import { cardsList } from './cards';

@Injectable({
  providedIn: 'root',
})
export class GetCardsService {
  getCards() {
    return cardsList;
  }
  constructor() {}
}
