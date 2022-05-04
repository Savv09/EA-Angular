import { Component, Input, OnInit } from '@angular/core';
import { IButtons } from 'src/models/buttons';

@Component({
  selector: 'app-orange-button',
  templateUrl: './orange-button.component.html',
  styleUrls: ['./orange-button.component.css']
})
export class OrangeButtonComponent implements OnInit {
@Input() buttonOrange!: IButtons
  constructor() { }

  ngOnInit(): void {
  }

}
