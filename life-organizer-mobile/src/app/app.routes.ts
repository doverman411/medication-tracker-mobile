import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './home/home.page';
import { CheckPage } from './check/check.page';
import { StreakPage } from './streak/streak.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'check',
        loadComponent: () => import('./check/check.page').then((m) => m.CheckPage),
      },
      {
        path: 'streak',
        loadComponent: () => import('./streak/streak.page').then((m) => m.StreakPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];