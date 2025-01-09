import { Injectable } from '@angular/core';
import { Product } from '../models/product';

export class CartItem {
  product: Product;
  amount: number;

  constructor(product: Product, amount: number) {
    this.product = product;
    this.amount = amount;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product): void {
    let items = this.cart;
    let existingItem = items.find((item) => item.product.id === product.id);
    if (existingItem !== undefined) {
      existingItem.amount++;
      localStorage.setItem('cart', JSON.stringify(items));
      return;
    }

    let item = new CartItem(product, 1);
    items.push(item);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  removeFromCart(productId: number): void {
    let items = this.cart.filter((item) => item.product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  get cart(): CartItem[] {
    let storageItems = localStorage.getItem('cart');
    if (storageItems !== null) {
      return JSON.parse(storageItems);
    }

    return [];
  }
}
