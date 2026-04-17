import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'tickets', loadComponent: () => import('./features/tickets/tickets').then(m => m.Tickets) },
  { path: 'knowledge-base', loadComponent: () => import('./features/knowledge-base/knowledge-base').then(m => m.KnowledgeBase) },
  { path: 'sla', loadComponent: () => import('./features/sla/sla').then(m => m.Sla) },
  //{ path: 'reports', loadComponent: () => import('./features/reports/reports').then(m => m.Reports) },
  //{ path: 'admin', loadComponent: () => import('./features/admin/admin').then(m => m.Admin) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};