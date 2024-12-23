import { Component } from '@angular/core';
import { Product } from './models/product';
import { RoutingService } from './services/routing.service';
import { ProductService } from './services/product.service';

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

  private routingService: RoutingService;
  private productService: ProductService;

  constructor(routingService: RoutingService, productService: ProductService) {
    this.routingService = routingService;
    this.productService = productService;
  }

  get page(): Page {
    return this.routingService.activePage;
  }

  get activeProduct(): Product | null {
    return this.productService.activeProduct;
  }
}
