import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eshop';
  cartOpened = false;

  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }
}
