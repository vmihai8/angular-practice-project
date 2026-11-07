import { Component, signal } from '@angular/core';
import {MainLayout} from "./layout/main-layout/main-layout";
import {RouterOutlet} from "@angular/router";

@Component({
  imports: [MainLayout, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-practice-project');
}
