import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetNavElementService } from 'src/app/Services/get-nav-element.service';
import { InavElement } from 'src/models/navelement';


@Component({
  selector: 'app-sidebar-media',
  templateUrl: './sidebar-media.component.html',
  styleUrls: ['./sidebar-media.component.css']
})

export class SidebarMediaComponent implements OnInit {
  @Input() changeBg: boolean = true;
  @Output() BgDark = new EventEmitter<void>();
  
  elements: InavElement[]= []
  opened = false;
  toggle() {
    this.opened = !this.opened;
  }
  constructor(private getNavElement: GetNavElementService) {

   }

  ngOnInit(): void {
this.elements= this.getNavElement.getNavbar()
  }

}
