import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../models/product.model';
import { Observable, of, switchMap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail {
  readonly product$: Observable<Product | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const name = params.get('name');
        return name ? this.productService.getProductByName(name) : of(undefined);
      })
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
