import { Component } from '@angular/core';
import { Product } from './models/product';

export enum Page {
  Home = 'Home',
  Shop = 'Shop',
  Product = 'Product',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eshop';
  activePage: Page = Page.Home;
  activeProduct: Product | null = null;

  navigate(page: Page): void {
    this.activePage = page;
  }

  visitProduct(product: Product): void {
    this.activeProduct = product;
    this.navigate(Page.Product);
  }
}
