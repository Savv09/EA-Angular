import { Component, OnInit } from '@angular/core';
import { cardsList } from 'src/app/Objects/cards';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 cards = cardsList;


  constructor() { }

  ngOnInit(): void {
  }

}
