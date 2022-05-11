import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetCardsService } from 'src/app/Services/get-cards.service';
import { GetTabService } from 'src/app/Services/get-tab.service';
import { ITab } from 'src/models/cards';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(
    widgetsContent: ElementRef<any>,
    private getCard: GetCardsService
  ) {
    this.widgetsContent = widgetsContent;
  }

  tabs!: ITab[];

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  selectedTab!: ITab;

  getTab(tab: ITab) {
    return (this.selectedTab = tab);
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {
    this.tabs = this.getCard.getCards();
    this.selectedTab = this.tabs[0];
  }
}
