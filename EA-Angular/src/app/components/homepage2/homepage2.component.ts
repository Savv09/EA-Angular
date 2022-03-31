import { Component, OnInit } from '@angular/core';
import { IButtons } from 'src/models/buttons';
@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.css']
})
export class Homepage2Component implements OnInit {
  button: IButtons={
    text: "Iscriviti subito"
  }
  buttonPrimary: IButtons={
    text: "Scopri di più"
 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
