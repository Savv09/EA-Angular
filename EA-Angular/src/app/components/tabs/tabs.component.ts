import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { GetTabService } from "src/app/Services/get-tab.service";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {



  constructor(widgetsContent: ElementRef<any>, private getTabs: GetTabService) {
    this.widgetsContent = widgetsContent;
  }

  tabs: string[] = [];

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.tabs = this.getTabs.getTabs();
  }
}
