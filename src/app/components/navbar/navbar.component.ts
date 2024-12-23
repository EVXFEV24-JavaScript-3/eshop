import { Component, EventEmitter, Output } from '@angular/core';
import { Page } from '../../app.component';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private routingService: RoutingService;

  constructor(routingService: RoutingService) {
    this.routingService = routingService;
  }

  getPageValues(): [string, Page][] {
    return Object.entries(Page).filter(pair => pair[0] != 'Product');
  }

  navigate(page: Page): void {
    this.routingService.navigate(page);
  }
}
