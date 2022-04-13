import { Component, OnInit } from '@angular/core';
import { cardGiochi } from 'src/app/Objects/giochi';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  giochi = cardGiochi;
  ngOnInit(): void {}
}
