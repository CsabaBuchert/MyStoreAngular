import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductItem } from '../product-item';
import { MessageService } from '../message.service';
import { PRODUCTS } from '../product-list/mock.product-list';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: ProductItem = {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    price: 0
  };
  selectInput: number = 1;

  constructor(private route: ActivatedRoute, private location: Location, private messageService: MessageService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as unknown as string);

    // temporary solution
    const p = PRODUCTS.find(e => e.id === id);
    if (p) {
      this.product = p;
    }
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.log(`Add to cart ${this.selectInput} ${this.product?.name}`);
  }

  goBack(): void {
    this.location.back();
    this.log(`back`);
  }

  private log(message: string) {
    this.messageService.add(`ProductItemDetailComponent: ${message}`);
  }
}
