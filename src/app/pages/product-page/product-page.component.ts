import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  productId: number = -1;
  private productService: ProductService;

  constructor(productService: ProductService, activatedRoute: ActivatedRoute) {
    this.productService = productService;

    activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id");
      if (id == null) {
        this.productId = -1;
      } else {
        this.productId = Number.parseInt(id);
      }
    });
  }

  get product(): Product | undefined {
    return this.productService.products.find(product => product.id === this.productId);
  }
}
