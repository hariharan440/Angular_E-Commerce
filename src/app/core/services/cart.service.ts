import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartSubject.asObservable();

  private readonly errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  addToCart(product: Product): void {
    const cart = [...this.cartSubject.value];
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        this.errorSubject.next('Maximum stock reached');
        return;
      }
      existingItem.quantity += 1;
    } else {
      if (product.stock <= 0) {
        this.errorSubject.next('Out of stock');
        return;
      }
      cart.push({ ...product, quantity: 1 });
    }

    this.setCart(cart);
  }

  increaseQuantity(item: CartItem): void {
    const cart = [...this.cartSubject.value];
    const found = cart.find((entry) => entry.name === item.name);

    if (!found) return;
    if (found.quantity >= found.stock) {
      this.errorSubject.next('Cannot exceed available stock');
      return;
    }

    found.quantity += 1;
    this.setCart(cart);
  }

  decreaseQuantity(item: CartItem): void {
    const cart = [...this.cartSubject.value];
    const found = cart.find((entry) => entry.name === item.name);
    if (!found) return;

    found.quantity -= 1;
    if (found.quantity <= 0) {
      this.removeFromCart(found.name);
      return;
    }

    this.setCart(cart);
  }

  removeFromCart(name: string): void {
    const updated = this.cartSubject.value.filter((item) => item.name !== name);
    this.setCart(updated);
  }

  getTotal(): number {
    return this.cartSubject.value.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  canCheckout(): boolean {
    return this.cartSubject.value.every((item) => item.quantity <= item.stock);
  }

  private setCart(cart: CartItem[]): void {
    this.errorSubject.next('');
    this.cartSubject.next(cart);
  }
}
