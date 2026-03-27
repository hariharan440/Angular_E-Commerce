import { Component } from '@angular/core';
import { LayoutShellComponent } from './layout/layout-shell';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutShellComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // Root app is an entrypoint to layout shell
}
