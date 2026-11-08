import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

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
    { label: '01 Rendering and lifecycle', route: '/rendering', active: true },
    { label: '02 Signals', route: '/signals', active: false },
    { label: '03 RxJS search', route: '/rxjs-search', active: false },
    { label: '04 Signals and Observables', route: '/interop', active: false },
    { label: '05 Jest testing', route: '/testing', active: false },
    { label: '06 Inputs and outputs', route: '/communication', active: false },
    { label: '07 Other communication patterns', route: '/communication-patterns', active: false },
    { label: '08 Reactive Forms', route: '/forms', active: false },
    { label: '09 Template control flow', route: '/control-flow', active: false },
    { label: '10 Deferred loading', route: '/defer', active: false },
    { label: '11 Directives', route: '/directives', active: false },
    { label: '12 Pipes', route: '/pipes', active: false },
    { label: '13 Dependency injection', route: '/di', active: false },
    { label: '14 Route guards', route: '/guards', active: false },
    { label: '15 Route data and resolvers', route: '/resolvers', active: false },
    { label: '16 HTTP requests', route: '/http', active: false },
    { label: '17 Interceptors and token refresh', route: '/interceptors', active: false },
    { label: '18 Request debugging', route: '/debugging', active: false },
    { label: '19 Change detection', route: '/change-detection', active: false },
    { label: '20 Angular 22 quick review', route: '/angular-22', active: false },
  ]);

  protected selectItem(route: string): void {
    this.menuItems.update((items) =>
      items.map((item) => ({
        ...item,
        active: item.route === route,
      }))
    );
  }

  logout() {
    this.authService.logout();
  }
}
