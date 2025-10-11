// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [{
  path: 'inbound/:state',
  renderMode: RenderMode.Prerender,
  async getPrerenderParams() {
    return [
      { state: 'kerala' },
      { state: 'delhi' },
      { state: 'karnataka' }
    ];
  }
}
];