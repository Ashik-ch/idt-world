// Data source for all packages and states 

export interface OutboundCountry {
  code: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

export interface InboundState {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bgImage?: string;
  gradient?: string;
}

export interface Package {
  id: string;
  title: string;
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
  hotelPackages: {
    destination: string;
    image: string;
    categories: {
      [categoryName: string]: {
        name: string;
        image: string;
        description: string;
      }[];
    };
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
}

export const travelPackages: Package[] = [
  {
    id: 'kerala',
    title: 'Charm of Kerala and Border Beauties',
    duration: '06 Nights / 07 Days',
    summary: 'Experience Kerala’s scenic beauty with curated tours across Munnar, Thekkady, Kumarakom & Cochin.',
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
      'Day 01 – Arrival at Coimbatore',
      'Day 02 – Explore Ooty',
      'Day 03 – Proceed to Munnar',
      'Day 04 – Explore Munnar',
      'Day 05 – Proceed to Thekkady',
      'Day 06 – Enjoy Kumarakom Houseboat',
      'Day 07 – Departure from Cochin',
    ],
    itineraryOverview: [
      {
        day: '01',
        title: "Arrival at Coimbatore",
        details: [
          'Arrival at Coimbatore Airport',
          'Drive to Ooty (3h10m)',
          'Hotel check-in & relax',
          'Evening visit Botanical Garden & Boating',
        ],
        image: 'https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg'
      },
      {
        day: '02',
        title: "Explore Ooty",
        details: [
          'Breakfast at hotel',
          'Ooty sightseeing: Rose Garden, Avvamore Palace, Govt. Museum',
          'Toy train ride to Coonoor',
          'Return & overnight stay at hotel',
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6krGBzaTpFvGKQfz9MpuOef1sSRMcQzCrOQ&s"
      },
      {
        day: '03',
        title: "Proceed to Munnar",
        details: [
          'Drive to Munnar hill station',
          'Visit Tea Gardens & Tea Museum en route',
          'Check into hotel, relax & spice shopping',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '04',
        title: "Explore Munnar",
        details: [
          'Breakfast at hotel',
          'Visit Eravikulam National Park',
          'Explore Mattupetty Dam, Echo Point, Kundala Lake, Top Station',
          'Overnight stay at resort',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '05',
        title: "Proceed to Thekkady",
        details: [
          'Drive to Thekkady (3h / 150km)',
          'Check-in at hotel & relax',
          'Elephant Ride, Jungle Safari',
          'Evening Kalaripayattu show',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '06',
        title: "Enjoy Kumarakom Houseboat",
        details: [
          'Drive to Kumarakom backwaters',
          'Check-in to houseboat by noon',
          'Cruise with lunch & dinner onboard',
          'Anchored overnight stay',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '07',
        title: "Departure from Cochin",
        details: [
          'Breakfast & check out from houseboat',
          'Transfer to Cochin Airport for departure',
        ],
        image: "https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg"
      },
    ],
    detailedItinerary: [
      {
        day: '01',
        title: 'Arrival at Coimbatore (B + D)',
        details: [
          'Reach Coimbatore by flight – We will receive you at the Airport.',
          'Then proceed to Ooty.',
          'The time taken to reach Ooty is approximately 3 hours and 10 minutes.',
          'Reach Ooty by noon.',
          'Check into the hotel and relax.',
          'By evening, visit the Botanical Garden and enjoy boating.',
          'Overnight stay at the hotel.',
        ],
      },
      {
        day: '02',
        title: 'Explore Ooty (B + D)',
        details: [
          'After breakfast, enjoy a sightseeing tour in and around Ooty.',
          'Capture the postcard-perfect views of this hill station.',
          'Visit the Rose Garden, Avvamore Palace, and Government Museum.',
          'Catch the Toy Train and enjoy the scenic journey to Coonoor.',
          'Return to the hotel by evening and relax.',
          'Overnight stay at the hotel.',
        ],
      },
      {
        day: '03',
        title: 'Proceed to Munnar (B + D)',
        details: [
          'On to Munnar.',
          'Upon your arrival, you will be driven straight to Munnar hill station.',
          'On the way, you can enjoy the Tea gardens & the Tea Museum.',
          'By afternoon, reach Munnar.',
          'Check into the hotel and relax.',
          'Spice shopping.',
          'Overnight stay at the hotel.',
        ],
      },
      {
        day: '04',
        title: 'Explore Munnar (B + D)',
        details: [
          'Breakfast at the hotel and Our driver will pick you up from the hotel for a sightseeing tour.',
          'After breakfast, you are guided to Eravikulam National Park.',
          'Enjoy a full day exploring Munnar sightseeing.',
          'Later, visit Mattupetty Dam and Echo Point.',
          'Move to Kundala Lake by noon.',
          'Unwind, and you are taken to the Top station to experience the beauty of nature.',
          'Free your time at leisure.',
          'Overnight stay at your resort.',
        ],
      },
      {
        day: '05',
        title: 'Proceed to Thekkady (B + D)',
        details: [
          'In the morning, check out from the hotel & proceed to Thekkady.',
          'Drive to Thekkady is 3 hours(150 km).',
          'Reach Thekkady before noon.',
          'Check into the hotel and relax.',
          'Afternoon will take you for an Elephant Ride and a Jungle safari.',
          'By evening, you can enjoy the ‘Kalarippayattu’, the Ancient martial arts of Kerala.',
          'Overnight stay at the hotel.'
        ],
      },
      {
        day: '06',
        title: 'Enjoy Houseboat at Kumarakom (B + D)',
        details: [
          'Cruise through lush landscapes.',
          'Enjoy a traditional lunch onboard.',
          'The houseboat will be anchored from 5: 30 pm till the next day at 6 Am.',
          'Dinner onboard.',
          'Overnight stay in the houseboat.',],
      },
      {
        day: '07',
        title: 'Departure from Cochin (B)',
        details: [
          'After breakfast, check out of the houseboat.',
          'And we will take you to the Cochin Airport to catch your return flight, carrying beautiful memories of Kerala.',
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

    hotelPackages: [
      {
        destination: 'Ooty (2N)',
        image: 'assets/images/a.jpg',

        categories: {
          '3-Star Deluxe': [
            {
              name: 'Nahar Nilgiris Resort',
              image: 'assets/images/nahar.jpg',
              description: 'A peaceful stay close to major attractions with comfortable rooms.'
            },
            {
              name: 'Treebo Windsor Heights Resort',
              image: 'assets/images/gallery80.jpg',
              description: 'Budget-friendly resort with modern amenities and valley views.'
            },
            {
              name: 'Garden Manor Resort',
              image: 'assets/images/hotels/garden-manor.jpg',
              description: 'Calm environment with excellent service and beautiful gardens.'
            },
          ],

          '4-Star Deluxe': [
            {
              name: 'Garden Manor Resort',
              image: 'assets/images/hotels/garden-manor.jpg',
              description: 'Spacious rooms with premium facilities and scenic surroundings.'
            },
            {
              name: 'Fortune Retreats',
              image: 'assets/images/hotels/fortune.jpg',
              description: 'A premium retreat offering luxury comfort and mountain views.'
            },
            {
              name: 'The Monarch',
              image: 'assets/images/hotels/monarch.jpg',
              description: 'Modern interiors, fine dining, and a peaceful ambience.'
            },
          ],

          '5-Star Deluxe': [
            {
              name: 'Sterling Fern Hill, Ooty',
              image: 'assets/images/hotels/sterling-fern.jpg',
              description: 'Luxury hillside resort with panoramic views and top-tier hospitality.'
            },
            {
              name: 'Accord Highland',
              image: 'assets/images/hotels/accord.jpg',
              description: 'Premium stay with luxurious rooms and breathtaking nature views.'
            },
            {
              name: 'Mango Hill Shola Resort',
              image: 'assets/images/hotels/mango-hill.jpg',
              description: 'Surrounded by forests and hills, perfect for nature lovers.'
            },
            {
              name: 'Fortune Sullivan Court',
              image: 'assets/images/hotels/sullivan.jpg',
              description: 'Elegant property offering high-end comfort and excellent service.'
            },
            {
              name: 'Gem Park Ooty',
              image: 'assets/images/hotels/gem-park.jpg',
              description: 'A premium mountain-view hotel with indoor pool and fine dining.'
            },
          ],

          '5-Star Luxury': [
            {
              name: 'Ayatana Ooty',
              image: 'assets/images/hotels/ayatana.jpg',
              description: 'Ultra-luxury property with world-class hospitality in Ooty.'
            },
            {
              name: 'Taj Savoy Hotel',
              image: 'assets/images/hotels/taj-savoy.jpg',
              description: 'Heritage Taj experience with royal-style cottages & gardens.'
            },
            {
              name: 'Taj Gateway Coonoor',
              image: 'assets/images/hotels/taj-gateway.jpg',
              description: 'Iconic Taj luxury surrounded by tea gardens and hill views.'
            },
          ],
        },
      },

      // ===== MUNNAR =====
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/b.jpg',

        categories: {
          '3-Star Deluxe': [
            {
              name: 'West Wood Resort',
              image: 'assets/images/hotels/westwood.jpg',
              description: 'Cozy rooms with scenic river views and warm hospitality.'
            },
            {
              name: 'Eastend Hotel',
              image: 'assets/images/hotels/eastend.jpg',
              description: 'Popular hotel near Munnar town with garden spaces.'
            },
            {
              name: 'Trivers Resort',
              image: 'assets/images/hotels/trivers.jpg',
              description: 'Modern resort with valley views and spacious rooms.'
            },
            {
              name: 'Tea Castle',
              image: 'assets/images/hotels/tea-castle.jpg',
              description: 'A beautiful hillside property surrounded by tea plantations.'
            },
          ],

          '4-Star Deluxe': [
            {
              name: 'Rivulet Resort',
              image: 'assets/images/hotels/rivulet.jpg',
              description: 'Premium riverside resort with luxury cottages and nature views.'
            },
            {
              name: 'Elephant Passage Resort',
              image: 'assets/images/hotels/elephant-passage.jpg',
              description: 'Eco-friendly luxury resort surrounded by wildlife and greenery.'
            },
            {
              name: 'Fog Resort',
              image: 'assets/images/hotels/fog.jpg',
              description: 'Known for stunning foggy landscapes and 5-star service.'
            },
            {
              name: 'Tall Trees Resort',
              image: 'assets/images/hotels/tall-trees.jpg',
              description: 'Stay inside a lush cardamom forest with premium cottages.'
            },
          ],

          '5-Star Deluxe': [
            {
              name: 'Blanket Hotel',
              image: 'assets/images/hotels/blanket.jpg',
              description: 'Ultra-luxury waterfall-view property near Attukad Waterfalls.'
            },
            {
              name: 'The Valle Resort',
              image: 'assets/images/hotels/valle.jpg',
              description: 'A calm luxury property facing breathtaking valley views.'
            },
            {
              name: 'Fragrant Nature Resort',
              image: 'assets/images/hotels/fragrant-nature.jpg',
              description: 'Luxury boutique resort known for its peaceful ambience.'
            },
          ],

          '5-Star Luxury': [
            {
              name: 'Chandys Windy Woods',
              image: 'assets/images/hotels/windy-woods.jpg',
              description: 'Top-tier luxury in Munnar with misty valley views.'
            },
            {
              name: 'Chandys Drizzle Drops',
              image: 'assets/images/hotels/drizzle-drops.jpg',
              description: 'Premium forest-side resort surrounded by lush green hills.'
            },
            {
              name: 'Spice Tree Resort',
              image: 'assets/images/hotels/spice-tree.jpg',
              description: 'Exclusive luxury suites offering total privacy and comfort.'
            },
            {
              name: 'Grand Cliff Resort',
              image: 'assets/images/hotels/grand-cliff.jpg',
              description: 'Hilltop luxury property with panoramic mountain views.'
            },
          ],
        },
      },

      // ===== THEKKADY =====
      {
        destination: 'Thekkady (1N)',
        image: 'assets/images/c.jpg',

        categories: {
          '3-Star Deluxe': [
            {
              name: 'Abad Green Forest',
              image: 'assets/images/hotels/abad.jpg',
              description: 'Eco-themed resort in the heart of Thekkady’s greenery.'
            },
            {
              name: 'Pepper Vine Resort',
              image: 'assets/images/hotels/pepper-vine.jpg',
              description: 'Peaceful stay with traditional Kerala architecture.'
            },
            {
              name: 'Spice Tree Resort',
              image: 'assets/images/hotels/spice-tree.jpg',
              description: 'Comfortable rooms surrounded by spice plantations.'
            },
          ],

          '4-Star Deluxe': [
            {
              name: 'Mountain Courtyard Resort',
              image: 'assets/images/hotels/mountain-courtyard.jpg',
              description: 'Hill-view resort offering a luxurious and quiet retreat.'
            },
            {
              name: 'Forest Canopy Resort',
              image: 'assets/images/hotels/forest-canopy.jpg',
              description: 'Premium tree-top style cottages with stunning valley views.'
            },
            {
              name: 'Reen Resorts',
              image: 'assets/images/hotels/reen.jpg',
              description: 'Modern rooms with nature-friendly resort ambience.'
            },
          ],

          '5-Star Deluxe': [
            {
              name: 'Poetree Resort',
              image: 'assets/images/hotels/poetree.jpg',
              description: 'High-end luxury property overlooking the mountains.'
            },
            {
              name: 'Elephant Court',
              image: 'assets/images/hotels/elephant-court.jpg',
              description: 'Premium resort with large pool and Ayurveda facilities.'
            },
            {
              name: 'Green Woods Resort',
              image: 'assets/images/hotels/green-woods.jpg',
              description: 'Luxury eco-resort surrounded by dense forests.'
            },
          ],

          '5-Star Luxury': [
            {
              name: 'Spice Village Resort',
              image: 'assets/images/hotels/spice-village.jpg',
              description: 'Upscale village-themed resort with Kerala heritage charm.'
            },
            {
              name: 'Lake Palace Resort',
              image: 'assets/images/hotels/lake-palace.jpg',
              description: 'Exclusive lakeside luxury available via boat access.'
            },
            {
              name: 'Hills & Hues Resort',
              image: 'assets/images/hotels/hills-hues.jpg',
              description: 'Ultra-luxurious property with breathtaking cliff-side views.'
            },
            {
              name: 'Lake Palace Resort KTDC',
              image: 'assets/images/hotels/ktdc-lake-palace.jpg',
              description: 'Heritage-style lakeside accommodation inside the sanctuary.'
            },
            {
              name: 'Blanket Resort',
              image: 'assets/images/hotels/blanket.jpg',
              description: 'Premium stay known for serene hill views and tranquility.'
            },
          ],
        },
      },

      // ===== HOUSEBOAT =====
      {
        destination: 'Kumarakom Houseboat (1N)',
        image: 'assets/images/d.jpg',

        categories: {
          'Standard': [
            {
              name: 'A/C Standard Houseboat',
              image: 'assets/images/hotels/standard-boat.jpg',
              description: 'Comfortable standard boat ideal for budget travellers.'
            }
          ],

          'Deluxe': [
            {
              name: 'A/C Deluxe Houseboat with Silver Flag Category',
              image: 'assets/images/hotels/deluxe-boat.jpg',
              description: 'Upgraded interiors with comfortable bedrooms & dining area.'
            }
          ],

          'Premium': [
            {
              name: 'AC Premium Houseboat with Golden flag category',
              image: 'assets/images/hotels/premium-boat.jpg',
              description: 'Premium rooms with glass windows & continuous AC.'
            }
          ],

          'Luxury': [
            {
              name: 'Full-time AC Luxury boat with Platinum category',
              image: 'assets/images/hotels/luxury-boat.jpg',
              description: 'Ultra-luxury boat with private chef and exclusive cabins.'
            }
          ],
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
  {
    id: 'karnataka',
    name: 'Karnataka',
    gradient: 'from-blue-400 to-blue-600',
    tagline: 'One State Many Worlds',
    description: 'Ancient Temples, Coffee Estates, Beaches',
    bgImage: 'assets/images/m.jpeg'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    gradient: 'from-orange-400 to-orange-600',
    tagline: 'Land of Temples',
    description: 'Dravidian Architecture, Hill Stations',
    bgImage: 'assets/images/k.jpg'
  },
  {
    id: 'goa',
    name: 'Goa',
    gradient: 'from-yellow-400 to-yellow-600',
    tagline: 'Pearl of the Orient',
    description: 'Beaches, Nightlife, Portuguese Heritage',
  },
  {
    id: 'north-india',
    name: 'North India',
    gradient: 'from-red-400 to-red-600',
    tagline: 'Himalayan Paradise',
    description: 'Mountains, Temples, Heritage Sites',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    gradient: 'from-purple-400 to-purple-600',
    tagline: 'Land of Kings',
    description: 'Palaces, Forts, Desert Safaris',
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    gradient: 'from-red-400 to-red-600',
    tagline: 'Himalayan Paradise',
    description: 'Mountains, Temples, Heritage Sites',
  },
  {
    id: 'lakshadweeb',
    name: 'Lakshadweeb',
    gradient: 'from-purple-400 to-purple-600',
    tagline: 'Land of Kings',
    description: 'Palaces, Forts, Desert Safaris',
  },
  {
    id: 'delhi',
    name: 'Delhi',
    gradient: 'from-yellow-400 to-yellow-600',
    tagline: 'Pearl of the Orient',
    description: 'Beaches, Nightlife, Portuguese Heritage',
  },
];

export const itineraryRoute = [
  {
    distance: 0,
    category: 'city',
    name: 'Coimbatore',
    altitude: 411,
    date: new Date('2025-05-01').getTime(),
    population: 2,
    geometry: { type: 'Point', coordinates: [76.956, 11.0168] }
  },
  {
    distance: 85,
    category: 'city',
    name: 'Ooty',
    altitude: 2240,
    date: new Date('2025-05-02').getTime(),
    population: 1,
    geometry: { type: 'Point', coordinates: [76.695, 11.4064] }
  },
  {
    distance: 190,
    category: 'city',
    name: 'Munnar',
    altitude: 1600,
    date: new Date('2025-05-03').getTime(),
    population: 2,
    geometry: { type: 'Point', coordinates: [77.059, 10.0892] }
  },
  {
    distance: 270,
    category: 'city',
    name: 'Thekkady',
    altitude: 915,
    date: new Date('2025-05-04').getTime(),
    population: 1,
    geometry: { type: 'Point', coordinates: [77.212, 9.5980] }
  },
  {
    distance: 350,
    category: 'city',
    name: 'Kumarakom',
    altitude: 2,
    date: new Date('2025-05-05').getTime(),
    population: 1,
    geometry: { type: 'Point', coordinates: [76.541, 9.5936] }
  },
  {
    distance: 370,
    category: 'city',
    name: 'Kochi',
    altitude: 3,
    date: new Date('2025-05-06').getTime(),
    population: 2,
    geometry: { type: 'Point', coordinates: [76.267, 9.9312] }
  }
];
