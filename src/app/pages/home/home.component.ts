import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  get products(): Product[] {
    return this.productService.products;
  }
}
