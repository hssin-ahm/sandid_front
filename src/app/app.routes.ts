import { Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { authGuard } from './core/guards/auth.guard';
import { StarterComponent } from './views/features/starter/starter.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/features/auth/auth.routes'),
  },

  {
    path: '',
    component: BaseComponent,
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'start',
        component: StarterComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/features/dashboard/dashboard.routes'),
      },
    ],
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./views/features/error/error.component').then(
        (c) => c.ErrorComponent
      ),
  },
  {
    path: 'error/:type',
    loadComponent: () =>
      import('./views/features/error/error.component').then(
        (c) => c.ErrorComponent
      ),
  },
  { path: '**', redirectTo: 'error/404', pathMatch: 'full' },
];
