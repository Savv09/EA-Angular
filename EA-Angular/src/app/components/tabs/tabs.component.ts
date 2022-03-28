import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  tabs: string[] = [
    
      'Notizie EA', 'EA Play', 'Madden NFL', 'Apex Legends', 'FIFA', 'Battlefield', 'The Sims 4', 'F1 2021',  'Inside EA'
  
  ];

  ngOnInit(): void {
  }

}
