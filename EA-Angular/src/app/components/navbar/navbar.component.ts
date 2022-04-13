import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  expandSidebar() {
   const expandable = document.getElementById('expandable');

   if (expandable?.style.visibility === 'collapse') {
    expandable.style.visibility = 'visible';
   }


  }

  ngOnInit(): void {
  }

}
