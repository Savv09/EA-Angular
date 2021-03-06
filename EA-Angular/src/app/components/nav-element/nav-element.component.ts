import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NavElements } from 'src/app/Objects/nav-elements';
import { GetNavElementService } from 'src/app/Services/get-nav-element.service';
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
  elements: InavElement[] = [];

  constructor(private getNavElement: GetNavElementService) {}

  ngOnInit(): void {
    this.elements = this.getNavElement.getNavbar();
  }
}
