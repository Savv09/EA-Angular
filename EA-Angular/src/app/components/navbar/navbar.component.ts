import { Component, OnInit, Output } from '@angular/core';
import { cardGiochi } from 'src/app/Objects/giochi';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opened= false;
  toggle() {
    this.opened= !this.opened;
  };
 constructor() { }



  

  ngOnInit(): void {
  }

}
