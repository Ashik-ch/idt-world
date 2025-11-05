// Data source for all packages and countries

export interface Package {
  slNo: number;
  id: string;
  name: string;
  heading: string;
  description: string;
  duration: string;
  summary: string;
  tourHighlights: string[];
  quickItinerary: string[];
  itineraryOverview: {
    day: string;
    title: string;
    details: string[];
    image: string;
  }[];
  detailedItinerary: {
    day: string;
    title: string;
    details: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  sightseeing: string[];
  hotels: {
    destination: string;
    image: string;
    categories: { [key: string]: string[] };
  }[];
  childPolicy: string[];
  meals: string;
  transport: { pax: string; description: string, icon: string }[];
  pricing: {
    season: string;
    categories: {
      category: string;
      twoPax: string;
      extraPerson: string;
    }[];
  }[];
  supplementalAttractions: {
    id: string;
    name: string;
    subtitle: string;
    location: string;
    people: string;
    cost: string;
    rating: number;
    featured: boolean;
    img: string;
  }[];
  specialOffers: string[];
  gallery: string[];
}

export const outBoundTravelPackages: Package[] = [
  {
    slNo: 1,
    id: 'andaman-nicobar',
    name: 'Andaman Nicobar',
    heading: 'Andaman Beaches Border Beauties',
    description: "island with .",

    duration: '05 Nights / 05 Days',
    summary: 'Experience Andaman Nicobar scenic beauty with curated tours across Cellular Jail, Carbyns Cove Beach, Sound & Light Show.',
    tourHighlights: [
      'All-inclusive package without any hidden cost',
      'Food on a Breakfast basis',
      'Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them',
      'Vehicle at disposal from airport to airport on all days without any Km restrictions or additional cost',
      'One driver & one vehicle for the entire tour',
      'Tour can be changed to any other fixed date even before 24 hours without any retention fee',
      'GST, Toll charges, Bata to the driver, Parking fees, etc., included in the Package'
    ],
    quickItinerary: [
      'Day 01 – Port Blair',
      'Day 02 – Havelock (Swaraj Dweep) (Radha Nagar Beach & Kalapathar Beach)',
      'Day 03 – Havelock (Swaraj Dweep) (Elephant Beach)',
      'Day 04 – Breakfast and Checkout (Neil Island Tour)',
      'Day 05 – Breakfast and Checkout',
    ],
    itineraryOverview: [
      // {
      //   day: '01',
      //   title: "Arrival at Coimbatore",
      //   details: [
      //     'Arrival at Coimbatore Airport',
      //     'Drive to Ooty (3h10m)',
      //     'Hotel check-in & relax',
      //     'Evening visit Botanical Garden & Boating',
      //   ],
      //   image: 'https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg'
      // },
      // {
      //   day: '02',
      //   title: "Explore Ooty",
      //   details: [
      //     'Breakfast at hotel',
      //     'Ooty sightseeing: Rose Garden, Avvamore Palace, Govt. Museum',
      //     'Toy train ride to Coonoor',
      //     'Return & overnight stay at hotel',
      //   ],
      //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6krGBzaTpFvGKQfz9MpuOef1sSRMcQzCrOQ&s"
      // },
      // {
      //   day: '03',
      //   title: "Proceed to Munnar",
      //   details: [
      //     'Drive to Munnar hill station',
      //     'Visit Tea Gardens & Tea Museum en route',
      //     'Check into hotel, relax & spice shopping',
      //   ],
      //   image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      // },
      // {
      //   day: '04',
      //   title: "Explore Munnar",
      //   details: [
      //     'Breakfast at hotel',
      //     'Visit Eravikulam National Park',
      //     'Explore Mattupetty Dam, Echo Point, Kundala Lake, Top Station',
      //     'Overnight stay at resort',
      //   ],
      //   image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      // },
      // {
      //   day: '05',
      //   title: "Proceed to Thekkady",
      //   details: [
      //     'Drive to Thekkady (3h / 150km)',
      //     'Check-in at hotel & relax',
      //     'Elephant Ride, Jungle Safari',
      //     'Evening Kalaripayattu show',
      //   ],
      //   image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      // },
    ],
    detailedItinerary: [
      {
        day: '01',
        title: 'Port Blair – City Tour',
        details: [

          'Meet & Greet at Airport – transfers to the Hotel booked.',
          'Make yourself comfortable and rest for some time.',
          'Post lunch start your tour with a visit to National Memorial Cellular Jail later drive to Carbyns Cove Beach for fun activities like Jet Ski, Para Sailing, Sea Craft etc.',
          'Later at the end of the day drive back to Cellular Jail for Sound & Light Show.',
          'Rest for the night.',
        ],
      },
      {
        day: '02',
        title: 'Havelock(Swaraj Dweep)(Radha Nagar Beach & Kalapathar Beach)',
        details: [
          'With packed breakfast and checkout proceed to Harbor/ Jetty to catch the Cruise/ Ferry plying from Port Blair to Havelock.',
          'Meet our Executive - cum - Driver at Havelock and check in at Hotel booked for you.',
          'After rest start your journey towards World’s famous beach Radha Nagar and spend a leisure time at Beach.',
          'Later post sunset reach back Hotel to enjoy the beach property.',
          'Night stay at Hotel.'
        ],
      },
      {
        day: '03',
        title: 'Havelock(Swaraj Dweep)(Elephant Beach)',
        details: [
          'Morning after breakfast visit Elephant Beach famous for water rides.Later reach back Hotel to enjoy the beach property.',
          'Night stay at Hotel.',
        ],
      },
      {
        day: '04',
        title: 'Breakfast and Checkout(Neil Island Tour)',
        details: [

          'Morning after breakfast and checkout sail to Neil Island.',
          'While at Neil visit Bharatpur Beach, Natural Bridge & Laxmanpur Beach.Afternoon we shall drop you to jetty for onward journey to Port Blair.',
          'Evening spare time for shopping.',
          'Rest for the night at Hotel.',
        ],
      },
      {
        day: '05',
        title: 'Breakfast and Checkout',
        details: [
          'Morning after breakfast we shall drop you to airport for onward journey with sweet memories.'
        ],
      },
    ],

    inclusions: [
      'Local English-speaking driver',
      'Twin/double accommodation with daily breakfast + dinner',
      'Entry fees, taxes, tolls, guides at selected locations',
      'Meals as per itinerary',
      'Transport',
    ],
    exclusions: [
      'International/domestic flights & airport taxes',
      'Passport, visa stamping & visa fees',
      'Personal expenses (laundry, calls, beverages, room service, etc.)',
      'Single room(quoted separately), Child or adult in a triple sharing room',
      'Another language may be available on request',
      'Vegetable meals may be on request',
      'Bottled/mineral water during any meal.',
      'Peak tourist season or special event rates.'
    ],

    sightseeing: [
      'Visit the botanical garden, Rose garden, Avmamore palace, Govt museum and enjoy the toy train',
      'Munnar Hill Station, Tea Gardens, Tea Museum. Spice Shopping',
      'Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake and Top Station',
      'Elephant Ride, Jungle Safari, and enjoy Kalaripayattu',
      'Full day cruise & Night stay in A/C houseboat',
      'Entry Fees, Service & other Taxes, Toll Charges, Bata & Night halting Charges, Local Guides at Selected locations',
    ],

    hotels: [
      {
        destination: 'Port Blair (2N)',
        image: 'assets/images/port-blair.jpg',
        categories: {
          'Standard': ['Sea Shell Coral Cove – Standard Room (02 Nos.)',],
          'Deluxe': ['Sea Shell Coral Cove – Deluxe Room (02 Nos.)',],
          'Luxury': ['Sea Shell Coral Cove – Luxury Room (02 Nos.)',],
        },
      },
      {
        destination: 'Havelock (2N)',
        image: 'assets/images/havelock.jpg',
        categories: {
          'Standard': ['Sea Shell Havelock – Andaman Villa (02 Nos.)',],
          'Deluxe': ['Sea Shell Havelock – Lagoon Room (02 Nos.)',],
          'Luxury': ['Sea Shell Havelock – Ocean View Villa (02 Nos.)',],
        },
      },
    ],
    childPolicy: [
      'Below 5 years : Free of cost',
      'Above 5 years : Extra person charge with extra bed',
    ],
    meals: '**will be Breakfast + Dinner Basis in all the destinations and three meals (Breakfast +Lunch+ Dinner) in the houseboat.',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (Toyota Etios/Swift Dzire)', icon: "🚗" },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: "🚙" },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: "🚎" },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: "🚌" },
      { pax: '15–25 Pax', description: 'A/C Mini Luxury Bus', icon: "🚇" },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: "🚍" },
    ],
    pricing: [
      {
        season: 'High Season (Oct 1 – Dec 19 & Jan 10 – May 31)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹37,510', extraPerson: '₹9,370', },
          { category: '4-Star Deluxe Resort', twoPax: '₹43,840', extraPerson: '₹10,960', },
          { category: '5-Star Deluxe Resort', twoPax: '₹56,780', extraPerson: '₹14,190', },
          { category: '5-Star Luxury Resort', twoPax: '₹1,09,390', extraPerson: '₹27,340', },
        ],
      },
      {
        season: 'Off Season (Jun 1 – Sep 30)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹30,000', extraPerson: '₹7,490', },
          { category: '4-Star Deluxe Resort', twoPax: '₹35,070', extraPerson: '₹8,760', },
          { category: '5-Star Deluxe Resort', twoPax: '₹45,420', extraPerson: '₹11,350', },
          { category: '5-Star Luxury Resort', twoPax: '₹87,510', extraPerson: '₹21,870', },
        ],
      },
    ],

    supplementalAttractions: [
      {
        id: '1',
        name: 'Cookery Demonstration Tour',
        subtitle: 'Traditional home experience with lunch or dinner',
        location: 'Cochin',
        people: "1",
        cost: '2000 (Non-Veg)',
        rating: 4.5,
        featured: true,
        img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700"
      },
      {
        id: '2',
        name: 'Kalarippayattu Programme',
        subtitle: 'Half-day martial arts demonstration',
        location: 'Cochin/Thekkady',
        people: "5 Min",
        cost: '1000 pp',
        rating: 4.2,
        featured: false,
        img: "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg"
      },
      {
        id: '3',
        name: 'Kolukumalai Tea Factory Visit',
        subtitle: 'Visit the highest hill station tea factory in the world',
        location: 'Munnar',
        people: "1",
        cost: '2000',
        rating: 4.6,
        featured: true,
        img: "https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg"
      },
      {
        id: '4',
        name: 'Half-Day Tea Trial Tour',
        subtitle: 'Tea tasting and plantation walk',
        location: 'Munnar',
        people: "1",
        cost: '1500',
        rating: 4.3,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '5',
        name: 'Full Day Tea Trial Tour',
        subtitle: 'Extended tea plantation exploration and tasting',
        location: 'Munnar',
        people: "1",
        cost: '2500.00',
        rating: 4.7,
        featured: true,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"

      },
      {
        id: '6',
        name: 'Mountain Trekking with Jeep Safari',
        subtitle: 'Trek the mountains with a guide and jeep safari',
        location: 'Munnar',
        people: "1",
        cost: '3000',
        rating: 4.8,
        featured: true,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"

      },
      {
        id: '7',
        name: 'Bamboo River Drafting',
        subtitle: 'Enjoy rafting at Periyar River',
        location: 'Thekkady',
        people: "1",
        cost: '2500',
        rating: 4.4,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"

      },
      {
        id: '8',
        name: 'Full Day Trip to Gavi',
        subtitle: 'Nature exploration tour',
        location: 'Thekkady',
        people: "1",
        cost: 'On request',
        rating: 4.6,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '9',
        name: 'Jeep Safari in Periyar Forests',
        subtitle: 'Explore wildlife with jeep safari',
        location: 'Thekkady',
        people: "1",
        cost: '2000',
        rating: 4.7,
        featured: true,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '10',
        name: 'Half-Day Elephant Safari',
        subtitle: 'Elephant ride and forest adventure',
        location: 'Munnar/Thekkady',
        people: "1",
        cost: '1000',
        rating: 4.5,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '11',
        name: 'Half Day Elephant Moments',
        subtitle: 'Bathing, feeding and interacting with elephants',
        location: 'Thekkady',
        people: "1",
        cost: '2000',
        rating: 4.8,
        featured: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      },
      {
        id: '12',
        name: 'Backwater Canal Cruise in Country Crafts',
        subtitle: 'Relaxing houseboat cruise on Kerala backwaters',
        location: 'Cochin',
        people: "1",
        cost: '1500',
        rating: 4.7,
        featured: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      },
      {
        id: '13',
        name: 'Backwater Historical Tour',
        subtitle: 'Guided tour of Cochin’s heritage sites',
        location: 'Cochin',
        people: "1",
        cost: '1500',
        rating: 4.6,
        featured: false,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      },
      {
        id: '14',
        name: 'Extra Night in A/C Houseboat',
        subtitle: 'Full day cruise from Kumarakom to Alleppey',
        location: 'Kumarakom - Alleppey',
        people: "2",
        cost: '7000',
        rating: 4.9,
        featured: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed arrangement',
      'Candlelight dinner (with package upgrade)',
      'Valid only for couples within 60 days of marriage (wedding card required)',
    ],
    gallery: [
      'assets/images/itinerary/ooty.jpg',
      'assets/images/itinerary/kerala1.jpg',
      'assets/images/itinerary/kerala2.jpg',
    ],
  },

];


export const inboundPackages = [
  {
    id: 'kerala',
    name: 'Kerala',
    gradient: 'from-green-400 to-green-600',
    tagline: "God's Own Country",
    description: 'Backwaters, Tea Gardens, Ayurveda',
    bgImage: 'assets/images/l.jpeg'
  },
]; 
