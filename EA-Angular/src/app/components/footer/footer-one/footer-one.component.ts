import { Component, OnInit } from '@angular/core';
import { iconsList } from 'src/app/Objects/icons';


@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.css']
})
export class FooterOneComponent implements OnInit {
 icons = iconsList
 
  constructor() { }

  ngOnInit(): void {
  }

}
