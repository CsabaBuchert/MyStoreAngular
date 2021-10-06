import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ProductItem } from '../product-item/product-item';
import { PRODUCTS } from './mock.product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductItem[] = PRODUCTS;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.log(`init`);
  }

  private log(message: string) {
    this.messageService.add(`ProductListComponent: ${message}`);
  }
}
