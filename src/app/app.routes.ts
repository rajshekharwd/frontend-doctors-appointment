import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login)},

  {
    path: '',
    loadComponent: () =>
      import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/components/home/home').then(m => m.Home),
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
