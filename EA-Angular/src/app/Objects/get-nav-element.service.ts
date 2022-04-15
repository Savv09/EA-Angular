import { Injectable } from '@angular/core';
import { NavElements } from './nav-elements';
@Injectable({
  providedIn: 'root'
})
export class GetNavElementService {
getNavbar() {
  return NavElements;
}
  constructor() { }
}
