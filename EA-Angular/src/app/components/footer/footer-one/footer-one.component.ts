import { Component, OnInit } from '@angular/core';
import { Iicons } from 'src/models/icons';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.css']
})
export class FooterOneComponent implements OnInit {
 icons: Iicons[]= 
 [
  {
    iconUrl:   "../../../assets/fb_icon.png"
  },
  {
    iconUrl:  "../../../assets/twitter_icon_bold.png"
  },
  {
    iconUrl:  "../../../assets/yt_icon.png"
  },
  {
    iconUrl:  "../../../assets/ig_icon.png"
  },
  {
    iconUrl:  "../../../assets/twitch_icon.png"
  }
  

 ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
