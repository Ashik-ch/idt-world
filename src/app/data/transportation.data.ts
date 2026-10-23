export interface TransportVehicle {
  name: string;
  rate: string;
  rateUnit: string;
  extraRate: string;
  seats: number;
  note?: string;
  img: string[];
}

export interface TransportCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  vehicles: TransportVehicle[];
  idealFor: string[];
}

export const TRANSPORT_CATEGORIES: TransportCategory[] = [
  {
    id: 'sedan',
    title: 'Sedan Cars',
    subtitle: 'Economy & Comfort Sedans',
    icon: 'assets/images/transportation/sedan/sedan.png',
    description:
      'Ideal for couples, solo travelers, and small families. Our fleet of well-maintained sedan cars offers a comfortable and economical way to explore every destination with ease.',
    features: [
      'Fully air-conditioned interiors',
      'Experienced, professional drivers',
      'Available 24/7 for transfers',
      'GPS-equipped vehicles',
      'Complimentary drinking water',
      'Flexible pickup & drop points',
    ],
    vehicles: [
      {
        name: 'Swift Dzire', rate: 'Rs. 2,700', rateUnit: 'per day', extraRate: 'Rs. 17 / extra km', seats: 4,
        img: [
          'assets/images/transportation/sedan/swift.png',
          'assets/images/transportation/sedan/swift-interior-front.png',
          'assets/images/transportation/sedan/swift-interior-back.png',
          'assets/images/transportation/sedan/swift-exterior.png',
        ],
      },
      {
        name: 'Toyota Etios', rate: 'Rs. 2,700', rateUnit: 'per day', extraRate: 'Rs. 17 / extra km', seats: 4,
        img: [
          'assets/images/transportation/sedan/etios.png',
          'assets/images/transportation/sedan/etios-interior-front.png',
          'assets/images/transportation/sedan/etios-interior-back.png',
          'assets/images/transportation/sedan/etios-exterior.png',
        ],
      },
      {
        name: 'Honda Amaze', rate: 'Rs. 2,700', rateUnit: 'per day', extraRate: 'Rs. 17 / extra km', seats: 4,
        img: [
          'assets/images/transportation/sedan/amaze.png',
          'assets/images/transportation/sedan/amaze-interior-front.png',
          'assets/images/transportation/sedan/amaze-interior-back.png',
          'assets/images/transportation/sedan/amaze-exterior.png',
        ],
      },
    ],
    idealFor: ['Couple Tours', 'Solo Travel', 'Airport Transfers', 'City Sightseeing'],
  },

  {
    id: 'suv',
    title: 'SUV',
    subtitle: 'SUV & Multi-Purpose Vehicles',
    icon: 'assets/images/transportation/suv/suv.png',
    description:
      'Premium SUVs and MPVs perfect for families and small groups. The Innova Crysta stands out with superior comfort, smooth hill-terrain handling, and generous boot space for all your luggage.',
    features: [
      'Spacious interiors for up to 7–8 passengers',
      'Powerful multi-zone AC system',
      'Large boot space for luggage',
      'Smooth & stable on hill terrain',
      'Professional uniformed chauffeurs',
      'Cushioned reclining seats',
    ],
    vehicles: [
      {
        name: 'Ertiga', rate: 'Rs. 3,000', rateUnit: 'per day', extraRate: 'Rs. 19 / extra km', seats: 6,
        img: [
          'assets/images/transportation/suv/ertiga.png',
          'assets/images/transportation/suv/ertiga-interior-front.png',
          'assets/images/transportation/suv/ertiga-interior-back.png',
          'assets/images/transportation/suv/ertiga-exterior.png',
        ],
      },
      {
        name: 'Toyota Innova', rate: 'Rs. 3,600', rateUnit: 'per day', extraRate: 'Rs. 20 / extra km', seats: 7,
        img: [
          'assets/images/transportation/suv/innova.png',
          'assets/images/transportation/suv/innova-interior-front.png',
          'assets/images/transportation/suv/innova-interior-back.png',
          'assets/images/transportation/suv/innova-exterior.png',
        ],
      },
      {
        name: 'Toyota Innova Crysta', rate: 'Rs. 4,200', rateUnit: 'per day', extraRate: 'Rs. 22 / extra km', seats: 7,
        img: [
          'assets/images/transportation/suv/crysta.png',
          'assets/images/transportation/suv/crysta-interior-front.png',
          'assets/images/transportation/suv/crysta-interior-back.png',
          'assets/images/transportation/suv/crysta-exterior.png',
        ],
      },
    ],
    idealFor: ['Family Tours', 'Small Groups', 'Hill Station Travel', 'Corporate Transfers'],
  },

  {
    id: 'tempo-traveller',
    title: 'Tempo Traveller',
    subtitle: 'Force Traveller, Urbania & Luxury Urbania',
    icon: 'assets/images/transportation/tempo/van.png',
    description:
      'Designed for medium-sized groups, pilgrimages, and premium outings. From the reliable Force Traveller to the hotel-on-wheels Luxury Urbania — every group finds their perfect ride.',
    features: [
      'Capacity: 12 to 20 passengers',
      'Push-back cushioned seats',
      'Overhead luggage racks',
      'Powerful roof-mounted AC',
      'Large panoramic windows for scenic views',
      'Premium sound system',
      'Ambient mood lighting (Urbania variants)',
    ],
    vehicles: [
      {
        name: 'Force Traveller', rate: 'Rs. 5,400', rateUnit: 'per day', extraRate: 'Rs. 25 / extra km', seats: 17,
        img: [
          'assets/images/transportation/tempo/tempo.png',
          'assets/images/transportation/tempo/tempo-interior-front.png',
          'assets/images/transportation/tempo/tempo-interior-back.png',
          'assets/images/transportation/tempo/tempo-exterior.png',
        ],
      },
      {
        name: 'Urbania', rate: 'Rs. 9,000', rateUnit: 'per day', extraRate: 'Rs. 33 / extra km', seats: 17,
        img: [
          'assets/images/transportation/tempo/urbania.png',
          'assets/images/transportation/tempo/urbania-interior-front.png',
          'assets/images/transportation/tempo/urbania-interior-back.png',
          'assets/images/transportation/tempo/urbania-exterior.png',
        ],
      },
      {
        name: 'Luxury Urbania', rate: 'Rs. 11,400', rateUnit: 'per day', extraRate: 'Rs. 40 / extra km', seats: 20,
        note: 'Premium amenities included',
        img: [
          'assets/images/transportation/tempo/luxury-urbania.png',
          'assets/images/transportation/tempo/luxury-urbania-interior-front.png',
          'assets/images/transportation/tempo/luxury-urbania-interior-back.png',
          'assets/images/transportation/tempo/luxury-urbania-exterior.png',
        ],
      },
    ],
    idealFor: ['Group Tours', 'Pilgrimage Trips', 'College Excursions', 'MICE & Events'],
  },

  {
    id: 'bus',
    title: 'Luxury Bus / Coach',
    subtitle: 'Bharath Benz, Marcopolo & Volvo Coaches',
    icon: 'assets/images/transportation/bus/bus.png',
    description:
      'For large groups demanding the best in comfort, safety, and long-distance reliability. Our luxury coach fleet offers semi-sleeper configurations ideal for overnight journeys.',
    features: [
      'Capacity: 24 to 49 passengers',
      '2+2 premium seating configuration',
      'Semi-sleeper push-back seats',
      'Spacious overhead luggage bins',
      'Onboard entertainment & PA system',
      'Multiple emergency exits',
      'GPS tracking & 24/7 fleet monitoring',
    ],
    vehicles: [
      {
        name: 'Bharath Benz 35-Seater', rate: 'Rs. 13,200', rateUnit: 'per day', extraRate: 'Rs. 45 / extra km', seats: 35,
        img: [
          'assets/images/transportation/bus/1-1.png',
          'assets/images/transportation/bus/1-2.png',
          'assets/images/transportation/bus/1-3.png',
        ],
      },
      {
        name: 'Marcopolo 24-Seater', rate: 'Rs. 11,400', rateUnit: 'per day', extraRate: 'Rs. 35 / extra km', seats: 24,
        img: [
          'assets/images/transportation/bus/3-1.png',
          'assets/images/transportation/bus/3-2.png',
          'assets/images/transportation/bus/3-3.png',
        ],
      },
      {
        name: 'Bharath Benz 45-Seat (2+2 Semi Sleeper)', rate: 'Rs. 19,200', rateUnit: 'per day', extraRate: 'Rs. 45 / extra km', seats: 45,
        img: [
          'assets/images/transportation/bus/2-1.png',
          'assets/images/transportation/bus/2-2.png',
          'assets/images/transportation/bus/2-3.png',
        ],
      },
      {
        name: 'Volvo Single Axle 45-Seat (2+2 Semi Sleeper)', rate: 'Rs. 20,400', rateUnit: 'per day', extraRate: 'Rs. 65 / extra km', seats: 45,
        img: [
          'assets/images/transportation/bus/4-1.png',
          'assets/images/transportation/bus/4-2.png',
          'assets/images/transportation/bus/4-3.png',
        ],
      },
      {
        name: 'Volvo Multi Axle 49-Seater (2+2 Semi Sleeper)', rate: 'Rs. 22,200', rateUnit: 'per day', extraRate: 'Rs. 75 / extra km', seats: 49,
        img: [
          'assets/images/transportation/bus/5-1.png',
          'assets/images/transportation/bus/5-2.png',
          'assets/images/transportation/bus/5-3.png',
        ],
      },
    ],
    idealFor: ['Large Group Tours', 'Corporate Events', 'School & College Trips', 'Interstate Travel'],
  },

  {
    id: 'luxury-car',
    title: 'Luxury Cars',
    subtitle: 'Mercedes-Benz E Class & Toyota Vellfire',
    icon: 'assets/images/transportation/luxury-vehicle/luxury-car.png',
    description:
      'Experience unparalleled executive luxury. From the iconic Benz E Class to the ultra-luxurious Toyota Vellfire — booked on an hourly basis for the most discerning travelers.',
    features: [
      'Executive premium leather interiors',
      'Professional chauffeur-driven service',
      'Temperature-controlled cabin',
      'Privacy glass for discretion',
      'Premium Bose / JBL sound system',
      'Complimentary Wi-Fi on board',
      'Flexible hourly booking model',
    ],
    vehicles: [
      {
        name: 'Benz E Class', rate: 'Rs. 18,000', rateUnit: 'for 8 hrs', extraRate: 'Rs. 650 / extra hr', seats: 4,
        img: [
          'assets/images/transportation/luxury-vehicle/1-1.png',
          'assets/images/transportation/luxury-vehicle/1-2.png',
          'assets/images/transportation/luxury-vehicle/1-3.png',
          'assets/images/transportation/luxury-vehicle/1-2-exterior.png',
        ],
      },
      {
        name: 'Toyota Vellfire', rate: 'Rs. 31,800', rateUnit: 'for 8 hrs', extraRate: 'Rs. 2,000 / extra 2 hrs', seats: 7,
        img: [
          'assets/images/transportation/luxury-vehicle/2-1.png',
          'assets/images/transportation/luxury-vehicle/2-2.png',
          'assets/images/transportation/luxury-vehicle/2-3.png',
        ],
      },
    ],
    idealFor: ['VIP & VVIP Transfers', 'Wedding Cars', 'Executive Travel', 'Airport Limousine Service'],
  },
];
