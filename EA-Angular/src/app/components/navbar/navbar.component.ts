import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() changeBg: boolean = true;
  @Output() BgDark = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
