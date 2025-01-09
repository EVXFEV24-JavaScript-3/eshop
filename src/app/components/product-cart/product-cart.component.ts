import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
  @Input()
  cartOpened = false;

  @Output()
  onCloseCart = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  get cart(): CartItem[] {
    return this.cartService.cart;
  }
}
