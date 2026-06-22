import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home), title: 'Home' },
    { path: 'inbound', loadComponent: () => import('./components/inbound/inbound').then(m => m.Inbound), title: 'Inbound Tours' },
    { path: 'inbound/:state', loadComponent: () => import('./components/inbound/inbound-package/inbound-package').then(m => m.InboundPackage), title: 'Inbound Package' },
    { path: 'outbound', loadComponent: () => import('./components/outbound/outbound').then(m => m.Outbound), title: 'Outbound Tours' },
    { path: 'outbound/:country', loadComponent: () => import('./components/outbound/outbound-package/outbound-package').then(m => m.OutboundPackage), title: 'Outbound Packages' },
    { path: 'blog', loadComponent: () => import('./components/pages/blog/blog').then(m => m.Blog), title: 'News & Blog' },
    { path: 'blog/:id', loadComponent: () => import('./components/pages/blog-detail/blog-detail').then(m => m.BlogDetail), title: 'Article' },
    { path: 'contact', loadComponent: () => import('./components/pages/contact/contact').then(m => m.Contact), title: 'Contact Us' },
    { path: 'admin-panel', loadComponent: () => import('./components/pages/admin-panel/admin-panel').then(m => m.AdminPanel), title: 'Admin Panel' },
    { path: 'vlogs', loadComponent: () => import('./components/pages/vlogs/vlogs').then(m => m.Vlogs), title: 'Vlogs & Virtual Tours' },
    { path: 'voucher', loadComponent: () => import('./components/pages/voucher/voucher').then(m => m.Voucher), title: 'Voucher' },
    { path: 'hotel/:id', loadComponent: () => import('./components/pages/hotels-view/hotels-view').then(m => m.HotelsView), title: 'Hotel Details' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
