import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/products/product-list/product-list').then(m => m.ProductList),
  },
  {
    path: 'product/:name',
    loadComponent: () => import('./features/products/product-detail/product-detail').then(m => m.ProductDetail),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart/cart').then(m => m.Cart),
  },
  {
    path: 'orders',
    loadComponent: () => import('./features/orders/orders').then(m => m.Orders),
  },
  { path: '**', redirectTo: '' },
];
