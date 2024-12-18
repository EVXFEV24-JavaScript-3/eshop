import { Component, EventEmitter, Output } from '@angular/core';
import { Page } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output()
  onNavigate = new EventEmitter<Page>();

  getPageValues(): [string, Page][] {
    return Object.entries(Page).filter(pair => pair[0] != 'Product');
  }
}
