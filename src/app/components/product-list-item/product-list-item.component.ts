import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RoutingService } from '../../services/routing.service';
import { Page } from '../../app.component';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input()
  product: Product = ({} as any) as Product;

  private productService: ProductService;
  private routingService: RoutingService;

  constructor(productService: ProductService, routingService: RoutingService) {
    this.productService = productService;
    this.routingService = routingService;
  }

  visitProduct(): void {
    this.productService.activeProduct = this.product;
    this.routingService.navigate(Page.Product);
  }
}
