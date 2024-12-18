import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  @Output()
  onClickProduct = new EventEmitter<Product>();

  ngOnInit(): void {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => this.products = res.products);
  }
}
