import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { PRODUCTS } from './mock.product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductItem[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
