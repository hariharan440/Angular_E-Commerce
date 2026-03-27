import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-layout-shell',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <main class="bg-slate-50 min-h-[calc(100vh-68px)]">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class LayoutShellComponent {}
