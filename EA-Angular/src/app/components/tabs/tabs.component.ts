import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(widgetsContent: ElementRef<any>) {
    this.widgetsContent = widgetsContent;
  }

  tabs: string[] = [
    'Notizie EA',
    'EA Play',
    'Madden NFL',
    'Apex Legends',
    'FIFA',
    'Battlefield',
    'The Sims 4',
    'F1 2021',
    'Inside EA',
  ];

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  ngOnInit(): void {}
}
