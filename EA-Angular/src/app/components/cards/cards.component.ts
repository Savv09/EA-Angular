import { Component, OnInit } from '@angular/core';
import { cardsList } from 'src/app/Objects/cards';
import { GetCardsService } from 'src/app/Objects/get-cards.service';
import { ICard } from 'src/models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: ICard[] = [];

  constructor(private cardsList: GetCardsService) {}

  ngOnInit(): void {
    this.cards = this.cardsList.getCards();
  }
}
