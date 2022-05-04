import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.css'],
})
export class TemplateContainerComponent implements OnInit {
  public changeBg: boolean = false;
  opacity: number = 1;
  position: string = "";
  public opSidebar: number = 1;

  
  Bgdark() {
    console.log('ciao')
    this.changeBg = !this.changeBg
    if(!this.changeBg) {
      this.opacity = 1
      this.position = "unset"
    } else {
      this.opacity = 0.5
      this.position = "fixed"
    }
  }
  

  constructor() {}

  ngOnInit(): void {}
}
