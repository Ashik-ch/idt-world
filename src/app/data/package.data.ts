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
  transport: { pax: string; description: string, icon?: string }[];
  pricing: {
    season: string;
    categories: {
      category: string;
      twoPax: string;
      single?: string;
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
      { day: '01', title: "Arrival at Coimbatore", details: ['Arrival at Coimbatore Airport', 'Drive to Ooty (3h10m)', 'Hotel check-in & relax', 'Evening visit Botanical Garden & Boating',], image: 'https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg' },
      { day: '02', title: "Explore Ooty", details: ['Breakfast at hotel', 'Ooty sightseeing: Rose Garden, Avvamore Palace, Govt. Museum', 'Toy train ride to Coonoor', 'Return & overnight stay at hotel',], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6krGBzaTpFvGKQfz9MpuOef1sSRMcQzCrOQ&s" },
      { day: '03', title: "Proceed to Munnar", details: ['Drive to Munnar hill station', 'Visit Tea Gardens & Tea Museum en route', 'Check into hotel, relax & spice shopping',], image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
      { day: '04', title: "Explore Munnar", details: ['Breakfast at hotel', 'Visit Eravikulam National Park', 'Explore Mattupetty Dam, Echo Point, Kundala Lake, Top Station', 'Overnight stay at resort',], image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
      { day: '05', title: "Proceed to Thekkady", details: ['Drive to Thekkady (3h / 150km)', 'Check-in at hotel & relax', 'Elephant Ride, Jungle Safari', 'Evening Kalaripayattu show',], image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
      { day: '06', title: "Enjoy Kumarakom Houseboat", details: ['Drive to Kumarakom backwaters', 'Check-in to houseboat by noon', 'Cruise with lunch & dinner onboard', 'Anchored overnight stay',], image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
      { day: '07', title: "Departure from Cochin", details: ['Breakfast & check out from houseboat', 'Transfer to Cochin Airport for departure',], image: "https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg" },
    ],
    detailedItinerary: [
      { day: '01', title: 'Arrival at Coimbatore (B + D)', details: ['Reach Coimbatore by flight – We will receive you at the Airport.', 'Then proceed to Ooty.', 'The time taken to reach Ooty is approximately 3 hours and 10 minutes.', 'Reach Ooty by noon.', 'Check into the hotel and relax.', 'By evening, visit the Botanical Garden and enjoy boating.', 'Overnight stay at the hotel.',], },
      { day: '02', title: 'Explore Ooty (B + D)', details: ['After breakfast, enjoy a sightseeing tour in and around Ooty.', 'Capture the postcard-perfect views of this hill station.', 'Visit the Rose Garden, Avvamore Palace, and Government Museum.', 'Catch the Toy Train and enjoy the scenic journey to Coonoor.', 'Return to the hotel by evening and relax.', 'Overnight stay at the hotel.',], },
      { day: '03', title: 'Proceed to Munnar (B + D)', details: ['On to Munnar.', 'Upon your arrival, you will be driven straight to Munnar hill station.', 'On the way, you can enjoy the Tea gardens & the Tea Museum.', 'By afternoon, reach Munnar.', 'Check into the hotel and relax.', 'Spice shopping.', 'Overnight stay at the hotel.',], },
      { day: '04', title: 'Explore Munnar (B + D)', details: ['Breakfast at the hotel and Our driver will pick you up from the hotel for a sightseeing tour.', 'After breakfast, you are guided to Eravikulam National Park.', 'Enjoy a full day exploring Munnar sightseeing.', 'Later, visit Mattupetty Dam and Echo Point.', 'Move to Kundala Lake by noon.', 'Unwind, and you are taken to the Top station to experience the beauty of nature.', 'Free your time at leisure.', 'Overnight stay at your resort.',], },
      { day: '05', title: 'Proceed to Thekkady (B + D)', details: ['In the morning, check out from the hotel & proceed to Thekkady.', 'Drive to Thekkady is 3 hours(150 km).', 'Reach Thekkady before noon.', 'Check into the hotel and relax.', 'Afternoon will take you for an Elephant Ride and a Jungle safari.', 'By evening, you can enjoy the ‘Kalarippayattu’, the Ancient martial arts of Kerala.', 'Overnight stay at the hotel.'], },
      { day: '06', title: 'Enjoy Houseboat at Kumarakom (B + D)', details: ['Cruise through lush landscapes.', 'Enjoy a traditional lunch onboard.', 'The houseboat will be anchored from 5: 30 pm till the next day at 6 Am.', 'Dinner onboard.', 'Overnight stay in the houseboat.',], },
      { day: '07', title: 'Departure from Cochin (B)', details: ['After breakfast, check out of the houseboat.', 'And we will take you to the Cochin Airport to catch your return flight, carrying beautiful memories of Kerala.',], },
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
            { name: 'Nahar Nilgiris Resort', image: 'assets/images/nahar.jpg', description: 'A peaceful stay close to major attractions with comfortable rooms.' },
            { name: 'Treebo Windsor Heights Resort', image: 'assets/images/gallery80.jpg', description: 'Budget-friendly resort with modern amenities and valley views.' },
            { name: 'Garden Manor Resort', image: 'assets/images/hotels/garden-manor.jpg', description: 'Calm environment with excellent service and beautiful gardens.' },
          ],

          '4-Star Deluxe': [
            { name: 'Garden Manor Resort', image: 'assets/images/hotels/garden-manor.jpg', description: 'Spacious rooms with premium facilities and scenic surroundings.' },
            { name: 'Fortune Retreats', image: 'assets/images/hotels/fortune.jpg', description: 'A premium retreat offering luxury comfort and mountain views.' },
            { name: 'The Monarch', image: 'assets/images/hotels/monarch.jpg', description: 'Modern interiors, fine dining, and a peaceful ambience.' },
          ],

          '5-Star Deluxe': [
            { name: 'Sterling Fern Hill, Ooty', image: 'assets/images/hotels/sterling-fern.jpg', description: 'Luxury hillside resort with panoramic views and top-tier hospitality.' },
            { name: 'Accord Highland', image: 'assets/images/hotels/accord.jpg', description: 'Premium stay with luxurious rooms and breathtaking nature views.' },
            { name: 'Mango Hill Shola Resort', image: 'assets/images/hotels/mango-hill.jpg', description: 'Surrounded by forests and hills, perfect for nature lovers.' },
            { name: 'Fortune Sullivan Court', image: 'assets/images/hotels/sullivan.jpg', description: 'Elegant property offering high-end comfort and excellent service.' },
            { name: 'Gem Park Ooty', image: 'assets/images/hotels/gem-park.jpg', description: 'A premium mountain-view hotel with indoor pool and fine dining.' },
          ],

          '5-Star Luxury': [
            { name: 'Ayatana Ooty', image: 'assets/images/hotels/ayatana.jpg', description: 'Ultra-luxury property with world-class hospitality in Ooty.' },
            { name: 'Taj Savoy Hotel', image: 'assets/images/hotels/taj-savoy.jpg', description: 'Heritage Taj experience with royal-style cottages & gardens.' },
            { name: 'Taj Gateway Coonoor', image: 'assets/images/hotels/taj-gateway.jpg', description: 'Iconic Taj luxury surrounded by tea gardens and hill views.' },
          ],
        },
      },

      // ===== MUNNAR =====
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/b.jpg',

        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: 'assets/images/hotels/westwood.jpg', description: 'Cozy rooms with scenic river views and warm hospitality.' },
            { name: 'Eastend Hotel', image: 'assets/images/hotels/eastend.jpg', description: 'Popular hotel near Munnar town with garden spaces.' },
            { name: 'Trivers Resort', image: 'assets/images/hotels/trivers.jpg', description: 'Modern resort with valley views and spacious rooms.' },
            { name: 'Tea Castle', image: 'assets/images/hotels/tea-castle.jpg', description: 'A beautiful hillside property surrounded by tea plantations.' },
          ],

          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: 'assets/images/hotels/rivulet.jpg', description: 'Premium riverside resort with luxury cottages and nature views.' },
            { name: 'Elephant Passage Resort', image: 'assets/images/hotels/elephant-passage.jpg', description: 'Eco-friendly luxury resort surrounded by wildlife and greenery.' },
            { name: 'Fog Resort', image: 'assets/images/hotels/fog.jpg', description: 'Known for stunning foggy landscapes and 5-star service.' },
            { name: 'Tall Trees Resort', image: 'assets/images/hotels/tall-trees.jpg', description: 'Stay inside a lush cardamom forest with premium cottages.' },
          ],

          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: 'assets/images/hotels/blanket.jpg', description: 'Ultra-luxury waterfall-view property near Attukad Waterfalls.' },
            { name: 'The Valle Resort', image: 'assets/images/hotels/valle.jpg', description: 'A calm luxury property facing breathtaking valley views.' },
            { name: 'Fragrant Nature Resort', image: 'assets/images/hotels/fragrant-nature.jpg', description: 'Luxury boutique resort known for its peaceful ambience.' },
          ],

          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: 'assets/images/hotels/windy-woods.jpg', description: 'Top-tier luxury in Munnar with misty valley views.' },
            { name: 'Chandys Drizzle Drops', image: 'assets/images/hotels/drizzle-drops.jpg', description: 'Premium forest-side resort surrounded by lush green hills.' },
            { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: 'Exclusive luxury suites offering total privacy and comfort.' },
            { name: 'Grand Cliff Resort', image: 'assets/images/hotels/grand-cliff.jpg', description: 'Hilltop luxury property with panoramic mountain views.' },
          ],
        },
      },

      // ===== THEKKADY =====
      {
        destination: 'Thekkady (1N)', image: 'assets/images/c.jpg',

        categories: {
          '3-Star Deluxe': [
            { name: 'Abad Green Forest', image: 'assets/images/hotels/abad.jpg', description: 'Eco-themed resort in the heart of Thekkady’s greenery.' },
            { name: 'Pepper Vine Resort', image: 'assets/images/hotels/pepper-vine.jpg', description: 'Peaceful stay with traditional Kerala architecture.' },
            { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: 'Comfortable rooms surrounded by spice plantations.' },
          ],

          '4-Star Deluxe': [
            { name: 'Mountain Courtyard Resort', image: 'assets/images/hotels/mountain-courtyard.jpg', description: 'Hill-view resort offering a luxurious and quiet retreat.' },
            { name: 'Forest Canopy Resort', image: 'assets/images/hotels/forest-canopy.jpg', description: 'Premium tree-top style cottages with stunning valley views.' },
            { name: 'Reen Resorts', image: 'assets/images/hotels/reen.jpg', description: 'Modern rooms with nature-friendly resort ambience.' },
          ],

          '5-Star Deluxe': [
            { name: 'Poetree Resort', image: 'assets/images/hotels/poetree.jpg', description: 'High-end luxury property overlooking the mountains.' },
            { name: 'Elephant Court', image: 'assets/images/hotels/elephant-court.jpg', description: 'Premium resort with large pool and Ayurveda facilities.' },
            { name: 'Green Woods Resort', image: 'assets/images/hotels/green-woods.jpg', description: 'Luxury eco-resort surrounded by dense forests.' },
          ],

          '5-Star Luxury': [
            { name: 'Spice Village Resort', image: 'assets/images/hotels/spice-village.jpg', description: 'Upscale village-themed resort with Kerala heritage charm.' },
            { name: 'Lake Palace Resort', image: 'assets/images/hotels/lake-palace.jpg', description: 'Exclusive lakeside luxury available via boat access.' },
            { name: 'Hills & Hues Resort', image: 'assets/images/hotels/hills-hues.jpg', description: 'Ultra-luxurious property with breathtaking cliff-side views.' },
            { name: 'Lake Palace Resort KTDC', image: 'assets/images/hotels/ktdc-lake-palace.jpg', description: 'Heritage-style lakeside accommodation inside the sanctuary.' },
            { name: 'Blanket Resort', image: 'assets/images/hotels/blanket.jpg', description: 'Premium stay known for serene hill views and tranquility.' },
          ],
        },
      },

      // ===== HOUSEBOAT =====
      {
        destination: 'Kumarakom Houseboat (1N)', image: 'assets/images/d.jpg',

        categories: {
          'Standard': [
            { name: 'A/C Standard Houseboat', image: 'assets/images/hotels/standard-boat.jpg', description: 'Comfortable standard boat ideal for budget travellers.' }
          ],

          'Deluxe': [
            { name: 'A/C Deluxe Houseboat with Silver Flag Category', image: 'assets/images/hotels/deluxe-boat.jpg', description: 'Upgraded interiors with comfortable bedrooms & dining area.' }
          ],

          'Premium': [
            { name: 'AC Premium Houseboat with Golden flag category', image: 'assets/images/hotels/premium-boat.jpg', description: 'Premium rooms with glass windows & continuous AC.' }
          ],

          'Luxury': [
            { name: 'Full-time AC Luxury boat with Platinum category', image: 'assets/images/hotels/luxury-boat.jpg', description: 'Ultra-luxury boat with private chef and exclusive cabins.' }
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
      { id: '1', name: 'Cookery Demonstration Tour', subtitle: 'Traditional home experience with lunch or dinner', location: 'Cochin', people: "1", cost: '2000 (Non-Veg)', rating: 4.5, featured: true, img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700" },
      { id: '2', name: 'Kalarippayattu Programme', subtitle: 'Half-day martial arts demonstration', location: 'Cochin/Thekkady', people: "5 Min", cost: '1000 pp', rating: 4.2, featured: false, img: "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg" },
      { id: '3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Visit the highest hill station tea factory in the world', location: 'Munnar', people: "1", cost: '2000', rating: 4.6, featured: true, img: "https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg" },
      { id: '4', name: 'Half-Day Tea Trial Tour', subtitle: 'Tea tasting and plantation walk', location: 'Munnar', people: "1", cost: '1500', rating: 4.3, featured: false, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '5', name: 'Full Day Tea Trial Tour', subtitle: 'Extended tea plantation exploration and tasting', location: 'Munnar', people: "1", cost: '2500.00', rating: 4.7, featured: true, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '6', name: 'Mountain Trekking with Jeep Safari', subtitle: 'Trek the mountains with a guide and jeep safari', location: 'Munnar', people: "1", cost: '3000', rating: 4.8, featured: true, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '7', name: 'Bamboo River Drafting', subtitle: 'Enjoy rafting at Periyar River', location: 'Thekkady', people: "1", cost: '2500', rating: 4.4, featured: false, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '8', name: 'Full Day Trip to Gavi', subtitle: 'Nature exploration tour', location: 'Thekkady', people: "1", cost: 'On request', rating: 4.6, featured: false, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '9', name: 'Jeep Safari in Periyar Forests', subtitle: 'Explore wildlife with jeep safari', location: 'Thekkady', people: "1", cost: '2000', rating: 4.7, featured: true, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '10', name: 'Half-Day Elephant Safari', subtitle: 'Elephant ride and forest adventure', location: 'Munnar/Thekkady', people: "1", cost: '1000', rating: 4.5, featured: false, img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg" },
      { id: '11', name: 'Half Day Elephant Moments', subtitle: 'Bathing, feeding and interacting with elephants', location: 'Thekkady', people: "1", cost: '2000', rating: 4.8, featured: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s" },
      { id: '12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: 'Relaxing houseboat cruise on Kerala backwaters', location: 'Cochin', people: "1", cost: '1500', rating: 4.7, featured: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s" },
      { id: '13', name: 'Backwater Historical Tour', subtitle: 'Guided tour of Cochin’s heritage sites', location: 'Cochin', people: "1", cost: '1500', rating: 4.6, featured: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s" },
      { id: '14', name: 'Extra Night in A/C Houseboat', subtitle: 'Full day cruise from Kumarakom to Alleppey', location: 'Kumarakom - Alleppey', people: "2", cost: '7000', rating: 4.9, featured: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s" }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed arrangement',
      'Candlelight dinner (with package upgrade)',
      'Valid only for couples within 60 days of marriage (wedding card required)',
    ],
  },
  {
    id: 'kerala-1', title: 'Charm of Kerala', duration: '02 Nights / 03 Days', summary: 'Experience Kerala’s scenic beauty in Munnar with curated sightseeing and comfort stay.',

    tourHighlights: [
      'All-inclusive package without any hidden cost',
      'Food on a Breakfast and Dinner basis',
      'Carefully selected hotels & resorts based on verified guest reviews',
      'Vehicle at disposal from airport to airport without Km restrictions',
      'One dedicated English-speaking driver & one vehicle throughout the tour',
      'Tour can be changed even before 24 hours without retention fee',
      'GST, Toll charges, Bata, Parking fees, etc., included'
    ],
    quickItinerary: [
      'Day 01 – Cochin to Munnar',
      'Day 02 – Explore Munnar',
      'Day 03 – End of Tour'
    ],
    itineraryOverview: [
      { day: '01', title: "Cochin to Munnar (B+D)", details: ['Arrive at Cochin Airport and meet IDT representative.', 'Drive to Munnar hill station (3-4 hours).', 'Visit the Tea Museum & Tea Gardens en route.', 'Spice shopping.', 'Check-in to the resort and relax.', 'Overnight stay at the hotel.'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFbFh_3CYWI_pmVlYC8yayrx7d0QUl9I9wQ&s' },
      { day: '02', title: "Explore Munnar (B+D)", details: ['Breakfast at hotel.', 'Full-day sightseeing in Munnar.', 'Visit – Mattupetty Dam, Eravikulam National Park, Kundala Dam, Echo Point, and Top Station.', 'Free evening for leisure activities.', 'Overnight stay at hotel.'], image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mattupetty_Dam%2C_Munnar%2C_Kerala.jpg" },
      { day: '03', title: "End of Tour (B)", details: ['After breakfast, proceed to Cochin.', 'Drop at Airport or Railway Station.', 'End of the tour with beautiful memories.'], image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Cochin_International_Airport.jpg" }
    ],

    detailedItinerary: [
      { day: '01', title: 'Arrival at Cochin & Transfer to Munnar (B + D)', details: ['Arrival at Cochin International Airport.', 'Drive to Munnar (Approx 3-4 hours).', 'Visit Tea Museum & Tea Gardens en route.', 'Spice shopping.', 'Check-in to the hotel & relax.', 'Overnight stay at hotel.'] },
      { day: '02', title: 'Full Day Munnar Sightseeing (B + D)', details: ['Breakfast at hotel.', 'Visit Eravikulam National Park.', 'Visit Mattupetty Dam & Echo Point.', 'Visit Kundala Dam & Top Station.', 'Return to hotel and relax.', 'Overnight stay at hotel.'] },
      { day: '03', title: 'Departure – Munnar to Cochin (B)', details: ['Breakfast at hotel.', 'Drive to Cochin.', 'Drop at Airport/Train Station.'] }
    ],

    inclusions: [
      'Breakfast and Dinner at the hotel',
      'Entry fees, taxes, tolls, guides',
      'Transport with dedicated driver',
      'All sightseeing as per itinerary'
    ],

    exclusions: ['International/Domestic flights', 'Visa fees & stamping', 'Personal expenses like laundry, calls, room service', 'Single room or triple sharing quoted separately', 'Vegetarian meals on request', 'Bottled water during meals', 'Peak season supplement charges'],

    sightseeing: ['Tea Museum & Tea Gardens (Half-day)', 'Mattupetty Dam, Echo Point, Kundala Dam', 'Eravikulam National Park & Top Station', 'Entry Fees, Toll Charges, Night Charges, Guides included'],

    hotelPackages: [
      {
        destination: 'Munnar (02N)',
        image: 'assets/images/munnar.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: 'assets/images/hotels/westwood.jpg', description: 'Cozy rooms with scenic river views and warm hospitality.' },
            { name: 'Eastend Hotel', image: 'assets/images/hotels/eastend.jpg', description: 'Popular hotel near Munnar town with garden spaces.' },
            { name: 'Trivers Resort', image: 'assets/images/hotels/trivers.jpg', description: 'Modern resort with spacious rooms and valley views.' },
            { name: 'Tea Castle', image: 'assets/images/hotels/tea-castle.jpg', description: 'Hillside property surrounded by tea plantations.' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: 'assets/images/hotels/rivulet.jpg', description: 'Premium quiet riverside resort with nature ambiance.' },
            { name: 'Elephant Passage Resort', image: 'assets/images/hotels/elephant-passage.jpg', description: 'Luxury eco-friendly stay near forests.' },
            { name: 'Fog Resort', image: 'assets/images/hotels/fog.jpg', description: 'Popular for foggy scenic surroundings and premium stay.' },
            { name: 'Tall Trees Resort', image: 'assets/images/hotels/tall-trees.jpg', description: 'Cottages inside cardamom hills surrounded by greenery.' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: 'assets/images/hotels/blanket.jpg', description: 'Luxury property near waterfalls with premium rooms.' },
            { name: 'The Valle Resort', image: 'assets/images/hotels/valle.jpg', description: 'Premium resort facing panoramic mountain views.' },
            { name: 'Fragrant Nature Resort', image: 'assets/images/hotels/fragrant-nature.jpg', description: 'Sophisticated boutique stay surrounded by nature.' }
          ],
          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: 'assets/images/hotels/windy-woods.jpg', description: 'Top luxury category with misty valley views.' },
            { name: 'Chandys Drizzle Drops', image: 'assets/images/hotels/drizzle-drops.jpg', description: 'Premium forest-side stay with incredible ambience.' },
            { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: 'Exclusive private suites for luxury lovers.' },
            { name: 'Grand Cliff Resort', image: 'assets/images/hotels/grand-cliff.jpg', description: 'Luxury hilltop property with panoramic views.' }
          ]
        }
      }
    ],
    childPolicy: [
      'Below 5 years: Free of cost',
      'Above 5 years: Extra person charge + extra bed'
    ],

    meals: '**Meals: Breakfast + Dinner in all hotels',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (Toyota Etios/Swift Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Luxury Bus', icon: '🚇' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: '🚍' }
    ],

    pricing: [
      {
        season: 'High Season (Oct 1 – Dec 19 & Jan 10 – May 31)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹28,600', extraPerson: '₹8,580' },
          { category: '4-Star Deluxe Resort', twoPax: '₹35,600', extraPerson: '₹10,680' },
          { category: '5-Star Deluxe Resort', twoPax: '₹42,600', extraPerson: '₹12,780' },
          { category: '5-Star Luxury Resort', twoPax: '₹52,000', extraPerson: '₹15,600' }
        ]
      },
      {
        season: 'Off Season (Jun 1 – Sep 30)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹22,880', extraPerson: '₹6,864' },
          { category: '4-Star Deluxe Resort', twoPax: '₹28,480', extraPerson: '₹8,544' },
          { category: '5-Star Deluxe Resort', twoPax: '₹34,080', extraPerson: '₹10,224' },
          { category: '5-Star Luxury Resort', twoPax: '₹41,600', extraPerson: '₹12,480' }
        ]
      }
    ],

    supplementalAttractions: [
      { id: '1', name: 'Cookery Demonstration Tour', subtitle: 'Traditional cooking experience with lunch/dinner', location: 'Cochin', people: "1", cost: '₹2000', rating: 4.5, featured: true, img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700" },
      { id: '2', name: 'Kalaripayattu Programme', subtitle: 'Half-day martial arts show', location: 'Cochin/Thekkady', people: "5", cost: '₹1000', rating: 4.2, featured: false, img: "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg" },
      { id: '3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Visit the world’s highest altitude tea factory', location: 'Munnar', people: "1", cost: '₹2000', rating: 4.6, featured: true, img: "https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg" }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed decoration',
      'Candlelight dinner (as package upgrade)',
      'Valid for couples within 60 days of marriage (wedding card required)'
    ]
  },

  {
    id: 'kerala-2', title: 'Charm of Kerala', duration: '03 Nights / 04 Days', summary: 'A balanced Kerala tour covering Munnar and Thekkady with premium hospitality and curated attractions.',

    tourHighlights: [
      'All-inclusive package without hidden charges',
      'Breakfast + Dinner meal plan',
      'Handpicked hotels and resorts based on authentic guest reviews',
      'Vehicle at disposal without km restrictions',
      'One English-speaking driver with the same vehicle throughout the tour',
      'Tour can be rescheduled even within 24 hours with no retention fee',
      'GST, Toll charges, Bata, Parking fees included'
    ],

    quickItinerary: [
      'Day 01 – Cochin to Munnar',
      'Day 02 – Explore Munnar',
      'Day 03 – Munnar to Thekkady',
      'Day 04 – End of Tour'
    ],

    itineraryOverview: [
      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin Airport and meet IDT representative.', 'Drive to Munnar (3–4 hours).', 'Visit Tea Museum and Tea Gardens en route.', 'Spice shopping.', 'Check-in to hotel and relax.', 'Overnight stay at hotel.'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFbFh_3CYWI_pmVlYC8yayrx7d0QUl9I9wQ&s' },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Breakfast at hotel.', 'Full day exploring Munnar.', 'Visit Mattupetty Dam, Eravikulam National Park, Kundala Dam, Echo Point & Top Station.', 'Evening at leisure.', 'Overnight stay in Munnar.'], image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Mattupetty_Dam%2C_Munnar%2C_Kerala.jpg' },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Breakfast and drive to Thekkady.', 'Check-in to hotel.', 'Enjoy Kalaripayattu (martial arts performance).', 'Evening boat ride in Periyar Lake.', 'Elephant ride experience.', 'Overnight stay at hotel.'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VmiCrNu5J0t7GbbLqaXEMdX17pIn1xX_Zg&s' },
      { day: '04', title: 'End of Tour (B)', details: ['Breakfast at hotel.', 'Drive back to Cochin.', 'Transfer to Airport or Railway station.', 'End of tour with beautiful memories'], image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Cochin_International_Airport.jpg' }
    ],

    detailedItinerary: [
      { day: '01', title: 'Cochin to Munnar (B + D)', details: ['Meet at Cochin airport.', 'Drive to Munnar (3–4 Hours).', 'Visit Tea Museum & Tea Gardens.', 'Spice shopping.', 'Check-in & relax.', 'Overnight stay in Munnar.'] },
      { day: '02', title: 'Full Day Munnar Sightseeing (B + D)', details: ['Breakfast at hotel.', 'Visit Eravikulam National Park.', 'Visit Mattupetty Dam & Echo Point.', 'Visit Kundala Dam & Top Station.', 'Evening at leisure.', 'Overnight stay in Munnar.'] },
      { day: '03', title: 'Munnar to Thekkady (B + D)', details: ['Breakfast at hotel.', 'Drive to Thekkady.', 'Check-in and relax.', 'Enjoy Kalaripayattu.', 'Boat ride at Periyar Lake.', 'Elephant ride.', 'Overnight stay in Thekkady.'] },
      { day: '04', title: 'Departure – Thekkady to Cochin (B)', details: ['Breakfast at hotel.', 'Proceed to Cochin for onward journey.', 'Drop at Airport / Train station.'] }],

    inclusions: [
      'Accommodation with Breakfast + Dinner',
      'Transport with English-speaking driver',
      'Entry fees, parking fees, tolls & taxes included',
      'Sightseeing as per itinerary'
    ],

    exclusions: [
      'Flight tickets & airport taxes',
      'Visa stamping or related charges',
      'Personal expenses (Laundry, Calls, Beverages)',
      'Single room priced extra',
      'Mineral water during meals',
      'Seasonal/event special rates'
    ],

    sightseeing: [
      'Tea Museum & Tea Gardens (Half-Day)',
      'Mattupetty Dam, Echo Point, Kundala Lake',
      'Eravikulam National Park & Top Station',
      'Boat Ride at Periyar Lake',
      'Kalaripayattu Cultural Show',
      'Elephant Ride Experience'
    ],

    hotelPackages: [
      {
        destination: 'Munnar (02N)', image: 'assets/images/munnar.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: 'assets/images/hotels/westwood.jpg', description: 'Cozy rooms with peaceful ambience.' },
            { name: 'Eastend Hotel', image: 'assets/images/hotels/eastend.jpg', description: 'Central hotel with great convenience.' },
            { name: 'Trivers Resort', image: 'assets/images/hotels/trivers.jpg', description: 'Modern amenities with scenic views.' },
            { name: 'Tea Castle', image: 'assets/images/hotels/tea-castle.jpg', description: 'Overlooking plantations & valleys.' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: 'assets/images/hotels/rivulet.jpg', description: 'Premium ambience surrounded by nature.' },
            { name: 'Elephant Passage Resort', image: 'assets/images/hotels/elephant-passage.jpg', description: 'Unique forest-like setting.' },
            { name: 'Fog Resort', image: 'assets/images/hotels/fog.jpg', description: 'Foggy mountain landscapes with luxury.' },
            { name: 'Tall Trees Resort', image: 'assets/images/hotels/tall-trees.jpg', description: 'Cardamom forest stay with cottages.' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: 'assets/images/hotels/blanket.jpg', description: 'Premium leisure overlooking falls.' },
            { name: 'The Valle Resort', image: 'assets/images/hotels/valle.jpg', description: 'Premium views and luxury ambience.' },
            { name: 'Fragrant Nature Resort', image: 'assets/images/hotels/fragrant-nature.jpg', description: 'Boutique style with serene surroundings.' }
          ],
          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: 'assets/images/hotels/windy-woods.jpg', description: 'Top-tier luxury with misty valleys.' },
            { name: 'Chandys Drizzle Drops', image: 'assets/images/hotels/drizzle-drops.jpg', description: 'Luxury forest escape.' },
            { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: 'Exclusive suites with maximum privacy.' },
            { name: 'Grand Cliff Resort', image: 'assets/images/hotels/grand-cliff.jpg', description: 'Clifftop luxury with enchanting views.' }
          ]
        }
      },
      {
        destination: 'Thekkady (01N)',
        image: 'assets/images/thekkady.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'Abad Green Forest', image: 'assets/images/hotels/abad-green.jpg', description: 'Eco resort near wildlife sanctuary.' },
            { name: 'Pepper Vine Resort', image: 'assets/images/hotels/pepper-vine.jpg', description: 'Comfort stay amidst plantations.' },
            { name: 'Hotel Lincoln Square', image: 'assets/images/hotels/lincoln-square.jpg', description: 'Great accessibility and comfort.' }
          ],
          '4-Star Deluxe': [
            { name: 'Mountain Courtyard Resort', image: 'assets/images/hotels/mountain.jpg', description: 'Luxury eco stay close to wildlife.' },
            { name: 'Forest Canopy Resort', image: 'assets/images/hotels/forest-canopy.jpg', description: 'Hilltop forest retreat with views.' },
            { name: 'Aranya Nivas KTDC', image: 'assets/images/hotels/aranya.jpg', description: 'Govt-managed wildlife experience.' }
          ],
          '5-Star Deluxe': [
            { name: 'Poetree Resort', image: 'assets/images/hotels/poetree.jpg', description: 'Premium hilltop view resort.' },
            { name: 'Elephant Court', image: 'assets/images/hotels/elephant-court.jpg', description: 'Stylish heritage stay.' },
            { name: 'Green Woods Resort', image: 'assets/images/hotels/green-woods.jpg', description: 'Luxury forest stay surrounded by trees.' }
          ],
          '5-Star Luxury': [
            { name: 'Spice Village Resort', image: 'assets/images/hotels/spice-village.jpg', description: 'Top luxury tribal-style eco resort.' },
            { name: 'Hills & Hues Resort', image: 'assets/images/hotels/hills-hues.jpg', description: 'Scenic ridge-top ultra-luxury stay.' },
            { name: 'Lake Palace KTDC', image: 'assets/images/hotels/lake-palace.jpg', description: 'Exclusive palace stay by lake.' }
          ]
        }
      }
    ],

    childPolicy: [
      'Below 5 years: Free',
      'Above 5 years: Extra charge with extra bed'
    ],

    meals: '**Meals will be Breakfast + Dinner at all destinations',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (Toyota Etios/Swift Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Traveller/Mini Luxury Bus', icon: '🚇' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: '🚍' }
    ],

    pricing: [
      {
        season: 'High Season (Oct 1 – Dec 19 & Jan 10 – May 31)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹43,820', extraPerson: '₹13,145' },
          { category: '4-Star Deluxe Resort', twoPax: '₹53,660', extraPerson: '₹16,095' },
          { category: '5-Star Deluxe Resort', twoPax: '₹65,340', extraPerson: '₹19,605' },
          { category: '5-Star Luxury Resort', twoPax: '₹1,11,800', extraPerson: '₹33,540' }
        ]
      },
      {
        season: 'Off Season (Jun 1 – Sep 30)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹35,640', extraPerson: '₹10,690' },
          { category: '4-Star Deluxe Resort', twoPax: '₹43,880', extraPerson: '₹13,160' },
          { category: '5-Star Deluxe Resort', twoPax: '₹53,760', extraPerson: '₹16,130' },
          { category: '5-Star Luxury Resort', twoPax: '₹91,540', extraPerson: '₹27,460' }
        ]
      }
    ],

    supplementalAttractions: [
      { id: '1', name: 'Cookery Demonstration Tour', subtitle: 'Traditional food experience with lunch/dinner', location: 'Cochin', people: "1", cost: '₹2000', rating: 4.5, featured: true, img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700' },
      { id: '2', name: 'Kalaripayattu Programme', subtitle: 'Kerala’s ancient martial arts performance', location: 'Cochin/Thekkady', people: "5", cost: '₹1000', rating: 4.2, featured: false, img: 'https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg' },
      { id: '3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Visit the world’s highest hill station tea factory', location: 'Munnar', people: "1", cost: '₹2000', rating: 4.6, featured: true, img: 'https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg' },
      { id: '4', name: 'Tea Trial Tour (Half Day)', subtitle: 'Explore authentic tea plantation culture', location: 'Munnar', people: "1", cost: '₹1500', rating: 4.4, featured: false, img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Munnar_Tea_Estate.jpg' },
      { id: '5', name: 'Mountain Trekking + Jeep Safari', subtitle: 'Adventure ride with scenic nature views', location: 'Munnar', people: "1", cost: '₹3000', rating: 4.7, featured: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaG2aye4gtsECT2sYxuUt8uWfEIpZNgxfaUQ&s' }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed arrangement',
      'Candlelight dinner (with upgrade)',
      'Valid for couples within 60 days of marriage (wedding card required)'
    ]
  },
  {
    id: 'kerala-3', title: 'Charm of Kerala', duration: '04 Nights / 05 Days', summary: 'Explore Kerala covering Munnar, Thekkady & Kumarakom houseboat, offering ethnic charm, natural beauty, wildlife experiences and serene backwaters.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Food on a Breakfast plus Dinner basis and 03 times meals in the Houseboat',
      'Carefully selected hotels & resorts based on reviews from previous guests',
      'Vehicle at disposal on all days without any Km restrictions or additional cost',
      'One English-speaking driver & same vehicle throughout the tour',
      'Tour can be changed to any other fixed date even before 24 hours without retention fee',
      'GST, Toll charges, Driver Bata, Parking fees included'
    ],

    quickItinerary: [
      'Day 01 – Cochin to Munnar',
      'Day 02 – Explore Munnar',
      'Day 03 – Munnar to Thekkady',
      'Day 04 – Thekkady to Kumarakom Houseboat',
      'Day 05 – End of Tour'
    ],

    itineraryOverview: [
      { day: '01', title: "Cochin to Munnar (B+D)", details: ['Arrive at Cochin International Airport and drive to Munnar (3–4-hour drive).', 'Visit the Tea Museum and Tea Gardens en route.', 'Proceed for spice shopping.', 'Check into the resort and relax.', 'Overnight stay at the hotel.'], image: 'assets/images/hotels/tea-castle.jpg' },
      { day: '02', title: "Explore Munnar (B+D)", details: ['Enjoy a full day Munnar sightseeing.', 'Visit Mattupetty Dam, Eravikulam National Park, Kundala Dam, Echo Point and Top Station.', 'Time at leisure.', 'Overnight stay in Munnar.'], image: 'assets/images/hotels/westwood.jpg' },
      { day: '03', title: "Munnar to Thekkady (B+D)", details: ['Drive to Thekkady after breakfast.', 'Check-in between 11:30 AM & 12:00 PM.', 'Enjoy enchanting scenic drive.', 'Evening: Kalaripayattu performance, Periyar Lake Boating & Elephant ride.', 'Overnight stay at hotel.'], image: 'assets/images/hotels/mountain-courtyard.jpg' },
      { day: '04', title: "Thekkady to Kumarakom Houseboat (B+L+D)", details: ['Drive to Kumarakom.', 'Check into houseboat by noon.', 'Cruise through serene backwaters.', 'Enjoy onboard lunch & dinner.', 'Anchoring 5:30 PM till next day.', 'Overnight stay on houseboat.'], image: 'assets/images/hotels/houseboat.jpg' },
      { day: '05', title: "End of Tour", details: ['After breakfast, disembark at 9 AM.', 'Proceed to Cochin airport/train station.', 'Tour concludes with sweet memories.'], image: 'assets/images/hotels/houseboat.jpg' }
    ],

    detailedItinerary: [
      { day: '01', title: 'Arrival at Cochin & Transfer to Munnar (B + D)', details: ['Arrive at Cochin Airport.', 'Drive to Munnar hill station (3–4 hours).', 'Visit Tea Museum & Tea Gardens.', 'Spice shopping.', 'Check into resort and relax.', 'Overnight at hotel.'] },
      { day: '02', title: 'Full Day Munnar Sightseeing (B + D)', details: ['Breakfast at hotel.', 'Full day sightseeing in Munnar.', 'Visit: Eravikulam National Park, Mattupetty Dam, Kundala Dam, Echo Point, Top Station.', 'Leisure time.', 'Overnight stay.'] },
      { day: '03', title: 'Munnar to Thekkady (B + D)', details: ['Drive to Thekkady.', 'Check in by noon.', 'Evening boating at Periyar Lake, Elephant ride.', 'Enjoy Kalaripayattu show.', 'Overnight stay.'] },
      { day: '04', title: 'Thekkady to Kumarakom – Houseboat (B + L + D)', details: ['Drive to Kumarakom.', 'Check in to houseboat by noon.', 'Full cruise & onboard meals.', 'Anchoring from 5:30 PM.', 'Overnight stay.'] },
      { day: '05', title: 'Departure (B)', details: ['After breakfast, check out.', 'Transfer to Cochin airport/train.', 'Tour ends with memories.'] }
    ],

    inclusions: [
      'Local English-speaking driver',
      'Twin/double accommodation with breakfast + dinner',
      'Three meals in houseboat (Breakfast + Lunch + Dinner)',
      'Entry fees, taxes, tolls, guides at selected locations',
      'Transport for entire trip'
    ],

    exclusions: [
      'International/domestic flights & airport taxes',
      'Passport, visa stamping & fees',
      'Personal expenses (laundry, calls, beverages, room service, etc.)',
      'Single room, extra sharing cost',
      'Special language guide on request',
      'Bottled/mineral water during meals',
      'Peak tourist season or special event rates'
    ],

    sightseeing: [
      'Tea Museum & Gardens in Munnar',
      'Eravikulam National Park, Mattupetty Dam, Kundala Lake, Echo Point, Top Station',
      'Kalarippayattu, Periyar Lake boating & Elephant ride',
      'Full day houseboat cruise & overnight stay',
      'Entry Fees, Taxes, Local Guides'
    ],

    hotelPackages: [
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/hotels/tea-castle.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: 'assets/images/hotels/westwood.jpg', description: 'Cozy rooms & warm hospitality' },
            { name: 'Eastend Hotel', image: 'assets/images/hotels/eastend.jpg', description: 'Central location & comfort' },
            { name: 'Trivers Resort', image: 'assets/images/hotels/trivers.jpg', description: 'Valley views & calm stay' },
            { name: 'Tea Castle', image: 'assets/images/hotels/tea-castle.jpg', description: 'On a beautiful hillside' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: 'assets/images/hotels/rivulet.jpg', description: 'Luxury riverside cottages' },
            { name: 'Elephant Passage Resort', image: 'assets/images/hotels/elephant-passage.jpg', description: 'Nature luxury experience' },
            { name: 'Fog Resort', image: 'assets/images/hotels/fog.jpg', description: 'Premium scenic resort' },
            { name: 'Tall Trees Resort', image: 'assets/images/hotels/tall-trees.jpg', description: 'Forest surroundings with greenery' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: 'assets/images/hotels/blanket.jpg', description: 'Premium waterfall view resort' },
            { name: 'The Valle Resort', image: 'assets/images/hotels/valle.jpg', description: 'Luxury stay on a hill' },
            { name: 'Fragrant Nature Resort', image: 'assets/images/hotels/fragrant-nature.jpg', description: 'Peaceful boutique luxury' }
          ],
          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: 'assets/images/hotels/windy-woods.jpg', description: 'Top luxury valley views' },
            { name: 'Chandys Drizzle Drops', image: 'assets/images/hotels/drizzle-drops.jpg', description: 'Forest-luxury retreat' },
            { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: 'Premium luxury suites' },
            { name: 'Grand Cliff Resort', image: 'assets/images/hotels/grand-cliff.jpg', description: 'Hilltop luxury resort' }
          ]
        }
      },
      {
        destination: 'Thekkady (1N)',
        image: 'assets/images/hotels/mountain-courtyard.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Abad Green Forest', image: 'assets/images/hotels/abad.jpg', description: 'Eco-friendly stay nestled in nature' }, { name: 'Pepper Vine Resort', image: 'assets/images/hotels/pepper-vine.jpg', description: 'Relaxing peaceful stay' }, { name: 'Hotel Lincoln Square', image: 'assets/images/hotels/lincoln.jpg', description: 'Comfortable modern rooms' }],
          '4-Star Deluxe': [{ name: 'Mountain Courtyard Resort', image: 'assets/images/hotels/mountain-courtyard.jpg', description: 'Serene hill retreats' }, { name: 'Forest Canopy Resort', image: 'assets/images/hotels/forest-canopy.jpg', description: 'Scenic forest luxury' }, { name: 'Aranya Nivas KTDC', image: 'assets/images/hotels/aranya.jpg', description: 'Government resort near wildlife reserve' }],
          '5-Star Deluxe': [{ name: 'Poetree Resort', image: 'assets/images/hotels/poetree.jpg', description: 'Premium resort overlooking valley' }, { name: 'Elephant Court', image: 'assets/images/hotels/elephant-court.jpg', description: 'Elegant premium hotel' }, { name: 'Green Woods Resort', image: 'assets/images/hotels/green-woods.jpg', description: 'Luxe resort surrounded by greenery' }],
          '5-Star Luxury': [{ name: 'Spice Village Resort', image: 'assets/images/hotels/spice-village.jpg', description: 'Nature resort inspired by tribal huts' }, { name: 'Hills & Hues Resort', image: 'assets/images/hotels/hills-hues.jpg', description: 'Boutique scenic luxury' }, { name: 'Lake Palace Resort KTDC', image: 'assets/images/hotels/lake-palace.jpg', description: 'On the island in the lake' }, { name: 'Blanket Resort', image: 'assets/images/hotels/blanket.jpg', description: 'Premium luxury property' }]
        }
      },
      {
        destination: 'Houseboat (1N)',
        image: 'assets/images/hotels/houseboat.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: 'assets/images/hotels/houseboat.jpg', description: 'Standard AC comfort houseboat' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat (Silver Flag)', image: 'assets/images/hotels/houseboat.jpg', description: 'Upgraded premium facilities' }],
          '5-Star Deluxe': [{ name: 'A/C Premium Houseboat (Golden Flag)', image: 'assets/images/hotels/houseboat.jpg', description: 'Premium category comfort' }],
          '5-Star Luxury': [{ name: 'A/C Luxury Houseboat (Platinum)', image: 'assets/images/hotels/houseboat.jpg', description: 'Plush full-time AC luxury' }]
        }
      }
    ],

    childPolicy: [
      'Below 5 years : Free of cost',
      'Above 5 years : Extra person charge with extra bed'
    ],

    meals: "Breakfast + Dinner basis at hotels; Breakfast + Lunch + Dinner inside houseboat.",

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan Car', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Mini Luxury Bus', icon: '🚐' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: '🚍' },
    ],

    pricing: [
      {
        season: 'High Season (Oct 1 – Dec 19 & Jan 10 – May 31)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹41,200', extraPerson: '₹32,960' },
          { category: '4-Star Deluxe Resort', twoPax: '₹52,700', extraPerson: '₹42,160' },
          { category: '5-Star Deluxe Resort', twoPax: '₹59,200', extraPerson: '₹47,360' },
          { category: '5-Star Luxury Resort', twoPax: '₹76,900', extraPerson: '₹61,520' },
        ]
      },
      {
        season: 'Off Season (Jun 1 – Sep 30)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹33,560', extraPerson: '₹26,850' },
          { category: '4-Star Deluxe Resort', twoPax: '₹43,120', extraPerson: '₹34,500' },
          { category: '5-Star Deluxe Resort', twoPax: '₹48,860', extraPerson: '₹39,090' },
          { category: '5-Star Luxury Resort', twoPax: '₹63,600', extraPerson: '₹50,880' },
        ]
      }
    ],

    supplementalAttractions: [
      { id: '3-01', name: 'Cookery Demonstration Tour', subtitle: 'Traditional Kerala Lunch/Dinner', location: 'Cochin', people: '1', cost: '₹2000', rating: 4.5, featured: true, img: 'assets/images/supplements/cooking.jpg' },
      { id: '3-02', name: 'Kalaripayattu Programme', subtitle: 'Traditional Martial Arts', location: 'Cochin/Thekkady', people: '5 Min', cost: '₹1000', rating: 4.2, featured: false, img: 'assets/images/supplements/kalaripayattu.jpg' },
      { id: '3-03', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Highest Tea Factory Experience', location: 'Munnar', people: '1', cost: '₹2000', rating: 4.6, featured: true, img: 'assets/images/supplements/kolukumalai.jpg' },
      { id: '3-04', name: 'Half-Day Tea Trial Tour', subtitle: 'Tea Testing Experience', location: 'Munnar', people: '1', cost: '₹1500', rating: 4.4, featured: false, img: 'assets/images/supplements/tea-trial.jpg' },
      { id: '3-05', name: 'Full-Day Tea Trial Tour', subtitle: 'Tea Plantation Experience', location: 'Munnar', people: '1', cost: '₹2500', rating: 4.7, featured: false, img: 'assets/images/supplements/tea-full.jpg' },
      { id: '3-06', name: 'Mountain Trekking with Jeep Safari', subtitle: 'Adventure Trail', location: 'Munnar', people: '1', cost: '₹3000', rating: 4.7, featured: true, img: 'assets/images/supplements/trekking.jpg' },
      { id: '3-07', name: 'Bamboo River Rafting', subtitle: 'A thrilling rafting experience', location: 'Thekkady', people: '1', cost: '₹2500', rating: 4.6, featured: false, img: 'assets/images/supplements/bamboo.jpg' },
      { id: '3-08', name: 'Jeep Safari into Periyar Forests', subtitle: 'Explore wildlife', location: 'Thekkady', people: '1', cost: '₹2000', rating: 4.3, featured: false, img: 'assets/images/supplements/safari.jpg' },
      { id: '3-09', name: 'Half-Day Elephant Safari', subtitle: 'Ride with majestic elephants', location: 'Munnar/Thekkady', people: '1', cost: '₹1000', rating: 4.2, featured: false, img: 'assets/images/supplements/elephant.jpg' },
      { id: '3-10', name: 'Backwater Canal Cruise', subtitle: 'Country Craft Cruise', location: 'Cochin', people: '1', cost: '₹1500', rating: 4.5, featured: false, img: 'assets/images/supplements/canal.jpg' },
      { id: '3-11', name: 'Backwater Historical Tour', subtitle: 'With Guide Service', location: 'Cochin', people: '1', cost: '₹1500', rating: 4.6, featured: true, img: 'assets/images/supplements/historical.jpg' },
      { id: '3-12', name: 'Extra Night in A/C Houseboat', subtitle: 'Full Day Cruise', location: 'Kumarakom – Alleppey', people: '2', cost: '₹7000', rating: 4.9, featured: true, img: 'assets/images/supplements/houseboat-extra.jpg' }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed decoration (for couple package)',
      'Candlelight dinner (upgrade applicable)'
    ]
  },
  {
    id: 'kerala-4',
    title: 'Charm of Kerala',
    duration: '05 Nights / 06 Days',
    summary: 'A compact Kerala escape visiting Munnar, Thekkady and Kumarakom with tea gardens, wildlife, backwaters and relaxing houseboat stay.',
    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Food on a Breakfast + Dinner basis and 03 meals in the houseboat',
      'Carefully selected hotels & resorts based on guest reviews',
      'Vehicle at disposal from airport to airport on all days without km restrictions & additional cost',
      'One English-speaking driver & one vehicle for the entire tour',
      'Tour can be changed to any other fixed date even before 24 hours without retention fee',
      'GST, toll charges, driver bata, parking fees included'
    ],

    quickItinerary: [
      'Day 01 – Cochin to Munnar',
      'Day 02 – Explore Munnar',
      'Day 03 – Munnar to Thekkady',
      'Day 04 – A day in Thekkady',
      'Day 05 – Thekkady to Kumarakom (Houseboat)',
      'Day 06 – End of tour (Cochin)'
    ],

    itineraryOverview: [
      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin International Airport and meet the IDT representative.', 'Drive to Munnar (approx. 3–4 hours).', 'Visit Tea Museum and Tea Gardens en route; spice shopping.', 'Check in at hotel and relax. Overnight at the hotel.'], image: 'assets/images/hotels/munnar-overview.jpg' },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Breakfast at hotel.', 'Full-day sightseeing: Eravikulam National Park, Mattupetty Dam, Kundala Dam, Echo Point & Top Station.', 'Leisure time and overnight at the hotel.'], image: 'assets/images/hotels/westwood.jpg' },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Breakfast and depart for Thekkady (morning).', 'Check in around 11:30–12:00 at the private waiting lounge.', 'Evening boat ride on Periyar Lake and Kalarippayattu show (subject to schedule). Overnight at hotel.'], image: 'assets/images/hotels/thekkady-overview.jpg' },
      { day: '04', title: 'A Day in Thekkady (B+D)', details: ['Morning elephant ride and “elephant moments” (optional).', 'Jungle safari with guide in Periyar region.', 'Evening leisure and overnight at hotel.'], image: 'assets/images/hotels/poetree.jpg' },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Drive to Kumarakom (approx. 4 hours).', 'Check into A/C houseboat by noon and begin cruise.', 'Lunch and dinner onboard; anchored overnight on the houseboat.'], image: 'assets/images/hotels/houseboat.jpg' },
      { day: '06', title: 'End of Tour (B)', details: ['Disembark from houseboat after breakfast and transfer to Cochin Airport/railway station for onward journey.'], image: 'assets/images/hotels/cochin.jpg' }
    ],

    detailedItinerary: [
      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Meet & greet at Cochin Airport / station.', 'Drive to Munnar with stops at tea gardens and Tea Museum.', 'Check-in, evening at leisure and overnight stay.'] },
      { day: '02', title: 'Munnar Full Day (B+D)', details: ['Breakfast at hotel.', 'Visit Eravikulam National Park to see Nilgiri Tahr (subject to park timings).', 'Proceed to Mattupetty Dam, Kundala Dam, Echo Point and Top Station.', 'Return to hotel for dinner and overnight.'] },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Morning departure to Thekkady; check-in at private lounge.', 'Relax and later enjoy boating on Periyar Lake.', 'Evening Kalarippayattu show (subject to availability).'] },
      { day: '04', title: 'Thekkady Activities (B+D)', details: ['Elephant ride and elephant moments (optional paid activity).', 'Jeep/jeep-safari or guided jungle walk in Periyar area.', 'Shopping and local exploration in the evening.'] },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Drive to Kumarakom; board the traditional A/C houseboat by noon.', 'Cruise through backwaters; meals served onboard.', 'Anchored overnight and enjoy the quiet backwaters.'] },
      { day: '06', title: 'Kumarakom to Cochin Departure (B)', details: ['Disembark after breakfast and transfer to Cochin airport / station for departure.'] }
    ],

    inclusions: [
      'Local English-speaking driver and vehicle on disposal (airport to airport)', 'Twin/double accommodation on B+D basis (houseboat B+L+D)',
      'All taxes, entry fees & local guide at selected points (as specified)', 'Toll, parking charges and driver bata included'
    ],

    exclusions: [
      'International & domestic air tickets and airport taxes', 'Passport/visa fees & stamping',
      'Personal expenses (laundry, phone calls, minibar, tips not mentioned)',
      'Single supplement (quoted separately), extra sharing costs', 'Meals beyond specified, bottled water, specialty services'
    ],

    sightseeing: [
      'Tea Museum & Tea Gardens (Munnar)',
      'Eravikulam National Park, Mattupetty Dam, Kundala Dam, Echo Point & Top Station',
      'Periyar Lake boating, Kalarippayattu show',
      'Elephant ride & jungle safari (Thekkady)',
      'Houseboat cruise in Kumarakom'
    ],

    hotelPackages: [
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/hotels/munnar.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'West Wood Resort', image: 'assets/images/hotels/westwood.jpg', description: '' }, { name: 'Eastend Hotel', image: 'assets/images/hotels/eastend.jpg', description: '' }, { name: 'Trivers Resort', image: 'assets/images/hotels/trivers.jpg', description: '' }, { name: 'Tea Castle', image: 'assets/images/hotels/tea-castle.jpg', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: 'assets/images/hotels/rivulet.jpg', description: '' }, { name: 'Elephant Passage Resort', image: 'assets/images/hotels/elephant-passage.jpg', description: '' }, { name: 'Fog Resort', image: 'assets/images/hotels/fog-resort.jpg', description: '' }, { name: 'Tall Trees Resort', image: 'assets/images/hotels/tall-trees.jpg', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: 'assets/images/hotels/blanket.jpg', description: '' }, { name: 'The Valle Resort', image: 'assets/images/hotels/the-valle.jpg', description: '' }, { name: 'Fragrant Nature Resort', image: 'assets/images/hotels/fragrant-nature.jpg', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: 'assets/images/hotels/chandys-windy.jpg', description: '' }, { name: 'Chandys Drizzle Drops', image: 'assets/images/hotels/chandys-drizzle.jpg', description: '' }, { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: '' }, { name: 'Grand Cliff Resort', image: 'assets/images/hotels/grand-cliff.jpg', description: '' }
          ]
        }
      },
      {
        destination: 'Thekkady (2N)',
        image: 'assets/images/hotels/thekkady.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Abad Green Forest', image: 'assets/images/hotels/abad-green.jpg', description: '' }, { name: 'Pepper Vine Resort', image: 'assets/images/hotels/pepper-vine.jpg', description: '' }, { name: 'Hotel Lincoln Square', image: 'assets/images/hotels/lincoln-square.jpg', description: '' }],
          '4-Star Deluxe': [{ name: 'Mountain Courtyard Resort', image: 'assets/images/hotels/mountain-courtyard.jpg', description: '' }, { name: 'Forest Canopy Resort', image: 'assets/images/hotels/forest-canopy.jpg', description: '' }, { name: 'Reen Resorts', image: 'assets/images/hotels/reen-resorts.jpg', description: '' }],
          '5-Star Deluxe': [{ name: 'Poetree Resort', image: 'assets/images/hotels/poetree.jpg', description: '' }, { name: 'Elephant Court', image: 'assets/images/hotels/elephant-court.jpg', description: '' }, { name: 'Green Woods Resort', image: 'assets/images/hotels/green-woods.jpg', description: '' }],
          '5-Star Luxury': [{ name: 'Spice Village Resort', image: 'assets/images/hotels/spice-village.jpg', description: '' }, { name: 'Hills & Hues Resort', image: 'assets/images/hotels/hills-hues.jpg', description: '' }, { name: 'Lake Palace Resort KTDC', image: 'assets/images/hotels/lake-palace-ktdc.jpg', description: '' }, { name: 'Blanket Resort', image: 'assets/images/hotels/blanket-resort.jpg', description: '' }]

        }
      },
      {
        destination: 'Kumarakom Houseboat (1N)',
        image: 'assets/images/hotels/houseboat.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: 'assets/images/hotels/houseboat-standard.jpg', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: 'assets/images/hotels/houseboat-deluxe.jpg', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden flag category', image: 'assets/images/hotels/houseboat-premium.jpg', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury boat with Platinum category', image: 'assets/images/hotels/houseboat-luxury.jpg', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free of cost',
      'Child between 5–12 years: 25% of adult price on double share',
      'Extra adult with extra bed: 30% of adult price on double share'
    ],

    meals: 'Breakfast + Dinner at hotels; Breakfast + Lunch + Dinner on houseboat',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (mostly Toyota Etios/Swift Dezire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Traveller / Mini Luxury Bus', icon: '🚐' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: '🚍' }
    ],

    pricing: [
      {
        season: '1st Oct 2025 - 19th Dec 2025 & 10th Jan 2026 - 31st May 2026',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 34,210/-', single: 'Rs 27,370/-', extraPerson: 'Rs 10,263/-' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 45,690/-', single: 'Rs 36,550/-', extraPerson: 'Rs 13,707/-' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 50,080/-', single: 'Rs 40,060/-', extraPerson: 'Rs 15,024/-' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 61,475/-', single: 'Rs 49,180/-', extraPerson: 'Rs 18,443/-' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 27,360/-', single: 'Rs 21,890/-', extraPerson: 'Rs 8,208/-' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 36,550/-', single: 'Rs 29,240/-', extraPerson: 'Rs 10,965/-' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 40,065/-', single: 'Rs 32,050/-', extraPerson: 'Rs 12,020/-' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 49,180/-', single: 'Rs 39,350/-', extraPerson: 'Rs 14,754/-' }
        ]
      }
    ],

    supplementalAttractions: [
      { id: '1', name: 'Half-Day Cookery Demonstration', subtitle: 'Traditional Home with Lunch/Dinner', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: true, img: 'assets/images/attractions/cookery.jpg' },
      { id: '2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial Arts Experience (Min 5 Pax)', location: 'Cochin/Thekkady', people: 'Per Person', cost: 'Rs. 1000', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: '3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Highest hill tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: false, img: 'assets/images/attractions/tea-factory.jpg' },
      { id: '4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1500', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial.jpg' },
      { id: '5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2500', rating: 5, featured: false, img: 'assets/images/attractions/tea-full.jpg' },
      { id: '6', name: 'Mountain Trekking with Jeep Safari', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3000', rating: 5, featured: false, img: 'assets/images/attractions/trekking.jpg' },
      { id: '7', name: 'Bamboo River Drafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2500', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-raft.jpg' },
      { id: '8', name: 'Full Day Trip to Gavi', subtitle: '', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: 'assets/images/attractions/gavi.jpg' },
      { id: '9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: 'assets/images/attractions/jeep-safari.jpg' },
      { id: '10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar/Thekkady', people: 'Per Person', cost: 'Rs. 1000', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: '11', name: 'Half Day Elephant Moments', subtitle: 'Bathing, Feeding and Safari', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: '12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: '13', name: 'Backwater Historical Tour at Cochin', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour.jpg' },
      { id: '14', name: 'Extra night in A/C Houseboat', subtitle: 'Full day cruise from Kumarakom to Alleppey', location: 'Kumarakom-Alleppey', people: 'For Two Persons', cost: 'Rs. 7000', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' }
    ],

    specialOffers: [
      'Complimentary honeymoon cake (couple packages)',
      'Flower bed decoration (on request)',
      'Candlelight dinner (upgrade applicable)'
    ]
  },

  {
    id: 'kerala-6',
    title: 'Charm of Kerala',
    duration: '07 Nights / 08 Days',
    summary:
      'Explore Kerala covering Munnar, Thekkady, Kumarakom, Kovalam & Kanyakumari with scenic landscapes, wildlife experiences, serene backwaters, beaches, heritage sites and cultural legacy.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Food on a Breakfast plus Dinner basis and 03 times meals in the Houseboat',
      'Carefully selected hotels & resorts based on reviews from previous guests',
      'Vehicle at disposal from airport to airport on all days without any km restrictions',
      'One English-speaking driver & same vehicle throughout the tour',
      'Tour can be changed to any other fixed date even before 24 hours without retention fee',
      'GST, Toll charges, Driver Bata, Parking fees included'
    ],

    quickItinerary: [
      'Day 01 – Cochin to Munnar',
      'Day 02 – Explore Munnar',
      'Day 03 – Munnar to Thekkady',
      'Day 04 – Leisure Day in Thekkady',
      'Day 05 – Thekkady to Kumarakom Houseboat',
      'Day 06 – Kumarakom to Kovalam',
      'Day 07 – Kovalam to Kanyakumari',
      'Day 08 – End of Tour'
    ],

    itineraryOverview: [

      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin Airport.', 'Drive to Munnar (3–4-hour drive).', 'Visit Tea Museum & Tea Gardens en route.', 'Spice shopping.', 'Check in and relax.', 'Overnight stay at hotel.'], image: 'assets/images/hotels/tea-castle.jpg' },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Full-day sightseeing in Munnar.', 'Visit Mattupetty Dam, Eravikulam National Park, Kundala Dam, Echo Point & Top Station.', 'Leisure time.', 'Overnight stay.'], image: 'assets/images/hotels/westwood.jpg' },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Drive to Thekkady.', 'Check in around 11:30 AM – 12:00 PM.', 'Boating at Periyar Lake.', 'Enjoy Kalarippayattu Show.', 'Overnight stay.'], image: 'assets/images/hotels/mountain-courtyard.jpg' },
      { day: '04', title: 'A Day in Thekkady (B+D)', details: ['Elephant ride.', 'Jungle safari with guide.', 'Evening shopping & leisure.', 'Overnight stay.'], image: 'assets/images/hotels/mountain-courtyard.jpg' },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Drive to Kumarakom.', 'Check in by noon.', 'Cruise through lush backwaters.', 'Lunch & Dinner onboard.', 'Anchoring from 5:30 PM until next morning.', 'Overnight stay on houseboat.'], image: 'assets/images/hotels/houseboat.jpg' },
      { day: '06', title: 'Kumarakom to Kovalam (B+D)', details: ['Check out at 9:00 AM.', 'Drive to Kovalam Beach (5 hours).', 'Check in and relax.', 'Enjoy the beach.', 'Overnight stay.'], image: 'assets/images/hotels/kovalam.jpg' },
      { day: '07', title: 'Kovalam to Kanyakumari (B+D)', details: ['Visit Padmanabhapuram Palace en route.', 'Check into hotel.', 'Visit Vivekananda Memorial & Thiruvalluvar Statue.', 'Watch sunset over Arabian Sea.', 'Overnight stay.'], image: 'assets/images/hotels/kanyakumari.jpg' },
      { day: '08', title: 'End of Tour (B)', details: ['Witness sunrise at Kanyakumari.', 'Visit Sree Suchindram Temple en route.', 'Drive to Trivandrum (3.5 hours).', 'Drop at airport/railway station.'], image: 'assets/images/hotels/kanyakumari.jpg' }
    ],
    detailedItinerary: [

      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin Airport.', 'Drive to Munnar (3–4-hour drive).', 'Visit Tea Museum & Tea Gardens en route.', 'Spice shopping.', 'Check in and relax.', 'Overnight stay at hotel.'] },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Full-day sightseeing in Munnar.', 'Visit Mattupetty Dam, Eravikulam National Park, Kundala Dam, Echo Point & Top Station.', 'Leisure time.', 'Overnight stay.'] },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Drive to Thekkady.', 'Check in around 11:30 AM – 12:00 PM.', 'Boating at Periyar Lake.', 'Enjoy Kalarippayattu Show.', 'Overnight stay.'] },
      { day: '04', title: 'A Day in Thekkady (B+D)', details: ['Elephant ride.', 'Jungle safari with guide.', 'Evening shopping & leisure.', 'Overnight stay.'] },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Drive to Kumarakom.', 'Check in by noon.', 'Cruise through lush backwaters.', 'Lunch & Dinner onboard.', 'Anchoring from 5:30 PM until next morning.', 'Overnight stay on houseboat.'] },
      { day: '06', title: 'Kumarakom to Kovalam (B+D)', details: ['Check out at 9:00 AM.', 'Drive to Kovalam Beach (5 hours).', 'Check in and relax.', 'Enjoy the beach.', 'Overnight stay.'] },
      { day: '07', title: 'Kovalam to Kanyakumari (B+D)', details: ['Visit Padmanabhapuram Palace en route.', 'Check into hotel.', 'Visit Vivekananda Memorial & Thiruvalluvar Statue.', 'Watch sunset over Arabian Sea.', 'Overnight stay.'] },
      { day: '08', title: 'End of Tour (B)', details: ['Witness sunrise at Kanyakumari.', 'Visit Sree Suchindram Temple en route.', 'Drive to Trivandrum (3.5 hours).', 'Drop at airport/railway station.'] }
    ],
    inclusions: [
      'Local English-speaking driver',
      'Twin/double accommodation with breakfast + dinner',
      'Three meals in houseboat (Breakfast + Lunch + Dinner)',
      'Entry fees, tolls, taxes, local guides at selected locations',
      'Transport for the entire trip'
    ],

    exclusions: [
      'International/domestic flights & airport taxes',
      'Passport, visa fees & stamping',
      'Personal expenses (laundry, calls, beverages etc.)',
      'Single room, extra sharing cost',
      'Special language guide on request',
      'Bottled/mineral water during meals',
      'Peak season or special event surcharges'
    ],

    sightseeing: [
      'Tea Museum & Gardens in Munnar',
      'Eravikulam National Park, Mattupetty Dam, Kundala Dam, Echo Point & Top Station',
      'Periyar Lake boating & Kalarippayattu show',
      'Elephant ride & Jungle safari',
      'Full-day houseboat cruise & overnight stay',
      'Kanyakumari sunset, Vivekananda Memorial & Thiruvalluvar statue',
      'Padmanabhapuram Palace and Suchindram Temple',
      'Optional visit to Padmanabha Swamy Temple'
    ],

    hotelPackages: [
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/munnar.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: '', description: '' },
            { name: 'Eastend Hotel', image: '', description: '' },
            { name: 'Trivers Resort', image: '', description: '' },
            { name: 'Tea Castle', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: '', description: '' },
            { name: 'Elephant Passage Resort', image: '', description: '' },
            { name: 'Fog Resort', image: '', description: '' },
            { name: 'Tall Trees Resort', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: '', description: '' },
            { name: 'The Valle Resort', image: '', description: '' },
            { name: 'Fragrant Nature Resort', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: '', description: '' },
            { name: 'Chandys Drizzle Drops', image: '', description: '' },
            { name: 'Spice Tree Resort', image: '', description: '' },
            { name: 'Grand Cliff Resort', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Thekkady (2N)',
        image: 'assets/images/thekkady.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'Abad Green Forest', image: '', description: '' },
            { name: 'Peppervine Resort', image: '', description: '' },
            { name: 'Hotel Lincoln Square', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Mountain Courtyard Resort', image: '', description: '' },
            { name: 'Forest Canopy Resort', image: '', description: '' },
            { name: 'Aranya Nivas KTDC', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Poetree Resort', image: '', description: '' },
            { name: 'Elephant Court', image: '', description: '' },
            { name: 'Green Woods Resort', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Spice Village Resort', image: '', description: '' },
            { name: 'Hills & Hues Resort', image: '', description: '' },
            { name: 'Lake Palace Resort KTDC', image: '', description: '' },
            { name: 'Blanket Resort', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Houseboat (1N)',
        image: 'assets/images/houseboat.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden Flag Category', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury boat with Platinum Category', image: '', description: '' }]
        }
      },
      {
        destination: 'Kovalam (1N)',
        image: 'assets/images/kovalam.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Soma Palm Shore', image: '', description: '' }, { name: 'Jasmine Palace', image: '', description: '' }, { name: 'Hotel Neelakanta', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'KTDC Samudra Resort', image: '', description: '' }, { name: 'Tranvancore Beach Resort', image: '', description: '' }, { name: 'Sagara Beach Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Udaya Samudra Beach Resort', image: '', description: '' }, { name: 'Gokulam Grand Turtle on the Beach', image: '', description: '' }, { name: 'Rock Holm at the Lighthouse Beach', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'The Leela Kovalam', image: '', description: '' }, { name: 'Taj Green Coves', image: '', description: '' }, { name: 'Niramaya Surya Samudra Resort', image: '', description: '' }]
        }
      },
      {
        destination: 'Kanyakumari (1N)',
        image: 'assets/images/kanyakumari.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Singar International', image: '', description: '' }, { name: 'Sea View Hotel', image: '', description: '' }, { name: 'Sealand Hotel', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Annai Celestial Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Annai Resorts & Spa', image: '', description: '' }, { name: 'Anantya by the Lake', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Annai Resorts & Spa', image: '', description: '' }, { name: 'Anantya by the Lake', image: '', description: '' }]
        }
      }
    ],
    childPolicy: [
      'Below 5 years: Free of cost',
      'Above 5 years: Extra person charge with extra bed'
    ],

    meals: 'Breakfast + Dinner basis at hotels; Breakfast + Lunch + Dinner inside houseboat.',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan Car (Etios/Swift Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Traveller / Mini Luxury Bus', icon: '🚐' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus', icon: '🚍' }
    ],

    pricing: [
      {
        season: '1st Oct 2025 - 19th Dec 2025 & 10th Jan 2026 - 31st May 2026',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 91,300/-', single: 'Rs 73,040/-', extraPerson: 'Rs 27,390/-' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 1,22,200/-', single: 'Rs 97,760/-', extraPerson: 'Rs 36,660/-' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 1,43,800/-', single: 'Rs 1,15,040/-', extraPerson: 'Rs 43,140/-' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 1,99,800/-', single: 'Rs 1,59,840/-', extraPerson: 'Rs 59,940/-' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 74,200/-', single: 'Rs 59,360/-', extraPerson: 'Rs 22,260/-' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 99,600/-', single: 'Rs 79,680/-', extraPerson: 'Rs 29,880/-' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 1,18,000/-', single: 'Rs 94,400/-', extraPerson: 'Rs 35,400/-' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 1,64,000/-', single: 'Rs 1,31,200/-', extraPerson: 'Rs 49,200/-' }
        ]
      }
    ],

    supplementalAttractions: [
      { id: '1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or Dinner', subtitle: 'Non-Veg', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2000.00', rating: 0, featured: false, img: '' },
      { id: '2', name: 'Half day Kalarippayattu Programme', subtitle: 'Min 5 Pax', location: 'Cochin/Thekkady', people: 'Per Person', cost: 'Rs. 1000.00', rating: 0, featured: false, img: '' },
      { id: '3', name: 'Kolukumalai Tea Factory Visit (the Highest hill station Tea Factory in the world)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2000.00', rating: 0, featured: false, img: '' },
      { id: '4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1500.00', rating: 0, featured: false, img: '' },
      { id: '5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2500.00', rating: 0, featured: false, img: '' },
      { id: '6', name: 'Mountain Trekking with Jeep Safari with a guide', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3000.00', rating: 0, featured: false, img: '' },
      { id: '7', name: 'Bamboo River Drafting at Periyar River', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2500.00', rating: 0, featured: false, img: '' },
      { id: '8', name: 'Full Day Trip to Gavi', subtitle: '', location: 'Thekkady', people: 'On Request', cost: '', rating: 0, featured: false, img: '' },
      { id: '9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000.00', rating: 0, featured: false, img: '' },
      { id: '10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar/Thekkady', people: 'Per Person', cost: 'Rs. 1000.00', rating: 0, featured: false, img: '' },
      { id: '11', name: 'Half Day Elephant Moments with Bathing, Feeding and Safari', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000.00', rating: 0, featured: false, img: '' },
      { id: '12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500.00', rating: 0, featured: false, img: '' },
      { id: '13', name: 'Backwater Historical Tour at Cochin with a Guide service', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500.00', rating: 0, featured: false, img: '' },
      { id: '14', name: 'Extra night in A/C Houseboat with full day cruise from Kumarakom to Alleppey', subtitle: 'For Two Persons', location: 'Kumarakom - Alleppey', people: 'Two Persons', cost: 'Rs. 7000.00', rating: 0, featured: false, img: '' }
    ],
    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed decoration (for couple package)',
      'Candlelight dinner (upgrade applicable)'
    ]
  },
  {
    id: 'kerala-7',
    title: 'Charm of Kerala',
    duration: '07 Nights / 08 Days',
    summary: 'Explore Kerala covering Munnar, Thekkady, Kumarakom, Varkala, Poovar & Kovalam with scenic landscapes, wildlife experiences, serene backwaters, beaches, heritage sites and cultural legacy.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Food on a Breakfast plus Dinner basis and 03 times meals in the Houseboat',
      'Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them',
      'Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost',
      'One driver (English-speaking) & one Vehicle for the entire tour',
      'Tour can be changed to any other fixed date even before 24 hours without retention fee',
      'GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package'
    ],

    quickItinerary: [
      'Day 01 – Cochin to Munnar',
      'Day 02 – Explore Munnar',
      'Day 03 – Munnar to Thekkady',
      'Day 04 – A Day in Thekkady',
      'Day 05 – Thekkady to Kumarakom Houseboat',
      'Day 06 – Kumarakom to Varkala',
      'Day 07 – Varkala to Poovar',
      'Day 08 – End of Tour'
    ],

    itineraryOverview: [
      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin International Airport and meet the IDT representative.', 'Drive to Munnar (3–4-hour drive).', 'Visit Tea Museum and Tea Gardens en route.', 'Spice shopping.', 'Check in and relax.', 'Overnight stay at hotel.'], image: '' },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Breakfast at the hotel.', 'Full-day sightseeing: Mattupetty Dam, Eravikulam National Park, Kundala Dam, Echo Point & Top Station.', 'Leisure time in the evening.', 'Overnight stay at hotel.'], image: '' },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Breakfast at hotel and depart for Thekkady at 08:30 AM.', 'Check in at private waiting lounge around 11:30–12:00.', 'Enjoy evening boat ride on Periyar Lake.', 'Watch Kalarippayattu Show.', 'Overnight stay at hotel.'], image: '' },
      { day: '04', title: 'A Day in Thekkady (B+D)', details: ['Elephant ride in the morning.', 'Jungle safari with guide.', 'Evening leisure and shopping.', 'Overnight stay at hotel.'], image: '' },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Drive to Kumarakom at 08:30 AM (approx. 4-hour drive).', 'Check in to traditional houseboat by noon.', 'Cruise through backwaters.', 'Lunch & Dinner onboard.', 'Overnight stay on houseboat.'], image: '' },
      { day: '06', title: 'Kumarakom to Varkala (B+D)', details: ['Check out from houseboat at 09:00 AM and drive to Varkala (4 hours).', 'Check in at resort and relax.', 'Visit Papanasam Beach or optional Sivagiri tour.', 'Evening leisure and overnight stay.'], image: '' },
      { day: '07', title: 'Varkala to Poovar (B+D)', details: ['Drive to Poovar after breakfast (2-hour drive).', 'Check in to resort.', 'Boat ride through Poovar backwaters.', 'Visit Kovalam beach (optional).', 'Overnight stay at resort.'], image: '' },
      { day: '08', title: 'End of Tour (B)', details: ['After breakfast, check out from hotel.', 'Drive back to Trivandrum Airport for return flight.'], image: '' }
    ],

    detailedItinerary: [],

    inclusions: [
      'Local English-speaking driver',
      'Twin/double accommodation with breakfast + dinner',
      'Three meals in houseboat (Breakfast + Lunch + Dinner)',
      'Entry fees, tolls, taxes, local guides at selected locations',
      'Transport for the entire trip'
    ],

    exclusions: [
      'International/domestic flights & airport taxes',
      'Passport, visa fees & stamping',
      'Personal expenses (laundry, calls, beverages etc.)',
      'Single room, extra sharing cost',
      'Special language guide on request',
      'Bottled/mineral water during meals',
      'Peak season or special event surcharges'
    ],

    sightseeing: [
      'Munnar Tea Museum & Tea Gardens',
      'Eravikulam National Park, Mattupetty Dam, Kundala Dam, Echo Point & Top Station',
      'Periyar Lake boating & Kalarippayattu show',
      'Elephant ride & Jungle safari',
      'Full-day houseboat cruise & overnight stay',
      'Papanasam Beach & Sivagiri tour',
      'Poovar backwaters boat ride & Kovalam beach visit'
    ],

    hotelPackages: [
      {
        destination: 'Munnar (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: '', description: '' },
            { name: 'Eastend Hotel', image: '', description: '' },
            { name: 'Trivers Resort', image: '', description: '' },
            { name: 'Tea Castle', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: '', description: '' },
            { name: 'Elephant Passage Resort', image: '', description: '' },
            { name: 'Fog Resort', image: '', description: '' },
            { name: 'Tall Trees Resort', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: '', description: '' },
            { name: 'The Valle Resort', image: '', description: '' },
            { name: 'Fragrant Nature Resort', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Chandys Windy Woods', image: '', description: '' },
            { name: 'Chandys Drizzle Drops', image: '', description: '' },
            { name: 'Spice Tree Resort', image: '', description: '' },
            { name: 'Grand Cliff Resort', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Thekkady (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [
            { name: 'Abad Green Forest', image: '', description: '' },
            { name: 'Pepper Vine Resort', image: '', description: '' },
            { name: 'Hotel Lincoln Square', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Mountain Courtyard Resort', image: '', description: '' },
            { name: 'Forest Canopy Resort', image: '', description: '' },
            { name: 'Reen Resorts', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Poetree Resort', image: '', description: '' },
            { name: 'Elephant Court', image: '', description: '' },
            { name: 'Green Woods Resort', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Spice Village Resort', image: '', description: '' },
            { name: 'Hills & Hues Resort', image: '', description: '' },
            { name: 'Lake Palace Resort KTDC', image: '', description: '' },
            { name: 'Blanket Resort', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Houseboat (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden Flag Category', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury boat with Platinum Category', image: '', description: '' }]
        }
      },
      {
        destination: 'Varkala (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Deshadan Cliff & Beach Resort', image: '', description: '' }, { name: 'Madathil Cottages & Resort', image: '', description: '' }, { name: 'Hindustan Beach Resort', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Deshadan Cliff & Beach Resort', image: '', description: '' }, { name: 'Madathil Cottages & Resort', image: '', description: '' }, { name: 'Hindustan Beach Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Elixir Cliff', image: '', description: '' }, { name: 'Taj Gateway', image: '', description: '' }, { name: 'Villa Luca by Elixir Cliff', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Elixir Cliff', image: '', description: '' }, { name: 'Taj Gateway', image: '', description: '' }, { name: 'Villa Luca by Elixir Cliff', image: '', description: '' }]
        }
      },
      {
        destination: 'Poovar (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Jeevan Beach Resort', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Over the Hill Resort', image: '', description: '' }, { name: 'Isola Di Cocco', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Poovar Island Resort', image: '', description: '' }, { name: 'Estuary Sarovar Premiere', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Poovar Island Resort', image: '', description: '' }, { name: 'Estuary Sarovar Premiere', image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free of cost',
      'Child above 5 years: Extra person charge with extra bed'
    ],

    meals: 'Breakfast + Dinner at hotels; Breakfast + Lunch + Dinner on houseboat',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (mostly Toyota Etios/Swift Dezire)' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Traveller / Mini Luxury Bus' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus' }
    ],

    pricing: [
      {
        season: '1st Oct 2025 - 19th Dec 2025 & 10th Jan 2026 - 31st May 2026',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 86,900/-', single: 'Rs 69,520/-', extraPerson: 'Rs 26,070/-' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 1,18,600/-', single: 'Rs 94,880/-', extraPerson: 'Rs 35,580/-' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 1,47,700/-', single: 'Rs 1,18,160/-', extraPerson: 'Rs 44,310/-' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 1,92,300/-', single: 'Rs 1,53,840/-', extraPerson: 'Rs 57,690/-' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 70,700/-', single: 'Rs 56,560/-', extraPerson: 'Rs 21,210/-' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 96,800/-', single: 'Rs 77,440/-', extraPerson: 'Rs 28,920/-' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 1,21,100/-', single: 'Rs 96,880/-', extraPerson: 'Rs 36,330/-' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 1,58,000/-', single: 'Rs 1,26,400/-', extraPerson: 'Rs 47,400/-' }
        ]
      }
    ],

    supplementalAttractions: [
      { id: '1', name: 'Half-Day Cookery Demonstration', subtitle: 'Traditional Home with Lunch/Dinner', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: true, img: '' },
      { id: '2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial Arts Experience', location: 'Cochin/Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1000', rating: 4, featured: false, img: '' },
      { id: '3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Highest Hill Tea Factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: false, img: '' },
      { id: '4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1500', rating: 4, featured: false, img: '' },
      { id: '5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2500', rating: 5, featured: false, img: '' },
      { id: '6', name: 'Mountain Trekking with Jeep Safari', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3000', rating: 5, featured: false, img: '' },
      { id: '7', name: 'Bamboo River Drafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2500', rating: 4, featured: false, img: '' },
      { id: '8', name: 'Full Day Trip to Gavi', subtitle: '', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: '9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: '' },
      { id: '10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar/Thekkady', people: 'Per Person', cost: 'Rs. 1000', rating: 4, featured: false, img: '' },
      { id: '11', name: 'Half Day Elephant Moments', subtitle: 'Bathing, Feeding and Safari', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: '' },
      { id: '12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 5, featured: false, img: '' },
      { id: '13', name: 'Backwater Historical Tour at Cochin', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 4, featured: false, img: '' },
      { id: '14', name: 'Extra night in A/C Houseboat', subtitle: 'Full day cruise from Kumarakom to Alleppey', location: 'Kumarakom-Alleppey', people: 'For 2 Persons', cost: 'Rs. 7000', rating: 5, featured: false, img: '' }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed decoration (for couple package)',
      'Candlelight dinner (upgrade applicable)'
    ]
  },
  {
    id: 'kerala-08',
    title: 'Charm of Kerala and Border Beauties',
    duration: '08 Nights / 09 Days',
    summary: 'Experience Madurai, Kodaikanal, Thekkady, Munnar, and Kumarakom with scenic landscapes, cultural heritage, wildlife experiences, backwaters, and luxury accommodations.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Food on a Breakfast plus Dinner basis and 03 times meals in the Houseboat',
      'Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them',
      'Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost',
      'One driver (English-speaking) & one Vehicle for the entire tour',
      'Tour can be changed to any other fixed date even before 24 hours without retention fee',
      'GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Madurai (B+D)',
      'Day 02 – Explore Madurai (B+D)',
      'Day 03 – Madurai to Kodaikanal (B+D)',
      'Day 04 – Explore Kodaikanal (B+D)',
      'Day 05 – Proceed to Thekkady (B+D)',
      'Day 06 – On to Munnar (B+D)',
      'Day 07 – Explore Munnar (B+D)',
      'Day 08 – Enjoy Kumarakom Houseboat (B+D)',
      'Day 09 – Departure from Cochin (B+D)'
    ],

    itineraryOverview: [
      {
        day: '01',
        title: 'Arrival at Madurai (B+D)',
        details: [
          'Arrive at Madurai International Airport and meet IDT representative.',
          'Check in at hotel and relax.',
          'Evening visit to Madurai Meenakshi Temple.',
          'Overnight stay at the hotel.'
        ],
        image: ''
      },
      {
        day: '02',
        title: 'Explore Madurai (B+D)',
        details: [
          'Breakfast at hotel.',
          'Morning visit to Meenakshi Temple for Arathi.',
          'Visit Thirumalai Nayakar Mahal.',
          'Return to hotel and relax.',
          'Overnight stay at the hotel.'
        ],
        image: ''
      },
      {
        day: '03',
        title: 'Madurai to Kodaikanal (B+D)',
        details: [
          'Breakfast and check out.',
          'Drive to Kodaikanal (approx. 3 hrs 10 mins, 120 km).',
          'Check in at hotel and relax.',
          'Afternoon visit: Kodaikanal Lake, Coaker’s Walk, Pillar Rocks, Bryant Park.',
          'Overnight stay at hotel.'
        ],
        image: ''
      },
      {
        day: '04',
        title: 'Explore Kodaikanal (B+D)',
        details: [
          'Breakfast at hotel.',
          'Visit Dolphin’s Nose, Guna Cave, Pine Forest, Silver Cascade Falls.',
          'Return to hotel for overnight stay.'
        ],
        image: ''
      },
      {
        day: '05',
        title: 'Proceed to Thekkady (B+D)',
        details: [
          'Check out from hotel and drive to Thekkady (4 hrs, 150 km).',
          'Elephant ride and moments.',
          'Jungle safari with guide.',
          'Kalarippayattu martial arts experience.',
          'Return to hotel for overnight stay.'
        ],
        image: ''
      },
      {
        day: '06',
        title: 'On to Munnar (B+D)',
        details: [
          'Early morning Periyar Lake boating at 6:30 AM.',
          'Return to hotel, have breakfast, check out.',
          'Drive to Munnar (approx. 4 hrs 30 mins).',
          'En route visit Tea Gardens & Tea Museum.',
          'Check in at hotel and relax, overnight stay.'
        ],
        image: ''
      },
      {
        day: '07',
        title: 'Explore Munnar (B+D)',
        details: [
          'Breakfast at hotel.',
          'Visit Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake.',
          'Proceed to Top Station for panoramic views.',
          'Overnight stay at hotel.'
        ],
        image: ''
      },
      {
        day: '08',
        title: 'Enjoy Kumarakom Houseboat (B+D)',
        details: [
          'Breakfast and check out from hotel.',
          'Board A/C luxury houseboat by 11:30 AM.',
          'Cruise along backwaters, enjoy traditional lunch and dinner onboard.',
          'Overnight stay in houseboat.'
        ],
        image: ''
      },
      {
        day: '09',
        title: 'Departure from Cochin (B+D)',
        details: [
          'Breakfast and check out from houseboat by 9:30 AM.',
          'Drive to Cochin International Airport for return flight.'
        ],
        image: ''
      }
    ],
    detailedItinerary: [],

    hotelPackages: [
      {
        destination: 'Madurai (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [
            { name: 'The Madurai Residency', image: '', description: '' },
            { name: 'Hotel Germanus Madurai', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Mount Retreats Resort', image: '', description: '' },
            { name: 'The Heritage Madurai', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Sterling V Grand Madurai', image: '', description: '' },
            { name: 'Grand Madurai by GRT', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Royal Court', image: '', description: '' },
            { name: 'Courtyard by Marriott', image: '', description: '' },
            { name: 'Regency Madurai by GRT', image: '', description: '' },
            { name: 'Fortune Pandiyan Hotel', image: '', description: '' },
            { name: 'Taj Gateway Hotel, Madurai', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Kodaikanal (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [
            { name: 'Avadale Resort', image: '', description: '' },
            { name: 'Craigmore by Kodai Resort', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Kodai Heaven', image: '', description: '' },
            { name: 'Country Club Valley', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Kodai Resort', image: '', description: '' },
            { name: 'Dolphin Nose Retreat', image: '', description: '' },
            { name: 'Sterling Kodai Lake', image: '', description: '' },
            { name: 'Sterling Kodai Valley', image: '', description: '' },
            { name: 'Mountain Retreat', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'The Tamara Hotel', image: '', description: '' },
            { name: 'The Carlton', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Thekkady (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [
            { name: 'Abad Green Forest', image: '', description: '' },
            { name: 'Pepper Vine Resort', image: '', description: '' },
            { name: 'Hotel Lincoln Square', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Mountain Courtyard Resort', image: '', description: '' },
            { name: 'Forest Canopy Resort', image: '', description: '' },
            { name: 'Aranya Nivas KTDC', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Poetree Resort', image: '', description: '' },
            { name: 'Elephant Court', image: '', description: '' },
            { name: 'Green Woods Resort', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Spice Village Resort', image: '', description: '' },
            { name: 'Hills & Hues Resort', image: '', description: '' },
            { name: 'Lake Palace Resort KTDC', image: '', description: '' },
            { name: 'Blanket Resort', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Munnar (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [
            { name: 'West Wood Resort', image: '', description: '' },
            { name: 'Eastend Hotel', image: '', description: '' },
            { name: 'Trivers Resort', image: '', description: '' },
            { name: 'Tea Castle', image: '', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Rivulet Resort', image: '', description: '' },
            { name: 'Elephant Passage Resort', image: '', description: '' },
            { name: 'Fog Resort', image: '', description: '' },
            { name: 'Tall Trees Resort', image: '', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Blanket Hotel', image: '', description: '' },
            { name: 'The Valle Resort', image: '', description: '' },
            { name: 'Fragrant Nature Resort', image: '', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Chandy’s Windy Woods', image: '', description: '' },
            { name: 'Chandy’s Drizzle Drops', image: '', description: '' },
            { name: 'Spice Tree Resort', image: '', description: '' },
            { name: 'Grand Cliff Resort', image: '', description: '' }
          ]
        }
      },
      {
        destination: 'Kumarakom Houseboat (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden flag category', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury boat with Platinum category', image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free of cost',
      'Child between 5–12 years: 25% of adult price',
      'Extra adult with extra bed: 30% of adult price'
    ],

    meals: 'Breakfast + Dinner at hotels; Breakfast + Lunch + Dinner on houseboat',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (mostly Toyota Etios/Swift Dezire)' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Traveller / Mini Luxury Bus' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus' }
    ],

    sightseeing: [
      'Visit Madurai Meenakshi Temple, Arathi at the temple, Thirumalai Nayakar Mahal.',
      'Kodaikanal viewpoints: Guna Cave, Pine Forest, Coaker\'s Walk, Silver Cascade Falls, Pillar Rocks, Bryant Park, Dolphin\'s Nose.',
      '1-hour boating at Periyar Lake, Elephant ride & moments, Kalarippayattu.',
      'Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake, Tea Garden, Tea Museum, Top Station.',
      'Full day cruise & overnight stay in A/C houseboat.',
      'Entry Fees, Service & other Taxes, Toll Charges, Bata & Night halting Charges, Local Guides at Selected locations.'
    ],

    exclusions: [
      'International/domestic air tickets & airport taxes',
      'Passport & visa fees, visa stamping',
      'Personal expenses (laundry, calls, room service, alcoholic & non-alcoholic beverages)',
      'Single room (quoted separately), Child or adult in triple sharing room',
      'Another language may be on request, vegetable meals on request',
      'Bottled/mineral water during any meal',
      'Peak season or special event rates',
      'Airport tax, airfares, food cost other than specified, phone call charges & other personal expenses'
    ],
    pricing: [
      {
        season: '1st Oct 2025 - 19th Dec 2025 & 10th Jan 2026 - 31st May 2026',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 101,380/-', single: 'Rs 81,100/-', extraPerson: '25% of adult price' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 1,33,040/-', single: 'Rs 1,06,430/-', extraPerson: '25% of adult price' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 1,66,260/-', single: 'Rs 1,33,000/-', extraPerson: '30% of adult price' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 2,70,620/-', single: 'Rs 2,16,490/-', extraPerson: '30% of adult price' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: 'Rs 82,500/-', single: 'Rs 66,000/-', extraPerson: '25% of adult price' },
          { category: '4-Star Deluxe Resort', twoPax: 'Rs 1,08,660/-', single: 'Rs 86,930/-', extraPerson: '25% of adult price' },
          { category: '5-Star Deluxe Resort', twoPax: 'Rs 1,36,500/-', single: 'Rs 1,09,200/-', extraPerson: '30% of adult price' },
          { category: '5-Star Luxury Resort', twoPax: 'Rs 2,21,380/-', single: 'Rs 1,77,100/-', extraPerson: '30% of adult price' }
        ]
      }
    ],

    supplementalAttractions: [
      { id: '1', name: 'Half-Day Cookery Demonstration', subtitle: 'Traditional Home with Lunch/Dinner', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: true, img: '' },
      { id: '2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial Arts Experience', location: 'Cochin/Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1000', rating: 4, featured: false, img: '' },
      { id: '3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Highest hill tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: false, img: '' },
      { id: '4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1500', rating: 4, featured: false, img: '' },
      { id: '5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2500', rating: 5, featured: false, img: '' },
      { id: '6', name: 'Mountain Trekking with Jeep Safari', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3000', rating: 5, featured: false, img: '' },
      { id: '7', name: 'Bamboo River Drafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2500', rating: 4, featured: false, img: '' },
      { id: '8', name: 'Full Day Trip to Gavi', subtitle: '', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: '9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: '' },
      { id: '10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar/Thekkady', people: 'Per Person', cost: 'Rs. 1000', rating: 4, featured: false, img: '' },
      { id: '11', name: 'Half Day Elephant Moments', subtitle: 'Bathing, Feeding and Safari', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: '' },
      { id: '12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 5, featured: false, img: '' },
      { id: '13', name: 'Backwater Historical Tour at Cochin', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 5, featured: false, img: '' },
      { id: '14', name: 'Extra night in A/C Houseboat', subtitle: 'Full day cruise from Kumarakom to Alleppey', location: 'Kumarakom-Alleppey', people: 'For Two Persons', cost: 'Rs. 7000', rating: 5, featured: false, img: '' }
    ],
    inclusions: [],
    specialOffers: []
  },




];



export const inboundPackages = [
  { id: 'kerala', name: 'Kerala', gradient: 'from-green-400 to-green-600', tagline: "God's Own Country", description: 'Backwaters, Tea Gardens, Ayurveda', bgImage: 'assets/images/l.jpeg' },
  { id: 'kerala-1', name: 'Kerala 01', gradient: 'from-green-400 to-green-600', tagline: 'Where Nature Finds Peace', description: 'Backwaters, Silent Shores, Misty Hills', bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBMq-oGqD2DoMs2PTwX9O4IJRxVNp2T9GVg&s' },
  { id: 'kerala-2', name: 'Kerala 02', gradient: 'from-green-400 to-green-600', tagline: "The Emerald Escape", description: "Tea Plantations, Waterfalls, Wildlife", bgImage: 'https://d2qa7a8q0vuocm.cloudfront.net/images/4566720240912074442.png' },
  { id: 'kerala-3', name: 'Kerala 03', gradient: 'from-green-400 to-green-600', tagline: 'Land of Timeless Tranquility', description: 'Ayurveda Retreats, Beaches, Lagoons', bgImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/34/1200x900/2191395-2191394_munnar-1.jpg' },
  { id: 'kerala-4', name: 'Kerala 04', gradient: 'from-green-400 to-green-600', tagline: 'A Symphony of Green', description: 'Rice Fields, Forest Trails, Spice Gardens', bgImage: 'https://irisholidays.com/keralatourism/wp-content/uploads/2017/02/kerala-images-photos.jpg' },
  { id: 'kerala-5', name: 'Kerala 05', gradient: 'from-green-400 to-green-600', tagline: 'A Journey Through Serenity', description: 'Houseboats, Coconut Groves, Healing Traditions', bgImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE9FFhu4vGhBkizussZetQOW0Sli2r-bNHQNPbJqaKJrk9EstPU5n34aAOGZNLX0Y4qxbcYwfpt8GuJOiwMxigSkDwtFYQIUX0OZJ7xp-oZeNAlk43mCWyVwcWVTE7Fmkap7mwztwmhx_l_bq82CfTHShguEfsP5lAcZ1NrtD0UB7fATct5Jr7AAbaFA/s1055/chirakkal%20kaali%202.jpg' },
  { id: 'karnataka', name: 'Karnataka', gradient: 'from-blue-400 to-blue-600', tagline: 'One State Many Worlds', description: 'Ancient Temples, Coffee Estates, Beaches', bgImage: 'assets/images/m.jpeg' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', gradient: 'from-orange-400 to-orange-600', tagline: 'Land of Temples', description: 'Dravidian Architecture, Hill Stations', bgImage: 'assets/images/k.jpg' },
  { id: 'goa', name: 'Goa', gradient: 'from-yellow-400 to-yellow-600', tagline: 'Pearl of the Orient', description: 'Beaches, Nightlife, Portuguese Heritage' },
  { id: 'north-india', name: 'North India', gradient: 'from-red-400 to-red-600', tagline: 'Himalayan Paradise', description: 'Mountains, Temples, Heritage Sites' },
  { id: 'rajasthan', name: 'Rajasthan', gradient: 'from-purple-400 to-purple-600', tagline: 'Land of Kings', description: 'Palaces, Forts, Desert Safaris' },
  { id: 'kashmir', name: 'Kashmir', gradient: 'from-red-400 to-red-600', tagline: 'Himalayan Paradise', description: 'Mountains, Temples, Heritage Sites' },
  { id: 'lakshadweeb', name: 'Lakshadweeb', gradient: 'from-purple-400 to-purple-600', tagline: 'Land of Kings', description: 'Palaces, Forts, Desert Safaris' },
  { id: 'delhi', name: 'Delhi', gradient: 'from-yellow-400 to-yellow-600', tagline: 'Pearl of the Orient', description: 'Beaches, Nightlife, Portuguese Heritage' }
];


export const itineraryRoute = [
  { distance: 0, category: 'city', name: 'Coimbatore', altitude: 411, date: new Date('2025-05-01').getTime(), population: 2, geometry: { type: 'Point', coordinates: [76.956, 11.0168] } },
  { distance: 85, category: 'city', name: 'Ooty', altitude: 2240, date: new Date('2025-05-02').getTime(), population: 1, geometry: { type: 'Point', coordinates: [76.695, 11.4064] } },
  { distance: 190, category: 'city', name: 'Munnar', altitude: 1600, date: new Date('2025-05-03').getTime(), population: 2, geometry: { type: 'Point', coordinates: [77.059, 10.0892] } },
  { distance: 270, category: 'city', name: 'Thekkady', altitude: 915, date: new Date('2025-05-04').getTime(), population: 1, geometry: { type: 'Point', coordinates: [77.212, 9.5980] } },
  { distance: 350, category: 'city', name: 'Kumarakom', altitude: 2, date: new Date('2025-05-05').getTime(), population: 1, geometry: { type: 'Point', coordinates: [76.541, 9.5936] } },
  { distance: 370, category: 'city', name: 'Kochi', altitude: 3, date: new Date('2025-05-06').getTime(), population: 2, geometry: { type: 'Point', coordinates: [76.267, 9.9312] } }
];
