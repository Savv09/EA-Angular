import { Injectable } from '@angular/core';
import { cardsList } from '../Objects/cards';
<<<<<<< HEAD
=======

>>>>>>> feature/sign-in

@Injectable({
  providedIn: 'root',
})
export class GetCardsService {
  getCards() {
    return cardsList;
  }
  constructor() {}
}
