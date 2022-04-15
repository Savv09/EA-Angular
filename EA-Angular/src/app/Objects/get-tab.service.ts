import { Injectable } from '@angular/core';
import { tabStrings } from './tabs';
@Injectable({
  providedIn: 'root'
})
export class GetTabService {
  getTabs() {
    return tabStrings;
  }
  constructor() { }
}
