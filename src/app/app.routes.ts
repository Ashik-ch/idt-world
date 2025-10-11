import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home), title: 'Home' },
    { path: 'inbound', loadComponent: () => import('./components/inbound/inbound').then(m => m.Inbound), title: 'Inbound Tours' },
    // { path: 'inbound/:state', loadComponent: () => import('./components/inbound/inbound-package/inbound-package').then(m => m.InboundPackage), title: 'Inbound Package' },
    { path: 'outbound', loadComponent: () => import('./components/outbound/outbound').then(m => m.Outbound), title: 'Outbound Tours' },
    { path: 'contact', loadComponent: () => import('./components/pages/contact/contact').then(m => m.Contact), title: 'Contact Us' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
