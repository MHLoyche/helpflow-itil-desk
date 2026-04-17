import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './shared/page-header/page-header';
import { Sidebar } from './shared/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [PageHeader, Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
