import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ProductItem } from './product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: ProductItem;

  selectInput: number = 1;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.log(`select product: ${this.product?.name}`);
  }

  addToCart() {
    this.log(`Add to cart ${this.selectInput} ${this.product?.name}`);
  }

  private log(message: string) {
    this.messageService.add(`ProductItemComponent: ${message}`);
  }
}
