import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() changeBg: boolean = true;
  @Input() opSidebar: number = 1;
  @Output() BgDark = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
