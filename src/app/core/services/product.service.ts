import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = '/assets/data/product.json';
  private products$?: Observable<Product[]>;

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (!this.products$) {
      this.products$ = this.http.get<Product[]>(this.apiUrl).pipe(
        shareReplay({ bufferSize: 1, refCount: false })
      );
    }
    return this.products$;
  }

  getProductByName(name: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find((product) => product.name === name))
    );
  }
}
