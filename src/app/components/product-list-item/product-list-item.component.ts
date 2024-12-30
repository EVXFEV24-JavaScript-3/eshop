import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input()
  product: Product = ({} as any) as Product;

  constructor(private productService: ProductService, private router: Router) { }

  visitProduct(): void {
    this.router.navigate(["/product", this.product.id]);
  }
}
