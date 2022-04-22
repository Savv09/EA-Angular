import { Component, OnInit, Input } from '@angular/core';
import { IButtons } from 'src/models/buttons';
@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input() buttonPrimary!: IButtons;
  constructor() {}

  ngOnInit(): void {}
}
