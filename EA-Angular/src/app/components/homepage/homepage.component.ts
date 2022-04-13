import { Component, Input, OnInit } from '@angular/core';
import { IButtons } from 'src/models/buttons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 button: IButtons={
   text: "Sfoglia offerte"

 }
 buttontwo: IButtons={
  text: "Gioca ora"

}

  constructor() { }

  ngOnInit(): void {
  }

}
