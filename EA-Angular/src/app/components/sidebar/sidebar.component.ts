import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { cardGiochi } from 'src/app/Objects/giochi';
import { GetGameService } from 'src/app/Services/get-game.service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() changeBg: boolean = true;
  @Output() BgDark = new EventEmitter<void>();

  opened = false;
  toggle() {
    this.opened = !this.opened;
    
  }
  giochi: string[] = [];

  constructor(private gamesList: GetGameService) {}

  ngOnInit(): void {
    this.giochi = this.gamesList.getGames();
  }
}
