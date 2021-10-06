import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private contents: Map<number, number> = new Map();

  constructor(private messageService: MessageService) { }

  get(): Map<number, number> {
    return this.contents;
  }

  add(id: number, quantity: number): void {
    const c = this.contents.get(id);
    this.contents.set(id, (c ?? 0) + quantity);
    this.log(`Add product to cart, id: ${id}, total quantity: ${this.contents.get(id)}`);
  }

  edit(id: number, quantity: number): void {
    this.contents.set(id, quantity);
    this.log(`Edit cart, id: ${id}, total quantity: ${this.contents.get(id)}`);
  }

  remove(id: number): void {
    this.contents.delete(id);
    this.log(`Remove from cart, id: ${id}`);
  }

  clear(): void {
    this.contents.clear();
    this.log(`Clear cart`);
  }

  private log(message: string) {
    this.messageService.add(`CartService: ${message}`);
  }
}
