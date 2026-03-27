import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-50 p-6">
      <div class="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 class="text-3xl font-bold text-slate-900">Orders</h1>
        <p class="mt-2 text-slate-500">Order history feature placeholder. In production you would connect this with API and My Orders service.</p>
      </div>
    </div>
  `,
})
export class Orders {}
