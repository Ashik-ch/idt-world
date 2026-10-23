export const COMMON_VOUCHER_DESCRIPTION =
  'Four exclusive Kerala experiences — honeymoon, family, birthday & anniversary. Purchase or gift through WhatsApp with white-glove IDT coordination.';

export interface TourVoucher {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  occasion: string;
  icon: string;
  duration: string;
  value: string;
  guests: string;
  highlights: string[];
  validFor: string;
  badge?: string;
}

export const TOUR_VOUCHERS: TourVoucher[] = [
  {
    id: 'honeymoon-bliss',
    title: 'Honeymoon Bliss',
    tagline: 'An intimate escape crafted for newlyweds',
    description:
      'Private houseboat sunsets, candlelit dinners, couples spa rituals, and handpicked boutique stays across Kerala’s most romantic settings.',
    image: 'assets/images/bali.jpg',
    occasion: 'Honeymoon',
    icon: 'pi pi-heart-fill',
    duration: '6 Nights / 7 Days',
    value: '₹1,25,000',
    guests: 'Per couple',
    highlights: [
      'Premium AC houseboat with private chef',
      'Couples Ayurveda & spa at luxury resort',
      'Sunset cruise with champagne setup',
      'Dedicated relationship concierge',
    ],
    validFor: '12 months · Flexible dates',
    badge: 'Most Romantic',
  },
  {
    id: 'family-legacy',
    title: 'Family Legacy Escape',
    tagline: 'Grand memories for every generation',
    description:
      'A thoughtfully paced luxury family journey with spacious suites, kid-friendly experiences, and exclusive access to Kerala’s finest attractions.',
    image: 'assets/images/family.jpg',
    occasion: 'Family Trip',
    icon: 'pi pi-users',
    duration: '7 Nights / 8 Days',
    value: '₹1,85,000',
    guests: 'Family of 4',
    highlights: [
      'Interconnecting luxury family suites',
      'Private wildlife & elephant park experience',
      'Beach club day with curated activities',
      'Personal family tour coordinator',
    ],
    validFor: '12 months · Flexible dates',
    badge: 'Family Signature',
  },
  {
    id: 'birthday-royale',
    title: 'Birthday Royale',
    tagline: 'Celebrate their day like royalty',
    description:
      'Surprise someone extraordinary with a bespoke birthday voyage — private celebrations, gourmet dining, and once-in-a-lifetime Kerala moments.',
    image: 'assets/images/solo.jpg',
    occasion: 'Birthday Trip',
    icon: 'pi pi-gift',
    duration: '5 Nights / 6 Days',
    value: '₹95,000',
    guests: 'Up to 2 guests',
    highlights: [
      'Custom birthday décor & cake ceremony',
      'Private yacht or houseboat celebration',
      'Gourmet dinner at heritage property',
      'Surprise experience planned by IDT team',
    ],
    validFor: '12 months · Flexible dates',
    badge: 'Celebration Edit',
  },
  {
    id: 'anniversary-gold',
    title: 'Anniversary Gold',
    tagline: 'Honor years of love in timeless style',
    description:
      'Mark a milestone anniversary with golden-tier hospitality — heritage hotels, private cultural evenings, and refined backwater indulgence.',
    image: 'assets/images/trip.jpg',
    occasion: 'Anniversary',
    icon: 'pi pi-star-fill',
    duration: '6 Nights / 7 Days',
    value: '₹1,15,000',
    guests: 'Per couple',
    highlights: [
      'Heritage palace or 5-star boutique stays',
      'Private Kathakali & cultural evening',
      'Champagne anniversary dinner setup',
      'Commemorative photo album from IDT',
    ],
    validFor: '12 months · Flexible dates',
    badge: 'Milestone Luxury',
  },
];
