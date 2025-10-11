import { Routes } from '@angular/router';

export const routes: Routes = [
    // Home page - prerenderable
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home) },

    // Inbound section
    {
        path: 'inbound',
        children: [
            // Inbound main page - prerenderable
            { path: '', loadComponent: () => import('./components/inbound/inbound').then(m => m.Inbound) },
            // Inbound package page with state param - client-side only
            {
                path: ':state',
                loadComponent: () => import('./components/inbound/inbound-package/inbound-package')
                    .then(m => m.InboundPackage),
                providers: [{ provide: 'PRERENDER_SKIP', useValue: true }]
            }
        ]
    },

    // Outbound page - prerenderable
    { path: 'outbound', loadComponent: () => import('./components/outbound/outbound').then(m => m.Outbound) },

    // Contact page - prerenderable
    { path: 'contact', loadComponent: () => import('./components/pages/contact/contact').then(m => m.Contact) }
];
