import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        title: 'Home',
        loadComponent: () => import('./dashboard/dashboard.component')
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
