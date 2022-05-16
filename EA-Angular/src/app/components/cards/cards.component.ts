import { Component, Input, OnInit } from '@angular/core';
import { CardNovità } from 'src/app/Objects/cards';
import { GetCardsService } from 'src/app/Services/get-cards.service';

import { ICard, ITab } from 'src/models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() cards!: ITab;

  constructor(private cardsList: GetCardsService) {}

  ngOnInit(): void {
    // this.cards = this.cardsList.getCards();
  }
}
