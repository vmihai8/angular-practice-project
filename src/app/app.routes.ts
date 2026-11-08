import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
  },
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then((m) => m.MainLayout),
    canActivate: [authGuard],
    children: [
      {
        path: 'rendering',
        loadComponent: () => import('./features/rendering/rendering').then((m) => m.Rendering),
      },
      {
        path: 'signals',
        loadComponent: () => import('./features/signals/signals').then((m) => m.Signals),
      },
      {
        path: 'rxjs-search',
        loadComponent: () => import('./features/rxjs-search/rxjs-search').then((m) => m.RxjsSearch),
      },
      {
        path: 'interop',
        loadComponent: () => import('./features/interop/interop').then((m) => m.Interop),
      },
      {
        path: 'testing',
        loadComponent: () => import('./features/testing/testing').then((m) => m.Testing),
      },
      {
        path: 'communication',
        loadComponent: () =>
          import('./features/communication/communication').then((m) => m.Communication),
      },
      {
        path: 'communication-patterns',
        loadComponent: () =>
          import('./features/communication-patterns/communication-patterns').then(
            (m) => m.CommunicationPatterns
          ),
      },
      {
        path: 'forms',
        loadComponent: () => import('./features/forms/forms').then((m) => m.Forms),
      },
      {
        path: 'control-flow',
        loadComponent: () =>
          import('./features/control-flow/control-flow').then((m) => m.ControlFlow),
      },
      {
        path: 'defer',
        loadComponent: () => import('./features/defer/defer').then((m) => m.Defer),
      },
      {
        path: 'directives',
        loadComponent: () => import('./features/directives/directives').then((m) => m.Directives),
      },
      {
        path: 'pipes',
        loadComponent: () => import('./features/pipes/pipes').then((m) => m.Pipes),
      },
      {
        path: 'di',
        loadComponent: () => import('./features/di/di').then((m) => m.Di),
      },
      {
        path: 'guards',
        loadComponent: () => import('./features/guards/guards').then((m) => m.Guards),
      },
      {
        path: 'resolvers',
        loadComponent: () => import('./features/resolvers/resolvers').then((m) => m.Resolvers),
      },
      {
        path: 'http',
        loadComponent: () => import('./features/http/http').then((m) => m.Http),
      },
      {
        path: 'interceptors',
        loadComponent: () =>
          import('./features/interceptors/interceptors').then((m) => m.Interceptors),
      },
      {
        path: 'debugging',
        loadComponent: () => import('./features/debugging/debugging').then((m) => m.Debugging),
      },
      {
        path: 'change-detection',
        loadComponent: () =>
          import('./features/change-detection/change-detection').then((m) => m.ChangeDetection),
      },
      {
        path: 'angular-22',
        loadComponent: () => import('./features/angular-22/angular-22').then((m) => m.Angular22),
      },
      {
        path: '',
        redirectTo: 'rendering',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'rendering',
  },
];
