import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import {Login} from "./features/auth/login/login";
import {authGuard} from "./core/auth/auth.guard";
import {Dashboard} from "./features/dashboard/dashboard";
import {Test} from "./features/test/test";

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'test',
        component: Test,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];