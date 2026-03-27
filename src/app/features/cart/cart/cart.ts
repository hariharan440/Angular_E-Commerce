import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';
import { CartItem } from '../../../models/cart-item.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart {
  readonly cartItems$: Observable<CartItem[]>;
  readonly errors$: Observable<string>;

  constructor(private readonly cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
    this.errors$ = this.cartService.error$;
  }

  removeItem(name: string): void {
    this.cartService.removeFromCart(name);
  }

  decrease(item: CartItem): void {
    this.cartService.decreaseQuantity(item);
  }

  increase(item: CartItem): void {
    this.cartService.increaseQuantity(item);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  canCheckout(): boolean {
    return this.cartService.canCheckout();
  }
}
