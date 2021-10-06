import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: Map<number, number> = new Map();
  full_name: string = '';
  address: string = '';
  credit_card: number = 0;

  @Output() submitOrder: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.get();
  }

  submitForm(): void {
    this.submitOrder.emit();
  }
}
