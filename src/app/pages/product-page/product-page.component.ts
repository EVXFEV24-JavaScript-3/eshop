import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  get product(): Product {
    return this.productService.activeProduct as Product;
  }
}
