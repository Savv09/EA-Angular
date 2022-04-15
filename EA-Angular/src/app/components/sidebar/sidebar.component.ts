import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetGameService } from 'src/app/Objects/get-game.service';
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
  giochi : string[] = [];

  constructor(private gamesList: GetGameService) {}
 
  ngOnInit(): void {
    this.giochi = this.gamesList.getGames()
  }
}
