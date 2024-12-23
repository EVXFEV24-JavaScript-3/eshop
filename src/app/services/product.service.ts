import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  activeProduct: Product | null = null;

  constructor() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => this.products = res.products);
  }

  saveProductsToLocalStorage(): void {
    localStorage.setItem("products", JSON.stringify(this.products));
  }
}