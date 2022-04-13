import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavElements } from 'src/app/Objects/nav-elements';
import { InavElement } from 'src/models/navelement';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .custom-class {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class NavElementComponent implements OnInit {
  elements = NavElements;

  constructor() {}

  ngOnInit(): void {}
}
