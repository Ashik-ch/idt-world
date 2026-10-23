import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Fuse from 'fuse.js';

import { TRANSPORT_CATEGORIES } from '../data/transportation.data';
import { outBoundPackages } from '../data/outbound.data';
import { statesData } from '../data/inbound.data';
import { hotelsData } from '../data/hotels.data';

// ─── Public types ─────────────────────────────────────────────────────────────

export type SearchResultType = 'inbound' | 'outbound' | 'transport' | 'hotel';

export interface SearchResult {
  type: SearchResultType;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  price?: string;
  link: string;
  tags?: string[];
  score: number;
}

export interface SearchResponse {
  query: string;
  answer: string;
  results: SearchResult[];
  totalMatches: number;
}

// ─── Internal flat index item ─────────────────────────────────────────────────

interface IndexItem {
  type: SearchResultType;
  title: string;
  subtitle: string;
  description: string;
  keywords: string;
  badge?: string;
  price?: string;
  link: string;
  tags: string[];
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class SearchService {

  private readonly index: IndexItem[] = [];
  private fuse!: Fuse<IndexItem>;

  constructor() {
    this.buildIndex();
    this.fuse = new Fuse(this.index, {
      keys: [
        { name: 'title',       weight: 5 },
        { name: 'keywords',    weight: 3 },
        { name: 'subtitle',    weight: 2 },
        { name: 'description', weight: 1 },
      ],
      threshold: 0.38,
      minMatchCharLength: 2,
      includeScore: true,
      ignoreLocation: true,
      useExtendedSearch: false,
    });
  }

  // ─── Index construction ────────────────────────────────────────────────────

  private buildIndex() {
    this.indexHotels();
    this.indexTransport();
    this.indexInbound();
    this.indexOutbound();
  }

  private hotelKeywords(hotel: any, locationName: string): string {
    const starNum = hotel.category?.match(/0?(\d)\s*Star/)?.[1] ?? '';
    const starLabel = starNum ? `${starNum}★` : '';
    const goaExtras = locationName.toLowerCase() === 'goa'
      ? 'beach north goa south goa goa trip'
      : '';
    return [
      hotel.name, hotel.category, hotel.location, locationName,
      starLabel, ...(hotel.pros ?? []),
      'hotel stay resort accommodation package',
      goaExtras,
    ].join(' ');
  }

  private indexHotels() {
    for (const locationGroup of (hotelsData as any[])) {
      const locationName: string = locationGroup.location ?? '';
      for (const hotel of (locationGroup.hotels ?? [])) {
        const starNum = hotel.category?.match(/0?(\d)\s*Star/)?.[1] ?? '';
        const starLabel = starNum ? `${starNum}★` : '';
        const categoryClean = (hotel.category ?? '').replaceAll(' Deluxe Hotel', '').trim();

        this.index.push({
          type:        'hotel',
          title:       hotel.name,
          subtitle:    `${starLabel} · ${hotel.location}`,
          description: (hotel.description ?? '').slice(0, 160),
          keywords:    this.hotelKeywords(hotel, locationName),
          badge:       starLabel || undefined,
          link:        `/hotel/${hotel.id}`,
          tags:        [locationName, categoryClean].filter(Boolean),
        });
      }
    }
  }

  private indexTransport() {
    for (const cat of TRANSPORT_CATEGORIES) {
      const vehicleNames = cat.vehicles.map(v => v.name).join(' ');
      this.index.push({
        type:        'transport',
        title:       cat.title,
        subtitle:    cat.subtitle,
        description: cat.description,
        keywords:    [cat.title, cat.subtitle, cat.description, vehicleNames,
                      cat.idealFor.join(' '), 'transport vehicle hire rent driver'].join(' '),
        badge:       `${cat.vehicles.length} vehicles`,
        price:       cat.vehicles.length ? `From ${cat.vehicles[0].rate}` : undefined,
        link:        `/transport/${cat.id}`,
        tags:        cat.idealFor.slice(0, 3),
      });
    }
  }

  private indexInbound() {
    const kerala = statesData['kerala'];
    if (!kerala) return;
    for (const pkg of (kerala.packages ?? [])) {
      const dealKw = pkg.isTodaysDeal ? 'deal offer discount' : '';
      this.index.push({
        type:        'inbound',
        title:       pkg.name,
        subtitle:    `Kerala · ${pkg.duration}`,
        description: pkg.description,
        keywords:    [pkg.name, pkg.description, dealKw,
                      'kerala inbound package tour trip holiday backwater munnar wayanad domestic'].join(' '),
        badge:       pkg.isTodaysDeal ? "Today's Deal" : undefined,
        price:       `Rs. ${pkg.price} / person`,
        link:        '/inbound/kerala',
        tags:        ['Kerala', pkg.duration, `${pkg.discount}% off`],
      });
    }
  }

  private indexOutbound() {
    for (const pkg of outBoundPackages) {
      this.index.push({
        type:        'outbound',
        title:       pkg.title,
        subtitle:    pkg.subtitle,
        description: pkg.desc,
        keywords:    [pkg.title, pkg.subtitle, pkg.desc, pkg.code,
                      'international abroad outbound foreign tour package'].join(' '),
        link:        `/outbound/${pkg.code}`,
        tags:        [pkg.subtitle],
      });
    }
  }

  // ─── Natural language answer generation ────────────────────────────────────

  private answerForHotels(hotels: SearchResult[]): string {
    if (hotels.length === 0) return '';
    if (hotels.length === 1) {
      return `I found **${hotels[0].title}** — ${hotels[0].subtitle}. ${hotels[0].description.slice(0, 120)}...`;
    }
    const byLoc: Record<string, SearchResult[]> = {};
    for (const h of hotels) {
      const loc = h.tags?.[0] ?? 'Unknown';
      byLoc[loc] = byLoc[loc] ?? [];
      byLoc[loc].push(h);
    }
    const locs = Object.keys(byLoc);
    const topNames = hotels.slice(0, 3).map(h => `**${h.title}**`).join(', ');
    if (locs.length === 1) {
      return `I found **${hotels.length} hotels in ${locs[0]}** including ${topNames}. ` +
        `These range from 3★ Deluxe to 5★ Luxury as part of IDT's curated hotel packages.`;
    }
    return `I found **${hotels.length} hotels** across ${locs.join(', ')} including ${topNames}.`;
  }

  private answerForTransport(transport: SearchResult[]): string {
    if (transport.length === 0) return '';
    if (transport.length === 1) {
      return `For transport, **${transport[0].title}** (${transport[0].subtitle}) is the best fit — starting **${transport[0].price}**.`;
    }
    return `Matching transport categories: ${transport.map(r => `**${r.title}**`).join(', ')}.`;
  }

  private answerForInbound(inbound: SearchResult[]): string {
    if (inbound.length === 0) return '';
    if (inbound.length === 1) {
      return `For Kerala tours, **${inbound[0].title}** (${inbound[0].subtitle}) — ${inbound[0].description}. Priced at ${inbound[0].price}.`;
    }
    return `Found **${inbound.length} Kerala tour packages** — top pick: **${inbound[0].title}** at ${inbound[0].price}.`;
  }

  private answerForOutbound(outbound: SearchResult[]): string {
    if (outbound.length === 0) return '';
    if (outbound.length === 1) {
      return `For international travel, **${outbound[0].title}** (${outbound[0].subtitle}) — ${outbound[0].description}.`;
    }
    const names = outbound.slice(0, 3).map(r => `**${r.title}**`).join(', ');
    return `Matching international destinations: ${names}.`;
  }

  private generateAnswer(query: string, results: SearchResult[]): string {
    const safe = query.replaceAll('<', '&lt;').replaceAll('>', '&gt;');

    if (results.length === 0) {
      return `I searched through all of IDT's hotels, packages, and transport options but couldn't find an exact match for **"${safe}"**. ` +
        `Try a destination (e.g. *Goa*, *Munnar*, *Maldives*), a vehicle type (e.g. *sedan*, *bus*), or a tour type (e.g. *Kerala honeymoon*).`;
    }

    const byType: Record<string, SearchResult[]> = {};
    for (const r of results) {
      byType[r.type] = byType[r.type] ?? [];
      byType[r.type].push(r);
    }

    const parts = [
      this.answerForHotels(byType['hotel'] ?? []),
      this.answerForTransport(byType['transport'] ?? []),
      this.answerForInbound(byType['inbound'] ?? []),
      this.answerForOutbound(byType['outbound'] ?? []),
    ].filter(Boolean);

    const intro = results.length === 1
      ? `Here's what I found for **"${safe}"**:`
      : `Here's what IDT has for **"${safe}"**:`;

    return `${intro}\n\n${parts.join('\n\n')}`;
  }

  // ─── Public API ────────────────────────────────────────────────────────────

  /**
   * Fuzzy-search across all indexed data.
   * Returns an Observable — swap `of(...)` for an HTTP call to plug in an AI API later.
   */
  search(query: string): Observable<SearchResponse> {
    if (!query.trim()) {
      return of({ query, answer: '', results: [], totalMatches: 0 });
    }

    const results: SearchResult[] = this.fuse
      .search(query.trim())
      .slice(0, 10)
      .map(r => ({
        type:        r.item.type,
        title:       r.item.title,
        subtitle:    r.item.subtitle,
        description: r.item.description,
        badge:       r.item.badge,
        price:       r.item.price,
        link:        r.item.link,
        tags:        r.item.tags,
        score:       1 - (r.score ?? 1),
      }));

    return of({
      query,
      answer:       this.generateAnswer(query, results),
      results,
      totalMatches: results.length,
    });
  }

  /** Live autocomplete suggestions */
  getSuggestions(partial: string): string[] {
    if (partial.length < 2) return [];

    const fromIndex = new Fuse(this.index, {
      keys: ['title', 'keywords'],
      threshold: 0.35,
      minMatchCharLength: 2,
      ignoreLocation: true,
    })
      .search(partial, { limit: 6 })
      .map(r => r.item.title);

    const canned = [
      'Goa beach resort',
      'Kerala honeymoon package',
      'Munnar tea trail',
      'Kerala backwaters',
      'Maldives holiday',
      'Dubai package',
      'Thailand tour',
      'Sedan car hire',
      'Tempo traveller group',
      'Luxury bus 45 seater',
      'SUV rental family',
      'Airport transfer',
    ].filter(s => s.toLowerCase().includes(partial.toLowerCase()));

    return [...new Set([...fromIndex, ...canned])].slice(0, 7);
  }
}
