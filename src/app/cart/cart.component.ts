import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MessageService } from '../message.service';
import { ProductItem } from '../product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Map<number, number> = new Map();
  products: ProductItem[] = [];

  constructor(private cartService: CartService, private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.cart = this.cartService.get();
    this.productService.get().subscribe(data => {
      this.log(`Got products!`);
      this.products = data;
    });
  }

  getProduct(id: number): ProductItem {
    const p = this.products.find(e => e.id === id);
    if (p)
      return p;
    this.log(`Invalid product!`);
    return { id: 0, name: '', price: 0, description: '', url: '' };
  }

  private log(message: string) {
    this.messageService.add(`CartComponent: ${message}`);
  }
}
