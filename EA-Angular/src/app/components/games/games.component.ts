import { Component, OnInit } from '@angular/core';
import { IButtons } from 'src/models/buttons';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  button: IButtons={
    text: "Ultimi giochi"
 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
