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
  travelDetails: {
    travelName: string;
    destination: string;
    Category: string;
  }[];
  pricing: {
    season: string;
    categories: {
      property: string;
      place: string;
      category: string;
      cost: string;
      extraPerson?: string;
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
  galleries: string[];
}

export const outBoundTravelPackages: Package[] = [
  {
    slNo: 1,
    id: 'andaman-nicobar',
    name: 'Andaman Nicobar',
    heading: 'Mystique of Andaman & Island Wonders',
    description: "island with .",
    duration: '05 Nights / 05 Days',
    summary: 'Unveil the hidden jewels of the Bay of Bengal — where turquoise waters, coral reefs, and untamed beauty invite you to explore nature’s paradise.',
    tourHighlights: [],
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
      'Welcome drinks on arrival.',
      'Assistance at all levels.',
      'Rooms as mentioned in the itinerary as per availability.',
      'Meals(Breakfast & Dinner) except for breakfast on the day of arrival.',
      'AC Cab throughout the tour on point to point basis and not on disposal basis(Port Blair, Havelock & Neil – Ertiga/ Xylo)',
      'Private Ferry for to & fro from Port Blair to Havelock via Neil Island.',
      'Entry tickets for museum and shows.',
      'Boat charges for Elephant Beach.',
      'Complimentary Snorkeling for each at Elephant Beach.',
      'Complimentary Photo shoot at Havelock or Neil Island.',
    ],
    exclusions: [
      'Water activity charges.',
      'Food & Beverages(liquor) not mentioned in the inclusions.',
      'Camera Charges.',
      'Expenses of personal nature such as tips, telephone calls, laundry, insurance etc.',
      'In case of Covid, RTPCR test charges.',
      'Any other item not specified above.',
    ],

    sightseeing: [],

    hotels: [
      {
        destination: 'Port Blair',
        image: 'https://images.unsplash.com/photo-1586053226626-febc8817962f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
        categories: {
          'Standard': ['Sea Shell Coral Cove – Standard Room (02 Nos.)',],
        },
      },
      {
        destination: 'Havelock (2N)',
        image: 'https://images.unsplash.com/photo-1723203606060-b0390c387a81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF2ZWxvY2slMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
        categories: {
          'Standard': ['Sea Shell Havelock – Andaman Villa (02 Nos.)',],
        },
      },
    ],
    childPolicy: [
      'Child above 2 years are charged fully for ferry to Havelock and back and boat tickets for Ross & North Bay Island.',
      'Child below the age of 5 years will receive free services at Hotels/ Resorts.'
    ],
    meals: 'Buffet Breakfast & Dinner in the respective hotels  included in the package.',
    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (Toyota Etios/Swift Dzire)', icon: "🚗" },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: "🚙" },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: "🚎" },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: "🚌" },
      { pax: '15–25 Pax', description: 'A/C Mini Luxury Bus', icon: "🚇" },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: "🚍" },
    ],
    travelDetails: [
      {
        travelName: 'Makruzz / Nautika / Green Ocean',
        destination: 'Port Blair → Havelock',
        Category: 'Premium'
      },
      {
        travelName: 'Makruzz / Nautika / Green Ocean',
        destination: 'Havelock → Neil',
        Category: 'Premium'
      },
      {
        travelName: 'Makruzz / Nautika / Green Ocean',
        destination: 'Neil → Port Blair',
        Category: 'Premium'
      }
    ],
    pricing: [
      {
        season: 'MAP Plan – Valid for all seasons',
        categories: [
          {
            place: 'Port Blair',
            property: 'Sea Shell Coral Cove',
            category: 'Standard Room – 02 Nos.',
            cost: '₹24,900/- per head for 04 pax'
          },
          {
            place: 'Havelock',
            property: 'Sea Shell Havelock',
            category: 'Andaman Villa – 02 Nos.',
            cost: '₹24,900/- per head for 04 pax'
          }
        ]
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
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed arrangement',
      'Candlelight dinner (with package upgrade)',
      'Valid only for couples within 60 days of marriage (wedding card required)',
    ],
    galleries: [
      'assets/images/gallery1.jpg',
      'assets/images/gallery2.jpg',
      'assets/images/gallery3.jpg',
      'assets/images/gallery4.jpg',
      'assets/images/gallery5.jpg',
      'assets/images/gallery6.jpg',
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
