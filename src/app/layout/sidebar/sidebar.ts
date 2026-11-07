import {Component, inject, signal} from '@angular/core';
import { RouterLink } from '@angular/router';
import {AuthService} from "../../core/auth/auth.service";

interface MenuItem {
  label: string;
  route: string;
  active: boolean;
}

@Component({
  imports: [RouterLink],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  private readonly authService = inject(AuthService);

  protected readonly menuItems = signal<MenuItem[]>([
    {
      label: 'Dashboard',
      route: '/dashboard',
      active: true,
    },
    {
      label: 'Test',
      route: '/test',
      active: false,
    },
  ]);

  protected selectItem(route: string): void {
    this.menuItems.update(items =>
      items.map(item => ({
        ...item,
        active: item.route === route,
      }))
    );
  }

  logout() {
    this.authService.logout();
  }
}