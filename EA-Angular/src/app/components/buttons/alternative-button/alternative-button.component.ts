import { Component, OnInit } from '@angular/core';
import { IButtons } from 'src/models/buttons';

@Component({
  selector: 'app-alternative-button',
  templateUrl: './alternative-button.component.html',
  styleUrls: ['./alternative-button.component.css']
})
export class AlternativeButtonComponent implements OnInit {
  alternativeButton: IButtons = {
    text:["Sfoglia offerte", "Iscriviti subito"]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
