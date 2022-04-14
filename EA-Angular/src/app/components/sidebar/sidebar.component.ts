import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cardGiochi } from 'src/app/Objects/giochi';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  opened = false;
  toggle() {
    this.opened = !this.opened;
  };
  giochi = cardGiochi;

  constructor() {}
 
  ngOnInit(): void {}
}
