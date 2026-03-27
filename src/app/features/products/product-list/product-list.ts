import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  products$!: Observable<Product[]>;

  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {
    this.products$ = this.productService.getProducts();
  }

  viewProduct(product: Product): void {
    this.router.navigate(['/product', product.name]);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
