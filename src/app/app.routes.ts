import { Routes } from '@angular/router';

export const routes: Routes = [
    // Home page - prerenderable
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home) },

    // Inbound main page - prerenderable
    { path: 'inbound', loadComponent: () => import('./components/inbound/inbound').then(m => m.Inbound) },

    // Inbound package page with state param - client-side only
    {
        path: 'inbound/:state',
        loadComponent: () => import('./components/inbound/inbound-package/inbound-package')
            .then(m => m.InboundPackage),
        data: { renderMode: 'client' }  // <-- ensures client-side rendering
    },

    // Outbound page - prerenderable
    { path: 'outbound', loadComponent: () => import('./components/outbound/outbound').then(m => m.Outbound) },

    // Contact page - prerenderable
    { path: 'contact', loadComponent: () => import('./components/pages/contact/contact').then(m => m.Contact) }
];
