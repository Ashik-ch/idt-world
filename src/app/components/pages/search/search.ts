import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import {
  SearchResponse,
  SearchResult,
  SearchService,
} from '../../../services/search.service';

interface LoadingStep {
  label: string;
  active: boolean;
  done: boolean;
}

const QUICK_SEARCHES = [
  { icon: 'pi-map',       label: 'Kerala Tours',   query: 'Kerala tour package' },
  { icon: 'pi-globe',     label: 'International',  query: 'International packages' },
  { icon: 'pi-car',       label: 'Transport',      query: 'transport vehicle hire' },
  { icon: 'pi-heart-fill', label: 'Honeymoon',     query: 'honeymoon package Kerala' },
  { icon: 'pi-users',     label: 'Group Tour',     query: 'group tour bus hire' },
  { icon: 'pi-star',      label: 'Luxury',         query: 'luxury vehicle' },
];

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class SearchPage implements OnInit, OnDestroy {
  @ViewChild('mainInput') mainInputRef!: ElementRef<HTMLInputElement>;

  private route   = inject(ActivatedRoute);
  private router  = inject(Router);
  private svc     = inject(SearchService);
  private cdr     = inject(ChangeDetectorRef);

  query        = '';
  inputQuery   = '';
  isLoading    = false;
  response: SearchResponse | null = null;
  displayedAnswer = '';
  suggestions: string[] = [];
  showSuggestions = false;
  recentSearches: string[] = [];
  quickSearches = QUICK_SEARCHES;

  loadingSteps: LoadingStep[] = [
    { label: 'Finding relevant packages...',    active: false, done: false },
    { label: 'Analysing your request...',       active: false, done: false },
    { label: 'Reading package information...',  active: false, done: false },
    { label: 'Preparing your answer...',        active: false, done: false },
  ];

  private subs        = new Subscription();
  private typingTimer: ReturnType<typeof setInterval> | null = null;
  private loadingTimer: ReturnType<typeof setInterval> | null = null;
  private suggestion$ = new Subject<string>();

  // ─── Lifecycle ─────────────────────────────────────────────────────────────

  ngOnInit() {
    this.loadRecentSearches();

    this.subs.add(
      this.route.queryParamMap.subscribe(params => {
        const q = params.get('q') ?? '';
        if (q && q !== this.query) {
          this.query      = q;
          this.inputQuery = q;
          this.runSearch(q);
        }
      }),
    );

    this.subs.add(
      this.suggestion$.pipe(debounceTime(220), distinctUntilChanged()).subscribe(q => {
        this.suggestions     = q.length >= 2 ? this.svc.getSuggestions(q) : [];
        this.showSuggestions = this.suggestions.length > 0;
        this.cdr.markForCheck();
      }),
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.clearTimers();
  }

  // ─── Search input ──────────────────────────────────────────────────────────

  onInputChange(value: string) {
    this.suggestion$.next(value);
  }

  submit() {
    const q = this.inputQuery.trim();
    if (!q) return;
    this.showSuggestions = false;
    this.router.navigate(['/search'], { queryParams: { q } });
  }

  selectSuggestion(s: string) {
    this.inputQuery      = s;
    this.showSuggestions = false;
    this.router.navigate(['/search'], { queryParams: { q: s } });
  }

  hideSuggestions() {
    setTimeout(() => { this.showSuggestions = false; this.cdr.markForCheck(); }, 160);
  }

  searchQuick(q: string) {
    this.inputQuery = q;
    this.router.navigate(['/search'], { queryParams: { q } });
  }

  searchRecent(q: string) {
    this.inputQuery = q;
    this.router.navigate(['/search'], { queryParams: { q } });
  }

  // ─── Core search ───────────────────────────────────────────────────────────

  private runSearch(query: string) {
    this.clearTimers();
    this.isLoading  = true;
    this.response   = null;
    this.displayedAnswer = '';
    this.resetSteps();
    this.saveRecentSearch(query);
    this.cdr.markForCheck();

    // Result is computed synchronously; animation provides perceived AI latency
    const result = this.svc.search(query);

    // Animate loading steps at 700 ms cadence
    this.loadingSteps[0].active = true;
    this.cdr.markForCheck();
    let stepIdx = 1;

    this.loadingTimer = setInterval(() => {
      this.loadingSteps[stepIdx - 1].done   = true;
      this.loadingSteps[stepIdx - 1].active = false;

      if (stepIdx < this.loadingSteps.length) {
        this.loadingSteps[stepIdx].active = true;
        stepIdx++;
      } else {
        clearInterval(this.loadingTimer!);
        this.loadingTimer = null;
        // Subscribe to result (instant) after animation completes
        this.subs.add(
          result.subscribe(res => {
            this.loadingSteps.forEach(s => { s.done = true; s.active = false; });
            setTimeout(() => {
              this.isLoading = false;
              this.response  = res;
              this.cdr.markForCheck();
              this.typeAnswer(res.answer);
            }, 180);
          }),
        );
      }

      this.cdr.markForCheck();
    }, 700);
  }

  private typeAnswer(text: string) {
    this.displayedAnswer = '';
    let i = 0;
    this.typingTimer = setInterval(() => {
      if (i < text.length) {
        this.displayedAnswer += text[i++];
        this.cdr.markForCheck();
      } else {
        clearInterval(this.typingTimer!);
        this.typingTimer = null;
      }
    }, 14);
  }

  private resetSteps() {
    this.loadingSteps.forEach(s => { s.active = false; s.done = false; });
  }

  private clearTimers() {
    if (this.loadingTimer) { clearInterval(this.loadingTimer); this.loadingTimer = null; }
    if (this.typingTimer)  { clearInterval(this.typingTimer);  this.typingTimer  = null; }
  }

  // ─── Recent searches ───────────────────────────────────────────────────────

  private saveRecentSearch(q: string) {
    this.recentSearches = [q, ...this.recentSearches.filter(s => s !== q)].slice(0, 5);
    try { localStorage.setItem('idt_recent_searches', JSON.stringify(this.recentSearches)); } catch {}
  }

  private loadRecentSearches() {
    try { this.recentSearches = JSON.parse(localStorage.getItem('idt_recent_searches') ?? '[]'); } catch {}
  }

  // ─── Display helpers ───────────────────────────────────────────────────────

  isTyping(): boolean {
    return !!this.response && this.displayedAnswer.length < this.response.answer.length;
  }

  parseMarkdown(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '<br><br>');
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      transport: 'bg-blue-100 text-blue-700',
      inbound:   'bg-green-100 text-green-700',
      outbound:  'bg-purple-100 text-purple-700',
    };
    return map[type] ?? 'bg-gray-100 text-gray-600';
  }

  getTypeIconBg(type: string): string {
    const map: Record<string, string> = {
      transport: 'bg-blue-50 text-blue-600',
      inbound:   'bg-green-50 text-green-600',
      outbound:  'bg-purple-50 text-purple-600',
    };
    return map[type] ?? 'bg-gray-50 text-gray-500';
  }

  getTypeIcon(type: string): string {
    const map: Record<string, string> = {
      transport: 'pi pi-car',
      inbound:   'pi pi-map',
      outbound:  'pi pi-globe',
    };
    return map[type] ?? 'pi pi-search';
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      transport: 'Transportation',
      inbound:   'Kerala Tour',
      outbound:  'International',
    };
    return map[type] ?? type;
  }

  trackByTitle(_: number, r: SearchResult) { return r.title + r.type; }
}
