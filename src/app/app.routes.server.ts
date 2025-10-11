// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'inbound', renderMode: RenderMode.Prerender },
  {
    path: 'inbound/:state', renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { state: 'kerala' },
        { state: 'delhi' },
        { state: 'karnataka' }
      ];
    }
  },
  { path: 'outbound', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client }
];