import { Routes } from '@angular/router';
import { AppLayoutPage } from './app-layout/app-layout.page';
import { HomePage } from './home/home.page';
import { TodoPage } from './todo/todo.page';
import { MedicationPage } from './medication/medication.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-layout/home',
    pathMatch: 'full',
  },
  {
    path: 'app-layout',
    component: AppLayoutPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'todo',
        component: TodoPage,
      },
      {
        path: 'medication',
        component: MedicationPage,
      },
    ]
  },
];
