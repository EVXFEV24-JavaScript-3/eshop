import { Injectable } from '@angular/core';
import { Page } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  activePage: Page = Page.Home;

  constructor() { }

  navigate(page: Page): void {
    this.activePage = page;
  }
}
