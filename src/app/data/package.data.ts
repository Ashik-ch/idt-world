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
    id: 'kerala', title: 'Charm of Kerala and Border Destinations', duration: '06 Nights / 07 Days', summary: 'Experience Kerala’s scenic beauty with curated tours across Munnar, Thekkady, Kumarakom & Cochin.',
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
      { id: '1-1', name: 'Cookery Demonstration Tour', subtitle: 'Traditional cooking experience with lunch/dinner', location: 'Cochin', people: "1", cost: '₹2000', rating: 4.5, featured: true, img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700" },
      { id: '1-2', name: 'Kalaripayattu Programme', subtitle: 'Half-day martial arts show', location: 'Cochin/Thekkady', people: "5", cost: '₹1000', rating: 4.2, featured: false, img: "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg" },
      { id: '1-3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Visit the world’s highest altitude tea factory', location: 'Munnar', people: "1", cost: '₹2000', rating: 4.6, featured: true, img: "https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg" }
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
            { name: 'Lake Palace KTDC', image: 'assets/images/hotels/lake-palace.jpg', description: 'Exclusive palace stay by lake.' },
            { name: 'Blanket Resort', image: 'assets/images/hotels/BlanketResort.jpg', description: 'Exclusive palace stay at Blanket Resort.' }
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
      { id: '2-1', name: 'Cookery Demonstration Tour', subtitle: 'Traditional food experience with lunch/dinner', location: 'Cochin', people: "1", cost: '₹2000', rating: 4.5, featured: true, img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700' },
      { id: '2-2', name: 'Kalaripayattu Programme', subtitle: 'Kerala’s ancient martial arts performance', location: 'Cochin/Thekkady', people: "5", cost: '₹1000', rating: 4.2, featured: false, img: 'https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg' },
      { id: '2-3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Visit the world’s highest hill station tea factory', location: 'Munnar', people: "1", cost: '₹2000', rating: 4.6, featured: true, img: 'https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg' },
      { id: '2-4', name: 'Tea Trial Tour (Half Day)', subtitle: 'Explore authentic tea plantation culture', location: 'Munnar', people: "1", cost: '₹1500', rating: 4.4, featured: false, img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Munnar_Tea_Estate.jpg' },
      { id: '2-5', name: 'Mountain Trekking + Jeep Safari', subtitle: 'Adventure ride with scenic nature views', location: 'Munnar', people: "1", cost: '₹3000', rating: 4.7, featured: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaG2aye4gtsECT2sYxuUt8uWfEIpZNgxfaUQ&s' },
      { id: '2-6', name: 'Bamboo River Rafting', subtitle: 'Scenic bamboo rafting experience in Periyar River', location: 'Thekkady', people: '1', cost: '₹2500', rating: 4.6, featured: true, img: 'https://images.unsplash.com/photo-1601645191163-3fc0d8b97b1c' },
      { id: '2-7', name: 'Full Day Gavi Excursion', subtitle: 'Eco-tourism guided forest trip (subject to availability)', location: 'Thekkady', people: '1', cost: 'On Request', rating: 4.7, featured: true, img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2' },
      { id: '2-8', name: 'Periyar Forest Jeep Safari', subtitle: 'Wildlife jeep safari through Periyar reserve forests', location: 'Thekkady', people: '1', cost: '₹2000', rating: 4.5, featured: false, img: 'https://images.unsplash.com/photo-1592383913501-e4c8c78d1c7d' },
      { id: '2-9', name: 'Half-Day Elephant Safari', subtitle: 'Traditional elephant ride experience', location: 'Munnar / Thekkady', people: '1', cost: '₹1000', rating: 4.3, featured: false, img: 'https://images.unsplash.com/photo-1578926287967-8b8b8c65c4aa' },
      { id: '2-10', name: 'Elephant Moments Experience', subtitle: 'Bathing, feeding and safari with elephants (half day)', location: 'Thekkady', people: '1', cost: '₹2000', rating: 4.6, featured: true, img: 'https://images.unsplash.com/photo-1600831941348-9f0c44b61c26' },
      { id: '2-11', name: 'Backwater Canal Cruise', subtitle: 'Country craft cruise through scenic backwaters', location: 'Cochin', people: '1', cost: '₹1500', rating: 4.4, featured: false, img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2' },
      { id: '2-12', name: 'Cochin Heritage Backwater Tour', subtitle: 'Historical backwater tour with professional guide', location: 'Cochin', people: '1', cost: '₹1500', rating: 4.5, featured: false, img: 'https://images.unsplash.com/photo-1586864387784-6d5d79ca7a51' }
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
      { id: '3-01', name: 'Half-Day Cookery Demonstration Tour', subtitle: 'Traditional home visit with lunch or dinner (Non-Veg)', location: 'Cochin', people: '1', cost: '₹2000', rating: 4.5, featured: true, img: 'assets/images/supplements/cooking.jpg' },
      { id: '3-02', name: 'Kalaripayattu Programme', subtitle: 'Traditional martial arts performance (Min 5 pax)', location: 'Cochin / Thekkady', people: '5 Min', cost: '₹1000', rating: 4.2, featured: false, img: 'assets/images/supplements/kalaripayattu.jpg' },
      { id: '3-03', name: 'Kolukumalai Tea Factory Visit', subtitle: 'World’s highest tea factory experience', location: 'Munnar', people: '1', cost: '₹2000', rating: 4.6, featured: true, img: 'assets/images/supplements/kolukumalai.jpg' },
      { id: '3-04', name: 'Half-Day Tea Trial Tour', subtitle: 'Tea tasting and plantation walk', location: 'Munnar', people: '1', cost: '₹1500', rating: 4.4, featured: false, img: 'assets/images/supplements/tea-trial.jpg' },
      { id: '3-05', name: 'Full-Day Tea Trial Tour', subtitle: 'Complete tea plantation experience', location: 'Munnar', people: '1', cost: '₹2500', rating: 4.7, featured: false, img: 'assets/images/supplements/tea-full.jpg' },
      { id: '3-06', name: 'Mountain Trekking with Jeep Safari', subtitle: 'Guided trekking with off-road jeep safari', location: 'Munnar', people: '1', cost: '₹3000', rating: 4.7, featured: true, img: 'assets/images/supplements/trekking.jpg' },
      { id: '3-07', name: 'Bamboo River Rafting', subtitle: 'Bamboo rafting in Periyar River', location: 'Thekkady', people: '1', cost: '₹2500', rating: 4.6, featured: false, img: 'assets/images/supplements/bamboo.jpg' },
      { id: '3-08', name: 'Full Day Trip to Gavi', subtitle: 'Eco tourism forest experience (On request)', location: 'Thekkady', people: '1', cost: 'On Request', rating: 4.7, featured: true, img: 'assets/images/supplements/gavi.jpg' },
      { id: '3-09', name: 'Jeep Safari in Periyar Forests', subtitle: 'Wildlife jeep safari through reserve forest', location: 'Thekkady', people: '1', cost: '₹2000', rating: 4.3, featured: false, img: 'assets/images/supplements/safari.jpg' },
      { id: '3-10', name: 'Half-Day Elephant Safari', subtitle: 'Elephant ride experience', location: 'Munnar / Thekkady', people: '1', cost: '₹1000', rating: 4.2, featured: false, img: 'assets/images/supplements/elephant.jpg' },
      { id: '3-11', name: 'Elephant Moments Experience', subtitle: 'Bathing, feeding and safari with elephants', location: 'Thekkady', people: '1', cost: '₹2000', rating: 4.6, featured: true, img: 'assets/images/supplements/elephant-moments.jpg' },
      { id: '3-12', name: 'Backwater Canal Cruise', subtitle: 'Country craft backwater cruise', location: 'Cochin', people: '1', cost: '₹1500', rating: 4.5, featured: false, img: 'assets/images/supplements/canal.jpg' },
      { id: '3-13', name: 'Backwater Historical Tour', subtitle: 'Guided heritage backwater tour', location: 'Cochin', people: '1', cost: '₹1500', rating: 4.6, featured: true, img: 'assets/images/supplements/historical.jpg' },
      { id: '3-14', name: 'Extra Night in A/C Houseboat', subtitle: 'Full-day cruise from Kumarakom to Alleppey', location: 'Kumarakom – Alleppey', people: '2', cost: '₹7000', rating: 4.9, featured: true, img: 'assets/images/supplements/houseboat-extra.jpg' }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed decoration (for couple package)',
      'Candlelight dinner (upgrade applicable)'
    ]
  },

  {
    id: 'kerala-4', title: 'Charm of Kerala', duration: '05 Nights / 06 Days', summary: 'A compact Kerala escape visiting Munnar, Thekkady and Kumarakom with tea gardens, wildlife, backwaters and relaxing houseboat stay.',
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
      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin International Airport and meet our IDT representative.', 'Proceed to Munnar hill station (3–4 hours drive) with scenic views.', 'Visit Tea Museum and explore tea gardens en route.', 'Spice shopping along the way.', 'Check in to the resort and relax.', 'Overnight stay at the hotel in Munnar.'] },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Breakfast at the hotel.', 'Full-day sightseeing tour of Munnar.', 'Visit Mattupetty Dam, Eravikulam National Park (subject to timings), Kundala Dam, Echo Point and Top Station.', 'Free time at leisure.', 'Overnight stay at the hotel in Munnar.'] },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Breakfast at the hotel.', 'Departure to Thekkady at 08:30 AM.', 'Arrive and check in between 11:30 AM and 12:00 PM at the private waiting lounge.', 'Enjoy the scenic drive through one of India’s most enchanting travel circuits.', 'Check in to the hotel and relax.', 'Evening boat ride in Periyar Lake.', 'Enjoy Kalarippayattu – the ancient martial art of Kerala.', 'Overnight stay at the hotel in Thekkady.'] },
      { day: '04', title: 'A Day in Thekkady (B+D)', details: ['Morning elephant ride experience (optional).', 'Guided jungle safari in the Periyar region.', 'Return by evening for leisure and shopping.', 'Overnight stay at the hotel in Thekkady.'] },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Breakfast at the hotel at 08:30 AM.', 'Drive to Kumarakom backwaters (approximately 4 hours).', 'Board the traditional A/C houseboat by noon.', 'Cruise through lush backwater landscapes.', 'Enjoy traditional lunch onboard.', 'Houseboat anchored from 5:30 PM to 6:00 AM.', 'Dinner onboard.', 'Overnight stay on the houseboat.'] },
      { day: '06', title: 'Kumarakom to Cochin – End of Tour (B)', details: ['Disembark from the houseboat at 09:30 AM after breakfast.', 'Transfer to Cochin Airport or railway station for departure.', 'Return with unforgettable memories of Kerala.'] }
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
    id: 'kerala-5', title: 'Charm of Kerala', duration: '07 Nights / 08 Days', summary: 'Explore Kerala covering Munnar, Thekkady, Kumarakom, Kovalam & Kanyakumari with scenic landscapes, wildlife experiences, serene backwaters, beaches, heritage sites and cultural legacy.',

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
      { day: '01', title: 'Cochin to Munnar (B+D)', details: ['Arrive at Cochin International Airport and meet our IDT representative.', 'Drive to Munnar hill station (3–4 hours).', 'Check in at the hotel and freshen up.', 'Visit Tea Museum and tea gardens en route.', 'Spice shopping.', 'Overnight stay at the hotel in Munnar.'] },
      { day: '02', title: 'Explore Munnar (B+D)', details: ['Breakfast at the hotel.', 'Full-day sightseeing tour of Munnar.', 'Visit Mattupetty Dam, Eravikulam National Park (subject to park timings), Kundala Dam, Echo Point and Top Station.', 'Free time at leisure.', 'Overnight stay at the hotel in Munnar.'] },
      { day: '03', title: 'Munnar to Thekkady (B+D)', details: ['Breakfast at the hotel.', 'Departure to Thekkady at 08:30 AM.', 'Arrive and check in between 11:30 AM – 12:00 PM at the private waiting lounge.', 'Enjoy the scenic drive through one of India’s most enchanting travel circuits.', 'Check in to the hotel and relax.', 'Evening boat ride on Periyar Lake.', 'Enjoy Kalarippayattu – the ancient martial art of Kerala.', 'Overnight stay at the hotel in Thekkady.'] },
      { day: '04', title: 'A Day in Thekkady (B+D)', details: ['Morning elephant ride experience (optional).', 'Guided jungle safari with a professional guide.', 'Return by evening for leisure and shopping.', 'Overnight stay at the hotel in Thekkady.'] },
      { day: '05', title: 'Thekkady to Kumarakom Houseboat (B+L+D)', details: ['Breakfast at the hotel.', 'Drive to Kumarakom backwaters (approximately 4 hours).', 'Board the traditional houseboat by noon.', 'Cruise through lush backwater landscapes.', 'Enjoy a traditional lunch onboard.', 'Houseboat anchored from 5:30 PM to 6:00 AM.', 'Dinner onboard.', 'Overnight stay on the houseboat.'] },
      { day: '06', title: 'Kumarakom to Kovalam (B+D)', details: ['Breakfast and check out from the houseboat at 09:00 AM.', 'Drive to Kovalam Beach (approximately 5 hours).', 'Check in to the beach resort and relax.', 'Spend the rest of the day enjoying the beach.', 'Overnight stay at the beach resort in Kovalam.'] },
      { day: '07', title: 'Kovalam to Kanyakumari (B+D)', details: ['Early breakfast and check out from the hotel.', 'Drive to Kanyakumari – the southernmost tip of India.', 'Visit the historic Padmanabhapuram Palace en route.', 'Arrive at Kanyakumari by afternoon (approximately 3.5 hours).', 'Check in to the hotel.', 'Visit Vivekananda Memorial and Thiruvalluvar Statue.', 'Witness a breathtaking sunset over the Arabian Sea.', 'Overnight stay at the hotel in Kanyakumari.'] },
      { day: '08', title: 'Kanyakumari to Trivandrum – End of Tour (B)', details: ['Early morning sunrise view over the Bay of Bengal.', 'Breakfast at the hotel and check out.', 'Visit Sree Suchindram Temple en route.', 'Drive to Trivandrum (approximately 3.5 hours).', 'Assistance with timely transfer to the airport or railway station for departure.'] }
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
    id: 'kerala-6', title: 'Charm of Kerala', duration: '07 Nights / 08 Days', summary: 'Explore Kerala covering Munnar, Thekkady, Kumarakom, Kovalam & Kanyakumari with scenic landscapes, wildlife experiences, serene backwaters, beaches, heritage sites and cultural legacy.',

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
    id: 'kerala-7', title: 'Charm of Kerala', duration: '07 Nights / 08 Days', summary: 'Explore Kerala covering Munnar, Thekkady, Kumarakom, Varkala, Poovar & Kovalam with scenic landscapes, wildlife experiences, serene backwaters, beaches, heritage sites and cultural legacy.',

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
    id: 'kerala-8', title: 'Charm of Kerala and Border Destinations - 1', duration: '08 Nights / 09 Days',
    summary: 'Discover Madurai, Kodaikanal, Thekkady, Munnar, and Kumarakom with cultural heritage, misty hill stations, wildlife, serene backwaters, and premium handpicked stays.',

    tourHighlights: [
      'All-inclusive package with no hidden costs',
      'Breakfast + Dinner at hotels and all meals on the houseboat',
      'Carefully selected hotels and resorts based on guest reviews',
      'Vehicle at disposal from airport to airport without km restrictions',
      'One English-speaking driver and one vehicle for the entire tour',
      'Flexible tour dates with no retention fee up to 24 hours prior',
      'GST, tolls, parking, driver bata and all applicable taxes included'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Madurai (B+D)',
      'Day 02 – Explore Madurai (B+D)',
      'Day 03 – Madurai to Kodaikanal (B+D)',
      'Day 04 – Explore Kodaikanal (B+D)',
      'Day 05 – Proceed to Thekkady (B+D)',
      'Day 06 – Thekkady to Munnar (B+D)',
      'Day 07 – Explore Munnar (B+D)',
      'Day 08 – Kumarakom Houseboat (B+D)',
      'Day 09 – Departure from Cochin (B+D)'
    ],

    itineraryOverview: [
      { day: '01', title: 'Arrival at Madurai (B+D)', details: ['Arrive at Madurai International Airport and meet IDT representative.', 'Check in at hotel and relax.', 'Evening visit to Madurai Meenakshi Temple.', 'Overnight stay at the hotel.'], image: '' },
      { day: '02', title: 'Explore Madurai (B+D)', details: ['Breakfast at hotel.', 'Morning visit to Meenakshi Temple for Arathi.', 'Visit Thirumalai Nayakar Mahal.', 'Return to hotel and relax.', 'Overnight stay at the hotel.'], image: '' },
      { day: '03', title: 'Madurai to Kodaikanal (B+D)', details: ['Breakfast and check out.', 'Drive to Kodaikanal (approx. 3 hrs 10 mins, 120 km).', 'Check in at hotel and relax.', 'Afternoon visit: Kodaikanal Lake, Coaker’s Walk, Pillar Rocks, Bryant Park.', 'Overnight stay at hotel.'], image: '' },
      { day: '04', title: 'Explore Kodaikanal (B+D)', details: ['Breakfast at hotel.', 'Visit Dolphin’s Nose, Guna Cave, Pine Forest, Silver Cascade Falls.', 'Return to hotel for overnight stay.'], image: '' },
      { day: '05', title: 'Proceed to Thekkady (B+D)', details: ['Check out from hotel and drive to Thekkady (4 hrs, 150 km).', 'Elephant ride and moments.', 'Jungle safari with guide.', 'Kalarippayattu martial arts experience.', 'Return to hotel for overnight stay.'], image: '' },
      { day: '06', title: 'On to Munnar (B+D)', details: ['Early morning Periyar Lake boating at 6:30 AM.', 'Return to hotel, have breakfast, check out.', 'Drive to Munnar (approx. 4 hrs 30 mins).', 'En route visit Tea Gardens & Tea Museum.', 'Check in at hotel and relax, overnight stay.'], image: '' },
      { day: '07', title: 'Explore Munnar (B+D)', details: ['Breakfast at hotel.', 'Visit Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake.', 'Proceed to Top Station for panoramic views.', 'Overnight stay at hotel.'], image: '' },
      { day: '08', title: 'Enjoy Kumarakom Houseboat (B+D)', details: ['Breakfast and check out from hotel.', 'Board A/C luxury houseboat by 11:30 AM.', 'Cruise along backwaters, enjoy traditional lunch and dinner onboard.', 'Overnight stay in houseboat.'], image: '' },
      { day: '09', title: 'Departure from Cochin (B+D)', details: ['Breakfast and check out from houseboat by 9:30 AM.', 'Drive to Cochin International Airport for return flight.'], image: '' }
    ],
    detailedItinerary: [
      { day: '01', title: 'Arrival at Madurai', details: ['Meet & greet at Madurai International Airport', 'Hotel check-in and leisure time', 'Evening visit to Madurai Meenakshi Temple'], },
      { day: '02', title: 'Explore Madurai', details: ['Morning Arathi at Meenakshi Temple', 'Visit Thirumalai Nayakar Mahal', 'Evening leisure'], },
      { day: '03', title: 'Madurai to Kodaikanal', details: ['Drive to Kodaikanal (120 km / 3h 10m)', 'Check-in and relaxation', 'Visit Kodaikanal Lake, Coaker’s Walk, Pillar Rocks, Bryant Park'], },
      { day: '04', title: 'Explore Kodaikanal', details: ['Visit Dolphin’s Nose', 'Explore Guna Cave & Pine Forest', 'Silver Cascade Falls visit'], },
      { day: '05', title: 'Kodaikanal to Thekkady', details: ['Drive to Thekkady (150 km / 4 hrs)', 'Elephant ride & elephant moments', 'Jungle safari & Kalarippayattu show'], },
      { day: '06', title: 'Thekkady to Munnar', details: ['Early morning Periyar Lake boating', 'Drive to Munnar', 'Tea gardens & Tea Museum visit'], },
      { day: '07', title: 'Explore Munnar', details: ['Eravikulam National Park', 'Mattupetty Dam & Echo Point', 'Kundala Lake & Top Station'], },
      { day: '08', title: 'Kumarakom Houseboat', details: ['Board luxury A/C houseboat', 'Backwater cruise with all meals', 'Overnight stay on houseboat'], },
      { day: '09', title: 'Departure from Cochin', details: ['Houseboat checkout', 'Transfer to Cochin International Airport'], }
    ],

    hotelPackages: [
      {
        destination: 'Madurai (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Madurai Residency', image: '', description: '' },],
          '4-Star Deluxe': [{ name: 'Mount Retreats Resort', image: '', description: '' }, { name: 'Sterling V Grand Madurai', image: '', description: '' }, { name: 'Royal Court', image: '', description: '' }, { name: 'Hotel Germanus Madurai', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'The Heritage Madurai', image: '', description: '' }, { name: 'Grand Madurai by GRT', image: '', description: '' }, { name: 'Courtyard by Marriott', image: '', description: '' }, { name: 'Regency Madurai by GRT', image: '', description: '' }, { name: 'Fortune Pandiyan Hotel', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Taj Gateway Hotel, Madurai', image: '', description: '' }]
        }
      },
      {
        destination: 'Kodaikanal (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Avadale Resort', image: '', description: '' }, { name: 'Kodai Heaven', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Kodai Resort', image: '', description: '' }, { name: 'Kodai International', image: '', description: '' }, { name: 'Craigmore by Kodai Resort', image: '', description: '' }, { name: 'Country Club Valley', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'GRT Great Trails', image: '', description: '' }, { name: 'Dolphin Nose Retreat', image: '', description: '' }, { name: 'Sterling Kodai Lake', image: '', description: '' }, { name: 'Sterling Kodai Valley', image: '', description: '' }, { name: 'Mountain Retreat', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'The Tamara Hotel', image: '', description: '' }, { name: 'The Carlton', image: '', description: '' }]
        }
      },
      {
        destination: 'Thekkady (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Abad Green Forest', image: '', description: '' }, { name: 'Pepper Vine Resort', image: '', description: '' }, { name: 'Hotel Lincoln Square', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Mountain Courtyard Resort', image: '', description: '' }, { name: 'Forest Canopy Resort', image: '', description: '' }, { name: 'Aranya Nivas KTDC', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Poetree Resort', image: '', description: '' }, { name: 'Elephant Court', image: '', description: '' }, { name: 'Green Woods Resort', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Spice Village Resort', image: '', description: '' }, { name: 'Hills & Hues Resort', image: '', description: '' }, { name: 'Lake Palace Resort KTDC', image: '', description: '' }, { name: 'Blanket Resort', image: '', description: '' }]
        }
      },
      {
        destination: 'Munnar (2N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'West Wood Resort', image: '', description: '' }, { name: 'Eastend Hotel', image: '', description: '' }, { name: 'Trivers Resort', image: '', description: '' }, { name: 'Tea Castle', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Rivulet Resort', image: '', description: '' }, { name: 'Elephant Passage Resort', image: '', description: '' }, { name: 'Fog Resort', image: '', description: '' }, { name: 'Tall Trees Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Blanket Hotel', image: '', description: '' }, { name: 'The Valle Resort', image: '', description: '' }, { name: 'Fragrant Nature Resort', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Chandy’s Windy Woods', image: '', description: '' }, { name: 'Chandy’s Drizzle Drops', image: '', description: '' }, { name: 'Spice Tree Resort', image: '', description: '' }, { name: 'Grand Cliff Resort', image: '', description: '' }]
        }
      },
      {
        destination: 'Kumarakom Houseboat (1N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }], '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden Flag Category', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury boat with Platinum Category', image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free of cost',
      'Child between 5–12 years: 25% of adult price',
      'Extra adult with extra bed: 30% of adult price'
    ],

    meals: 'Breakfast + Dinner at hotels | Breakfast + Lunch + Dinner on houseboat',
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
    inclusions: [],

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
      { id: '8-1', name: 'Half-Day Cookery Demonstration', subtitle: 'Traditional Home with Lunch/Dinner', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: true, img: '' },
      { id: '8-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial Arts Experience', location: 'Cochin/Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1000', rating: 4, featured: false, img: '' },
      { id: '8-3', name: 'Kolukumalai Tea Factory Visit', subtitle: 'Highest hill tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2000', rating: 5, featured: false, img: '' },
      { id: '8-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1500', rating: 4, featured: false, img: '' },
      { id: '8-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2500', rating: 5, featured: false, img: '' },
      { id: '8-6', name: 'Mountain Trekking with Jeep Safari', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3000', rating: 5, featured: false, img: '' },
      { id: '8-7', name: 'Bamboo River Drafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2500', rating: 4, featured: false, img: '' },
      { id: '8-8', name: 'Full Day Trip to Gavi', subtitle: '', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: '8-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: '' },
      { id: '8-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar/Thekkady', people: 'Per Person', cost: 'Rs. 1000', rating: 4, featured: false, img: '' },
      { id: '8-11', name: 'Half Day Elephant Moments', subtitle: 'Bathing, Feeding and Safari', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2000', rating: 4, featured: false, img: '' },
      { id: '8-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 5, featured: false, img: '' },
      { id: '8-13', name: 'Backwater Historical Tour at Cochin', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1500', rating: 5, featured: false, img: '' },
      { id: '8-14', name: 'Extra night in A/C Houseboat', subtitle: 'Full day cruise from Kumarakom to Alleppey', location: 'Kumarakom-Alleppey', people: 'For Two Persons', cost: 'Rs. 7000', rating: 5, featured: false, img: '' }
    ],
    specialOffers: []
  },


  {
    id: 'kerala-9', title: 'Charm of Kerala with border destinations - 2', duration: '8 Nights / 9 Days', summary: 'Experience the enchanting beauty of Kerala with misty hills, serene backwaters, wildlife, and pristine beaches. Includes meals, premium hotels, and private transportation.',

    tourHighlights: [
      'All-inclusive package with no hidden costs',
      'Breakfast + Dinner at hotels and all meals on the houseboat',
      'Carefully selected hotels and resorts based on guest reviews',
      'Vehicle at disposal from airport to airport without km restrictions',
      'One English-speaking driver and one vehicle for the entire tour',
      'Flexible tour dates with no retention fee up to 24 hours prior',
      'GST, tolls, parking, driver bata and all applicable taxes included'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Madurai (B+D)',
      'Day 02 – Explore Madurai (B+D)',
      'Day 03 – Proceed to Rameswaram (B+D)',
      'Day 04 – Explore Rameswaram (B+D)',
      'Day 05 – On to Kanyakumari (B+D)',
      'Day 06 – Proceed to Kovalam (B+D)',
      'Day 07 – Explore Kovalam (B+D)',
      'Day 08 – Kumarakom Houseboat (B+D)',
      'Day 09 – Departure from Cochin (B)'
    ],

    itineraryOverview: [
      { day: 'Day 01', title: 'Arrival at Madurai (B+D)', details: ['Arrive at Madurai International Airport and meet IDT representative', 'Check into the hotel & relax', 'Evening visit to Madurai Meenakshi Temple', 'Overnight stay at the hotel'], image: '' },
      { day: 'Day 02', title: 'Explore Madurai (B+D)', details: ['Breakfast at hotel', 'Visit Meenakshi Temple for Arathi ceremony', 'Visit Thirumalai Nayakar Mahal', 'Return to hotel & relax', 'Overnight stay at the hotel'], image: '' },
      { day: 'Day 03', title: 'Proceed to Rameswaram (B+D)', details: ['Check out from hotel and drive to Rameswaram (3 hrs, 180 km)', 'Reach Rameswaram by afternoon', 'Check into hotel & relax'], image: '' },
      { day: 'Day 04', title: 'Explore Rameswaram (B+D)', details: ['Morning sightseeing by driver', 'Visit Agni Theertham, Five-faced Hanuman Temple, Ramanatha Swamy Temple, Jada Theertham', 'Overnight stay at the hotel'], image: '' },
      { day: 'Day 05', title: 'On to Kanyakumari (B+D)', details: ['Early morning depart from Rameswaram', 'Small break at Dhanushkodi Island', 'Drive to Kanyakumari (approx. 7 hrs)', 'Check into resort & relax', 'Boat visit to Vivekananda Memorial & Glass Bridge, see Thiruvalluvar statue', 'Watch sunset', 'Return to hotel', 'Overnight stay'], image: '' },
      { day: 'Day 06', title: 'Proceed to Kovalam (B+D)', details: ['Sunrise and breakfast at hotel', 'Visit Suchindram Temple and Padmanabhapuram Palace en route', 'Reach Kovalam hotel by noon & relax', 'Overnight stay at hotel'], image: '' },
      { day: 'Day 07', title: 'Explore Kovalam (B+D)', details: ['Early morning visit to Padmanabhaswamy Temple & Kuthiramalika Museum', 'Return to hotel for breakfast', 'Afternoon leisure at beach (sun, surf, sand)'], image: '' },
      { day: 'Day 08', title: 'Kumarakom Houseboat (B+D)', details: ['Breakfast at hotel', 'Drive to Kumarakom (5 hrs)', 'Board traditional houseboat by noon', 'Cruise through backwaters', 'Enjoy lunch onboard', 'Houseboat anchored from 5:30 PM till next day 6 AM', 'Dinner onboard', 'Overnight stay in houseboat'], image: '' },
      { day: 'Day 09', title: 'Departure from Cochin (B)', details: ['Breakfast and check-out from houseboat', 'Transfer to Cochin Airport for return flight'], image: '' }
    ],

    detailedItinerary: [
      { day: 'Day 01', title: 'Arrival at Madurai', details: ['Pickup at Madurai International Airport by IDT representative', 'Transfer to hotel & relax', 'Evening visit to Meenakshi Temple', 'Overnight stay at hotel'] },
      { day: 'Day 02', title: 'Explore Madurai', details: ['Breakfast at hotel', 'Visit Meenakshi Temple for Arathi', 'Visit Thirumalai Nayakar Mahal', 'Return to hotel for relaxation', 'Overnight stay at hotel'] },
      { day: 'Day 03', title: 'Proceed to Rameswaram', details: ['Check out from hotel', 'Drive to Rameswaram (3 hrs, 180 km)', 'Reach Rameswaram & check-in hotel', 'Relax at hotel'] },
      { day: 'Day 04', title: 'Explore Rameswaram', details: ['Morning sightseeing', 'Visit Agni Theertham, Five-faced Hanuman Temple, Ramanatha Swamy Temple, Jada Theertham', 'Return to hotel', 'Overnight stay'] },
      { day: 'Day 05', title: 'On to Kanyakumari', details: ['Early morning depart from Rameswaram', 'Break at Dhanushkodi Island', 'Drive to Kanyakumari (7 hrs)', 'Check-in resort & relax', 'Boat visit to Vivekananda Memorial & Glass Bridge', 'Watch sunset', 'Return to hotel', 'Overnight stay'] },
      { day: 'Day 06', title: 'Proceed to Kovalam', details: ['Sunrise at hotel', 'Breakfast', 'Visit Suchindram Temple & Padmanabhapuram Palace', 'Check-in hotel at Kovalam & relax', 'Overnight stay'] },
      { day: 'Day 07', title: 'Explore Kovalam', details: ['Early morning visit to Padmanabhaswamy Temple & Kuthiramalika Museum', 'Return to hotel for breakfast', 'Afternoon leisure at beach (sun, surf, sand)'] },
      { day: 'Day 08', title: 'Kumarakom Houseboat', details: ['Breakfast at hotel', 'Drive to Kumarakom (5 hrs)', 'Board traditional houseboat', 'Backwater cruise with lunch & dinner', 'Houseboat anchored from 5:30 PM till next day 6 AM', 'Overnight stay in houseboat'] },
      { day: 'Day 09', title: 'Departure from Cochin', details: ['Breakfast', 'Check-out from houseboat', 'Transfer to Cochin Airport for return flight'] }
    ],

    inclusions: [
      'Breakfast & Dinner at Hotels',
      '03 Meals in Houseboat (Lunch, Dinner, Breakfast)',
      'Private AC vehicle for all transfers',
      'Airport Pickup & Drop',
      'Toll, Parking, Driver Bata'
    ],

    exclusions: [
      'Any flights or train tickets',
      'Entry tickets at sightseeing places',
      'Personal expenses, tips, laundry',
      'Optional activities'
    ],

    sightseeing: [
      'Visit Madurai Meenakshi Temple, Thirumala Nayakar Mahal',
      'Agni Theertham, Five - faced Hanuman Temple, Ramanathan Swamy Temple, Jada Theertham.',
      'Dhanushkodi Island, Vivekananda Memorial, Sunset in the Arabian Sea. ',
      'Suchindram Palace, Padmanabhapuram Palace.',
      'Padmanabhaswamy Temple, Kuthiramalika Museum.',
      'Full day cruise & Night stay in A / C houseboat',
    ],

    hotelPackages: [
      {
        destination: 'Madurai (02 N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'The Madurai Residency', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Mount Retreats Resort', image: '', description: '' }, { name: 'Sterling V Grand Madurai', image: '', description: '' }, { name: 'Royal Court', image: '', description: '' }, { name: 'Hotel Germanus Madurai', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'The Heritage Madurai', image: '', description: '' }, { name: 'Grand Madurai by GRT', image: '', description: '' }, { name: 'Courtyard by Marriott', image: '', description: '' }, { name: 'Regency Madurai by GRT', image: '', description: '' }, { name: 'Fortune Pandiyan Hotel', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Taj Gateway Hotel, Madurai', image: '', description: '' }]
        }
      },
      {
        destination: 'Rameswaram (02 N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Hotel Rameswaram Grand', image: '', description: '' }, { name: 'Hotel Arya Grand', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Daiwick Hotels', image: '', description: '' }, { name: 'Vinayaga by Poppy’s', image: '', description: '' }, { name: 'Hotel Arjuna', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'The Residency Towers', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'The Residency Towers', image: '', description: '' }]
        }
      },
      {
        destination: 'Kanyakumari (01 N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Singar International', image: '', description: '' }, { name: 'Sea View Hotel', image: '', description: '' }, { name: 'Sealand Hotel', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Annai Celestial Resort by Sparsa', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Annai Resorts & Spa', image: '', description: '' }, { name: 'Anantya by the Lake', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Annai Resorts & Spa', image: '', description: '' }, { name: 'Anantya by the Lake', image: '', description: '' }]
        }
      },
      {
        destination: 'Kovalam (02 N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'Soma Palm Shore', image: '', description: '' }, { name: 'Jasmine Palace', image: '', description: '' }, { name: 'Hotel Neelakanta', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'KTDC Samudra Resort', image: '', description: '' }, { name: 'Travancore Beach Resort', image: '', description: '' }, { name: 'Sagara Beach Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Udaya Samudra Beach Resort', image: '', description: '' }, { name: 'Gokulam Grand Turtle on the Beach', image: '', description: '' }, { name: 'Rock Holm at the Lighthouse Beach', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'The Leela Kovalam', image: '', description: '' }, { name: 'Taj Green Coves', image: '', description: '' }, { name: 'Niramaya Surya Samudra Resort', image: '', description: '' }]
        }
      },
      {
        destination: 'Kumarakom Houseboat (01 N)',
        image: '',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden Flag Category', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury Boat with Platinum Category', image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years complimentary',
      'Child 5–11 years with extra bed chargeable'
    ],

    meals: 'Breakfast & Dinner daily + All meals in Houseboat',

    transport: [
      { pax: '2–3 Pax', description: 'Sedan AC' },
      { pax: '4–6 Pax', description: 'Innova / Ertiga AC' },
      { pax: '7+ Pax', description: 'Tempo Traveller AC' }
    ],

    pricing: [
      {
        season: 'Season Rate',
        categories: [
          {
            category: 'Deluxe',
            twoPax: '₹35,999',
            single: '₹48,999',
            extraPerson: '₹12,999'
          }
        ]
      }
    ],

    supplementalAttractions: [
      { id: 'sup-1', name: 'Jeep Safari', subtitle: 'Munnar', location: 'Munnar', people: '2–6', cost: '₹2,000', rating: 4.6, featured: true, img: 'assets/images/activities/jeep.jpg' },
      { id: 'sup-2', name: 'Kathakali Show', subtitle: 'Cultural Show', location: 'Thekkady', people: '1–20', cost: '₹500', rating: 4.4, featured: false, img: 'assets/images/activities/kathakali.jpg' }
    ],

    specialOffers: ['Early Bird Offer – Save 10%']
  },

  {
    id: 'kerala-10',
    title: 'Charm of Kerala and Border Destiantions - 3',
    duration: '06 Nights / 07 Days',
    summary:
      'A scenic Kerala escape visiting Ooty, Munnar, Thekkady and a relaxing houseboat stay in Kumarakom — tea gardens, wildlife, backwaters and coastal sights included. Meals on B+D at hotels and full board on the houseboat.',
    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Breakfast + Dinner basis at hotels; 03 meals on houseboat',
      'Carefully selected hotels & resorts based on guest reviews',
      'Vehicle at disposal from airport to airport on all days (no km restrictions)',
      'One English-speaking driver & one vehicle for the entire tour',
      'Date-change available up to 24 hours before (no retention fee)',
      'GST, Toll charges, Driver Bata, Parking fees included'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Coimbatore → Ooty (B+D)',
      'Day 02 – Explore Ooty (B+D)',
      'Day 03 – Ooty → Munnar (B+D)',
      'Day 04 – Explore Munnar (B+D)',
      'Day 05 – Munnar → Thekkady (B+D)',
      'Day 06 – Thekkady → Kumarakom Houseboat (B+L+D)',
      'Day 07 – Kumarakom → Cochin Departure (B)'
    ],

    itineraryOverview: [
      { day: '01', title: 'Arrival at Coimbatore(B+D)', details: ['Arrive at Coimbatore Airport and meet IDT representative.', 'Proceed to Ooty (approx. 3 hours 10 minutes drive).', 'Reach Ooty by noon; check-in and relax at hotel.', 'Evening visit to Botanical Garden and enjoy boating.', 'Overnight stay at Ooty.'], image: 'assets/images/itinerary/ooty-arrival.jpg' },
      { day: '02', title: 'Explore Ooty (B+D)', details: ['Breakfast at hotel.', 'Full-day Ooty sightseeing tour.', 'Visit Rose Garden, Avmamore Palace and Government Museum.', 'Toy train journey to Coonoor (subject to availability).', 'Return to hotel; overnight stay at Ooty.'], image: 'assets/images/itinerary/ooty-sightseeing.jpg' },
      { day: '03', title: 'Ooty → Munnar (B+D)', details: ['Breakfast and check-out from hotel.', 'Drive to Munnar hill station.', 'En-route visit tea gardens and Tea Museum.', 'Reach Munnar by afternoon; check-in and relax.', 'Spice shopping and overnight stay at Munnar.'], image: 'assets/images/itinerary/munnar-drive.jpg' },
      { day: '04', title: 'Explore Munnar (B+D)', details: ['Breakfast at hotel.', 'Visit Eravikulam National Park.', 'Explore Mattupetty Dam, Echo Point and Kundala Lake.', 'Proceed to Top Station to enjoy panoramic views.', 'Evening at leisure; overnight stay at Munnar.'], image: 'assets/images/itinerary/munnar-sightseeing.jpg' },
      { day: '05', title: 'Munnar → Thekkady (B+D)', details: ['Check-out and drive to Thekkady (approx. 3 hours / 150 km).', 'Reach Thekkady before noon and check-in.', 'Afternoon elephant ride and jungle safari.', 'Evening Kalarippayattu – ancient martial art of Kerala.', 'Overnight stay at Thekkady.'], image: 'assets/images/itinerary/thekkady-arrival.jpg' },
      { day: '06', title: 'Thekkady → Kumarakom Houseboat (B+L+D)', details: ['Breakfast and drive to Kumarakom (approx. 4 hours).', 'Board traditional A/C houseboat by noon.', 'Cruise through lush backwaters and canals.', 'Lunch and dinner served onboard.', 'Houseboat anchored from 5:30 PM; overnight stay.'], image: 'assets/images/itinerary/houseboat-cruise.jpg' },
      { day: '07', title: 'Kumarakom → Cochin Departure (B)', details: ['Breakfast on houseboat.', 'Check-out and transfer to Cochin Airport.', 'Return journey with beautiful memories of Kerala.'], image: 'assets/images/itinerary/departure-cochin.jpg' }
    ],

    detailedItinerary: [
      { day: 'Day 01', title: 'Arrival at Coimbatore', details: ['Arrive at Coimbatore Airport and meet our representative.', 'Drive to Ooty (approx. 3 hours 10 minutes).', 'Reach by noon; check-in and relax.', 'Evening visit to Botanical Garden and boating.', 'Overnight stay at hotel.'] },
      { day: 'Day 02', title: 'Explore Ooty', details: ['Breakfast at hotel.', 'Ooty sightseeing tour.', 'Visit Rose Garden, Avmamore Palace and Government Museum.', 'Toy train ride to Coonoor (subject to availability).', 'Return to hotel; overnight stay.'] },
      { day: 'Day 03', title: 'Ooty to Munnar', details: ['Check-out after breakfast.', 'Drive to Munnar hill station.', 'Visit tea gardens and Tea Museum en route.', 'Arrive by afternoon; check-in and relax.', 'Spice shopping and overnight stay.'] },
      { day: 'Day 04', title: 'Full-day Munnar sightseeing', details: ['Breakfast at hotel.', 'Visit Eravikulam National Park.', 'Explore Mattupetty Dam, Echo Point and Kundala Lake.', 'Proceed to Top Station.', 'Evening at leisure; overnight stay.'] },
      { day: 'Day 05', title: 'Munnar to Thekkady', details: ['Check-out and drive to Thekkady.', 'Reach before noon; check-in and relax.', 'Afternoon elephant ride and jungle safari.', 'Evening Kalarippayattu performance.', 'Overnight stay at hotel.'] },
      { day: 'Day 06', title: 'Enjoy House Boat at Kumarakom (B+D)', details: ['Breakfast and drive to Kumarakom.', 'Board traditional houseboat by noon.', 'Backwater cruise with lunch and dinner onboard.', 'Houseboat anchored in the evening.', 'Overnight stay on houseboat.'] },
      { day: 'Day 07', title: 'Departure from Cochin', details: ['Breakfast on houseboat.', 'Check-out and transfer to Cochin Airport.', 'Tour concludes with unforgettable memories.'] }
    ],

    inclusions: [
      'Local English-speaking driver and private A/C vehicle for transfers',
      'Twin/double accommodation on B+D basis (houseboat B+L+D)',
      'Three meals on houseboat (Lunch + Dinner + Breakfast)',
      'Airport pickup & drop (as per itinerary)',
      'Toll, parking charges, driver bata, GST'
    ],

    exclusions: [
      'International & domestic air / train tickets and airport taxes',
      'Entry fees (unless specified), optional activities & personal expenses',
      'Laundry, telephone calls, room service, alcoholic & non-alcoholic beverages',
      'Single room supplement (quoted separately)',
      'Peak season or festival surcharges (if any)'
    ],

    sightseeing: [
      'Ooty Botanical Garden & Rose Garden',
      'Toy Train ride (subject to availability)',
      'Munnar – Tea Museum, Eravikulam NP, Mattupetty Dam, Top Station',
      'Periyar Lake boating & Jungle Safari (Thekkady)',
      'Kumarakom backwaters & bird sanctuary',
      'Alleppey (houseboat cruise) and Kochi transfer'
    ],

    hotelPackages: [
      {
        destination: 'Ooty (2N)',
        image: 'assets/images/hotels/ooty.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Nahar Nilgiris Resort', image: 'assets/images/hotels/nahar-nilgiris.jpg', description: '' }, { name: 'Treebo Windsor Heights Resort', image: 'assets/images/hotels/treebo-windsor.jpg', description: '' }, { name: 'Garden Manor Resort', image: 'assets/images/hotels/garden-manor.jpg', description: '' }],
          '4-Star Deluxe': [{ name: 'Sinclair’s Retreats', image: 'assets/images/hotels/sinclair.jpg', description: '' }, { name: 'The Monarch', image: 'assets/images/hotels/monarch.jpg', description: '' }, { name: 'Fortune Retreats', image: 'assets/images/hotels/fortune-retreats.jpg', description: '' }],
          '5-Star Deluxe': [{ name: 'Sterling Fern Hill, Ooty', image: 'assets/images/hotels/sterling-fern.jpg', description: '' }, { name: 'Accord Highland', image: 'assets/images/hotels/accord-highland.jpg', description: '' }, { name: 'Mango Hill Shola Resort', image: 'assets/images/hotels/mango-hill.jpg', description: '' }, { name: 'Fortune Sullivan Court', image: 'assets/images/hotels/fortune-.jpg', description: '' }, { name: 'Gem park Ooty', image: 'assets/images/hotels/ooty-.jpg', description: '' }],
          '5-Star Luxury': [{ name: 'Ayatana Ooty', image: 'assets/images/hotels/ayatana-Ooty.jpg', description: '' }, { name: 'Taj Savoy Hotel', image: 'assets/images/hotels/taj-savoy.jpg', description: '' }, { name: 'Taj Gateway Coonoor', image: 'assets/images/hotels/taj-gateway-coonoor.jpg', description: '' }]
        }
      },
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/hotels/munnar.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'West Wood Resort', image: 'assets/images/hotels/westwood.jpg', description: '' }, { name: 'Eastend Hotel', image: 'assets/images/hotels/eastend.jpg', description: '' }, { name: 'Trivers Resort', image: 'assets/images/hotels/trivers.jpg', description: '' }, { name: 'Tea Castle', image: 'assets/images/hotels/tea-castle.jpg', description: '' }],
          '4-Star Deluxe': [{ name: 'Rivulet Resort', image: 'assets/images/hotels/rivulet.jpg', description: '' }, { name: 'Elephant Passage Resort', image: 'assets/images/hotels/elephant-passage.jpg', description: '' }, { name: 'Fog Resort', image: 'assets/images/hotels/fog.jpg', description: '' }, { name: 'Tall Trees Resort', image: 'assets/images/hotels/tall-trees.jpg', description: '' }],
          '5-Star Deluxe': [{ name: 'Blanket Hotel', image: 'assets/images/hotels/blanket.jpg', description: '' }, { name: 'The Valle Resort', image: 'assets/images/hotels/the-valle.jpg', description: '' }, { name: 'Fragrant Nature Resort', image: 'assets/images/hotels/fragrant-nature.jpg', description: '' }],
          '5-Star Luxury': [{ name: 'Chandy’s Windy Woods', image: 'assets/images/hotels/chandys-windy.jpg', description: '' }, { name: 'Chandy’s Drizzle Drops', image: 'assets/images/hotels/chandys-drizzle.jpg', description: '' }, { name: 'Spice Tree Resort', image: 'assets/images/hotels/spice-tree.jpg', description: '' }, { name: 'Grand Cliff Resort', image: 'assets/images/hotels/grand-cliff.jpg', description: '' }]
        }
      },
      {
        destination: 'Thekkady (1N)',
        image: 'assets/images/hotels/thekkady.jpg',
        categories: {
          '3-Star Deluxe': [
            { name: 'Abad Green Forest', image: 'assets/images/hotels/abad-green.jpg', description: '' },
            { name: 'Pepper Vine Resort', image: 'assets/images/hotels/peppervine.jpg', description: '' },
            { name: 'Hotel Lincoln Square', image: 'assets/images/hotels/lincoln-square.jpg', description: '' }
          ],
          '4-Star Deluxe': [
            { name: 'Mountain Courtyard Resort', image: 'assets/images/hotels/mountain-courtyard.jpg', description: '' },
            { name: 'Forest Canopy Resort', image: 'assets/images/hotels/forest-canopy.jpg', description: '' },
            { name: 'Reen Resorts', image: 'assets/images/hotels/reen-resorts.jpg', description: '' }
          ],
          '5-Star Deluxe': [
            { name: 'Poetree Resort', image: 'assets/images/hotels/poetree.jpg', description: '' },
            { name: 'Elephant Court', image: 'assets/images/hotels/elephant-court.jpg', description: '' },
            { name: 'Green Woods Resort', image: 'assets/images/hotels/green-woods.jpg', description: '' }
          ],
          '5-Star Luxury': [
            { name: 'Spice Village Resort', image: 'assets/images/hotels/spice-village.jpg', description: '' },
            { name: 'Hills & Hues Resort', image: 'assets/images/hotels/hills-hues.jpg', description: '' },
            { name: 'Lake Palace Resort KTDC', image: 'assets/images/hotels/lake-palace-ktdc.jpg', description: '' },
            { name: 'Blanket Resort', image: 'assets/images/hotels/blanket-resort.jpg', description: '' }
          ]
        }
      },
      {
        destination: 'Kumarakom Houseboat (1N)',
        image: 'assets/images/hotels/houseboat.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: 'assets/images/houseboats/standard.jpg', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat with Silver Flag Category', image: 'assets/images/houseboats/deluxe.jpg', description: '' }],
          '5-Star Deluxe': [{ name: 'AC Premium Houseboat with Golden flag category', image: 'assets/images/houseboats/premium.jpg', description: '' }],
          '5-Star Luxury': [{ name: 'Full-time AC Luxury boat with Platinum category', image: 'assets/images/houseboats/platinum.jpg', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 Years: Free of cost (without extra bed)',
      'Child 5–12 Years: 25% of adult price on double share',
      'Extra Adult with extra bed: 30% of adult price on double share'
    ],

    meals: 'Breakfast + Dinner at hotels; Breakfast + Lunch + Dinner on houseboat',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (mostly Toyota Etios/Swift Dzire)', icon: '🚗' },
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
          { category: '3 STAR DELUXE RESORT', twoPax: 'Rs 80,020/-', single: 'Rs 64,010/-', extraPerson: 'Rs 24,006/-' },
          { category: '4 STAR DELUXE RESORT', twoPax: 'Rs 95,680/-', single: 'Rs 76,540/-', extraPerson: 'Rs 28,704/-' },
          { category: '5-STAR DELUXE RESORT', twoPax: 'Rs 1,26,060/-', single: 'Rs 1,00,850/-', extraPerson: 'Rs 37,818/-' },
          { category: '5-STAR LUXURY RESORT', twoPax: 'Rs 2,36,280/-', single: 'Rs 1,89,020/-', extraPerson: 'Rs 70,884/-' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3 STAR DELUXE RESORT', twoPax: 'Rs 65,000/-', single: 'Rs 52,000/-', extraPerson: 'Rs 19,500/-' },
          { category: '4 STAR DELUXE RESORT', twoPax: 'Rs 78,140/-', single: 'Rs 62,510/-', extraPerson: 'Rs 23,442/-' },
          { category: '5-STAR DELUXE RESORT', twoPax: 'Rs 1,03,340/-', single: 'Rs 82,670/-', extraPerson: 'Rs 31,002/-' },
          { category: '5-STAR LUXURY RESORT', twoPax: 'Rs 1,92,520/-', single: 'Rs 1,54,020/-', extraPerson: 'Rs 57,756/-' }
        ]
      }
    ],

    supplementalAttractions: [

      { id: 'sup-1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or dinner', subtitle: 'Non-Veg (Traditional Home)', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: true, img: 'assets/images/attractions/cookery-demo.jpg' },
      { id: 'sup-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial arts (Min 5 Pax)', location: 'Cochin / Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: 'sup-3', name: 'Kolukkumalai Tea Factory Visit', subtitle: 'Highest hill station tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: false, img: 'assets/images/attractions/kolukkumalai.jpg' },
      { id: 'sup-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-half.jpg' },
      { id: 'sup-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-full.jpg' },
      { id: 'sup-6', name: 'Mountain Trekking with Jeep Safari (guide)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3,000.00', rating: 5, featured: false, img: 'assets/images/attractions/trekking-jeep.jpg' },
      { id: 'sup-7', name: 'Bamboo River Rafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-rafting.jpg' },
      { id: 'sup-8', name: 'Full Day Trip to Gavi', subtitle: 'On request', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: 'sup-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/jeep-periyar.jpg' },
      { id: 'sup-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar / Thekkady', people: 'Per Person', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: 'sup-11', name: 'Half Day Elephant Moments (Bathing & Feeding)', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: 'sup-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: 'sup-13', name: 'Backwater Historical Tour at Cochin (with guide)', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour-cochin.jpg' },
      { id: 'sup-14', name: 'Extra Night in A/C Houseboat (Kumarakom → Alleppey)', subtitle: 'Full-day cruise included', location: 'Kumarakom - Alleppey', people: 'For Two Persons', cost: 'Rs. 7,000.00', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' }
    ],

    specialOffers: [
      'Complimentary honeymoon cake for couple packages (on request)',
      'Flower bed decoration (couple packages) - on request',
      'Candlelight dinner (upgrade applicable)'
    ]
  },

  {
    id: 'kerala-colours-1',
    title: 'Colours of Kerala - 1',
    duration: '05 NIGHTS / 06 DAYS',
    summary:
      'A classic Kerala journey covering Cochin, Periyar, Munnar and a memorable houseboat cruise from Kumarakom to Alleppey. Experience culture, wildlife, hill stations and serene backwaters with carefully selected hotels and seamless transportation.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Breakfast at hotels and all meals on the houseboat',
      'Handpicked hotels & resorts based on guest reviews',
      'Vehicle at disposal from airport to airport without km restrictions',
      'One English-speaking driver and one vehicle throughout the tour',
      'Date change allowed up to 24 hours before arrival without retention',
      'GST, tolls, parking fees and driver bata included'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Cochin & Sightseeing',
      'Day 02 – Cochin → Periyar (Thekkady)',
      'Day 03 – Periyar → Munnar',
      'Day 04 – Munnar Sightseeing',
      'Day 05 – Munnar → Kumarakom Houseboat → Alleppey',
      'Day 06 – Alleppey → Cochin Departure'
    ],

    itineraryOverview: [
      { day: '01', title: 'Arrival at Cochin', details: ['Meet & greet at Cochin Airport by our representative', 'Hotel check-in and refresh', 'Guided sightseeing tour of Cochin', 'Visit Dutch Palace and Jewish Synagogue at Mattancherry', 'Evening Kathakali dance performance', 'Dinner and overnight stay at Cochin'], image: 'assets/images/itinerary/cochin.jpg' },
      { day: '02', title: 'Cochin → Periyar', details: ['Breakfast at hotel', 'Drive to Periyar Wildlife Sanctuary', 'Check-in at jungle resort', 'Boat safari on Periyar Lake', 'Spot elephants, bison and wildlife', 'Dinner and overnight stay at Periyar'], image: 'assets/images/itinerary/periyar.jpg' },
      { day: '03', title: 'Periyar → Munnar', details: ['Morning spice plantation tour', 'Scenic drive to Munnar (approx. 3.5 hrs)', 'Check-in at hill resort', 'Tea garden visit and shopping', 'Dinner and overnight stay at Munnar'], image: 'assets/images/itinerary/munnar-arrival.jpg' },
      { day: '04', title: 'Munnar Sightseeing', details: ['Breakfast at hotel', 'Visit Eravikulam National Park', 'View Nilgiri Tahr and scenic valleys', 'Proceed to Top Station', 'Dinner and overnight stay at Munnar'], image: 'assets/images/itinerary/munnar-sightseeing.jpg' },
      { day: '05', title: 'Munnar → Kumarakom Houseboat', details: ['Breakfast and drive to Kumarakom', 'Board houseboat by noon', 'Backwater cruise towards Alleppey', 'Lunch and dinner onboard', 'Houseboat anchored for night stay'], image: 'assets/images/itinerary/houseboat.jpg' },
      { day: '06', title: 'Alleppey → Cochin Departure', details: ['Breakfast on houseboat', 'Disembark at Alleppey', 'Drive to Cochin Airport', 'Tour ends with memorable experiences'], image: 'assets/images/itinerary/departure.jpg' }
    ],


    detailedItinerary: [
      { day: 'Day 01', title: 'Arrival at Coimbatore – Proceed to Ooty', details: ['Arrive at Coimbatore Airport by flight and meet our representative.', 'Proceed to Ooty by road (approx. 3 hours 10 minutes drive).', 'Reach Ooty by noon.', 'Check into the hotel and relax.', 'Evening visit to Botanical Garden followed by boating.', 'Overnight stay at the hotel in Ooty.'] },
      { day: 'Day 02', title: 'Explore Ooty', details: ['Breakfast at the hotel.', 'Proceed for full-day sightseeing in and around Ooty.', 'Enjoy picture-postcard scenic views.', 'Visit Rose Garden, Avmamore Palace and Government Museum.', 'Enjoy the Toy Train journey to Coonoor (subject to availability).', 'Return to the hotel by evening and relax.', 'Overnight stay at the hotel in Ooty.'] },
      { day: 'Day 03', title: 'Proceed to Munnar', details: ['Breakfast at the hotel and check-out.', 'Proceed to Munnar hill station.', 'Enjoy scenic views of tea gardens en route.', 'Visit the Tea Museum on the way.', 'Reach Munnar by afternoon.', 'Check into the hotel and relax.', 'Spice shopping.', 'Overnight stay at the hotel in Munnar.'] },
      { day: 'Day 04', title: 'Explore Munnar', details: ['Breakfast at the hotel.', 'Our driver will pick you up for sightseeing.', 'Visit Eravikulam National Park.', 'Proceed to Mattupetty Dam and Echo Point.', 'Visit Kundala Lake by noon.', 'Proceed to Top Station to enjoy breathtaking views.', 'Free time at leisure.', 'Overnight stay at the resort in Munnar.'] },
      { day: 'Day 05', title: 'Proceed to Thekkady', details: ['Breakfast at the hotel and check-out.', 'Drive to Thekkady (approx. 3 hours / 150 km).', 'Reach Thekkady before noon.', 'Check into the hotel and relax.', 'Afternoon elephant ride and jungle safari.', 'Evening Kalarippayattu – the ancient martial art of Kerala.', 'Overnight stay at the hotel in Thekkady.'] },
      { day: 'Day 06', title: 'Enjoy Houseboat at Kumarakom', details: ['Breakfast at the hotel.', 'Proceed to Kumarakom (approx. 4-hour drive).', 'Board the traditional houseboat by noon.', 'Cruise through the serene backwaters.', 'Enjoy traditional lunch onboard.', 'Houseboat anchored from 5:30 PM till 6:00 AM.', 'Dinner onboard.', 'Overnight stay in the houseboat.'] },
      { day: 'Day 07', title: 'Departure from Cochin', details: ['Breakfast on the houseboat.', 'Check-out from the houseboat.', 'Transfer to Cochin Airport for return flight.', 'Tour ends with beautiful memories of Kerala.'] }
    ],

    inclusions: [
      'Private A/C vehicle with English-speaking driver',
      'Accommodation on double share basis',
      'Breakfast at hotels',
      'All meals on houseboat (B+L+D)',
      'All sightseeing as per itinerary',
      'GST, tolls, parking and driver bata'
    ],

    exclusions: [
      'Air/train tickets and airport taxes',
      'Visa and passport charges',
      'Personal expenses and beverages',
      'Single room supplement',
      'Peak season surcharges if applicable'
    ],

    sightseeing: [
      'Cochin guided city tour & Kathakali show',
      'Periyar Lake boat safari & spice plantation visit',
      'Full-day Munnar sightseeing',
      'Backwater cruise with overnight houseboat stay'
    ],

    hotelPackages: [
      {
        destination: 'Cochin (1N)',
        image: 'assets/images/hotels/cochin.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Abad Atrium', image: '', description: '' }, { name: 'Napier Heritage', image: '', description: '' }, { name: 'Hotel Killian', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Gokulam Park', image: '', description: '' }, { name: 'Abad Plaza', image: '', description: '' }, { name: 'Bolgatty Hotel', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Hotel Marriott', image: '', description: '' }, { name: 'Taj Gateway', image: '', description: '' }, { name: 'Le Meridian', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Taj Malabar', image: '', description: '' }, { name: 'Grand Hyatt', image: '', description: '' }, { name: 'Old Harbour Hotel', image: '', description: '' }]
        }
      },
      {
        destination: 'Periyar (1N)',
        image: 'assets/images/hotels/thekkady.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Abad Green Forest', image: '', description: '' }, { name: 'Pepper Vine Resort', image: '', description: '', }, { name: 'Hotel Lincoln Square', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Mountain Courtyard Resort', image: '', description: '' }, { name: 'Forest Canopy Resort', image: '', description: '' }, { name: 'Reen Resorts', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Poetree Resort', image: '', description: '' }, { name: 'Elephant Court', image: '', description: '' }, { name: 'Green Woods Resort', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Spice Village Resort', image: '', description: '' }, { name: 'Lake Palace Resort KTDC', image: '', description: '' }]
        }
      },
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/hotels/munnar.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'West Wood Resort', image: '', description: '' }, { name: 'Eastend Hotel', image: '', description: '' }, { name: 'Tea Castle', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Rivulet Resort', image: '', description: '' }, { name: 'Elephant Passage Resort', image: '', description: '' }, { name: 'Tall Trees Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Blanket Hotel', image: '', description: '' }, { name: 'Fragrant Nature Resort', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Chandys Windy Woods', image: '', description: '' }, { name: 'Spice Tree Resort', image: '', description: '' }]
        }
      },
      {
        destination: 'Houseboat (1N)',
        image: 'assets/images/hotels/houseboat.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat (Silver Flag)', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'A/C Premium Houseboat (Golden Flag)', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Luxury Houseboat (Platinum Category)', image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free without extra bed',
      'Child 5–12 years: 25% of adult price on double share',
      'Extra adult with bed: 30% of adult price'
    ],

    meals:
      'Breakfast at hotels; Breakfast, Lunch and Dinner on houseboat',

    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Swift Dzire)' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller' },
      { pax: '15–25 Pax', description: 'A/C 25-Seater Traveller' },
      { pax: '25+ Pax', description: 'A/C Luxury Mini Bus' }
    ],

    pricing: [
      {
        season: '1st Oct 2025 - 19th Dec 2025 & 10th Jan 2026 - 31st May 2026',
        categories: [
          { category: '3 STAR DELUXE RESORT', twoPax: 'Rs 31,550/-', single: 'Euro 315/-', extraPerson: 'USD 371/-' },
          { category: '4 STAR DELUXE RESORT', twoPax: 'Rs 38,300/-', single: 'Euro 383/-', extraPerson: 'USD 450/-' },
          { category: '5-STAR DELUXE RESORT', twoPax: 'Rs 47880/-', single: 'Euro 478/-', extraPerson: 'USD 563/-' },
          { category: '5-STAR LUXURY RESORT', twoPax: 'Rs 64990/-', single: 'Euro 649/-', extraPerson: 'USD 764/-' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3 STAR DELUXE RESORT', twoPax: 'Rs 25,240/-', single: 'Euro 252/-', extraPerson: 'USD 296/-' },
          { category: '4 STAR DELUXE RESORT', twoPax: 'Rs 30,640/-', single: 'Euro 306/-', extraPerson: 'USD 360/-' },
          { category: '5-STAR DELUXE RESORT', twoPax: 'Rs 38,300/-', single: 'Euro 383/-', extraPerson: 'USD 450/-' },
          { category: '5-STAR LUXURY RESORT', twoPax: 'Rs 51990/-', single: 'Euro 519/-', extraPerson: 'USD 611/-' }
        ]
      }
    ],

    supplementalAttractions: [

      { id: 'sup-1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or dinner', subtitle: 'Non-Veg (Traditional Home)', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: true, img: 'assets/images/attractions/cookery-demo.jpg' },
      { id: 'sup-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial arts (Min 5 Pax)', location: 'Cochin / Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: 'sup-3', name: 'Kolukkumalai Tea Factory Visit', subtitle: 'Highest hill station tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: false, img: 'assets/images/attractions/kolukkumalai.jpg' },
      { id: 'sup-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-half.jpg' },
      { id: 'sup-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-full.jpg' },
      { id: 'sup-6', name: 'Mountain Trekking with Jeep Safari (guide)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3,000.00', rating: 5, featured: false, img: 'assets/images/attractions/trekking-jeep.jpg' },
      { id: 'sup-7', name: 'Bamboo River Rafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-rafting.jpg' },
      { id: 'sup-8', name: 'Full Day Trip to Gavi', subtitle: 'On request', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: 'sup-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/jeep-periyar.jpg' },
      { id: 'sup-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar / Thekkady', people: 'Per Person', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: 'sup-11', name: 'Half Day Elephant Moments (Bathing & Feeding)', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: 'sup-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: 'sup-13', name: 'Backwater Historical Tour at Cochin (with guide)', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour-cochin.jpg' },
      { id: 'sup-14', name: 'Extra Night in A/C Houseboat (Kumarakom → Alleppey)', subtitle: 'Full-day cruise included', location: 'Kumarakom - Alleppey', people: 'For Two Persons', cost: 'Rs. 7,000.00', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' }
    ],

    specialOffers: [
      'Flexible date change up to 24 hours before arrival',
      'Customisation available on request'
    ]
  },

  {
    id: 'kerala-colours-2',
    title: 'Colours of Kerala Tour - 2',
    duration: '06 NIGHTS / 07 DAYS',
    summary:
      'A complete Kerala journey covering Cochin, Ooty and Vythiri — blending culture, hill stations, wildlife, backwaters and heritage experiences with carefully selected hotels and seamless transportation.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Breakfast basis at all hotels & resorts',
      'Carefully selected hotels based on guest reviews',
      'Vehicle at disposal from airport to airport (no km restriction)',
      'One English-speaking driver & one vehicle for entire tour',
      'Tour date change allowed up to 24 hours before without retention',
      'GST, tolls, parking fees and driver bata included'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Cochin',
      'Day 02 – Explore Cochin',
      'Day 03 – Cochin → Ooty',
      'Day 04 – Explore Ooty',
      'Day 05 – Ooty → Vythiri',
      'Day 06 – Explore Vythiri',
      'Day 07 – Departure from Calicut'
    ],

    itineraryOverview: [
      { day: '01', title: 'Arrival at Cochin', details: ['Arrive at Cochin International Airport and meet IDT representative.', 'Transfer to hotel by private vehicle.', 'Evening Kathakali dance performance.', 'Overnight stay at hotel.'], image: 'assets/images/itinerary/cochin-arrival.jpg' },
      { day: '02', title: 'Explore Cochin', details: ['Breakfast at hotel.', 'Guided historical tour of Dutch Palace & Jewish Synagogue.', 'Country craft canal cruise showcasing rural Kerala life.', 'Evening free for leisure.', 'Overnight stay at hotel.'], image: 'assets/images/itinerary/cochin-sightseeing.jpg' },
      { day: '03', title: 'Cochin to Ooty', details: ['Breakfast and drive to Ooty.', 'Toy Train journey between Coonoor and Ooty (subject to availability).', 'Check-in and relax.', 'Overnight stay at Ooty.'], image: 'assets/images/itinerary/ooty-arrival.jpg' },
      { day: '04', title: 'Explore Ooty', details: ['Breakfast at hotel.', 'Visit Botanical Garden, Rose Garden, Mamore Palace & Government Museum.', 'Boating at Ooty Lake.', 'Evening return to hotel.', 'Overnight stay.'], image: 'assets/images/itinerary/ooty-sightseeing.jpg' },
      { day: '05', title: 'Ooty to Vythiri', details: ['Breakfast and drive to Vythiri.', 'Arrive by evening.', 'Check-in at forest resort.', 'Overnight stay.'], image: 'assets/images/itinerary/vythiri-arrival.jpg' },
      { day: '06', title: 'Explore Vythiri', details: ['Breakfast at resort.', 'Visit Pookode Lake.', 'Spice plantation visit.', 'Optional visit to Soochipara Waterfalls.', 'Overnight stay.'], image: 'assets/images/itinerary/vythiri-sightseeing.jpg' },
      { day: '07', title: 'Departure from Calicut', details: ['Breakfast at resort.', 'Drive to Calicut Airport (approx. 2 hours).', 'Tour ends with memorable experiences.'], image: 'assets/images/itinerary/departure.jpg' }
    ],

    detailedItinerary: [
      { day: 'Day 01', title: 'Arrival – Cochin', details: ['Meet & greet at Cochin International Airport.', 'Transfer to hotel and relax.', 'Evening Kathakali cultural performance.', 'Overnight stay.'] },
      { day: 'Day 02', title: 'Cochin sightseeing', details: ['Guided historical city tour.', 'Dutch Palace & Jewish Synagogue visit.', 'Country boat canal cruise.', 'Leisure evening.'] },
      { day: 'Day 03', title: 'Cochin to Ooty', details: ['Drive to Ooty.', 'Toy Train experience (subject to availability).', 'Check-in and overnight stay.'] },
      { day: 'Day 04', title: 'Ooty sightseeing', details: ['Botanical Garden & Rose Garden.', 'Mamore Palace & Govt Museum.', 'Boating at Ooty Lake.'] },
      { day: 'Day 05', title: 'Ooty to Vythiri', details: ['Drive to Wayanad – Vythiri.', 'Check-in at resort.', 'Leisure evening.'] },
      { day: 'Day 06', title: 'Explore Vythiri', details: ['Pookode Lake boating.', 'Spice shopping.', 'Visit Soochipara waterfalls.'] },
      { day: 'Day 07', title: 'Departure', details: ['Transfer to Calicut Airport.', 'Return journey.'] }
    ],

    inclusions: [
      'Private A/C vehicle with English-speaking driver',
      'Accommodation on double sharing basis',
      'Daily breakfast',
      'Kathakali show & canal cruise at Cochin',
      'All tolls, parking, driver bata & GST'
    ],

    exclusions: [
      'Airfare / train tickets',
      'Personal expenses & beverages',
      'Entry fees not mentioned',
      'Peak season surcharge',
      'Travel insurance'
    ],

    sightseeing: [
      'Cochin guided city tour & Kathakali show',
      'Periyar Lake boat safari & spice plantation visit',
      'Full-day Munnar sightseeing',
      'Backwater cruise with overnight houseboat stay'
    ],

    hotelPackages: [
      {
        destination: 'Cochin (1N)',
        image: 'assets/images/hotels/cochin.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Hotel Killian’s', image: '', description: '' }, { name: 'Abad Plaza', image: '', description: '' }, { name: 'Napier Heritage Hotel', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Napier Heritage Hotel', image: '', description: '' }, { name: 'Marine Inn', image: '', description: '' }, { name: 'Bolgatty Palace & Island Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Kochi Marriott Hotel', image: '', description: '' }, { name: 'Taj Gateway Kochi', image: '', description: '' }, { name: 'Le Meridien Kochi', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Taj Malabar Resort & Spa', image: '', description: '' }, { name: 'Grand Hyatt Kochi Bolgatty', image: '', description: '' }, { name: 'Old Harbour Hotel', image: '', description: '' }]
        }
      },

      {
        destination: 'Periyar / Thekkady (1N)',
        image: 'assets/images/hotels/thekkady.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Abad Green Forest', image: '', description: '' }, { name: 'Pepper Vine Resort', image: '', description: '' }, { name: 'Hotel Lincoln Square', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Mountain Courtyard Resort', image: '', description: '' }, { name: 'Forest Canopy Resort', image: '', description: '' }, { name: 'Reen Resorts', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Poetree Resort', image: '', description: '' }, { name: 'Elephant Court', image: '', description: '' }, { name: 'Green Woods Resort', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Spice Village – CGH Earth', image: '', description: '' }, { name: 'Lake Palace Resort KTDC', image: '', description: '' }]
        }
      },

      {
        destination: 'Munnar (2N)',
        image: 'assets/images/hotels/munnar.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'West Wood Resort', image: '', description: '' }, { name: 'Eastend Hotel', image: '', description: '' }, { name: 'Tea Castle Resort', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'Rivulet Resort', image: '', description: '' }, { name: 'Elephant Passage Resort', image: '', description: '' }, { name: 'Tall Trees Resort', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'Blanket Hotel & Spa', image: '', description: '' }, { name: 'Fragrant Nature Resort', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Chandy’s Windy Woods', image: '', description: '' }, { name: 'Spice Tree Resort', image: '', description: '' }]
        }
      },

      {
        destination: 'Kumarakom Houseboat (1N)',
        image: 'assets/images/hotels/houseboat.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'A/C Standard Houseboat', image: '', description: '' }],
          '4-Star Deluxe': [{ name: 'A/C Deluxe Houseboat – Silver Flag Category', image: '', description: '' }],
          '5-Star Deluxe': [{ name: 'A/C Premium Houseboat – Golden Flag Category', image: '', description: '' }],
          '5-Star Luxury': [{ name: 'Full-Time A/C Luxury Houseboat – Platinum Category', image: '', description: '' }]
        }
      }
    ],


    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: 'Breakfast at all hotels',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],

    pricing: [
      {
        season: '1st Oct 2025 - 19th Dec 2025 & 10th Jan 2026 - 31st May 2026',
        categories: [
          { category: '3 STAR DELUXE RESORT', twoPax: 'Rs 34,470/-', single: 'Euro 344/-', extraPerson: 'USD 405/-' },
          { category: '4 STAR DELUXE RESORT', twoPax: 'Rs 41,260/-', single: 'Euro 412/-', extraPerson: 'USD 485/-' },
          { category: '5-STAR DELUXE RESORT', twoPax: 'Rs 53,100/-', single: 'Euro 531/-', extraPerson: 'USD 624/-' },
          { category: '5-STAR LUXURY RESORT', twoPax: 'Rs 92,890/-', single: 'Euro 928/-', extraPerson: 'USD 1092/-' }
        ]
      },
      {
        season: '1st June 2026 - 30th Sept 2026 (Off Season)',
        categories: [
          { category: '3 STAR DELUXE RESORT', twoPax: 'Rs 27,570 /-', single: 'Euro 324/-', extraPerson: 'USD 259/-' },
          { category: '4 STAR DELUXE RESORT', twoPax: 'Rs 33,080/-', single: 'Euro 389/-', extraPerson: 'USD 311/-' },
          { category: '5-STAR DELUXE RESORT', twoPax: 'Rs 42,480/-', single: 'Euro 499/-', extraPerson: 'USD 399/-' },
          { category: '5-STAR LUXURY RESORT', twoPax: 'Rs 74,310/-', single: 'Euro 874/-', extraPerson: 'USD 699/-' }
        ]
      }
    ],

    supplementalAttractions: [

      { id: 'sup-1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or dinner', subtitle: 'Non-Veg (Traditional Home)', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: true, img: 'assets/images/attractions/cookery-demo.jpg' },
      { id: 'sup-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial arts (Min 5 Pax)', location: 'Cochin / Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: 'sup-3', name: 'Kolukkumalai Tea Factory Visit', subtitle: 'Highest hill station tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: false, img: 'assets/images/attractions/kolukkumalai.jpg' },
      { id: 'sup-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-half.jpg' },
      { id: 'sup-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-full.jpg' },
      { id: 'sup-6', name: 'Mountain Trekking with Jeep Safari (guide)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3,000.00', rating: 5, featured: false, img: 'assets/images/attractions/trekking-jeep.jpg' },
      { id: 'sup-7', name: 'Bamboo River Rafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-rafting.jpg' },
      { id: 'sup-8', name: 'Full Day Trip to Gavi', subtitle: 'On request', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: 'sup-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/jeep-periyar.jpg' },
      { id: 'sup-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar / Thekkady', people: 'Per Person', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: 'sup-11', name: 'Half Day Elephant Moments (Bathing & Feeding)', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: 'sup-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: 'sup-13', name: 'Backwater Historical Tour at Cochin (with guide)', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour-cochin.jpg' },
      { id: 'sup-14', name: 'Extra Night in A/C Houseboat (Kumarakom → Alleppey)', subtitle: 'Full-day cruise included', location: 'Kumarakom - Alleppey', people: 'For Two Persons', cost: 'Rs. 7,000.00', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' },
      { id: 'sup-15', name: 'Toy Train', subtitle: ' Toy train', location: 'Ooty to Conoor', people: 'For Two Persons', cost: 'Rs. 150', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' }
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "kerala-colours-3",
    "title": "Colours of Kerala Tour - 3",
    "duration": "07 Nights / 08 Days",

    summary:
      'A complete Kerala journey covering Cochin, Ooty and Vythiri — blending culture, hill stations, wildlife, backwaters and heritage experiences with carefully selected hotels and seamless transportation.',

    tourHighlights: [
      'All-inclusive package without any hidden costs',
      'Breakfast basis at all hotels & resorts',
      'Carefully selected hotels based on guest reviews',
      'Vehicle at disposal from airport to airport (no km restriction)',
      'One English-speaking driver & one vehicle for entire tour',
      'Tour date change allowed up to 24 hours before without retention',
      'GST, tolls, parking fees and driver bata included'
    ],

    quickItinerary: [
      'Day 01 – Arrival at Cochin',
      'Day 02 – Explore Cochin',
      'Day 03 – Cochin → Munnar',
      'Day 04 – In & Around Munnar',
      'Day 05 – Munnar → Periyar',
      'Day 06 – Explore Periyar',
      'Day 07 – Periyar → Kumarakom Houseboat',
      'Day 08 – Departure from Cochin'
    ],

    itineraryOverview: [
      { day: '01', title: 'Arrival at Cochin', details: ['Arrive at Cochin International Airport.', 'Meet our representative cum driver after immigration and customs.', 'Transfer to hotel in a private vehicle.', 'Evening witness the colourful Kathakali dance performance.', 'Photo session with Kathakali artists.', 'Overnight stay at hotel.'], image: '' },
      { day: '02', title: 'Explore Cochin', details: ['Breakfast at hotel.', 'Guided sightseeing tour of Cochin.', 'Visit Dutch Palace (Mattancherry Palace).', 'Visit the historic Jewish Synagogue at Mattancherry.', 'Return to mainland Cochin by noon.', 'Country craft canal cruise through suburban Cochin backwaters.', 'Experience rural Kerala life closely.', 'Return to hotel by evening.', 'Free time to explore downtown Cochin.', 'Overnight stay at hotel.'], image: '' },
      { day: '03', title: 'Cochin to Munnar', details: ['Breakfast at hotel and check-out.', 'Scenic drive to Munnar – Kerala’s tea garden hill station.', 'Travel time approximately 3.5 hours.', 'Reach Munnar by noon.', 'Check-in at resort.', 'Rest of the day for shopping and tea garden visit.', 'Dinner and overnight stay at resort.'], image: '' },
      { day: '04', title: 'In and Around Munnar', details: ['Breakfast at resort.', 'Proceed for full-day sightseeing of Munnar.', 'Visit Eravikulam National Park – home of the Nilgiri Tahr.', 'Enjoy panoramic valley views and photography.', 'Visit Top Station, the highest point in Munnar.', 'See Nilakurinji plant region (blooms once in 12 years).', 'Overnight stay at resort.'], image: '' },
      { day: '05', title: 'Munnar to Periyar', details: ['Breakfast and check-out from resort.', 'Drive to Periyar via scenic Munnar–Thekkady route.', 'Enjoy spectacular natural landscapes en route.', 'Arrive at Thekkady and check-in at jungle resort.', 'Time to relax.', 'Boat ride on Periyar Lake.', 'Chance to spot elephants, bison and other wildlife.', 'Dinner and overnight stay at resort.'], image: '' },
      { day: '06', title: 'Explore Periyar', details: ['Morning trekking through forest trails with guide.', 'Experience the natural beauty of Periyar.', 'Visit spice plantation to learn about spice cultivation.', 'Optional elephant safari if time permits.', 'Overnight stay at resort.'], image: '' },
      { day: '07', title: 'Periyar to Kumarakom Houseboat', details: ['Breakfast at resort.', 'Drive to Kumarakom.', 'Board traditional houseboat by noon.', 'Begin backwater cruise towards Alleppey.', 'Enjoy scenic waterways and village life.', 'Houseboat anchors at night in the backwaters.', 'Dinner and overnight stay on houseboat.'], image: '' },
      { day: '08', title: 'Departure from Cochin', details: ['Reach Alleppey by morning.', 'Breakfast on houseboat at 09:00 AM.', 'Disembark from houseboat.', 'Transfer to Cochin Airport.', 'End of tour with wonderful memories.'], image: '' }
    ],

    detailedItinerary: [
      { day: 'Day 01', title: 'Arrival at Cochin', details: ['Arrive at Cochin International Airport.', 'Meet our representative cum driver after immigration and customs.', 'Transfer to hotel in a private vehicle.', 'Evening witness the colourful Kathakali dance performance.', 'Photo session with Kathakali artists.', 'Overnight stay at hotel.'] },
      { day: 'Day 02', title: 'Explore Cochin', details: ['Breakfast at hotel.', 'Guided sightseeing tour of Cochin.', 'Visit Dutch Palace (Mattancherry Palace).', 'Visit the historic Jewish Synagogue at Mattancherry.', 'Return to mainland Cochin by noon.', 'Country craft canal cruise through suburban Cochin backwaters.', 'Experience rural Kerala life closely.', 'Return to hotel by evening.', 'Free time to explore downtown Cochin.', 'Overnight stay at hotel.'] },
      { day: 'Day 03', title: 'Cochin to Munnar', details: ['Breakfast at hotel and check-out.', 'Scenic drive to Munnar – Kerala’s tea garden hill station.', 'Travel time approximately 3.5 hours.', 'Reach Munnar by noon.', 'Check-in at resort.', 'Rest of the day for shopping and tea garden visit.', 'Dinner and overnight stay at resort.'] },
      { day: 'Day 04', title: 'In and Around Munnar', details: ['Breakfast at resort.', 'Proceed for full-day sightseeing of Munnar.', 'Visit Eravikulam National Park – home of the Nilgiri Tahr.', 'Enjoy panoramic valley views and photography.', 'Visit Top Station, the highest point in Munnar.', 'See Nilakurinji plant region (blooms once in 12 years).', 'Overnight stay at resort.'] },
      { day: 'Day 05', title: 'Munnar to Periyar', details: ['Breakfast and check-out from resort.', 'Drive to Periyar via scenic Munnar–Thekkady route.', 'Enjoy spectacular natural landscapes en route.', 'Arrive at Thekkady and check-in at jungle resort.', 'Time to relax.', 'Boat ride on Periyar Lake.', 'Chance to spot elephants, bison and other wildlife.', 'Dinner and overnight stay at resort.'] },
      { day: 'Day 06', title: 'Explore Periyar', details: ['Morning trekking through forest trails with guide.', 'Experience the natural beauty of Periyar.', 'Visit spice plantation to learn about spice cultivation.', 'Optional elephant safari if time permits.', 'Overnight stay at resort.'] },
      { day: 'Day 07', title: 'Periyar to Kumarakom Houseboat', details: ['Breakfast at resort.', 'Drive to Kumarakom.', 'Board traditional houseboat by noon.', 'Begin backwater cruise towards Alleppey.', 'Enjoy scenic waterways and village life.', 'Houseboat anchors at night in the backwaters.', 'Dinner and overnight stay on houseboat.'] },
      { day: 'Day 08', title: 'Departure from Cochin', details: ['Reach Alleppey by morning.', 'Breakfast on houseboat at 09:00 AM.', 'Disembark from houseboat.', 'Transfer to Cochin Airport.', 'End of tour with wonderful memories.'] }
    ],

    inclusions: [
      'Private A/C vehicle with English-speaking driver',
      'Accommodation on double sharing basis',
      'Daily breakfast',
      'Kathakali show & canal cruise at Cochin',
      'All tolls, parking, driver bata & GST'
    ],

    exclusions: [
      'Airfare / train tickets',
      'Personal expenses & beverages',
      'Entry fees not mentioned',
      'Peak season surcharge',
      'Travel insurance'
    ],

    sightseeing: [
      'Cochin guided city tour & Kathakali show',
      'Periyar Lake boat safari & spice plantation visit',
      'Full-day Munnar sightseeing',
      'Backwater cruise with overnight houseboat stay'
    ],

    hotelPackages: [
      {
        "destination": "Cochin (2N)",
        image: 'assets/images/hotels/cochin.jpg',
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Killian’s", image: '', description: '' }, { "name": "Abad Plaza", image: '', description: '' }, { "name": "Napier Heritage Hotel", image: '', description: '' }],
          "4-Star Deluxe": [{ "name": "Monsoon Empress", image: '', description: '' }, { "name": "Marine Inn", image: '', description: '' }, { "name": "Tribute Royale", image: '', description: '' }, { "name": "Olive Downtown", image: '', description: '' }],
          "5-Star Deluxe": [{ "name": "Le Meridian", image: '', description: '' }, { "name": "Crowne Plaza", image: '', description: '' }, { "name": "Hotel Marriott", image: '', description: '' }],
          "5-Star Luxury": [{ "name": "Brunton Boatyard Hotel", image: '', description: '' }, { "name": "Taj Malabar", image: '', description: '' }, { "name": "Grand Hyatt", image: '', description: '' }]
        }
      },
      {
        "destination": "Munnar (2N)",
        image: 'assets/images/hotels/thekkady.jpg',
        "categories": {
          "3-Star Deluxe": [{ "name": "West Wood Resort", image: '', description: '' }, { "name": "Eastend Hotel", image: '', description: '' }, { "name": "Trivers Resort", image: '', description: '' }, { "name": "Tea Castle", image: '', description: '' }],
          "4-Star Deluxe": [{ "name": "Rivulet Resort", image: '', description: '' }, { "name": "Elephant Passage Resort", image: '', description: '' }, { "name": "Fog Resort", image: '', description: '' }, { "name": "Tall Trees Resort", image: '', description: '' }],
          "5-Star Deluxe": [{ "name": "Blanket Hotel", image: '', description: '' }, { "name": "The Valle Resort", image: '', description: '' }, { "name": "Fragrant Nature Resort", image: '', description: '' }],
          "5-Star Luxury": [{ "name": "Chandys Windy Woods", image: '', description: '' }, { "name": "Chandys Drizzle Drops", image: '', description: '' }, { "name": "Spice Tree Resort", image: '', description: '' }, { "name": "Grand Cliff Resort", image: '', description: '' }]
        }
      },
      {
        "destination": "Periyar (2N)",
        image: 'assets/images/hotels/munnar.jpg',
        "categories": {
          "3-Star Deluxe": [{ "name": "Abad Green Forest", image: '', description: '' }, { "name": "Pepper Vine Resort", image: '', description: '' }, { "name": "Hotel Lincoln Square", image: '', description: '' }],
          "4-Star Deluxe": [{ "name": "Mountain Courtyard Resort", image: '', description: '' }, { "name": "Forest Canopy Resort", image: '', description: '' }, { "name": "Reen Resorts", image: '', description: '' }],
          "5-Star Deluxe": [{ "name": "Poetree Resort", image: '', description: '' }, { "name": "Elephant Court", image: '', description: '' }, { "name": "Green Woods Resort", image: '', description: '' }],
          "5-Star Luxury": [{ "name": "Spice Village Resort", image: '', description: '' }, { "name": "Hills & Hues Resort", image: '', description: '' }, { "name": "Lake Palace Resort KTDC", image: '', description: '' }, { "name": "Blanket Resort", image: '', description: '' }]
        }
      },
      {
        "destination": "Houseboat – Kumarakom (1N)",
        image: 'assets/images/hotels/houseboat.jpg',
        "categories": {
          "3-Star Deluxe": [{ "name": "A/C Standard Houseboat", image: '', description: '' }],
          "4-Star Deluxe": [{ "name": "A/C Deluxe Houseboat (Silver Flag)", image: '', description: '' }],
          "5-Star Deluxe": [{ "name": "A/C Premium Houseboat (Golden Flag)", image: '', description: '' }],
          "5-Star Luxury": [{ "name": "Full-time A/C Luxury Houseboat (Platinum)", image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: 'Breakfast at all hotels',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 43,150", single: "Euro 431", "extraPerson": "USD 507" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 52,610", single: "Euro 526", "extraPerson": "USD 618" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 65,450", single: "Euro 654", "extraPerson": "USD 770" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 89,320", single: "Euro 893", "extraPerson": "USD 1050" }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 34,520", single: "Euro 345", "extraPerson": "406" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 42,090", single: "Euro 420", "extraPerson": "495" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 52,360", single: "Euro 523", "extraPerson": "616" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 71,450", single: "Euro 714", "extraPerson": "840" }
        ]
      }
    ],

    supplementalAttractions: [

      { id: 'sup-1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or dinner', subtitle: 'Non-Veg (Traditional Home)', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: true, img: 'assets/images/attractions/cookery-demo.jpg' },
      { id: 'sup-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial arts (Min 5 Pax)', location: 'Cochin / Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: 'sup-3', name: 'Kolukkumalai Tea Factory Visit', subtitle: 'Highest hill station tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: false, img: 'assets/images/attractions/kolukkumalai.jpg' },
      { id: 'sup-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-half.jpg' },
      { id: 'sup-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-full.jpg' },
      { id: 'sup-6', name: 'Mountain Trekking with Jeep Safari (guide)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3,000.00', rating: 5, featured: false, img: 'assets/images/attractions/trekking-jeep.jpg' },
      { id: 'sup-7', name: 'Bamboo River Rafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-rafting.jpg' },
      { id: 'sup-8', name: 'Full Day Trip to Gavi', subtitle: 'On request', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: 'sup-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/jeep-periyar.jpg' },
      { id: 'sup-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar / Thekkady', people: 'Per Person', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: 'sup-11', name: 'Half Day Elephant Moments (Bathing & Feeding)', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: 'sup-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: 'sup-13', name: 'Backwater Historical Tour at Cochin (with guide)', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour-cochin.jpg' },
      { id: 'sup-14', name: 'Extra Night in A/C Houseboat (Kumarakom → Alleppey)', subtitle: 'Full-day cruise included', location: 'Kumarakom - Alleppey', people: 'For Two Persons', cost: 'Rs. 7,000.00', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' },
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "kerala-colours-4",
    "title": "Colours of Kerala Tour - 4",
    "duration": "12 Nights / 13 Days",
    "summary": "You can explore the diversified flora & fauna of this heavenly land with lots of enjoyment everywhere. A complete tour covering cities, hill stations, and historical places with carefully selected hotels, backwaters, wildlife, and cultural experiences.",

    tourHighlights: [
      "All-inclusive package without any hidden costs",
      "Food on a Breakfast basis and 03 times meals in the Houseboat",
      "Carefully selected hotels & resorts based on reviews from guests",
      "Vehicle at disposal from airport to airport on all days without any Km restrictions & additional cost",
      "One driver (English-speaking) & one Vehicle for the entire tour",
      "Tour can be changed to any other fixed date even before 24 hours without any retention fee",
      "GST, Toll charges, Bata to the driver, Parking fees, etc., included in the Package"
    ],

    quickItinerary: [
      "Day 01 – Arrival at Trivandrum / Kovalam",
      "Day 02 – Around Kovalam / Trivandrum",
      "Day 03 – Trivandrum to Kanyakumari",
      "Day 04 – Journey to Madurai",
      "Day 05 – Madurai to Periyar",
      "Day 06 – In and Around Periyar",
      "Day 07 – Off to Kumarakom",
      "Day 08 – Houseboat Cruise to Alleppey",
      "Day 09 – Off to Cochin",
      "Day 10 – Around Cochin",
      "Day 11 – Off to Varkala",
      "Day 12 – Around Varkala",
      "Day 13 – Return Journey"
    ],

    itineraryOverview: [
      { "day": "01", "title": "Welcome to Trivandrum / Kovalam", "details": ["A hearty welcome to the Capital City of Kerala.", "Meet our representative at Trivandrum Airport.", "Drive to Kovalam Beach Resort (13 km).", "Check-in at resort.", "Free time to explore Kovalam Beach.", "Enjoy first Kerala dinner and overnight stay at resort."], "image": "" },
      { "day": "02", "title": "Around Kovalam", "details": ["Breakfast at resort.", "Half-day city tour in Trivandrum: Padmanabha Swami Temple, Horse Palace, Museum, Sri Chitra Art Gallery.", "Return to resort by noon.", "Rest of the day free at Kovalam Beach.", "Overnight stay at resort."], "image": "" },
      { "day": "03", "title": "Trivandrum to Kanyakumari", "details": ["Drive to Kanyakumari after breakfast.", "Detour to Sri Padmanabhapuram Palace en route.", "Arrive Kanyakumari and check-in at hotel.", "Lunch and relaxation.", "Boat to Vivekananda Memorial and view Thiruvalluvar Statue via glass bridge.", "Watch sunset at seashore, observe sunset & moonrise if full moon.", "Dinner and overnight stay at hotel."], "image": "" },
      { "day": "04", "title": "Journey to Madurai", "details": ["Drive to Madurai after breakfast.", "Check-in at hotel by afternoon.", "Visit Meenakshi Temple: admire towers and musical pillars.", "Return to hotel by evening.", "Overnight stay."], "image": "" },
      { "day": "05", "title": "Madurai to Periyar", "details": ["Drive to Periyar / Thekkady after breakfast.", "Check-in at Periyar Jungle Resort.", "Boat ride on Periyar Lake to spot elephants and bison.", "Dinner and overnight stay at resort."], "image": "" },
      { "day": "06", "title": "In and Around Periyar", "details": ["Morning trekking through forest trails.", "Visit Spice Plantation Garden.", "Dinner and overnight stay at resort."], "image": "" },
      { "day": "07", "title": "Off to Kumarakom", "details": ["Drive to Kumarakom after breakfast.", "Check-in at Kumarakom Backwater Resort.", "Visit Kumarakom Bird Sanctuary.", "Dinner and overnight stay at resort."], "image": "" },
      { "day": "08", "title": "Houseboat Cruise to Alleppey", "details": ["Check-out from resort.", "Board traditional houseboat.", "Enjoy backwater cruise till nightfall.", "Anchor in backwaters and overnight stay on houseboat."], "image": "" },
      { "day": "09", "title": "Off to Cochin", "details": ["Houseboat reaches Alleppey morning.", "Drive to Cochin and check-in at resort.", "Free time for shopping and relaxation.", "Evening Kathakali performance and photography.", "Dinner and overnight stay."], "image": "" },
      { "day": "10", "title": "Around Cochin", "details": ["Guided tour of Cochin: Dutch Palace and Jewish Synagogue.", "Country craft canal cruise through suburban Cochin.", "Return to hotel by evening.", "Dinner and overnight stay."], "image": "" },
      { "day": "11", "title": "Off to Varkala", "details": ["Drive to Varkala and check-in at resort.", "Free time to explore Varkala Beach and cliffs.", "Optional hang-gliding.", "Dinner and overnight stay."], "image": "" },
      { "day": "12", "title": "Around Varkala", "details": ["Full day at Papanasini Beach.", "Optional side tour to Sivagiri Memorial.", "Dinner and overnight stay at resort."], "image": "" },
      { "day": "13", "title": "Return Journey", "details": ["Check-out from hotel.", "Transfer to Trivandrum airport or railway station for return journey."], "image": "" }
    ],

    "detailedItinerary": [
      { "day": "Day 01", "title": "Welcome to Trivandrum / Kovalam", "details": ["A hearty welcome to the Capital City of Kerala.", "Meet our representative at Trivandrum Airport.", "Drive to Kovalam Beach Resort (13 km).", "Check-in at resort.", "Free time to explore Kovalam Beach.", "Enjoy first Kerala dinner and overnight stay at resort."] },
      { "day": "Day 02", "title": "Around Kovalam", "details": ["Breakfast at resort.", "Half-day city tour in Trivandrum: Padmanabha Swami Temple, Horse Palace, Museum, Sri Chitra Art Gallery.", "Return to resort by noon.", "Rest of the day free at Kovalam Beach.", "Overnight stay at resort."] },
      { "day": "Day 03", "title": "Trivandrum to Kanyakumari", "details": ["Drive to Kanyakumari after breakfast.", "Detour to Sri Padmanabhapuram Palace en route.", "Arrive Kanyakumari and check-in at hotel.", "Lunch and relaxation.", "Boat to Vivekananda Memorial and view Thiruvalluvar Statue via glass bridge.", "Watch sunset at seashore, observe sunset & moonrise if full moon.", "Dinner and overnight stay at hotel."] },
      { "day": "Day 04", "title": "Journey to Madurai", "details": ["Drive to Madurai after breakfast.", "Check-in at hotel by afternoon.", "Visit Meenakshi Temple: admire towers and musical pillars.", "Return to hotel by evening.", "Overnight stay."] },
      { "day": "Day 05", "title": "Madurai to Periyar", "details": ["Drive to Periyar / Thekkady after breakfast.", "Check-in at Periyar Jungle Resort.", "Boat ride on Periyar Lake to spot elephants and bison.", "Dinner and overnight stay at resort."] },
      { "day": "Day 06", "title": "In and Around Periyar", "details": ["Morning trekking through forest trails.", "Visit Spice Plantation Garden.", "Dinner and overnight stay at resort."] },
      { "day": "Day 07", "title": "Off to Kumarakom", "details": ["Drive to Kumarakom after breakfast.", "Check-in at Kumarakom Backwater Resort.", "Visit Kumarakom Bird Sanctuary.", "Dinner and overnight stay at resort."] },
      { "day": "Day 08", "title": "Houseboat Cruise to Alleppey", "details": ["Check-out from resort.", "Board traditional houseboat.", "Enjoy backwater cruise till nightfall.", "Anchor in backwaters and overnight stay on houseboat."] },
      { "day": "Day 09", "title": "Off to Cochin", "details": ["Houseboat reaches Alleppey morning.", "Drive to Cochin and check-in at resort.", "Free time for shopping and relaxation.", "Evening Kathakali performance and photography.", "Dinner and overnight stay."] },
      { "day": "Day 10", "title": "Around Cochin", "details": ["Guided tour of Cochin: Dutch Palace and Jewish Synagogue.", "Country craft canal cruise through suburban Cochin.", "Return to hotel by evening.", "Dinner and overnight stay."] },
      { "day": "Day 11", "title": "Off to Varkala", "details": ["Drive to Varkala and check-in at resort.", "Free time to explore Varkala Beach and cliffs.", "Optional hang-gliding.", "Dinner and overnight stay."] },
      { "day": "Day 12", "title": "Around Varkala", "details": ["Full day at Papanasini Beach.", "Optional side tour to Sivagiri Memorial.", "Dinner and overnight stay at resort."] },
      { "day": "Day 13", "title": "Return Journey", "details": ["Check-out from hotel.", "Transfer to Trivandrum airport or railway station for return journey."] }
    ],

    inclusions: [
      'Private A/C vehicle with English-speaking driver',
      'Accommodation on double sharing basis',
      'Daily breakfast',
      'Kathakali show & canal cruise at Cochin',
      'All tolls, parking, driver bata & GST'
    ],

    exclusions: [
      "International air tickets / Domestic air tickets & airport taxes",
      "Passport & visa fees, visa stamping",
      "Items of a personal nature, such as laundry, telephone calls, room service, alcoholic & non-alcoholic beverages, etc.",
      "Single room (quoted separately), Child or adult in a triple sharing room",
      "Another language may be on request. Vegetable meals may be on request",
      "Bottled / mineral water during any meal",
      "Peak tourist season or special event rates",
      "Airport tax, airfares, food cost other than specified, phone call charges & other personal expenses of the guests"
    ],

    sightseeing: [
      'Trivandrum City Tour, which includes Padmanabha Swamy temple, Sri Chitra art gallery and Horse palace.',
      'Full - day Tour at Kanyakumari including Vivekananda memorial and Thiruvalluvar statue via glass bridge with glorious sunset and sunrise view.',
      'Madurai Meenakshi Temple visit & Light and Sound panorama.',
      'Boat Tour & Spice plantation Tour at Periyar, Soft trekking program with a guide as well.',
      'Bird Sanctuary visit at Kumarakom',
      'Houseboat Cruise & night stay in a Houseboat from Kumarakom to Alleppey.',
      'Guided Historical Tour, Country craft Cruise & Kathakali show at Cochin',
      'Leisure at Varkala, visit Papanasini beach or an optional tour to Sivagiri.',
    ],


    "hotelPackages": [
      {
        "destination": "Kovalam (2N)",
        "image": "assets/images/hotels/kovalam.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Soma Palm Shore", "image": "", "description": "" }, { "name": "Jasmine Palace", "image": "", "description": "" }, { "name": "Hotel Neelakanta", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "KTDC Samudra Resort", "image": "", "description": "" }, { "name": "Travancore Beach Resort", "image": "", "description": "" }, { "name": "Sagara Beach Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Udaya Samudra Beach Resort", "image": "", "description": "" }, { "name": "Gokulam Grand Turtle on the Beach", "image": "", "description": "" }, { "name": "Rock Holm at the Lighthouse Beach", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "The Leela Kovalam", "image": "", "description": "" }, { "name": "Taj Green Coves", "image": "", "description": "" }, { "name": "Niramaya Surya Samudra Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Kanyakumari (1N)",
        "image": "assets/images/hotels/kanyakumari.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Singar International", "image": "", "description": "" }, { "name": "Sea View Hotel", "image": "", "description": "" }, { "name": "Sealand Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Annai Celestial Resort by Sparsa", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Annai Resorts & Spa", "image": "", "description": "" }, { "name": "Anantya by the Lake", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Annai Resorts & Spa", "image": "", "description": "" }, { "name": "Anantya by the Lake", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Madurai (1N)",
        "image": "assets/images/hotels/madurai.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "The Madurai Residency", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Mount Retreats Resort", "image": "", "description": "" }, { "name": "Sterling V Grand Madurai", "image": "", "description": "" }, { "name": "Royal Court", "image": "", "description": "" }, { "name": "Hotel Germanus Madurai", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "The Heritage Madurai", "image": "", "description": "" }, { "name": "Grand Madurai by GRT", "image": "", "description": "" }, { "name": "Courtyard by Marriott", "image": "", "description": "" }, { "name": "Regency Madurai by GRT", "image": "", "description": "" }, { "name": "Fortune Pandiyan Hotel", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Gateway Hotel, Madurai", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Periyar (2N)",
        "image": "assets/images/hotels/periyar.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Abad Green Forest", "image": "", "description": "" }, { "name": "Pepper Vine Resort", "image": "", "description": "" }, { "name": "Hotel Lincoln Square", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Mountain Courtyard Resort", "image": "", "description": "" }, { "name": "Forest Canopy Resort", "image": "", "description": "" }, { "name": "Reen Resorts", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Poetree Resort", "image": "", "description": "" }, { "name": "Elephant Court", "image": "", "description": "" }, { "name": "Green Woods Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Spice Village Resort", "image": "", "description": "" }, { "name": "Hills & Hues Resort", "image": "", "description": "" }, { "name": "Lake Palace Resort KTDC", "image": "", "description": "" }, { "name": "Blanket Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Cochin (2N)",
        "image": "assets/images/hotels/cochin.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Killian’s", "image": "", "description": "" }, { "name": "Abad Plaza", "image": "", "description": "" }, { "name": "Napier Heritage Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Monsoon Empress", "image": "", "description": "" }, { "name": "Marine Inn", "image": "", "description": "" }, { "name": "Tribute Royale", "image": "", "description": "" }, { "name": "Olive Downtown", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Forte Kochi Hotel", "image": "", "description": "" }, { "name": "Le Meridian", "image": "", "description": "" }, { "name": "Crowne Plaza", "image": "", "description": "" }, { "name": "Hotel Marriot", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Brunton Boatyard Hotel", "image": "", "description": "" }, { "name": "Taj Malabar", "image": "", "description": "" }, { "name": "Grand Hyatt", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Houseboat (1N)",
        "image": "assets/images/hotels/houseboat.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "A/C Standard Houseboat", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "A/C Deluxe Houseboat with Silver Flag Category", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "AC Premium Houseboat with Golden Flag Category", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Full-time AC Luxury Houseboat with Platinum Category", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Varkala (2N)",
        "image": "assets/images/hotels/varkala.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Madathil Cottages & Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Krishna Theeram", "image": "", "description": "" }, { "name": "Deshadan Cliff & Beach Resort", "image": "", "description": "" }, { "name": "Hindustan Beach Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Villa Luca by Elixir Cliff", "image": "", "description": "" }, { "name": "Skylar Sea View Resort", "image": "", "description": "" }, { "name": "Elixir Cliff", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Gateway", "image": "", "description": "" }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: 'Breakfast at all hotels',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 43,150", single: "Euro 431", "extraPerson": "USD 507" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 52,610", single: "Euro 526", "extraPerson": "USD 618" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 65,450", single: "Euro 654", "extraPerson": "USD 770" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 89,320", single: "Euro 893", "extraPerson": "USD 1050" }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 34,520", single: "Euro 345", "extraPerson": "406" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 42,090", single: "Euro 420", "extraPerson": "495" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 52,360", single: "Euro 523", "extraPerson": "616" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 71,450", single: "Euro 714", "extraPerson": "840" }
        ]
      }
    ],

    supplementalAttractions: [

      { id: 'sup-1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or dinner', subtitle: 'Non-Veg (Traditional Home)', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: true, img: 'assets/images/attractions/cookery-demo.jpg' },
      { id: 'sup-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial arts (Min 5 Pax)', location: 'Cochin / Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: 'sup-3', name: 'Kolukkumalai Tea Factory Visit', subtitle: 'Highest hill station tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: false, img: 'assets/images/attractions/kolukkumalai.jpg' },
      { id: 'sup-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-half.jpg' },
      { id: 'sup-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-full.jpg' },
      { id: 'sup-6', name: 'Mountain Trekking with Jeep Safari (guide)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3,000.00', rating: 5, featured: false, img: 'assets/images/attractions/trekking-jeep.jpg' },
      { id: 'sup-7', name: 'Bamboo River Rafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-rafting.jpg' },
      { id: 'sup-8', name: 'Full Day Trip to Gavi', subtitle: 'On request', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: 'sup-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/jeep-periyar.jpg' },
      { id: 'sup-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar / Thekkady', people: 'Per Person', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: 'sup-11', name: 'Half Day Elephant Moments (Bathing & Feeding)', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: 'sup-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: 'sup-13', name: 'Backwater Historical Tour at Cochin (with guide)', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour-cochin.jpg' },
      { id: 'sup-14', name: 'Extra Night in A/C Houseboat (Kumarakom → Alleppey)', subtitle: 'Full-day cruise included', location: 'Kumarakom - Alleppey', people: 'For Two Persons', cost: 'Rs. 7,000.00', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' },
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "kerala-colours-5",
    "title": "Colours of Kerala Tour - 5",
    "duration": "08 Nights / 09 Days",
    "summary": "Explore the charm of Kerala with this 8-night, 9-day tour covering Trivandrum, Kovalam, Kanyakumari, Kumarakom, Thekkady, Munnar, and Cochin. Enjoy backwaters, hill stations, cultural experiences, wildlife, and heritage sites with carefully selected hotels and seamless transportation.",
    "tourHighlights": [
      "All-inclusive package without any hidden costs",
      "Food on a Breakfast basis and 03 times meals in the Houseboat",
      "Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them",
      "Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost",
      "One driver (English-speaking) & one Vehicle for the entire tour",
      "Tour can be changed to any other fixed date even before 24 hours without any retention fee",
      "GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package"
    ],

    quickItinerary: [
      "Day 01 – Arrive in Trivandrum and on to Kovalam",
      "Day 02 – Onto Kanyakumari and return to Kovalam",
      "Day 03 – Kumarakom Houseboat experience",
      "Day 04 – Off to Thekkady",
      "Day 05 – Exploring Thekkady",
      "Day 06 – Off to Munnar",
      "Day 07 – Munnar excursion and off to Cochin",
      "Day 08 – In and around Cochin, Fort Kochi",
      "Day 09 – End of Tour"
    ],

    itineraryOverview: [
      { "day": "01", "title": "Arrive in Trivandrum and on to Kovalam", "details": ["Hearty welcome to the Capital City of Kerala!", "Our friendly Local Representative of IDT will be waiting for you at the Trivandrum Airport to welcome you.", "From the airport, we drive to the best Ayurveda beach resort of Kovalam – just 18 kilometres away.", "Check into your beach resort.", "The rest of the day is free for you to enjoy the inviting sun, sand and surf of Kovalam.", "Enjoy your first Kerala dinner on this tour and overnight stay at your resort."], "image": "" },
      { "day": "02", "title": "Onto Kanyakumari and return to Kovalam", "details": ["After breakfast, we drive to Kanyakumari – the southernmost tip of the Indian sub-continent. En route, we make a detour to Sri Padmanabha Puram Palace – the former residence of the erstwhile Maharaja of Travancore. Marvel at the splendours of a royal past.", "We then continue our journey to reach Kanyakumari by afternoon.", "Later, we board the ferry to the offshore Vivekananda memorial – the monument in the name of Swami Vivekananda, the great Indian philosopher. He once sat on this rocky island in long, deep meditation. The memorial is a blend of many architectural styles of India.", "Then we take you to the seashore to watch a spectacular sunset.", "By late evening, back to Kovalam Hotel & Overnight stay."], "image": "" },
      { "day": "03", "title": "Kumarakom Houseboat experience", "details": ["After early morning checkout and breakfast, we proceed to Kumarakom – the spectacular and inviting backwater destination.", "Check into the Memorable Houseboat cruise by 12.00 pm to see the scenic views of in and around Kumarakom.", "Onboard, enjoy the scenery and serenity around.", "Enjoy the traditional lunch and dinner.", "Glide through dreamy landscapes till nightfall. Then, the boat casts anchor right in the middle of the romantic waterway. Wow! It is cool blue waters, a blue sky and a starry night.", "Stay overnight on the boat."], "image": "" },
      { "day": "04", "title": "Off to Thekkady", "details": ["Awake to find your houseboat still anchored. Experience what is called a backwater morning.", "After having breakfast on board at 9 am, check out from the Houseboat and proceed to Thekkady, reaching by 04:00 hrs.", "Check in to the Thekkady resort by noon. There is time for relaxation.", "Overnight stay at the hotel."], "image": "" },
      { "day": "05", "title": "Exploring Thekkady", "details": ["Today we go on trekking trails that take us closer to the majestic Nature in this area – an exciting experience.", "Later, visit the Spice Garden plantation to get a feel of the spice industry based here.", "If time permits, enjoy an Elephant Safari.", "Overnight stay at your resort."], "image": "" },
      { "day": "06", "title": "Off to Munnar", "details": ["After breakfast, leave Thekkady early in the morning for a scenic drive to Munnar – Kerala’s tea garden hill station.", "Travel time approximately 3.5 hours. Reach Munnar by noon.", "Check into your resort.", "Later, visit the Eravikulam National Park – home to the endangered Nilgiri Tahr. Take photos and admire the valley.", "Enjoy dinner and an overnight stay at your resort."], "image": "" },
      { "day": "07", "title": "Munnar excursion and off to Cochin", "details": ["After breakfast, check out from the resort and proceed directly to Cochin.", "Reach Cochin by noon and check in to the resort.", "In the evening, witness one of the most colourful and exquisite performing arts in the world – Kathakali. After two hours of glorious entertainment, get photographed with the Kathakali performer.", "Overnight stay at your hotel."], "image": "" },
      { "day": "08", "title": "In and around Cochin, Fort Kochi", "details": ["Breakfast at the hotel. Our driver will pick you up at the lobby of your hotel and proceed on a guided tour in and around Cochin.", "See the historic Dutch Palace – a tribute to the relationship between the two cultures during the previous centuries.", "Visit the only Jewish Synagogue in India at Mattancherry; only one direct descendant of the family that set up this shrine is now alive.", "Reach back mainland Cochin by noon.", "Enjoy a country craft canal cruise out of suburban Cochin to the interiors. Peek at rural Kerala life from close quarters.", "Return to your hotel by evening. Free time to explore streets downtown.", "Enjoy dinner and an overnight stay at your hotel."], "image": "" },
      { "day": "09", "title": "End of Tour", "details": ["After an early morning breakfast, check out from the resort and proceed directly to Cochin International Airport to catch your return flight or journey.", "Hope this exhilarating excursion thrilled you."], "image": "" }
    ],

    detailedItinerary: [
      { "day": "Day 01", "title": "Arrive in Trivandrum and on to Kovalam", "details": ["Hearty welcome to the Capital City of Kerala!", "Our friendly Local Representative of IDT will be waiting for you at the Trivandrum Airport to welcome you.", "From the airport, we drive to the best Ayurveda beach resort of Kovalam – just 18 kilometres away.", "Check into your beach resort.", "The rest of the day is free for you to enjoy the inviting sun, sand and surf of Kovalam.", "Enjoy your first Kerala dinner on this tour and overnight stay at your resort."] },
      { "day": "Day 02", "title": "Onto Kanyakumari and return to Kovalam", "details": ["After breakfast, we drive to Kanyakumari – the southernmost tip of the Indian sub-continent. En route, we make a detour to Sri Padmanabha Puram Palace – the former residence of the erstwhile Maharaja of Travancore. Marvel at the splendours of a royal past.", "We then continue our journey to reach Kanyakumari by afternoon.", "Later, we board the ferry to the offshore Vivekananda memorial – the monument in the name of Swami Vivekananda, the great Indian philosopher. He once sat on this rocky island in long, deep meditation. The memorial is a blend of many architectural styles of India.", "Then we take you to the seashore to watch a spectacular sunset.", "By late evening, back to Kovalam Hotel & Overnight stay."] },
      { "day": "Day 03", "title": "Kumarakom Houseboat experience", "details": ["After early morning checkout and breakfast, we proceed to Kumarakom – the spectacular and inviting backwater destination.", "Check into the Memorable Houseboat cruise by 12.00 pm to see the scenic views of in and around Kumarakom.", "Onboard, enjoy the scenery and serenity around.", "Enjoy the traditional lunch and dinner.", "Glide through dreamy landscapes till nightfall. Then, the boat casts anchor right in the middle of the romantic waterway. Wow! It is cool blue waters, a blue sky and a starry night.", "Stay overnight on the boat."] },
      { "day": "Day 04", "title": "Off to Thekkady", "details": ["Awake to find your houseboat still anchored. Experience what is called a backwater morning.", "After having breakfast on board at 9 am, check out from the Houseboat and proceed to Thekkady, reaching by 04:00 hrs.", "Check in to the Thekkady resort by noon. There is time for relaxation.", "Overnight stay at the hotel."] },
      { "day": "Day 05", "title": "Exploring Thekkady", "details": ["Today we go on trekking trails that take us closer to the majestic Nature in this area – an exciting experience.", "Later, visit the Spice Garden plantation to get a feel of the spice industry based here.", "If time permits, enjoy an Elephant Safari.", "Overnight stay at your resort."] },
      { "day": "Day 06", "title": "Off to Munnar", "details": ["After breakfast, leave Thekkady early in the morning for a scenic drive to Munnar – Kerala’s tea garden hill station.", "Travel time approximately 3.5 hours. Reach Munnar by noon.", "Check into your resort.", "Later, visit the Eravikulam National Park – home to the endangered Nilgiri Tahr. Take photos and admire the valley.", "Enjoy dinner and an overnight stay at your resort."] },
      { "day": "Day 07", "title": "Munnar excursion and off to Cochin", "details": ["After breakfast, check out from the resort and proceed directly to Cochin.", "Reach Cochin by noon and check in to the resort.", "In the evening, witness one of the most colourful and exquisite performing arts in the world – Kathakali. After two hours of glorious entertainment, get photographed with the Kathakali performer.", "Overnight stay at your hotel."] },
      { "day": "Day 08", "title": "In and around Cochin, Fort Kochi", "details": ["Breakfast at the hotel. Our driver will pick you up at the lobby of your hotel and proceed on a guided tour in and around Cochin.", "See the historic Dutch Palace – a tribute to the relationship between the two cultures during the previous centuries.", "Visit the only Jewish Synagogue in India at Mattancherry; only one direct descendant of the family that set up this shrine is now alive.", "Reach back mainland Cochin by noon.", "Enjoy a country craft canal cruise out of suburban Cochin to the interiors. Peek at rural Kerala life from close quarters.", "Return to your hotel by evening. Free time to explore streets downtown.", "Enjoy dinner and an overnight stay at your hotel."] },
      { "day": "Day 09", "title": "End of Tour", "details": ["After an early morning breakfast, check out from the resort and proceed directly to Cochin International Airport to catch your return flight or journey.", "Hope this exhilarating excursion thrilled you."] }
    ],

    inclusions: [
      'Private A/C vehicle with English-speaking driver',
      'Accommodation on double sharing basis',
      'Daily breakfast',
      'Kathakali show & canal cruise at Cochin',
      'All tolls, parking, driver bata & GST'
    ],

    exclusions: [
      'International air tickets / Domestic air tickets & airport taxes.',
      'Passport & visa fees, visa stamping.',
      'Items of a personal nature, such as laundry, telephone calls, room service, alcoholic & non - alcoholic beverages, etc.',
      'Single room(quoted separately), Child or adult in a triple sharing room.',
      'Another language may be on request.Vegetable meals may be on request.',
      'Bottled / mineral water during any meal.',
      'Peak tourist season or special event rates.',
      'Airport tax, airfares, Food cost other than specified, Phone call charges & other personnel expenses of the Guests.'
    ],

    sightseeing: [
      'Enjoy sun, sand and surf at Kovalam',
      'Kanyakumari sightseeing includes Sree Padmanabhapuram Palace, Vivekananda Memorial and beautiful sunset view',
      'Full Day Houseboat cruise cum night stay at Kumarakom',
      'Guided Jungle trekking and spice plantation tour at Thekkady',
      'Visit Eravikulam Nation park and Tea gardens at Munnar',
      'Enjoy Kathakali(Art Performance of Kerala)',
      'Guided Historical tour at Cochin and a Country craft canal cruise to see the Kerala rural life.'
    ],

    hotelPackages: [
      {
        "destination": "Kovalam (2N)",
        image: 'assets/images/hotels/cochin.jpg',
        "categories": {
          "3-Star Deluxe": [{ "name": "Soma Palm Shore", "image": "", "description": "" }, { "name": "Jasmine Palace", "image": "", "description": "" }, { "name": "Hotel Neelakanta", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "KTDC Samudra Resort", "image": "", "description": "" }, { "name": "Travancore Beach Resort", "image": "", "description": "" }, { "name": "Sagara Beach Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Udaya Samudra Beach Resort", "image": "", "description": "" }, { "name": "Gokulam Grand Turtle on the Beach", "image": "", "description": "" }, { "name": "Rock Holm at the Lighthouse Beach", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "The Leela Kovalam", "image": "", "description": "" }, { "name": "Taj Green Coves", "image": "", "description": "" }, { "name": "Niramaya Surya Samudra Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Kumarakom Houseboat (1N)",
        image: 'assets/images/hotels/thekkady.jpg',
        "categories": {
          "3-Star Deluxe": [{ name: "A/C Standard Houseboat", image: '', description: '' }],
          "4-Star Deluxe": [{ name: "A/C Deluxe Houseboat with Silver Flag Category", image: '', description: '' }],
          "5-Star Deluxe": [{ name: "AC Premium Houseboat with Golden Flag Category", image: '', description: '' }],
          "5-Star Luxury": [{ name: "Full-time AC Luxury boat with Platinum Category", image: '', description: '' }]
        }
      },
      {
        "destination": "Periyar(2N",
        image: 'assets/images/hotels/munnar.jpg',
        "categories": {
          "3-Star Deluxe": [{ name: "Abad Green Forest", image: '', description: '' }, { name: "Pepper Vine Resort", image: '', description: '' }, { name: "Hotel Lincoln Square", image: '', description: '' }],
          "4-Star Deluxe": [{ name: "Mountain Courtyard Resort", image: '', description: '' }, { name: "Forest Canopy Resort", image: '', description: '' }, { name: "Reen Resorts", image: '', description: '' }],
          "5-Star Deluxe": [{ name: "Poetree Resort", image: '', description: '' }, { name: "Elephant Court", image: '', description: '' }, { name: "Green Woods Resort", image: '', description: '' }],
          "5-Star Luxury": [{ name: "Spice Village Resort", image: '', description: '' }, { name: "Hills & Hues Resort", image: '', description: '' }, { name: "Lake Palace Resort KTDC", image: '', description: '' }, { name: "Blanket Resort", image: '', description: '' }]
        }
      },
      {
        "destination": "Munnar (1)",
        image: 'assets/images/hotels/munnar.jpg',
        "categories": {
          "3-Star Deluxe": [{ name: "West Wood Resort", image: '', description: '' }, { name: "Eastend Hotel", image: '', description: '' }, { name: "Trivers Resort", image: '', description: '' }, { name: "Tea Castle", image: '', description: '' }],
          "4-Star Deluxe": [{ name: "Rivulet Resort", image: '', description: '' }, { name: "Elephant Passage Resort", image: '', description: '' }, { name: "Fog Resort", image: '', description: '' }, { name: "Tall Trees Resort", image: '', description: '' }],
          "5-Star Deluxe": [{ name: "Blanket Hotel", image: '', description: '' }, { name: "The Valle Resort", image: '', description: '' }, { name: "Fragrant Nature Resort", image: '', description: '' }],
          "5-Star Luxury": [{ name: "Chandys Windy Woods", image: '', description: '' }, { name: "Chandys Drizzle Drops", image: '', description: '' }, { name: "Spice Tree Resort", image: '', description: '' }, { name: "Grand Cliff Resort", image: '', description: '' }]
        }
      },
      {
        "destination": "Cochin (2N)",
        image: 'assets/images/hotels/cochin.jpg',
        "categories": {
          "3-Star Deluxe": [{ name: "Hotel Killian’s", image: '', description: '' }, { name: "Abad Plaza", image: '', description: '' }, { name: "Napier Heritage Hotel", image: '', description: '' }],
          "4-star": [{ name: "Monsoon Empress", image: '', description: '' }, { name: "Marine Inn", image: '', description: '' }, { name: "Tribute Royale", image: '', description: '' }, { name: "Olive Downtown", image: '', description: '' }],
          "5-star": [{ name: "Forte Kochi hotel", image: '', description: '' }, { name: "Le Meridian", image: '', description: '' }, { name: "Crowne Plaza", image: '', description: '' }, { name: "Hotel Marriot", image: '', description: '' }],
          "5-star-luxury": [{ name: "Brunton Boatyard hotel", image: '', description: '' }, { name: "Taj Malabar", image: '', description: '' }, { name: "Grand Hyatt", image: '', description: '' }]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: 'Breakfast at all hotels',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 47,450", single: "Euro 474", "extraPerson": "USD 558" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 60,460", single: "Euro 604", "extraPerson": "USD 771" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 74,000", single: "Euro 870", "extraPerson": "USD 870" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 1,02,060", single: "Euro 1200", "extraPerson": "USD 1200" }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 37,960", single: "Euro 379", "extraPerson": "446" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 48,370", single: "Euro 569", "extraPerson": "569" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 59,200", single: "Euro 696", "extraPerson": "696" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 81,650", single: "Euro 816", "extraPerson": "960" }
        ]
      }
    ],

    supplementalAttractions: [

      { id: 'sup-1', name: 'Half-Day Cookery Demonstration Tour to a traditional home with lunch or dinner', subtitle: 'Non-Veg (Traditional Home)', location: 'Cochin', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: true, img: 'assets/images/attractions/cookery-demo.jpg' },
      { id: 'sup-2', name: 'Half-day Kalarippayattu Programme', subtitle: 'Martial arts (Min 5 Pax)', location: 'Cochin / Thekkady', people: 'Per Person (Min 5 Pax)', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/kalarippayattu.jpg' },
      { id: 'sup-3', name: 'Kolukkumalai Tea Factory Visit', subtitle: 'Highest hill station tea factory', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 5, featured: false, img: 'assets/images/attractions/kolukkumalai.jpg' },
      { id: 'sup-4', name: 'Half-Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-half.jpg' },
      { id: 'sup-5', name: 'Full Day Tea Trial Tour', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/tea-trial-full.jpg' },
      { id: 'sup-6', name: 'Mountain Trekking with Jeep Safari (guide)', subtitle: '', location: 'Munnar', people: 'Per Person', cost: 'Rs. 3,000.00', rating: 5, featured: false, img: 'assets/images/attractions/trekking-jeep.jpg' },
      { id: 'sup-7', name: 'Bamboo River Rafting at Periyar', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,500.00', rating: 4, featured: false, img: 'assets/images/attractions/bamboo-rafting.jpg' },
      { id: 'sup-8', name: 'Full Day Trip to Gavi', subtitle: 'On request', location: 'Thekkady', people: 'On request', cost: '', rating: 0, featured: false, img: '' },
      { id: 'sup-9', name: 'Jeep Safari in Periyar Forests', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/jeep-periyar.jpg' },
      { id: 'sup-10', name: 'Half-Day Elephant Safari', subtitle: '', location: 'Munnar / Thekkady', people: 'Per Person', cost: 'Rs. 1,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-safari.jpg' },
      { id: 'sup-11', name: 'Half Day Elephant Moments (Bathing & Feeding)', subtitle: '', location: 'Thekkady', people: 'Per Person', cost: 'Rs. 2,000.00', rating: 4, featured: false, img: 'assets/images/attractions/elephant-moments.jpg' },
      { id: 'sup-12', name: 'Backwater Canal Cruise in Country Crafts', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 5, featured: false, img: 'assets/images/attractions/canal-cruise.jpg' },
      { id: 'sup-13', name: 'Backwater Historical Tour at Cochin (with guide)', subtitle: '', location: 'Cochin', people: 'Per Person', cost: 'Rs. 1,500.00', rating: 4, featured: false, img: 'assets/images/attractions/historical-tour-cochin.jpg' },
      { id: 'sup-14', name: 'Extra Night in A/C Houseboat (Kumarakom → Alleppey)', subtitle: 'Full-day cruise included', location: 'Kumarakom - Alleppey', people: 'For Two Persons', cost: 'Rs. 7,000.00', rating: 5, featured: false, img: 'assets/images/attractions/houseboat-extra.jpg' },
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "south-india-1",
    "title": "VISUALS OF SOUTH INDIA - 01",
    "duration": "15 Nights / 16 Days",
    "summary": "Discover the vibrant tapestry of South India’s Culture, Cuisine and Landscapes.",
    "tourHighlights": [
      "All-inclusive package without any hidden costs",
      "Food on a Breakfast basis and 03 times meals in the Houseboat",
      "Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them",
      "Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost",
      "One driver (English-speaking) & one Vehicle for the entire tour",
      "Tour can be changed to any other fixed date even before 24 hours without any retention fee",
      "GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package"
    ],

    quickItinerary: [
      "Day 01 – WELCOME TO CHENNAI, MAHABALIPURAM (B)",
      "Day 02 – MAHABALIPURAM (DAY EXCURSION- KANCHIPURAM (60KM, 2Hrs)",
      "Day 03 – TO PONDICHERRY (97 KM, 2Hrs) (B)",
      "Day 04 – TO TANJORE (178 KM, 3Hrs) (B)",
      "Day 05 – TANJORE – DAY EXCURSION TO TRICHY (66KM, 1Hr 15Mins) (B)",
      "Day 06 – TO MADURAI (186KM, 3Hrs) (B)",
      "Day 07 – OFF TO PERIYAR (THEKKADY) (141 KM, 3Hrs 30Mins) (B)",
      "Day 08 – AT PERIYAR (THEKKADY) (B)",
      "Day 09 – PROCEED TO KUMARAKOM (B)",
      "Day 10 – OFF TO COCHIN (B)",
      "Day 11 – AT COCHIN (B)",
      "Day 12 – PROCEED TO ALLEPPEY (HOUSEBOAT CRUISE) (B)",
      "Day 13 – PROCEED TO KOVALAM (B)",
      "Day 14 – KOVALAM (DAY EXCURSION TO KANYAKUMARI) (B)",
      "Day 15 – KOVALAM (LEISURE) (B)",
      "Day 16 – END OF TOUR (B)"
    ],

    itineraryOverview: [
      { "day": "01", "title": "Welcome to Chennai & Mahabalipuram", "details": ["Hearty welcome to the Capital city of Tamil Nadu.", "Meet our Local Representative at Chennai Airport.", "Transfer to your hotel in Mahabalipuram.", "Rest of the day is at your disposal to relax.", "Overnight stay at the hotel."], "image": "" },
      { "day": "02", "title": "Kanchipuram Excursion", "details": ["Proceed to Kanchipuram for sightseeing.", "Visit Kailashnath and Ekambareswarar temples.", "Explore Arjuna’s Penance, Pancha Rathas, and Krishna Mandapam in Mahabalipuram.", "Overnight stay at the hotel."], "image": "" },
      { "day": "03", "title": "Onward to Pondicherry", "details": ["Drive to the ethnic state of Pondicherry.", "Check in by noon.", "Afternoon visit to Auroville and Sri Aurobindo Ashram.", "Overnight stay in Pondicherry."], "image": "" },
      { "day": "04", "title": "Temple Tour to Tanjore", "details": ["Check out and head to Tanjore.", "En route visit Gangaikondacholapuram, Darasuram, and Brihadeshwara Temple.", "Check in and relax in the evening.", "Overnight stay in Tanjore."], "image": "" },
      { "day": "05", "title": "Trichy Day Excursion", "details": ["Morning drive to Trichy.", "Visit Srirangam on the banks of River Kaveri and the Rock Fort Temple.", "Return to Tanjore for the night.", "Overnight stay at the hotel."], "image": "" },
      { "day": "06", "title": "Historic Madurai", "details": ["Drive to the ancient city of Madurai.", "Visit the 2000-year-old Meenakshi Temple.", "Explore the Thirumalai Nayakar Palace.", "Overnight stay in Madurai."], "image": "" },
      { "day": "07", "title": "Into the Wild at Periyar", "details": ["Drive to Periyar Wildlife Sanctuary.", "Check in by noon.", "Afternoon boat ride on Periyar Lake to spot wild elephants and wildlife.", "Overnight stay in Thekkady."], "image": "" },
      { "day": "08", "title": "Periyar Spice & Safari", "details": ["Morning spice plantation tour.", "Afternoon guided Jungle Safari through thick forests.", "Relax in the evening at the resort.", "Overnight stay in Thekkady."], "image": "" },
      { "day": "09", "title": "Kumarakom Backwaters", "details": ["Drive to the dream backwater destination, Kumarakom.", "Reach the hotel by noon.", "Leisure time along the Vembanad backwaters.", "Overnight stay in Kumarakom."], "image": "" },
      { "day": "10", "title": "Cochin Culture & Kathakali", "details": ["Proceed to the 'Queen of the Arabian Sea'.", "Afternoon free for shopping or leisure.", "Evening Kathakali show with makeup demonstration.", "Overnight stay in Cochin."], "image": "" },
      { "day": "11", "title": "Exploring Cochin & Villages", "details": ["Visit Kumbalagi village for a glimpse of virgin Kerala life.", "Tour St. Francis Church, Chinese Fishing Nets, and the Dutch Palace.", "Explore the history of Mattancherry.", "Overnight stay in Cochin."], "image": "" },
      { "day": "12", "title": "Alleppey Houseboat Cruise", "details": ["Transfer to Alleppey and check into your Houseboat by 11:30 AM.", "Cruise through lush landscapes with traditional lunch onboard.", "Anchor by 5:30 PM for a night on the water.", "Dinner and overnight stay on the houseboat."], "image": "" },
      { "day": "13", "title": "Beach Paradise Kovalam", "details": ["Breakfast onboard and drive to Kovalam.", "Check into your beach resort by afternoon.", "Enjoy the blue waters and sandy beaches.", "Overnight stay in Kovalam."], "image": "" },
      { "day": "14", "title": "Kanyakumari Day Trip", "details": ["Morning visit to Sree Padmanabha Swamy temple.", "Visit Padmanabhapuram Palace en route.", "Ferry to Vivekananda Memorial and walk the new Glass Bridge to Thiruvalluvar Statue.", "Watch the sunset before returning to Kovalam."], "image": "" },
      { "day": "15", "title": "Kovalam Leisure", "details": ["A full day dedicated to beach relaxation.", "Enjoy the resort facilities or explore the local coast.", "Overnight stay in Kovalam."], "image": "" },
      { "day": "16", "title": "End of Tour", "details": ["Breakfast and transfer to Trivandrum Airport.", "Assistance with your departure for your flight home.", "End of a memorable journey."], "image": "" }
    ],

    detailedItinerary: [
      { "day": "Day 01", "title": "WELCOME TO CHENNAI, MAHABALIPURAM", "details": ["A hearty welcome to the Capital city of Tamil Nadu.", "Our friendly Local Representative will be waiting for you at Chennai Airport to welcome you.", "Arrival in Chennai, and you will be taken to the hotel at Mahabalipuram.", "Check into the hotel at Mahabalipuram and relax.", "Rest of the day at your disposal.", "Overnight stay at the hotel."] },
      { "day": "Day 02", "title": "MAHABALIPURAM & KANCHIPURAM", "details": ["Morning after having breakfast, en route proceeds to sightseeing in Kanchipuram.", "Visit Kailashnath temple, Ekambareswarar temple, etc. at Kancheepuram.", "Back to Mahabalipuram and visit Arjuna’s penance, Rathas Shore (Pancha Rathas) temples, Krishna mandapam, etc.", "Back to the resort by evening.", "Overnight stay at the hotel."] },
      { "day": "Day 03", "title": "TO PONDICHERRY", "details": ["In the morning, after breakfast, proceed to Pondicherry, the ethnic state of India.", "Arrive at the hotel by noon, check in and relax.", "Afternoon, visit Auroville and Sri Aurobindo Ashram.", "Back to the hotel and overnight stay."] },
      { "day": "Day 04", "title": "TO TANJORE", "details": ["In the Morning, after having breakfast, check out from the hotel and proceed to Tanjore.", "En route visit sightseeing of Gangaikondacholapuram, Darasuram & Brihadeshwara temple.", "Arrive at the hotel by evening, check in and relax.", "Overnight stay at the hotel."] },
      { "day": "Day 05", "title": "TANJORE – TRICHY EXCURSION", "details": ["In the morning, after breakfast, proceed to Trichy (2 Hours) for a Day excursion Tour.", "Afternoon sightseeing of Srirangam (the most important pilgrimage Centre located on the banks of the river Kaveri) & Rock Fort Temple.", "Back to Tanjore hotel by evening.", "Overnight stay at the hotel."] },
      { "day": "Day 06", "title": "TO MADURAI", "details": ["A beautiful drive to Madurai in the morning after having breakfast.", "Reach Madurai by noon and check into the hotel.", "Afternoon sightseeing includes the Meenakshi Temple (2000 years old) and the Thirumalai Nayakar Palace.", "Back to the hotel by evening.", "Overnight stay at the hotel."] },
      { "day": "Day 07", "title": "OFF TO PERIYAR (THEKKADY)", "details": ["In the morning, after having breakfast, proceed to Periyar.", "Arrive at Periyar, check into the hotel by noon and relax.", "In the afternoon, enjoy a Boat ride through Periyar to view wild elephants and other animals.", "Back to the Resort by evening.", "Overnight stay at the hotel."] },
      { "day": "Day 08", "title": "AT PERIYAR (THEKKADY)", "details": ["In the morning, after breakfast, get ready for a spice tour to view the plantations.", "In the afternoon, experience a Guided Jungle Safari through the thick forests of Periyar.", "Back to the resort by evening and relax.", "Overnight stay at the hotel."] },
      { "day": "Day 09", "title": "PROCEED TO KUMARAKOM", "details": ["In the morning, after having breakfast, proceed to Kumarakom.", "Reach the hotel at Kumarakom by noon.", "Check into the resort and relax.", "The rest of the day at Leisure along the Vembanad backwaters.", "Overnight stay at the hotel."] },
      { "day": "Day 10", "title": "OFF TO COCHIN", "details": ["In the morning, after having breakfast, proceed to Cochin.", "Check into the hotel at Cochin by noon & relax.", "The rest of the day is for shopping or leisure.", "In the evening, enjoy a Kathakali show with Mudras and Make-up Demonstration.", "Back to the hotel by late evening.", "Overnight stay at the hotel."] },
      { "day": "Day 11", "title": "AT COCHIN", "details": ["After having Breakfast, experience a Village Tour at the remote village ‘Kumbalagi’.", "Explore the virgin Kerala life.", "In the afternoon, enjoy a city tour visiting St. Francis Church, Chinese Fishing nets, and the Dutch Palace.", "Back to the hotel by evening.", "Overnight stay at the hotel."] },
      { "day": "Day 12", "title": "ALLEPPEY HOUSEBOAT CRUISE", "details": ["Check out at 8.00 AM and proceed to Alleppey.", "Check in to the Houseboat by 11.30 AM.", "Cruise through lush landscapes with a traditional lunch onboard.", "The houseboat will be anchored from 5:30 pm till the next day, 6 Am.", "Overnight stay on the Houseboat."] },
      { "day": "Day 13", "title": "PROCEED TO KOVALAM", "details": ["Breakfast at 8 am, check out from the Houseboat at 09 AM and drive to Kovalam.", "Reach Kovalam by afternoon.", "Check in and relax by the blue waters.", "Overnight stay at the hotel."] },
      { "day": "Day 14", "title": "KOVALAM – KANYAKUMARI EXCURSION", "details": ["Early morning visit Sree Padmanabha Swamy temple.", "En route to Kanyakumari, visit the historic Padmanabhapuram Palace.", "Arrive at Kanyakumari; board a boat to Vivekananda Memorial.", "Walk through India's first ever Glass bridge connecting the Thiruvalluvar statue.", "Watch the sunset and return to Kovalam.", "Overnight stay at the Hotel."] },
      { "day": "Day 15", "title": "KOVALAM LEISURE", "details": ["A full-day beach relaxation at Kovalam.", "A Full day at your disposal to enjoy to your heart’s content.", "Overnight stay at the hotel."] },
      { "day": "Day 16", "title": "END OF TOUR", "details": ["Transfer to Trivandrum airport for your onward flight Home.", "Assistance provided for departure.", "End of Tour."] }
    ],

    inclusions: [
      'The Vehicle will be with the guests throughout the Tour.They can make it work around the Clock if needed.',
      'Well - experienced English - speaking Driver cum Guide will be appointed for the Tour.Who can also act as an Escort.',
      'One Driver, One Vehicle for the entire Tour.If there is no Land journey break in the Tour, the same Driver & Vehicle will be with the guests for the entire journey.'
    ],

    exclusions: [
      'International air tickets / Domestic air tickets & airport taxes.',
      'Passport & visa fees, visa stamping.',
      'Items of a personal nature, such as laundry, telephone calls, room service, alcoholic & non - alcoholic beverages, etc.',
      'Single room(quoted separately), Child or adult in a triple sharing room.',
      'Another language may be on request.Vegetable meals may be on request.',
      'Bottled / mineral water during any meal.',
      'Peak tourist season or special event rates.',
      'Airport tax, airfares, Food cost other than specified, Phone call charges & other personnel expenses of the Guests.'
    ],

    sightseeing: [
      'Visit the ancient rock cut wonders of Mahabalipuram, including Arjuna’s Penance, Pancha Rathas, Shore Temple and Krishna Mandapam, and admire their exquisite Pallava stone carvings.',
      'Visit Kailasanatha Temple and Ekambareswarar Temple in Kanchipuram, where you can experience classic Dravidian architecture and deep Shiva devotion.',
      'Visit Auroville and Sri Aurobindo Ashram in Pondicherry to experience a peaceful spiritual community and serene meditation spaces.',
      'Visit Gangaikondacholapuram and Darasuram, part of the Great Living Chola Temples, to marvel at finely carved pillars, sculptures, and Chola era temple art.',
      'Visit the majestic Brihadeshwara Temple in Tanjore, a UNESCO World Heritage Site, to see its towering vimana and grand courtyard.',
      'Visit Srirangam Temple in Trichy, a vast island temple complex on the Kaveri River, and the hilltop Rock Fort Temple for panoramic city views.',
      'Visit the Meenakshi Amman Temple and Thirumalai Nayakar Palace in Madurai to discover colourful gopurams and royal arches in one historic city.',
      'Visit Periyar Wildlife Sanctuary for a scenic boat ride on the lake and a chance to spot elephants, birds, and other wildlife along the forested shores.',
      'Visit a spice plantation in Thekkady to walk through aromatic cardamom, pepper, and other spice gardens and learn about their cultivation.',
      'Visit the tranquil backwaters of Kumarakom to relax by Vembanad Lake and watch local village life unfold along the canals.',
      'Visit Kumbalangi model tourism village near Cochin to experience authentic Kerala village life, traditional fishing, and coir making.',
      'Visit St.Francis Church, the Dutch(Mattancherry) Palace, and the Chinese fishing nets in Cochin to explore the city’s rich colonial and maritime heritage.',
      'Visit Alleppey’s winding backwaters on a traditional houseboat cruise to glide past paddy fields, coconut groves, and village homes.',
      'Visit Kovalam Beach to unwind on golden sands, swim in gentle waves, and enjoy seaside sunsets.',
      'Visit the sacred Sree Padmanabhaswamy Temple in Thiruvananthapuram(subject to dress code) for a glimpse of Kerala’s royal and spiritual legacy.',
      'Visit Padmanabhapuram Palace en route to Kanyakumari to see beautifully preserved wooden architecture and royal artefacts of the Travancore kings.',
      'Visit Kanyakumari, the southernmost tip of India, to see the confluence of three seas and enjoy a stunning sunset over the ocean.',
      'Visit the Vivekananda Rock Memorial and Thiruvalluvar Statue by boat at Kanyakumari to honour India’s great spiritual and literary icons.',
      'Full Day Relaxation at the Beach.'
    ],

    hotelPackages: [
      {
        "destination": "Mahabalipuram (02 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Golden Sun Beach", "image": "", "description": "" }, { "name": "Mamalla Heritage", "image": "", "description": "" }, { "name": "Bodhi Woods Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Ideal Beach Resort", "image": "", "description": "" }, { "name": "Chariot Beach Resort", "image": "", "description": "" }, { "name": "GRT Grand Bay", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "Grand Continent, Mahabalipuram – (A Sarovar Premiere Affiliate Hotel)", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Fisherman’s Cove", "image": "", "description": "" }, { "name": "Sheraton Grand", "image": "", "description": "" }, { "name": "Kaldan Samudra Palace Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Pondicherry (01 N)",
        "image": "assets/images/hotels/pondicherry.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Anandha Inn", "image": "", "description": "" }, { "name": "Dune De l'Orient", "image": "", "description": "" }, { "name": "Annamalai International", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Accord Puducherry", "image": "", "description": "" }, { "name": "Radisson Puducherry", "image": "", "description": "" },],
          "5-Star Deluxe": [{ "name": "Maison Perumal", "image": "", "description": "" }, { "name": "Palais de Mahe Resort", "image": "", "description": "" }, { "name": "The Promenade", "image": "", "description": "" }, { "name": "Le Pondy Resort", "image": "", "description": "" },],
          "5-Star Luxury": [{ "name": "The Residency Towers", "image": "", "description": "" }, { "name": "Radisson Blu Resort", "image": "", "description": "" }, { "name": "Lagoon Sarovar Premiere", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Tanjore (02 N)",
        "image": "assets/images/hotels/tanjore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Gnanam", "image": "", "description": "" }, { "name": "Oriental Towers", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Hotel Sangam", "image": "", "description": "" }, { "name": "Parisutham Hotel", "image": "", "description": "" }, { "name": "Deshadan Chola", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "GRT Trails River Svathma Heritage Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "GRT Trails River Svathma Heritage Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Madurai (01 N)",
        "image": "assets/images/hotels/madurai.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Madurai Residency", "image": "", "description": "" },],
          "4-Star Deluxe": [{ "name": "Royal Court", "image": "", "description": "" }, { "name": "Hotel Germanus", "image": "", "description": "" }, { "name": "Fortune Pandiyan Hotel", "image": "", "description": "" },],
          "5-Star Deluxe": [{ "name": "Courtyard by Marriott", "image": "", "description": "" }, { "name": "The Heritage Madurai", "image": "", "description": "" }, { "name": "Regency Madurai by GRT", "image": "", "description": "" }, { "name": "Grand Madurai by GRT", "image": "", "description": "" },],
          "5-Star Luxury": [{ "name": "Taj Gateway Hotel", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Periyar (02 N)",
        "image": "assets/images/hotels/thekkady.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Abad Green Forest", "image": "", "description": "" }, { "name": "Peppervine Resort", "image": "", "description": "" }, { "name": "Hotel Lincoln Square", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Mountain Courtyard Resort", "image": "", "description": "" }, { "name": "Forest Canopy Resort", "image": "", "description": "" }, { "name": "Aranya Nivas KTDC", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Poetree Resort", "image": "", "description": "" }, { "name": "Elephant Court", "image": "", "description": "" }, { "name": "Green Woods Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Spice Village Resort", "image": "", "description": "" }, { "name": "Hills & Hues Resort", "image": "", "description": "" }, { "name": "Lake Palace Resort KTDC", "image": "", "description": "" }, { "name": "Blanket Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Kumarakom (01 N)",
        "image": "assets/images/hotels/kumarakom.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Paradise Resort", "image": "", "description": "" }, { "name": "Manor Backwater Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Abad Whispering Palms", "image": "", "description": "" }, { "name": "KTDC Water Scapes", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Niramaya Retreat", "image": "", "description": "" }, { "name": "Backwater Ripples resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Kumarakom Lake Resort", "image": "", "description": "" }, { "name": "Coconut Lagoon by CGH", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Cochin (02 N)",
        "image": "assets/images/hotels/cochin.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Killian’s", "image": "", "description": "" }, { "name": "Abad Plaza", "image": "", "description": "" }, { "name": "Napier Heritage Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Monsoon Empress", "image": "", "description": "" }, { "name": "Marine Inn", "image": "", "description": "" }, { "name": "Tribute Royale", "image": "", "description": "" }, { "name": "Olive Downtown", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Forte Kochi hotel", "image": "", "description": "" }, { "name": "Le Meridian", "image": "", "description": "" }, { "name": "Crowne Plaza", "image": "", "description": "" }, { "name": "Hotel Marriot", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Brunton Boatyard hotel", "image": "", "description": "" }, { "name": "Taj Malabar", "image": "", "description": "" }, { "name": "Grand Hyatt", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Houseboat (01 N)",
        "image": "assets/images/hotels/houseboat.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "A/C Standard Houseboat", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "A/C Deluxe Houseboat with Silver Flag Category", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "A/C Premium Houseboat with Golden flag category", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Full-time A/C Luxury boat with Platinum category", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Kovalam (03 N)",
        "image": "assets/images/hotels/kovalam.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Soma Palm Shore", "image": "", "description": "" }, { "name": "Jasmine Palace", "image": "", "description": "" }, { "name": "Hotel Neelakanta", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "KTDC Samudra Resort", "image": "", "description": "" }, { "name": "Tranvancore Beach Resort", "image": "", "description": "" }, { "name": "Sagara Beach Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Udaya Samudra Beach Resort", "image": "", "description": "" }, { "name": "Gokulam Grand Turtle on the Beach", "image": "", "description": "" }, { "name": "Rock Holm at the Lighthouse Beach", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "The Leela Kovalam", "image": "", "description": "" }, { "name": "Taj Green Coves", "image": "", "description": "" }, { "name": "Niramaya Surya Samudra Resort", "image": "", "description": "" }
          ]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: '“SAVOUR DELICIOUS MEALS” will be Breakfast Basis in all the destinations and three meals (Breakfast +Lunch+ Dinner) in the houseboat.',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 79,000", single: "", "extraPerson": "Rs 63,200" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 1,06,530", single: "", "extraPerson": "Rs 85,220" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 1,40,550", single: "", "extraPerson": "Rs 1,12,440" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 2,15,690", single: "", "extraPerson": "Rs 1,72,550" }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 63,200", single: "", "extraPerson": "Rs 55,560" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 58,220", single: "", "extraPerson": "Rs 68,180" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 1,12,440", single: "", "extraPerson": "Rs 89,950" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 1,72,550", single: "", "extraPerson": "Rs 1,38,040" }
        ]
      }
    ],

    supplementalAttractions: [
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "south-india-2",
    "title": "VISUALS OF SOUTH INDIA - 02",
    "duration": "15 Nights / 16 Days",
    "summary": "Taking you to explore the rich culture of Southern India spread in three south Indian States, viz.  Tamil Nadu, Karnataka & Kerala.  This tour covers the history of South India & the natural beauty of Coastal India at a glance….",
    "tourHighlights": [
      "All-inclusive package without any hidden costs",
      "Food on a Breakfast basis and 03 times meals in the Houseboat",
      "Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them",
      "Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost",
      "One driver (English-speaking) & one Vehicle for the entire tour",
      "Tour can be changed to any other fixed date even before 24 hours without any retention fee",
      "GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package"
    ],

    quickItinerary: [
      "Day 01 – ARRIVAL AT CHENNAI (B)",
      "Day 02 – ON TO MAHABALIPURAM, ENROUTE VISIT KANCHIPURAM (B)",
      "Day 03 – IN AND AROUND MAHABALIPURAM AND BACK TO CHENNAI (B)",
      "Day 04 – OFF TO BANGALORE BY TRAIN (B)",
      "Day 05 – ON TO MYSORE (B)",
      "Day 06 – AT MYSORE - FULL DAY EXCURSION (B)",
      "Day 07 – ON TO OOTY (B)",
      "Day 08 – IN AND AROUND OOTY - FULL DAY TOUR (B)",
      "Day 09 – ON TO COCHIN - KATHAKALI SHOW (B)",
      "Day 10 – IN AND AROUND COCHIN - CITY TOUR & CRAFT CRUISE (B)",
      "Day 11 – ON TO PERIYAR - PLEASURE BOATING (B)",
      "Day 12 – SIGHTSEEING AT PERIYAR - SPICE TOUR & SAFARI (B)",
      "Day 13 – OFF TO KUMARAKOM - HOUSEBOAT CRUISE (B)",
      "Day 14 – ON TO KOVALAM - BEACH HOLIDAYS (B)",
      "Day 15 – KOVALAM - EXCURSION TO KANYAKUMARI (B)",
      "Day 16 – ON TO TRIVANDRUM - END OF TOUR (B)"
    ],

    itineraryOverview: [
      { "day": "01", "title": "Arrival at Chennai", "details": ["Namaste welcome at Airport.", "City tour including Marina Beach, St. George Fort, and Kapaleeswarar Temple.", "Overnight stay in Chennai."], "image": "" },
      { "day": "02", "title": "Kanchipuram & Mahabalipuram", "details": ["Drive to Mahabalipuram via Kanchipuram.", "Visit Kailasanatha and Ekambareswarar temples.", "Overnight stay at Mahabalipuram."], "image": "" },
      { "day": "03", "title": "Mahabalipuram Sightseeing", "details": ["Full-day historical tour: Arjuna’s Penance, Rathas, and Shore Temple.", "Leisure time at the beach.", "Return to Chennai for overnight stay."], "image": "" },
      { "day": "04", "title": "Train to Bangalore", "details": ["Early morning Shatabdi Express to Bangalore.", "Afternoon tour of Cubbon Park, Tipu’s Palace, and Bull Temple.", "Overnight stay in Bangalore."], "image": "" },
      { "day": "05", "title": "On to Mysore", "details": ["Proceed to Mysore with en route visit to Srirangapatnam.", "Explore Tipu’s Fort and Daria Daulat Baug.", "Overnight stay in Mysore."], "image": "" },
      { "day": "06", "title": "Mysore Excursion", "details": ["Visit Mysore Palace, Chamundi Hill, and Jagan Mohan Palace.", "Evening visit to Brindavan Gardens.", "Overnight stay in Mysore."], "image": "" },
      { "day": "07", "title": "On to Ooty", "details": ["Drive to Ooty through Bandipur National Park.", "Overnight stay in Ooty."], "image": "" },
      { "day": "08", "title": "Ooty Sightseeing", "details": ["Visit Botanical Gardens, Rose Garden, and Ooty Lake.", "Excursion to Doddabetta Peak and optional toy train journey.", "Overnight stay in Ooty."], "image": "" },
      { "day": "09", "title": "On to Cochin", "details": ["Drive to Cochin, the Queen of the Arabian Sea.", "Evening Kathakali dance performance.", "Overnight stay in Cochin."], "image": "" },
      { "day": "10", "title": "Cochin Culture & Cruise", "details": ["Visit Dutch Palace, Jewish Synagogue, and St. Francis Church.", "Afternoon country craft canal cruise.", "Overnight stay in Cochin."], "image": "" },
      { "day": "11", "title": "On to Periyar", "details": ["Drive to Periyar Wildlife Sanctuary.", "Boat safari on Periyar Lake.", "Overnight stay at a Jungle Resort."], "image": "" },
      { "day": "12", "title": "Periyar Activities", "details": ["Morning forest trekking and Spice Plantation tour.", "Optional Elephant Safari.", "Overnight stay in Periyar."], "image": "" },
      { "day": "13", "title": "Kumarakom Houseboat", "details": ["Board houseboat at Kumarakom for backwater cruise.", "Experience overnight stay on the water."], "image": "" },
      { "day": "14", "title": "On to Kovalam", "details": ["Proceed to Kovalam, the beach paradise.", "Overnight stay at Kovalam resort."], "image": "" },
      { "day": "15", "title": "Kanyakumari Excursion", "details": ["Full-day trip to Kanyakumari.", "Visit Padmanabhapuram Palace and Vivekananda Memorial.", "Overnight stay in Kovalam."], "image": "" },
      { "day": "16", "title": "Return via Trivandrum", "details": ["Visit Padmanabhaswamy Temple and Napier Museum in Trivandrum.", "Airport transfer for return flight."], "image": "" }
    ],

    "detailedItinerary": [
      { "day": "Day 01", "title": "ARRIVAL AT CHENNAI - ENJOY CITY TOUR", "details": ["Meet representative at the airport for transfer to the hotel.", "Explore Chennai's landmarks: Marina Beach (13km long), St. George Fort, and St Mary's Church.", "Visit Kapaleeswarar Temple, San Thome Cathedral, Birla Planetarium, and the National Art gallery.", "Overnight stay at the hotel."] },
      { "day": "Day 02", "title": "CHENNAI - KANCHIPURAM - MAHABALIPURAM", "details": ["Morning drive to Mahabalipuram with a stop at Kancheepuram, the 'Golden City'.", "Visit historical Pallava temples: Kailasanatha Temple and the 57m high Ekambareswarar Temple.", "Explore Kanchipuram's world-famous hand-woven silk fabrics.", "Arrive at Mahabalipuram and check into the hotel.", "Overnight stay at the hotel."] },
      { "day": "Day 03", "title": "IN AND AROUND MAHABALIPURAM AND BACK TO CHENNAI", "details": ["Full-day tour of Mahabalipuram's rock-cut art and Shore temples.", "Key sites: Arjuna's Penance (27m x 9m bas-relief), Pancha Pandavas Rathas, and Shore Temple.", "Visit Krishna Mandapam and man-made caves.", "Evening transfer back to Chennai.", "Overnight stay in Chennai."] },
      { "day": "Day 04", "title": "OFF TO BANGALORE BY TRAIN - SHOPPING AND CITY TOUR", "details": ["Morning Shatabdi Express train journey to Bangalore (6 AM).", "Explore Bangalore, the 'Silicon Valley' and 'City of Gardens'.", "Visit Cubbon Park, Government Museum, Tipu’s Palace, the Fort, and Bull temples.", "Discover Lal Bagh Botanical Gardens and Ulsoor Lake.", "Overnight stay in Bangalore."] },
      { "day": "Day 05", "title": "ON TO MYSORE VIA SRIRANGAPATTANAM", "details": ["Drive to Mysore, the princely city of South India.", "En route break at Srirangapattanam, former capital of Tipu Sultan.", "Tour Tipu's Fort, Daria Daulat Baug (Wooden Summer Palace), and the Gumbaz.", "Check into Mysore hotel.", "Overnight stay at the hotel."] },
      { "day": "Day 06", "title": "MYSORE FULL DAY EXCURSION", "details": ["City tour of Mysore, the cultural heart of Karnataka.", "Visit Mysore Palace (illuminated Sat/Sun), Chamundi Hill temple, and Jagan Mohan Palace.", "See the 4.8m Nandi monolith and St. Philomena’s Cathedral.", "Visit Brindavan Gardens and musical fountains at the KRS dam.", "Overnight stay in Mysore."] },
      { "day": "Day 07", "title": "MYSORE - OOTY VIA BANDIPUR", "details": ["Drive to Ooty, the 'Queen of Hill Stations'.", "Journey through Bandipur National Park (Nilgiri Biosphere Reserve).", "Arrive in Ooty by evening and check-in.", "Overnight stay at the hotel."] },
      { "day": "Day 08", "title": "IN AND AROUND OOTY FULL DAY TOUR", "details": ["Visit Government Botanical Gardens (1847) and Rose Garden.", "Boating at Ooty Lake.", "Trek up to Doddabetta Peak, the highest in the Blue Mountains (8,606 ft).", "Optional Mountain Train journey from Ooty to Coonoor.", "Overnight stay at the hotel."] },
      { "day": "Day 09", "title": "OOTY - COCHIN - KATHAKALI SHOW", "details": ["Drive to Cochin, reaching by late afternoon.", "Check-in and evening visit to a Kathakali show.", "Experience the Mudras and elaborate makeup of this ancient dance form.", "Overnight stay at the hotel."] },
      { "day": "Day 10", "title": "COCHIN CITY TOUR & CRAFT CRUISE", "details": ["Guided tour of Dutch Palace (Mattancherry), Jewish Synagogue, and St. Francis Church.", "Observe Chinese fishing nets at Fort Cochin.", "Afternoon country craft canal cruise through rural Kerala.", "Peek at coir processing, duck farming, and enjoy toddy or tender coconut water.", "Overnight stay at the hotel."] },
      { "day": "Day 11", "title": "COCHIN - PERIYAR PLEASURE BOATING", "details": ["Drive to Periyar Wildlife Sanctuary (Thekkady) via a scenic route.", "Boat safari on Periyar Lake to spot elephants, bison, and other wildlife.", "Check into a Jungle Resort.", "Overnight stay at the resort."] },
      { "day": "Day 12", "title": "PERIYAR SIGHTSEEING - SPICE TOUR & TREKKING", "details": ["Morning trekking trails with a local guide to observe wildlife.", "Guided tour of Spice Plantation Garden (cardamom, pepper, tea, etc.).", "Optional Elephant Safari.", "Overnight stay at the resort."] },
      { "day": "Day 13", "title": "OFF TO KUMARAKOM - NIGHT IN THE BACKWATERS", "details": ["Proceed to Kumarakom and board a traditional Kettuvallom (houseboat).", "Cruise through Vembanad Lake backwaters flanked by palms.", "Anchor in the backwaters for an overnight stay.", "Dinner and stay on board."] },
      { "day": "Day 14", "title": "ALLEPPEY - KOVALAM BEACH HOLIDAYS", "details": ["Houseboat reaches Alleppey; transfer to Kovalam beach paradise.", "Relax at one of the safest white sand beaches in the world.", "Enjoy the coconut-tree lined coast and sea breeze.", "Overnight stay at the resort."] },
      { "day": "Day 15", "title": "KOVALAM - KANYAKUMARI EXCURSION", "details": ["Full-day trip to Kanyakumari, the southernmost tip of India.", "En route visit the wooden Padmanabhapuram Palace.", "Board ferry to Vivekananda Rock Memorial at the confluence of three seas.", "Watch the sunset at the seashore.", "Return to Kovalam for an overnight stay."] },
      { "day": "Day 16", "title": "KOVALAM – TRIVANDRUM DEPARTURE", "details": ["Visit Sree Padmanabhaswamy Temple (Dravidian style).", "Tour Puthan Malika Palace Museum and Napier Museum.", "Transfer to Trivandrum Airport for your onward journey.", "End of South India tour."] }
    ],

    inclusions: [
      'The Vehicle will be with the guests throughout the Tour.They can make it work around the Clock if needed.',
      'Well - experienced English - speaking Driver cum Guide will be appointed for the Tour.Who can also act as an Escort.',
      'One Driver, One Vehicle for the entire Tour.If there is no Land journey break in the Tour, the same Driver & Vehicle will be with the guests for the entire journey.'
    ],

    exclusions: [
      'International air tickets / Domestic air tickets & airport taxes.',
      'Passport & visa fees, visa stamping.',
      'Items of a personal nature, such as laundry, telephone calls, room service, alcoholic & non - alcoholic beverages, etc.',
      'Single room(quoted separately), Child or adult in a triple sharing room.',
      'Another language may be on request.Vegetable meals may be on request.',
      'Bottled / mineral water during any meal.',
      'Peak tourist season or special event rates.',
      'Airport tax, airfares, Food cost other than specified, Phone call charges & other personnel expenses of the Guests.'
    ],

    sightseeing: [
      'Shopping & sightseeing Tour in Chennai',
      'Temple Tour at Kancheepuram',
      'Historical Tour at Mahabalipuram',
      'Bangalore City Tour',
      'Full - day sightseeing tour in Mysore',
      'Full - day nature tour at Ooty Hill Station, including Toy train journey',
      'Backwater Historical Tour, Country Craft Cruise & Kathakali show at Cochin.',
      'Boating, Spice plantation Tour & Forest Trekking at Periyar Sanctuary',
      'Full Day - Houseboat Cruise & night stay in a Houseboat from Kumarakom to Alleppey.',
      'Full - day excursion to Kanyakumari(Cape).',
      'Enjoy City Tour in Trivandrum'
    ],

    hotelPackages: [
      {
        "destination": "Chennai (01 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Gokulam Park", "image": "", "description": "" }, { "name": "Sabari", "image": "", "description": "" }, { "name": "Regenta Central", "image": "", "description": "" }, { "name": "OMR Hotel", "image": "", "description": "" }, { "name": "Quality Inn Sabari", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "IBIS Chennai", "image": "", "description": "" }, { "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "The Pride Hotel", "image": "", "description": "" }, { "name": "The Savera Hotel", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "The Park", "image": "", "description": "" }, { "name": "Hyatt Regency", "image": "", "description": "" }, { "name": "The Residency Towers", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "ITC Chola", "image": "", "description": "" }, { "name": "Taj Coromandel", "image": "", "description": "" }, { "name": "Hilton Chennai", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Mahabalipuram (02 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Golden Sun Beach", "image": "", "description": "" }, { "name": "Mamalla Heritage", "image": "", "description": "" }, { "name": "Bodhi Woods Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Ideal Beach Resort", "image": "", "description": "" }, { "name": "Chariot Beach Resort", "image": "", "description": "" }, { "name": "GRT Grand Bay", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "Grand Continent, Mahabalipuram – (A Sarovar Premiere Affiliate Hotel)", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Fisherman’s Cove", "image": "", "description": "" }, { "name": "Sheraton Grand", "image": "", "description": "" }, { "name": "Kaldan Samudra Palace Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Bangalore (01 N)",
        "image": "assets/images/hotels/bangalore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Tulip Hotel", "image": "", "description": "" }, { "name": "ibis Bengaluru", "image": "", "description": "" }, { "name": "Richmond Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "St.Mark’s Hotel", "image": "", "description": "" }, { "name": "Capitol Hotel", "image": "", "description": "" }, { "name": "Gokulam Grand Hotel & Spa", "image": "", "description": "" }, { "name": "Fairfield by Marriott Bengaluru", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Taj West End", "image": "", "description": "" }, { "name": "Le Méridien Bengaluru", "image": "", "description": "" }, { "name": "The Park Bengaluru", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj West End", "image": "", "description": "" }, { "name": "Le Méridien Bengaluru", "image": "", "description": "" }, { "name": "The Park Bengaluru", "image": "", "description": "" }],
        }
      },
      {
        "destination": "Mysore (02 N)",
        "image": "assets/images/hotels/mysore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Regalia Inn & Suites", "image": "", "description": "" }, { "name": "Emerald Clark Inn", "image": "", "description": "" }, { "name": "The Atrium Boutique Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Sandesh The Prince", "image": "", "description": "" }, { "name": "Fortune JP Palace", "image": "", "description": "" }, { "name": "Regenta Central Herald", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Royal Orchid Metropole", "image": "", "description": "" }, { "name": "Royal Orchid Brindavan Gardens", "image": "", "description": "" }, { "name": "Grand Mercure Hotel", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Radisson Blu Plaza Hotel Mysore", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Ooty (02 N)",
        "image": "assets/images/hotels/ooty.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Nahar Nilgiris", "image": "", "description": "" }, { "name": "Garden Manor", "image": "", "description": "" },],
          "4-Star Deluxe": [{ "name": "Fortune Hotel", "image": "", "description": "" }, { "name": "Kluney Manor Ooty,", "image": "", "description": "" }, { "name": "Mountain Retreat", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Gem Park,", "image": "", "description": "" }, { "name": "Sterling Fern Hill,", "image": "", "description": "" }, { "name": "Sterling Elk Hill,", "image": "", "description": "" }, { "name": "Accord Highland", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Savoy Hotel", "image": "", "description": "" }, { "name": "Taj Gateway Coonoor, Ayatana", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Cochin (02 N)",
        "image": "assets/images/hotels/cochin.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Killian’s", "image": "", "description": "" }, { "name": "Abad Plaza", "image": "", "description": "" }, { "name": "Napier Heritage Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Monsoon Empress", "image": "", "description": "" }, { "name": "Marine Inn", "image": "", "description": "" }, { "name": "Tribute Royale", "image": "", "description": "" }, { "name": "Olive Downtown", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Forte Kochi hotel", "image": "", "description": "" }, { "name": "Le Meridian", "image": "", "description": "" }, { "name": "Crowne Plaza", "image": "", "description": "" }, { "name": "Hotel Marriot", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Brunton Boatyard hotel", "image": "", "description": "" }, { "name": "Taj Malabar", "image": "", "description": "" }, { "name": "Grand Hyatt", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Periyar (02 N)",
        "image": "assets/images/hotels/periyar.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Abad Green Forest", "image": "", "description": "" }, { "name": "Peppervine Resort", "image": "", "description": "" }, { "name": "Hotel Lincoln Square", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Mountain Courtyard Resort", "image": "", "description": "" }, { "name": "Forest Canopy Resort", "image": "", "description": "" }, { "name": "Aranya Nivas KTDC", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Poetree Resort", "image": "", "description": "" }, { "name": "Elephant Court", "image": "", "description": "" }, { "name": "Green Woods Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Spice Village Resort", "image": "", "description": "" }, { "name": "Hills & Hues Resort", "image": "", "description": "" }, { "name": "Lake Palace Resort KTDC", "image": "", "description": "" }, { "name": "Blanket Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Houseboat (01 N)",
        "image": "assets/images/hotels/houseboat.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "A/C Standard Houseboat", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "A/C Deluxe Houseboat with Silver Flag Category", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "A/C Premium Houseboat with Golden flag category", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Full-time A/C Luxury boat with Platinum category", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Kovalam (03 N)",
        "image": "assets/images/hotels/kovalam.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Soma Palm Shore", "image": "", "description": "" }, { "name": "Jasmine Palace", "image": "", "description": "" }, { "name": "Hotel Neelakanta", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "KTDC Samudra Resort", "image": "", "description": "" }, { "name": "Tranvancore Beach Resort", "image": "", "description": "" }, { "name": "Sagara Beach Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Udaya Samudra Beach Resort", "image": "", "description": "" }, { "name": "Gokulam Grand Turtle on the Beach", "image": "", "description": "" }, { "name": "Rock Holm at the Lighthouse Beach", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "The Leela Kovalam", "image": "", "description": "" }, { "name": "Taj Green Coves", "image": "", "description": "" }, { "name": "Niramaya Surya Samudra Resort", "image": "", "description": "" }
          ]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: '“SAVOUR DELICIOUS MEALS” will be Breakfast Basis in all the destinations and three meals (Breakfast +Lunch+ Dinner) in the houseboat.',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 86,490", single: "", "extraPerson": "Rs 69,190" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 1,09,200", single: "", "extraPerson": "Rs 87,360" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 1,33,260", single: "", "extraPerson": "Rs 1,06,600" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 2,32,180", single: "", "extraPerson": "Rs 1,85,740" }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 69,190", single: "", "extraPerson": "Rs 55,350" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 87,360", single: "", "extraPerson": "Rs 69,880" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 1,06,600", single: "", "extraPerson": "Rs 85,280" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 1,85,740", single: "", "extraPerson": "Rs 1,48,600" }
        ]
      }
    ],

    supplementalAttractions: [
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "south-india-3",
    "title": "VISUALS OF SOUTH INDIA - 03",
    "duration": "13 Nights / 14 Days",
    "summary": "It’s a journey through the History & culture of Southern India. The Guest can experience the Architectural wonders in the form of Temples & Forts, followed by the virginity of a Land-Kerala with Beaches, Backwaters, villages & more…Experience it",
    "tourHighlights": [
      "All-inclusive package without any hidden costs",
      "Food on a Breakfast basis and 03 times meals in the Houseboat",
      "Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them",
      "Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost",
      "One driver (English-speaking) & one Vehicle for the entire tour",
      "Tour can be changed to any other fixed date even before 24 hours without any retention fee",
      "GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package"
    ],

    quickItinerary: [
      "Day 01- ARRIVAL AT CHENNAI (B)",
      "Day 02- CHENNAI TO MAHABALIPURAM, ENROUTE VISIT KANCHIPURAM (B)",
      "Day 03- OFF TO PONDICHERRY (B) SIGHTSEEING AT MAHABALIPURAM",
      "Day 04- OFF TO TANJORE (B)",
      "Day 05- DAY EXCURSION TO TRICHY (B)",
      "Day 06- OFF TO MADURAI (B)",
      "Day 07- ON TO PERIYAR (B)",
      "Day 08- ON TO KUMARAKOM (B)",
      "Day 09- FULL-DAY HOUSEBOAT CRUISE CUM NIGHT STAY (B)",
      "Day 10- TO COCHIN (B)",
      "Day 11- TO KOVALAM (B)",
      "Day 12- DAY EXCURSION TO KANYAKUMARI (B)",
      "Day 13- AT KOVALAM (B)",
      "Day 14- DEPARTURE FROM TRIVANDRUM (B)"
    ],

    itineraryOverview: [
      { "day": "01", "title": "Arrival at Chennai", "details": ["Traditional 'Namaste' welcome at Airport.", "City tour covering Kapaleeswarar Temple, Santhome Cathedral, and Marina Beach.", "Overnight stay in Chennai."], "image": "" },
      { "day": "02", "title": "Kanchipuram & Mahabalipuram", "details": ["Drive to Mahabalipuram with sightseeing in Kanchipuram.", "Visit Kailasanatha and Ekambareswarar temples.", "Overnight stay at Mahabalipuram."], "image": "" },
      { "day": "03", "title": "Mahabalipuram & Pondicherry", "details": ["Historical tour of Mahabalipuram: Arjuna's Penance, Rathas, and Shore Temple.", "Afternoon drive to Pondicherry.", "Overnight stay at Pondicherry."], "image": "" },
      { "day": "04", "title": "Pondicherry & Tanjore", "details": ["Visit Aurobindo Ashram and optional Auroville Village.", "Drive to Tanjore with a stop at Gangaikondacholapuram.", "Overnight stay in Tanjore."], "image": "" },
      { "day": "05", "title": "Trichy Excursion", "details": ["Visit Brihadeshwara Temple and Palace in Tanjore.", "Day excursion to Trichy to see Rock Fort and Srirangam temples.", "Return to Tanjore for overnight stay."], "image": "" },
      { "day": "06", "title": "On to Madurai", "details": ["Drive to Madurai and visit the celebrated Meenakshi Temple.", "Explore the temple museum and its 985 carved pillars.", "Overnight stay in Madurai."], "image": "" },
      { "day": "07", "title": "On to Periyar", "details": ["Drive to Periyar Wildlife Sanctuary.", "Evening boat safari on Periyar Lake to spot wildlife.", "Overnight stay at a Jungle Resort."], "image": "" },
      { "day": "08", "title": "On to Kumarakom", "details": ["Drive to Kumarakom backwaters.", "Visit the Kumarakom Bird Sanctuary.", "Overnight stay at a Backwater Resort."], "image": "" },
      { "day": "09", "title": "Houseboat Cruise", "details": ["Board a traditional Kettuvallom (houseboat) for a cruise to Alleppey.", "Full day of backwater scenery and village life.", "Overnight stay on board the houseboat."], "image": "" },
      { "day": "10", "title": "On to Cochin", "details": ["Drive to Cochin and explore Dutch Palace and Jewish Synagogue.", "Visit St. Francis Church and see Chinese fishing nets.", "Evening Kathakali dance performance."], "image": "" },
      { "day": "11", "title": "On to Kovalam", "details": ["Drive to Kovalam International Beach.", "Relax at the white sand beach and coconut-tree-lined coast.", "Overnight stay at Kovalam resort."], "image": "" },
      { "day": "12", "title": "Kanyakumari Excursion", "details": ["Full-day trip to Kanyakumari, the southernmost tip of India.", "Visit Padmanabhapuram Palace and Vivekananda Rock Memorial.", "Watch the sunset at the seashore."], "image": "" },
      { "day": "13", "title": "Trivandrum City Tour", "details": ["Visit Sree Padmanabhaswamy Temple and Napier Museum in Trivandrum.", "Explore the Puthan Malika Palace Museum.", "Overnight stay at Kovalam."], "image": "" },
      { "day": "14", "title": "Departure", "details": ["Tour concludes.", "Transfer to Trivandrum airport for return flight."], "image": "" }
    ],

    "detailedItinerary": [
      { "day": "Day 01", "title": "ARRIVAL AT CHENNAI - ENJOY CITY TOUR", "details": ["Representative meets you at the airport for a transfer to the hotel.", "Chennai city tour: Visit Kapaleeswarar Temple, Santhome Cathedral, Marina Beach, and the Fort Museum.", "Explore the National Art Gallery and Little Mount shrine.", "Overnight stay at the hotel."] },
      { "day": "Day 02", "title": "CHENNAI - KANCHIPURAM - MAHABALIPURAM", "details": ["Drive to Mahabalipuram with a stop at Kanchipuram, the 'Golden City'.", "Visit Kailasanatha Temple and the 57-meter-high Ekambareswarar Temple tower.", "See world-famous hand-woven silk fabrics.", "Check into the Mahabalipuram hotel and relax.", "Overnight stay at the hotel."] },
      { "day": "Day 03", "title": "MAHABALIPURAM SIGHTSEEING - OFF TO PONDICHERRY", "details": ["Full-day historical tour: Visit Arjuna's Penance (world's largest bas-relief) and Krishna Mandapam.", "Explore the Pancha Pandava Rathas and the ancient Shore Temple.", "Afternoon drive to Pondicherry (approx. 3 hours).", "Overnight stay at the hotel."] },
      { "day": "Day 04", "title": "PONDICHERRY - TANJORE", "details": ["Morning visit to Aurobindo Ashram and optional Auroville Village.", "Drive to Tanjore, visiting the monumental Siva Temple at Gangaikondacholapuram en route.", "See the Nataraja and Coronation sculptures at the temple.", "Overnight stay in Tanjore."] },
      { "day": "Day 05", "title": "TANJORE - DAY EXCURSION TO TRICHY", "details": ["Morning visit to the Brihadeshwara Temple and Tanjore Palace.", "Proceed to Trichy for an excursion.", "Visit the Rock Fort Temple (437 steps) and Srirangam's Lord Ranganathaswamy temple.", "Return to Tanjore for overnight stay."] },
      { "day": "Day 06", "title": "TANJORE - MADURAI", "details": ["Depart for Madurai, the great temple town.", "Afternoon visit to the Meenakshi-Sundareswarar Temple complex.", "Explore the 12 soaring gopuras and the 985-pillar temple museum.", "Overnight stay in Madurai."] },
      { "day": "Day 07", "title": "MADURAI - PERIYAR", "details": ["Drive to Periyar Wildlife Sanctuary (Thekkady).", "Check into the Jungle Resort and enjoy relaxation.", "Evening boat safari on Periyar Lake to watch elephants and bison.", "Overnight stay at the resort."] },
      { "day": "Day 08", "title": "PERIYAR - KUMARAKOM", "details": ["Drive to the backwater paradise of Kumarakom.", "Visit the Kumarakom Bird Sanctuary to spot Siberian storks and local birds.", "Check into a backwater resort.", "Overnight stay at the resort."] },
      { "day": "Day 09", "title": "KUMARAKOM - HOUSEBOAT CRUISE", "details": ["Board the Kettuvallom (houseboat) by forenoon.", "Cruise through endless miles of snaking waterways flanked by palms.", "Experience the simplicity of village life from the boat.", "Dinner and overnight stay on board anchored in the backwaters."] },
      { "day": "Day 10", "title": "ALLEPPEY - COCHIN", "details": ["Disembark at Alleppey and drive to Cochin.", "Tour Dutch Palace (Mattancherry), Jewish Synagogue, and St. Francis Church.", "See Chinese fishing nets at Fort Cochin.", "Evening Kathakali dance performance with elaborate makeup and gestures.", "Overnight stay at the hotel."] },
      { "day": "Day 11", "title": "COCHIN - KOVALAM", "details": ["Morning drive to Kovalam International Beach.", "Relax at the 'Paradise of the South' with white sand and coconut trees.", "Spend the day at your disposal at one of the safest beaches.", "Overnight stay at the resort."] },
      { "day": "Day 12", "title": "KOVALAM - KANYAKUMARI EXCURSION", "details": ["Drive to Kanyakumari, visiting Padmanabhapuram Palace en route.", "Ferry to Vivekananda Rock Memorial at the confluence of three seas.", "Watch the spectacular sunset at the seashore.", "Late evening return to Kovalam for overnight stay."] },
      { "day": "Day 13", "title": "KOVALAM - TRIVANDRUM CITY TOUR", "details": ["Afternoon visit to Trivandrum: Sree Padmanabhaswamy Temple (Lord Vishnu).", "Tour Puthan Malika Palace Museum and Napier Museum's art collection.", "Evening back to Kovalam for overnight stay."] },
      { "day": "Day 14", "title": "DEPARTURE FROM TRIVANDRUM", "details": ["Tour ends.", "Transfer to Trivandrum airport for return flight."] }
    ],

    inclusions: [
      'The Vehicle will be with the guests throughout the Tour.They can make it work around the Clock if needed.',
      'Well - experienced English - speaking Driver cum Guide will be appointed for the Tour.Who can also act as an Escort.',
      'One Driver, One Vehicle for the entire Tour.If there is no Land journey break in the Tour, the same Driver & Vehicle will be with the guests for the entire journey.'
    ],

    exclusions: [
      'International air tickets / Domestic air tickets & airport taxes.',
      'Passport & visa fees, visa stamping.',
      'Items of a personal nature, such as laundry, telephone calls, room service, alcoholic & non - alcoholic beverages, etc.',
      'Single room(quoted separately), Child or adult in a triple sharing room.',
      'Another language may be on request.Vegetable meals may be on request.',
      'Bottled / mineral water during any meal.',
      'Peak tourist season or special event rates.',
      'Airport tax, airfares, Food cost other than specified, Phone call charges & other personnel expenses of the Guests.'
    ],

    sightseeing: [
      'Shopping & sightseeing Tour in Chennai',
      'Temple Tour at Kancheepuram',
      'Historical Tour at Mahabalipuram',
      'Bangalore City Tour',
      'Full - day sightseeing tour in Mysore',
      'Full - day nature tour at Ooty Hill Station, including Toy train journey',
      'Backwater Historical Tour, Country Craft Cruise & Kathakali show at Cochin.',
      'Boating, Spice plantation Tour & Forest Trekking at Periyar Sanctuary',
      'Full Day - Houseboat Cruise & night stay in a Houseboat from Kumarakom to Alleppey.',
      'Full - day excursion to Kanyakumari(Cape).',
      'Enjoy City Tour in Trivandrum'
    ],

    hotelPackages: [
      {
        "destination": "Chennai (01 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Gokulam Park", "image": "", "description": "" }, { "name": "Sabari", "image": "", "description": "" }, { "name": "Regenta Central", "image": "", "description": "" }, { "name": "OMR Hotel", "image": "", "description": "" }, { "name": "Quality Inn Sabari", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "IBIS Chennai", "image": "", "description": "" }, { "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "The Pride Hotel", "image": "", "description": "" }, { "name": "The Savera Hotel", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "The Park", "image": "", "description": "" }, { "name": "Hyatt Regency", "image": "", "description": "" }, { "name": "The Residency Towers", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "ITC Chola", "image": "", "description": "" }, { "name": "Taj Coromandel", "image": "", "description": "" }, { "name": "Hilton Chennai", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Mahabalipuram (02 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Golden Sun Beach", "image": "", "description": "" }, { "name": "Mamalla Heritage", "image": "", "description": "" }, { "name": "Bodhi Woods Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Ideal Beach Resort", "image": "", "description": "" }, { "name": "Chariot Beach Resort", "image": "", "description": "" }, { "name": "GRT Grand Bay", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "Grand Continent, Mahabalipuram – (A Sarovar Premiere Affiliate Hotel)", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Fisherman’s Cove", "image": "", "description": "" }, { "name": "Sheraton Grand", "image": "", "description": "" }, { "name": "Kaldan Samudra Palace Resort", "image": "", "description": "" }]
        }
      },

      {
        "destination": "Pondicherry (01 N)",
        "image": "assets/images/hotels/pondicherry.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Anandha Inn", "image": "", "description": "" }, { "name": "Dune De l'Orient", "image": "", "description": "" }, { "name": "Annamalai International", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Accord Puducherry", "image": "", "description": "" }, { "name": "Radisson Puducherry", "image": "", "description": "" },],
          "5-Star Deluxe": [{ "name": "Maison Perumal", "image": "", "description": "" }, { "name": "Palais de Mahe Resort", "image": "", "description": "" }, { "name": "The Promenade", "image": "", "description": "" }, { "name": "Le Pondy Resort", "image": "", "description": "" },],
          "5-Star Luxury": [{ "name": "The Residency Towers", "image": "", "description": "" }, { "name": "Radisson Blu Resort", "image": "", "description": "" }, { "name": "Lagoon Sarovar Premiere", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Tanjore (02 N)",
        "image": "assets/images/hotels/tanjore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Gnanam", "image": "", "description": "" }, { "name": "Oriental Towers", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Hotel Sangam", "image": "", "description": "" }, { "name": "Parisutham Hotel", "image": "", "description": "" }, { "name": "Deshadan Chola", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "GRT Trails River Svathma Heritage Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "GRT Trails River Svathma Heritage Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Madurai (01 N)",
        "image": "assets/images/hotels/madurai.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Madurai Residency", "image": "", "description": "" },],
          "4-Star Deluxe": [{ "name": "Royal Court", "image": "", "description": "" }, { "name": "Hotel Germanus", "image": "", "description": "" }, { "name": "Fortune Pandiyan Hotel", "image": "", "description": "" },],
          "5-Star Deluxe": [{ "name": "Courtyard by Marriott", "image": "", "description": "" }, { "name": "The Heritage Madurai", "image": "", "description": "" }, { "name": "Regency Madurai by GRT", "image": "", "description": "" }, { "name": "Grand Madurai by GRT", "image": "", "description": "" },],
          "5-Star Luxury": [{ "name": "Taj Gateway Hotel", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Periyar (02 N)",
        "image": "assets/images/hotels/thekkady.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Abad Green Forest", "image": "", "description": "" }, { "name": "Peppervine Resort", "image": "", "description": "" }, { "name": "Hotel Lincoln Square", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Mountain Courtyard Resort", "image": "", "description": "" }, { "name": "Forest Canopy Resort", "image": "", "description": "" }, { "name": "Aranya Nivas KTDC", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Poetree Resort", "image": "", "description": "" }, { "name": "Elephant Court", "image": "", "description": "" }, { "name": "Green Woods Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Spice Village Resort", "image": "", "description": "" }, { "name": "Hills & Hues Resort", "image": "", "description": "" }, { "name": "Lake Palace Resort KTDC", "image": "", "description": "" }, { "name": "Blanket Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Kumarakom (01 N)",
        "image": "assets/images/hotels/kumarakom.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Paradise Resort", "image": "", "description": "" }, { "name": "Manor Backwater Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Abad Whispering Palms", "image": "", "description": "" }, { "name": "KTDC Water Scapes", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Niramaya Retreat", "image": "", "description": "" }, { "name": "Backwater Ripples resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Kumarakom Lake Resort", "image": "", "description": "" }, { "name": "Coconut Lagoon by CGH", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Houseboat (01 N)",
        "image": "assets/images/hotels/houseboat.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "A/C Standard Houseboat", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "A/C Deluxe Houseboat with Silver Flag Category", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "A/C Premium Houseboat with Golden flag category", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Full-time A/C Luxury boat with Platinum category", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Cochin (02 N)",
        "image": "assets/images/hotels/cochin.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Killian’s", "image": "", "description": "" }, { "name": "Abad Plaza", "image": "", "description": "" }, { "name": "Napier Heritage Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Monsoon Empress", "image": "", "description": "" }, { "name": "Marine Inn", "image": "", "description": "" }, { "name": "Tribute Royale", "image": "", "description": "" }, { "name": "Olive Downtown", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Forte Kochi hotel", "image": "", "description": "" }, { "name": "Le Meridian", "image": "", "description": "" }, { "name": "Crowne Plaza", "image": "", "description": "" }, { "name": "Hotel Marriot", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Brunton Boatyard hotel", "image": "", "description": "" }, { "name": "Taj Malabar", "image": "", "description": "" }, { "name": "Grand Hyatt", "image": "", "description": "" }]
        }
      },

      {
        "destination": "Kovalam (03 N)",
        "image": "assets/images/hotels/kovalam.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Soma Palm Shore", "image": "", "description": "" }, { "name": "Jasmine Palace", "image": "", "description": "" }, { "name": "Hotel Neelakanta", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "KTDC Samudra Resort", "image": "", "description": "" }, { "name": "Tranvancore Beach Resort", "image": "", "description": "" }, { "name": "Sagara Beach Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Udaya Samudra Beach Resort", "image": "", "description": "" }, { "name": "Gokulam Grand Turtle on the Beach", "image": "", "description": "" }, { "name": "Rock Holm at the Lighthouse Beach", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "The Leela Kovalam", "image": "", "description": "" }, { "name": "Taj Green Coves", "image": "", "description": "" }, { "name": "Niramaya Surya Samudra Resort", "image": "", "description": "" }
          ]
        }
      }
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: '“SAVOUR DELICIOUS MEALS” will be Breakfast Basis in all the destinations and three meals (Breakfast +Lunch+ Dinner) in the houseboat.',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 64,060", single: "", "extraPerson": "Rs 51,250" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 83,650", single: "", "extraPerson": "Rs 66,920" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 1,09,440", single: "", "extraPerson": "Rs 87,550" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 1,43,990", single: "", "extraPerson": "Rs 1,15,200" }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 51,250", single: "", "extraPerson": "Rs 41,000" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 66,920", single: "", "extraPerson": "Rs 55,540" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 87,550", single: "", "extraPerson": "Rs 70,040" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 1,15,200", single: "", "extraPerson": "Rs 92,160" }
        ]
      }
    ],

    supplementalAttractions: [
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

  {
    id: "south-india-4",
    "title": "VISUALS OF SOUTH INDIA - 04",
    "duration": "19 Nights / 20 Days",
    "summary": "This is an All-South Tour with all the major Tourist Destinations in South India, covering three states: Tamil Nadu, Kerala & Karnataka. The Heritage, Nature & Culture of South India are fully integrated into this Tour.",
    "tourHighlights": [
      "All-inclusive package without any hidden costs",
      "Food on a Breakfast basis and 03 times meals in the Houseboat",
      "Carefully selected hotels & resorts based on reviews from guests who have already enjoyed them",
      "Vehicle at disposal from airport to airport on all days without any km restrictions & additional cost",
      "One driver (English-speaking) & one Vehicle for the entire tour",
      "Tour can be changed to any other fixed date even before 24 hours without any retention fee",
      "GST, Toll charges, Bata to the driver, Parking fees, etc, included in the Package"
    ],

    quickItinerary: [
      "Day 01- ARRIVAL AT CHENNAI (B)",
      "Day 02- CHENNAI TO MAHABALIPURAM, ENROUTE KANCHIPURAM (B)",
      "Day 03- IN AND AROUND MAHABALIPURAM (B)",
      "Day 04- OFF TO PONDICHERRY (B)",
      "Day 05- OFF TO TANJORE, VISIT CHIDAMBARAM & KUMBAKONAM (B)",
      "Day 06- AT TANJORE - BRIHADESHWARA TEMPLE (B)",
      "Day 07- ON TO MADURAI, VISIT TRICHY ENROUTE (B)",
      "Day 08- AT MADURAI - MEENAKSHI TEMPLE (B)",
      "Day 09- ON TO PERIYAR - SPICE TOUR & TREKKING (B)",
      "Day 10- OFF TO KUMARAKOM - FULL DAY HOUSEBOAT CRUISE (B+L+D)",
      "Day 11- ARRIVAL INTO COCHIN - KATHAKALI SHOW (B)",
      "Day 12- IN AND AROUND COCHIN - COUNTRY CRAFT CRUISE (B)",
      "Day 13- OFF TO OOTY (B)",
      "Day 14- IN AND AROUND OOTY - FULL DAY TOUR (B)",
      "Day 15- ON TO MYSORE VIA BANDIPUR (B)",
      "Day 16- IN AND AROUND MYSORE - SRIRANGAPATANAM (B)",
      "Day 17- TO HASSAN - BELUR, HALEBID & SRAVANA BELAGOLA (B)",
      "Day 18- ON TO BANGALORE (B)",
      "Day 19- ON TO CHENNAI VIA TRAIN (B)",
      "Day 20- RETURN HOME (B)"
    ],

    itineraryOverview: [
      { "day": "01", "title": "Arrival at Chennai", "details": ["Traditional 'Namaste' welcome at the airport.", "City tour of Chennai including Kapaleeswarar Temple, Santhome Cathedral, and Marina Beach.", "Visit Fort St. George and Guindy National Park.", "Overnight stay in Chennai."], "image": "" },
      { "day": "02", "title": "Chennai to Mahabalipuram via Kanchipuram", "details": ["Drive to Kanchipuram, the 'Golden City' of temples.", "Visit Kailasanatha, Vaikuntha Perumal, and Ekambareswarar temples.", "Witness world-famous hand-woven silk weaving.", "Overnight stay at Mahabalipuram."], "image": "" },
      { "day": "03", "title": "Mahabalipuram Sightseeing", "details": ["Explore the UNESCO World Heritage rock-cut monuments.", "Visit Arjuna's Penance, Pancha Pandava Rathas, and the Shore Temple.", "Evening at leisure on the beach.", "Overnight stay at Mahabalipuram."], "image": "" },
      { "day": "04", "title": "Mahabalipuram to Pondicherry", "details": ["Scenic drive to the French-influenced town of Pondicherry.", "Visit the Sri Aurobindo Ashram and Gandhi Square.", "Stroll through the French Quarter and beach promenade.", "Overnight stay at Pondicherry."], "image": "" },
      { "day": "05", "title": "Pondicherry to Tanjore via Chidambaram", "details": ["Visit the Nataraja Temple at Chidambaram.", "Stop at the temple town of Kumbakonam, famous for brassware.", "Drive to Tanjore (Thanjavur) for an overnight stay."], "image": "" },
      { "day": "06", "title": "Tanjore Sightseeing", "details": ["Visit the majestic Brihadeshwara Temple (Chola Architecture).", "Explore the Tanjore Palace and the Art Gallery.", "See local handicrafts and bronze icon making.", "Overnight stay at Tanjore."], "image": "" },
      { "day": "07", "title": "Tanjore to Madurai via Trichy", "details": ["Drive to Trichy and climb the Rock Fort Temple.", "Visit the massive Sri Ranganathaswamy Temple at Srirangam.", "Continue to Madurai for an overnight stay."], "image": "" },
      { "day": "08", "title": "Madurai Sightseeing", "details": ["Visit the iconic Meenakshi-Sundareswarar Temple.", "Explore the Hall of 1000 Pillars (Temple Museum).", "Experience the vibrant old town market.", "Overnight stay at Madurai."], "image": "" },
      { "day": "09", "title": "Madurai to Periyar", "details": ["Drive into the Western Ghats to Periyar (Thekkady).", "Guided trekking through the jungle to spot rare flora and fauna.", "Tour a Spice Plantation (Cardamom, Pepper, Coffee).", "Overnight stay at Periyar."], "image": "" },
      { "day": "10", "title": "Periyar to Kumarakom (Houseboat)", "details": ["Morning boat safari on Periyar Lake to see wild elephants.", "Board a traditional Houseboat (Kettuvallom) at Kumarakom.", "Cruise through the backwater snaking waterways.", "Overnight stay on the Houseboat."], "image": "" },
      { "day": "11", "title": "Alleppey to Cochin", "details": ["Disembark at Alleppey and drive to Cochin.", "Free time for shopping or relaxation in the 'Queen of Arabian Sea'.", "Evening Kathakali dance performance.", "Overnight stay in Cochin."], "image": "" },
      { "day": "12", "title": "Cochin City Tour & Canal Cruise", "details": ["Visit Dutch Palace, Jewish Synagogue, and St. Francis Church.", "See the Chinese fishing nets at Fort Cochin.", "Afternoon country craft canal cruise through rural Kerala.", "Overnight stay in Cochin."], "image": "" },
      { "day": "13", "title": "Cochin to Ooty", "details": ["Long drive to Ooty, the 'Queen of Hill Stations'.", "Ascent into the Nilgiri Blue Mountains.", "Overnight stay at Ooty."], "image": "" },
      { "day": "14", "title": "Ooty Sightseeing", "details": ["Visit the Botanical Gardens and the Rose Garden.", "Excursion to Doddabetta Peak (8,606 ft).", "Optional Mountain Railway (Toy Train) ride.", "Overnight stay at Ooty."], "image": "" },
      { "day": "15", "title": "Ooty to Mysore via Bandipur", "details": ["Drive through the Bandipur Forest wildlife sanctuary.", "Arrive in Mysore and visit the illuminated Mysore Palace (if weekend).", "Overnight stay in Mysore."], "image": "" },
      { "day": "16", "title": "Mysore & Srirangapatnam", "details": ["Visit Chamundi Hill and the Nandi Monolith.", "Excursion to Srirangapatnam (Tipu Sultan's capital).", "Explore the Daria Daulat Baug and Gumbaz.", "Overnight stay in Mysore."], "image": "" },
      { "day": "17", "title": "Mysore to Hassan via Shravanabelagola", "details": ["Visit the 57-ft tall Saint Gommata monolith at Shravanabelagola.", "Explore the Hoysala architectural wonders at Belur and Halebid.", "Overnight stay in Hassan."], "image": "" },
      { "day": "18", "title": "Hassan to Bangalore", "details": ["Drive to the 'Garden City' of Bangalore.", "City tour covering Cubbon Park, Vidhana Soudha, and Lalbagh.", "Shopping on Commercial Street.", "Overnight stay in Bangalore."], "image": "" },
      { "day": "19", "title": "Bangalore to Chennai (Train)", "details": ["Morning free for leisure or final shopping.", "Afternoon transfer to railway station for Shatabdi/Brindavan Express to Chennai.", "Late evening arrival and transfer to hotel.", "Overnight stay in Chennai."], "image": "" },
      { "day": "20", "title": "Departure from Chennai", "details": ["Tour concludes with memories of South India.", "Transfer to Chennai International Airport for return flight."], "image": "" }
    ],

    "detailedItinerary": [
      { "day": "Day 01", "title": "ARRIVAL AT CHENNAI - CITY TOUR", "details": ["Traditional 'Namaste' welcome by a representative at the Chennai Airport.", "Transfer to the hotel and rest.", "Full city tour of Madras: Visit Kapaleeswarar Temple of Lord Shiva, Santhome Cathedral, and the thirteen-kilometer Marina Beach.", "Explore historical landmarks: Fort St. George and its museum containing British and French antiques, the National Art Gallery, St. Mary's Church, St. Thomas Mount, and the Little Mount shrine.", "Visit the Guindy National Park, Snake Park, and Birla Planetarium.", "Overnight stay at the hotel in Chennai."] },
      { "day": "Day 02", "title": "CHENNAI - KANCHIPURAM - MAHABALIPURAM", "details": ["Morning drive to Mahabalipuram with an en route visit to Kanchipuram, the 'Golden City of a thousand temples'.", "In Kanchipuram, visit the Kailasanatha Temple (8th century AD), the Vaikuntha Perumal Temple (7th century AD), and the Ekambareswarar Temple with its 57-meter-high Rajagopuram.", "Observe the city's world-famous hand-woven silk fabrics.", "Reach Mahabalipuram in the afternoon, check into the hotel, and relax.", "Overnight stay at the hotel."] },
      { "day": "Day 03", "title": "IN AND AROUND MAHABALIPURAM", "details": ["Full-day historical tour of Mahabalipuram's architectural prototypes.", "Visit Arjuna's Penance, the world's largest bas-relief (27m x 9m) featuring gods, men, and beasts.", "Explore the Pancha Pandava Rathas, monolithic temples scooped out of single rock formations.", "Visit the Shore Temple, one of the oldest Dravidian-style structured temples in South India (8th century AD).", "See the Krishna Mandapam and various man-made caves scattered through the area.", "Evening at leisure along the beachside for relaxation or sea bathing.", "Overnight stay at the hotel."] },
      { "day": "Day 04", "title": "OFF TO PONDICHERRY", "details": ["Morning departure for Pondicherry, a travel time of approximately 3 hours.", "Check into the hotel and relax.", "Visit the Aurobindo Ashram and Gandhi Square.", "Overnight stay at the hotel in Pondicherry."] },
      { "day": "Day 05", "title": "PONDICHERRY - TANJORE (VIA CHIDAMBARAM & KUMBAKONAM)", "details": ["Morning departure for Tanjore (Thanjavur).", "Stop at Chidambaram to visit the Nataraja Temple, featuring 108 dance poses of Bharatanatyam carved on its gopurams.", "Visit the temple town of Kumbakonam, famous for its high concentration of temples and intricately carved brassware.", "Explore specific Kumbakonam temples such as Sarangapani, Kumbeswara, or Chakrapani.", "Reach Tanjore by evening, check into the hotel, and stay overnight."] },
      { "day": "Day 06", "title": "AT TANJORE", "details": ["Morning visit to the Sri Brihadeshwara Temple, a 10th-century Chola masterpiece featuring a gigantic Nandi statue and ancient frescoes.", "Visit the Tanjore Palace, built by the Nayaks and Marathas, which houses a fine masonry structure and art gallery.", "Explore local handicrafts like art plates, bronze icons, and classical musical instruments.", "Overnight stay at the hotel."] },
      { "day": "Day 07", "title": "TANJORE - MADURAI (VIA TRICHY)", "details": ["Depart for Madurai with an en route visit to Trichy (Tiruchirappalli).", "In Trichy, visit the Rock Fort Temple complex, climbing 437 steps to reach the Ucchi Pillayar temple at the 83m high top.", "Visit Srirangam (10km from Trichy) to see the Sri Ranganathaswamy Temple, featuring 21 magnificent towers.", "Reach Madurai by evening and check into the hotel."] },
      { "day": "Day 08", "title": "AT MADURAI", "details": ["Explore the Meenakshi-Sundareswarar Temple, a splendid example of Dravidian architecture with 12 soaring gopuras.", "Visit the temple museum, which contains 985 richly carved pillars.", "Walk through the old town market, famous for its Jasmine flowers.", "Overnight stay at the hotel in Madurai."] },
      { "day": "Day 09", "title": "MADURAI - PERIYAR", "details": ["Drive to Periyar (Thekkady), home to the Periyar Wildlife Sanctuary.", "On arrival, check into the Jungle Resort.", "Embark on a jungle trekking trail with a local guide to observe rare birds, trees, and flowers.", "Visit a Spice Plantation Garden to learn about cardamom, pepper, coffee, and other spices.", "Overnight stay at the resort."] },
      { "day": "Day 10", "title": "PERIYAR - KUMARAKOM (HOUSEBOAT CRUISE)", "details": ["Morning boat safari on Periyar Lake to spot wild herds of elephants and bison.", "Proceed to Kumarakom to board a traditional Kettuvallom (houseboat) by noon.", "Begin a cruise through the snaking backwater waterways flanked by emerald palms.", "Witness the simplicity of rural life and spectacular scenery.", "Dinner and overnight stay on board the houseboat, anchored in the backwaters."] },
      { "day": "Day 11", "title": "ALLEPPEY - COCHIN", "details": ["Houseboat reaches Alleppey by 9:00 AM; disembark and proceed to Cochin.", "Check into the hotel in Cochin and enjoy free time for relaxation or shopping.", "Evening attendance at a Kathakali performance, one of the world's most colorful performing arts.", "Overnight stay at the hotel in Cochin."] },
      { "day": "Day 12", "title": "IN AND AROUND COCHIN", "details": ["Guided tour of historic Cochin: Visit the Dutch Palace (Mattancherry) with its Puranic murals.", "Visit the Jewish Synagogue (built in 1568), decorated with Chinese tiles and Belgian chandeliers.", "See St. Francis Church at Fort Cochin, where Vasco da Gama was originally buried.", "View the unique Chinese fishing nets introduced by traders from the court of Khublai Khan.", "Experience a country craft canal cruise into the suburban interiors to see rural Kerala life.", "Overnight stay at the hotel."] },
      { "day": "Day 13", "title": "COCHIN - OOTY", "details": ["Morning check out from Cochin and drive toward Ooty, the 'Queen of Hill Stations'.", "Reach Ooty by evening and check into the resort.", "Overnight stay at the resort."] },
      { "day": "Day 14", "title": "IN AND AROUND OOTY", "details": ["Sightseeing tour of Ooty: Visit the Government Botanical Gardens (laid out in 1847) and the Rose Garden.", "Visit Ooty Lake for optional boating.", "Climb Doddabetta Peak (8,606 ft), the highest point in the Blue Mountains.", "Option to take the historic Mountain Railway (toy train) journey.", "Overnight stay at the hotel."] },
      { "day": "Day 15", "title": "OOTY - MYSORE (VIA BANDIPUR)", "details": ["Morning departure for Mysore, driving through the Bandipur Forest.", "Check into the hotel and relax.", "Afternoon city tour including Mysore Palace (Indo-Saracenic style) and Chamundi Hill.", "If it is a weekend, view the illuminated Mysore Palace at night.", "Overnight stay at the hotel."] },
      { "day": "Day 16", "title": "IN AND AROUND MYSORE", "details": ["Continue Mysore sightseeing: Visit the 12th-century Chamundeshwari Temple and the 4.8m tall Nandi monolith.", "Excursion to Srirangapatnam (16 km from Mysore), the former capital of Tipu Sultan.", "Visit the Srirangapatnam Fort, the Daria Daulat Baug (wooden summer palace), and the Gumbaz.", "Overnight stay at the hotel."] },
      { "day": "Day 17", "title": "MYSORE - HASSAN (VIA SHRAVANABELAGOLA)", "details": ["Check out and proceed to Hassan, stopping at Shravanabelagola en route.", "View the 57-ft tall monolith of Saint Gommata (Lord Bahubali), one of the mightiest sculptural achievements of ancient Karnataka.", "Reach Hassan and check into the resort.", "Afternoon visit to Belur's Chennakeshava Temple (1117 AD), a masterpiece of Hoysala architecture.", "Visit Halebid to see the Hoysaleswara Temple and star-shaped Kedareswara Temple.", "Overnight stay in Hassan."] },
      { "day": "Day 18", "title": "HASSAN - BANGALORE", "details": ["Morning departure for Bangalore, arriving by noon.", "Check into the hotel.", "Afternoon options: Shopping on Commercial Street or a city tour covering Cubbon Park, Vidhana Soudha, and Lalbagh Botanical Gardens.", "Overnight stay at the hotel."] },
      { "day": "Day 19", "title": "BANGALORE - CHENNAI (VIA TRAIN)", "details": ["Half-day free for last-minute shopping or sightseeing in Bangalore.", "Afternoon transfer to the railway station to board the Brindavan Express or Shatabdi Express to Chennai.", "On arrival in Chennai at night, transfer to the hotel.", "Overnight stay at the hotel."] },
      { "day": "Day 20", "title": "RETURN HOME", "details": ["Tour concludes.", "In-time transfer provided to the Chennai Airport for your return flight home."] }
    ],

    inclusions: [
      'The Vehicle will be with the guests throughout the Tour.They can make it work around the Clock if needed.',
      'Well - experienced English - speaking Driver cum Guide will be appointed for the Tour.Who can also act as an Escort.',
      'One Driver, One Vehicle for the entire Tour.If there is no Land journey break in the Tour, the same Driver & Vehicle will be with the guests for the entire journey.'
    ],

    exclusions: [
      'International air tickets / Domestic air tickets & airport taxes.',
      'Passport & visa fees, visa stamping.',
      'Items of a personal nature, such as laundry, telephone calls, room service, alcoholic & non - alcoholic beverages, etc.',
      'Single room(quoted separately), Child or adult in a triple sharing room.',
      'Another language may be on request.Vegetable meals may be on request.',
      'Bottled / mineral water during any meal.',
      'Peak tourist season or special event rates.',
      'Airport tax, airfares, Food cost other than specified, Phone call charges & other personnel expenses of the Guests.'
    ],

    sightseeing: [
      'Cultural Temple Tour at Kancheepuram, Mahabalipuram, Chidambaram, Tanjore & Trichy.',
      'Historical Tour, Country Craft Cruise & Kathakali show at Cochin',
      'Full day Tea Garden Tour with Tea Museum visit at Munnar',
      'Boat Tour, Spice Tour & Jungle Safari at Periyar',
      'Houseboat Cruise & night stay in a Houseboat from Alleppey to Kumarakom.',
      'Toy train journey from Mettupalayam to Ooty',
      'Sightseeing Tour at Ooty, Mysore, Hassan, Belur, Halebid & Shravanabelagola',
      'City Tour in Bangalore & Chennai'
    ],

    hotelPackages: [
      {
        "destination": "Chennai (01 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Gokulam Park", "image": "", "description": "" }, { "name": "Sabari", "image": "", "description": "" }, { "name": "Regenta Central", "image": "", "description": "" }, { "name": "OMR Hotel", "image": "", "description": "" }, { "name": "Quality Inn Sabari", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "IBIS Chennai", "image": "", "description": "" }, { "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "The Pride Hotel", "image": "", "description": "" }, { "name": "The Savera Hotel", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "The Park", "image": "", "description": "" }, { "name": "Hyatt Regency", "image": "", "description": "" }, { "name": "The Residency Towers", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "ITC Chola", "image": "", "description": "" }, { "name": "Taj Coromandel", "image": "", "description": "" }, { "name": "Hilton Chennai", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Mahabalipuram (02 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Golden Sun Beach", "image": "", "description": "" }, { "name": "Mamalla Heritage", "image": "", "description": "" }, { "name": "Bodhi Woods Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Ideal Beach Resort", "image": "", "description": "" }, { "name": "Chariot Beach Resort", "image": "", "description": "" }, { "name": "GRT Grand Bay", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "Grand Continent, Mahabalipuram – (A Sarovar Premiere Affiliate Hotel)", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Fisherman’s Cove", "image": "", "description": "" }, { "name": "Sheraton Grand", "image": "", "description": "" }, { "name": "Kaldan Samudra Palace Resort", "image": "", "description": "" }]
        }
      },

      {
        "destination": "Pondicherry (01 N)",
        "image": "assets/images/hotels/pondicherry.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Anandha Inn", "image": "", "description": "" }, { "name": "Dune De l'Orient", "image": "", "description": "" }, { "name": "Annamalai International", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Accord Puducherry", "image": "", "description": "" }, { "name": "Radisson Puducherry", "image": "", "description": "" },],
          "5-Star Deluxe": [{ "name": "Maison Perumal", "image": "", "description": "" }, { "name": "Palais de Mahe Resort", "image": "", "description": "" }, { "name": "The Promenade", "image": "", "description": "" }, { "name": "Le Pondy Resort", "image": "", "description": "" },],
          "5-Star Luxury": [{ "name": "The Residency Towers", "image": "", "description": "" }, { "name": "Radisson Blu Resort", "image": "", "description": "" }, { "name": "Lagoon Sarovar Premiere", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Tanjore (02 N)",
        "image": "assets/images/hotels/tanjore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Gnanam", "image": "", "description": "" }, { "name": "Oriental Towers", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Hotel Sangam", "image": "", "description": "" }, { "name": "Parisutham Hotel", "image": "", "description": "" }, { "name": "Deshadan Chola", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "GRT Trails River Svathma Heritage Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "GRT Trails River Svathma Heritage Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Madurai (01 N)",
        "image": "assets/images/hotels/madurai.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Madurai Residency", "image": "", "description": "" },],
          "4-Star Deluxe": [{ "name": "Royal Court", "image": "", "description": "" }, { "name": "Hotel Germanus", "image": "", "description": "" }, { "name": "Fortune Pandiyan Hotel", "image": "", "description": "" },],
          "5-Star Deluxe": [{ "name": "Courtyard by Marriott", "image": "", "description": "" }, { "name": "The Heritage Madurai", "image": "", "description": "" }, { "name": "Regency Madurai by GRT", "image": "", "description": "" }, { "name": "Grand Madurai by GRT", "image": "", "description": "" },],
          "5-Star Luxury": [{ "name": "Taj Gateway Hotel", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Periyar (02 N)",
        "image": "assets/images/hotels/thekkady.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Abad Green Forest", "image": "", "description": "" }, { "name": "Peppervine Resort", "image": "", "description": "" }, { "name": "Hotel Lincoln Square", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Mountain Courtyard Resort", "image": "", "description": "" }, { "name": "Forest Canopy Resort", "image": "", "description": "" }, { "name": "Aranya Nivas KTDC", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Poetree Resort", "image": "", "description": "" }, { "name": "Elephant Court", "image": "", "description": "" }, { "name": "Green Woods Resort", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Spice Village Resort", "image": "", "description": "" }, { "name": "Hills & Hues Resort", "image": "", "description": "" }, { "name": "Lake Palace Resort KTDC", "image": "", "description": "" }, { "name": "Blanket Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Houseboat (01 N)",
        "image": "assets/images/hotels/houseboat.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "A/C Standard Houseboat", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "A/C Deluxe Houseboat with Silver Flag Category", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "A/C Premium Houseboat with Golden flag category", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Full-time A/C Luxury boat with Platinum category", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Cochin (02 N)",
        "image": "assets/images/hotels/cochin.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Hotel Killian’s", "image": "", "description": "" }, { "name": "Abad Plaza", "image": "", "description": "" }, { "name": "Napier Heritage Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Monsoon Empress", "image": "", "description": "" }, { "name": "Marine Inn", "image": "", "description": "" }, { "name": "Tribute Royale", "image": "", "description": "" }, { "name": "Olive Downtown", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Forte Kochi hotel", "image": "", "description": "" }, { "name": "Le Meridian", "image": "", "description": "" }, { "name": "Crowne Plaza", "image": "", "description": "" }, { "name": "Hotel Marriot", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Brunton Boatyard hotel", "image": "", "description": "" }, { "name": "Taj Malabar", "image": "", "description": "" }, { "name": "Grand Hyatt", "image": "", "description": "" }]
        }
      },

      {
        destination: 'Ooty (2N)',
        image: 'assets/images/a.jpg',
        categories: {
          '3-Star Deluxe': [{ name: 'Nahar Nilgiris Resort', image: 'assets/images/nahar.jpg', description: 'A peaceful stay close to major attractions with comfortable rooms.' }, { name: 'Treebo Windsor Heights Resort', image: 'assets/images/gallery80.jpg', description: 'Budget-friendly resort with modern amenities and valley views.' }, { name: 'Garden Manor Resort', image: 'assets/images/hotels/garden-manor.jpg', description: 'Calm environment with excellent service and beautiful gardens.' },],
          '4-Star Deluxe': [{ name: 'Garden Manor Resort', image: 'assets/images/hotels/garden-manor.jpg', description: 'Spacious rooms with premium facilities and scenic surroundings.' }, { name: 'Fortune Retreats', image: 'assets/images/hotels/fortune.jpg', description: 'A premium retreat offering luxury comfort and mountain views.' }, { name: 'The Monarch', image: 'assets/images/hotels/monarch.jpg', description: 'Modern interiors, fine dining, and a peaceful ambience.' },],
          '5-Star Deluxe': [{ name: 'Sterling Fern Hill, Ooty', image: 'assets/images/hotels/sterling-fern.jpg', description: 'Luxury hillside resort with panoramic views and top-tier hospitality.' }, { name: 'Accord Highland', image: 'assets/images/hotels/accord.jpg', description: 'Premium stay with luxurious rooms and breathtaking nature views.' }, { name: 'Mango Hill Shola Resort', image: 'assets/images/hotels/mango-hill.jpg', description: 'Surrounded by forests and hills, perfect for nature lovers.' }, { name: 'Fortune Sullivan Court', image: 'assets/images/hotels/sullivan.jpg', description: 'Elegant property offering high-end comfort and excellent service.' }, { name: 'Gem Park Ooty', image: 'assets/images/hotels/gem-park.jpg', description: 'A premium mountain-view hotel with indoor pool and fine dining.' },],
          '5-Star Luxury': [{ name: 'Ayatana Ooty', image: 'assets/images/hotels/ayatana.jpg', description: 'Ultra-luxury property with world-class hospitality in Ooty.' }, { name: 'Taj Savoy Hotel', image: 'assets/images/hotels/taj-savoy.jpg', description: 'Heritage Taj experience with royal-style cottages & gardens.' }, { name: 'Taj Gateway Coonoor', image: 'assets/images/hotels/taj-gateway.jpg', description: 'Iconic Taj luxury surrounded by tea gardens and hill views.' },],
        },
      },
      {
        "destination": "Mysore (02 N)",
        "image": "assets/images/hotels/mysore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Regalia Inn & Suites", "image": "", "description": "" }, { "name": "Emerald Clark Inn", "image": "", "description": "" }, { "name": "The Atrium Boutique Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "Sandesh The Prince", "image": "", "description": "" }, { "name": "Fortune JP Palace", "image": "", "description": "" }, { "name": "Regenta Central Herald", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Royal Orchid Metropole", "image": "", "description": "" }, { "name": "Royal Orchid Brindavan Gardens", "image": "", "description": "" }, { "name": "Grand Mercure Hotel", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Radisson Blu Plaza Hotel Mysore", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Hassan (01 N)",
        "image": "assets/images/hotels/hassan.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Machaan Plantation Resort", "image": "", "description": "" }, { "name": "The Chikamangalur Resort", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "The Ashhok Hassan", "image": "", "description": "" }, { "name": "Coffee Grove Resort", "image": "", "description": "" }, { "name": "Vismita County, Chikamangalur", "image": "", "description": "" }, { "name": "Bindiga Peak Resort, Chikamangalur", "image": "", "description": "" }, { "name": "The Spectrum Resort", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "IBC HoneyDrew Exotica Resort, Chikamangalur", "image": "", "description": "" }, { "name": "The Grand Retreat", "image": "", "description": "" }, { "name": "Sila Secret Mirage, Chikamangalur", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj Gateway", "image": "", "description": "" }, { "name": "The Serai, Chikamangalur", "image": "", "description": "" }, { "name": "Trivic Resort", "image": "", "description": "" }]
        }
      },
      {
        "destination": "Bangalore (01 N)",
        "image": "assets/images/hotels/bangalore.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Tulip Hotel", "image": "", "description": "" }, { "name": "ibis Bengaluru", "image": "", "description": "" }, { "name": "Richmond Hotel", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "St.Mark’s Hotel", "image": "", "description": "" }, { "name": "Capitol Hotel", "image": "", "description": "" }, { "name": "Gokulam Grand Hotel & Spa", "image": "", "description": "" }, { "name": "Fairfield by Marriott Bengaluru", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "Taj West End", "image": "", "description": "" }, { "name": "Le Méridien Bengaluru", "image": "", "description": "" }, { "name": "The Park Bengaluru", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "Taj West End", "image": "", "description": "" }, { "name": "Le Méridien Bengaluru", "image": "", "description": "" }, { "name": "The Park Bengaluru", "image": "", "description": "" }],
        }
      },
      {
        "destination": "Chennai (01 N)",
        "image": "assets/images/hotels/mahabalipuram.jpg",
        "categories": {
          "3-Star Deluxe": [{ "name": "Gokulam Park", "image": "", "description": "" }, { "name": "Sabari", "image": "", "description": "" }, { "name": "Regenta Central", "image": "", "description": "" }, { "name": "OMR Hotel", "image": "", "description": "" }, { "name": "Quality Inn Sabari", "image": "", "description": "" }],
          "4-Star Deluxe": [{ "name": "IBIS Chennai", "image": "", "description": "" }, { "name": "Four Points by Sheraton", "image": "", "description": "" }, { "name": "The Pride Hotel", "image": "", "description": "" }, { "name": "The Savera Hotel", "image": "", "description": "" }],
          "5-Star Deluxe": [{ "name": "The Park", "image": "", "description": "" }, { "name": "Hyatt Regency", "image": "", "description": "" }, { "name": "The Residency Towers", "image": "", "description": "" }],
          "5-Star Luxury": [{ "name": "ITC Chola", "image": "", "description": "" }, { "name": "Taj Coromandel", "image": "", "description": "" }, { "name": "Hilton Chennai", "image": "", "description": "" }]
        }
      },
    ],

    childPolicy: [
      'Child below 5 years: Free (without extra bed)',
      'Child 5–12 years: 25% of adult price',
      'Extra adult: 30% of adult price'
    ],
    meals: '“SAVOUR DELICIOUS MEALS” will be Breakfast Basis in all the destinations and three meals (Breakfast +Lunch+ Dinner) in the houseboat.',


    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)', icon: '🚗' },
      { pax: '4–6 Pax', description: 'A/C Innova Crysta', icon: '🚙' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Traveller', icon: '🚎' },
      { pax: '10–14 Pax', description: 'A/C 14-Seater Traveller', icon: '🚌' },
      { pax: '15–25 Pax', description: 'A/C Mini Bus', icon: '🚐' }
    ],


    "pricing": [
      {
        "season": "01 Oct 2025 – 19 Dec 2025 & 10 Jan 2026 – 31 May 2026",
        "categories": [
          { "category": "3 STAR DELUXE", "twoPax": "Rs 1.06,525", single: "", "extraPerson": "Rs 85,220" },
          { "category": "4 STAR DELUXE", "twoPax": "Rs 1,38,440", single: "", "extraPerson": "Rs 1,10,750" },
          { "category": "5 STAR DELUXE", "twoPax": "Rs 1,81,580", single: "", "extraPerson": "Rs 1,45,270" },
          { "category": "5 STAR LUXURY", "twoPax": "Rs 2,84,930", single: "", "extraPerson": "Rs 2,27,950 " }
        ]
      },
      {
        "season": "01 Jun 2026 – 30 Sep 2026 (Off Season)",
        "categories": [
          { "category": "3 STAR DELUXE RESORT", "twoPax": "Rs 85,220 /-", "single": "Rs 68,180 /-", "extraPerson": "" },
          { "category": "4 STAR DELUXE RESORT", "twoPax": "Rs 1,10,750 /-", "single": "Rs 88,600 /-", "extraPerson": "" },
          { "category": "5-STAR DELUXE RESORT", "twoPax": "Rs 1,45,260 /-", "single": "Rs 1,16,210 /-", "extraPerson": "" },
          { "category": "5-STAR LUXURY RESORT", "twoPax": "Rs 2,27,950 /-", "single": "Rs 1,82,360 /-", "extraPerson": "" }
        ]
      },
    ],

    supplementalAttractions: [
    ],

    specialOffers: [
      'Free date change before 24 hours',
      'Custom itinerary on request',
      'Best price guarantee'
    ]
  },

];



export const inboundPackages = [
  // { id: 'kerala', name: 'Kerala', gradient: 'from-green-400 to-green-600', tagline: "2 Nights / 3 Days", description: 'COCHIN - MUNNAR - COCHIN', bgImage: 'assets/images/l.jpeg' },
  { id: 'kerala-1', name: 'CHARM OF KERALA TOUR - 1', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '02 NIGHTS / 03 DAYS', description: 'COCHIN - MUNNAR - COCHIN', bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBMq-oGqD2DoMs2PTwX9O4IJRxVNp2T9GVg&s' },
  { id: 'kerala-2', name: 'CHARM OF KERALA TOUR - 2', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: "03 NIGHTS / 04 DAYS", description: "COCHIN-MUNNAR-THEKKADY-COCHIN", bgImage: 'https://d2qa7a8q0vuocm.cloudfront.net/images/4566720240912074442.png' },
  { id: 'kerala-3', name: 'CHARM OF KERALA TOUR - 3', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '04 NIGHTS / 05 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-COCHIN', bgImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/34/1200x900/2191395-2191394_munnar-1.jpg' },
  { id: 'kerala-4', name: 'CHARM OF KERALA TOUR - 4', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '05 NIGHTS / 06 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-COCHIN', bgImage: 'https://irisholidays.com/keralatourism/wp-content/uploads/2017/02/kerala-images-photos.jpg' },
  { id: 'kerala-5', name: 'CHARM OF KERALA TOUR - 5', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-KOVALAM -COCHIN', bgImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE9FFhu4vGhBkizussZetQOW0Sli2r-bNHQNPbJqaKJrk9EstPU5n34aAOGZNLX0Y4qxbcYwfpt8GuJOiwMxigSkDwtFYQIUX0OZJ7xp-oZeNAlk43mCWyVwcWVTE7Fmkap7mwztwmhx_l_bq82CfTHShguEfsP5lAcZ1NrtD0UB7fATct5Jr7AAbaFA/s1055/chirakkal%20kaali%202.jpg' },
  { id: 'kerala-6', name: 'CHARM OF KERALA TOUR - 6', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-KOVALAM TRIVANDRUN AIRPORT', bgImage: 'https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp' },
  { id: 'kerala-7', name: 'CHARM OF KERALA TOUR - 7', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-VARKALA- POOVAR -TRIVANDRUN AIRPORT', bgImage: 'https://www.rentomojo.com/blog/wp-content/uploads/2024/10/places-to-visit-in-kochi.webp' },
  { id: 'kerala-8', name: 'CHARM OF KERALA AND BORDER DESTINATIONS - 1', category: "kerala-border", gradient: 'from-green-400 to-green-600', tagline: '08 NIGHTS / 09 DAYS', description: "COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT- OOTY- MADURAI", bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmJXmAH_wvacy1pTjgmGUBBhOxeafSvoBpQ&s' },
  { id: 'kerala-9', name: 'CHARM OF KERALA AND BORDER DESTINATIONS - 2', category: "kerala-border", gradient: 'from-green-400 to-green-600', tagline: '08 NIGHTS / 09 DAYS', description: 'MADURAI-RAMESWARAM-KANYAKUMARI-KOVALAM- KUMARAKOM HOUSEBOAT - COCHIN', bgImage: 'assets/images/kerala1.jpg' },
  { id: 'kerala-10', name: 'CHARM OF KERALA AND BORDER DESTINATIONS - 3', category: "kerala-border", gradient: 'from-green-400 to-green-600', tagline: '06 NIGHTS / 07 DAYS', description: 'COIMBATORE-OOTY-MUNNAR-THEKKADY-KUMARAKOM HOUSE BOAT-COCHIN', bgImage: '/assets/images/kerala11.jpg' },
  { id: 'kerala-colours-1', name: 'COLOURS OF KERALA TOUR - 1', category: 'kerala-foreign', gradient: 'from-emerald-400 to-green-600', tagline: '05 NIGHTS / 06 DAYS', description: 'COCHIN - PERIYAR - MUNNAR - KUMARAKOM - COCHIN', bgImage: 'assets/images/kerala9.jpg' },
  { id: 'kerala-colours-2', name: 'COLOURS OF KERALA TOUR - 2', category: 'kerala-foreign', gradient: 'from-emerald-400 to-green-600', tagline: '06 NIGHTS / 07 DAYS', description: 'COCHIN - OOTY - VYTHIRI - CALICUT AIRPORT', bgImage: 'assets/images/kerala13.jpg' },
  { id: 'kerala-colours-3', name: 'COLOURS OF KERALA TOUR - 3', category: 'kerala-foreign', gradient: 'from-emerald-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN - MUNNAR - PERIYAR - KUMARAKOM (HOUSEBOAT) - COCHIN', bgImage: 'assets/images/kerala14.jpg' },
  { id: 'kerala-colours-4', name: 'COLOURS OF KERALA TOUR - 4', category: 'kerala-foreign', gradient: 'from-emerald-400 to-green-600', tagline: '12 NIGHTS / 13 DAYS', description: 'TRIVANDRUM - KOVALAM - KANYAKUMARI - MADURAI - PERIYAR - KUMARAKOM - ALLEPPEY - COCHIN', bgImage: 'assets/images/kerala12.jpg' },
  { id: 'kerala-colours-5', name: 'COLOURS OF KERALA TOUR - 5', category: 'kerala-foreign', gradient: 'from-emerald-400 to-green-600', tagline: '08 NIGHTS / 09 DAYS', description: 'TRIVANDRUM - KOVALAM - KANYAKUMARI - KUMARAKOM - THEKKADY - MUNNAR - COCHIN', bgImage: 'assets/images/kerala15.jpg' },
  { id: 'south-india-1', name: 'VISUALS OF SOUTH INDIA - 01', category: 'south-india', gradient: 'from-emerald-400 to-green-600', tagline: '15 NIGHTS / 16 DAYS', description: 'Discover the vibrant tapestry of South India’s Culture, Cuisine and Landscapes.', bgImage: 'assets/images/kerala15.jpg' },
  { id: 'south-india-2', name: 'VISUALS OF SOUTH INDIA - 02', category: 'south-india', gradient: 'from-emerald-400 to-green-600', tagline: '15 NIGHTS / 16 DAYS', description: 'Discover the vibrant tapestry of South India’s Culture, Cuisine and Landscapes.', bgImage: 'assets/images/kerala15.jpg' },
  { id: 'south-india-3', name: 'VISUALS OF SOUTH INDIA - 03', category: 'south-india', gradient: 'from-emerald-400 to-green-600', tagline: '13 NIGHTS / 14 DAYS', description: 'Discover the vibrant tapestry of South India’s Culture, Cuisine and Landscapes.', bgImage: 'assets/images/kerala15.jpg' },
  { id: 'south-india-1', name: 'VISUALS OF SOUTH INDIA - 04', category: 'south-india', gradient: 'from-emerald-400 to-green-600', tagline: '19 NIGHTS / 20 DAYS', description: 'Discover the vibrant tapestry of South India’s Culture, Cuisine and Landscapes.', bgImage: 'assets/images/kerala15.jpg' },
  { id: 'karnataka', name: 'Karnataka', category: "south-india", gradient: 'from-blue-400 to-blue-600', tagline: 'One State Many Worlds', description: 'Ancient Temples, Coffee Estates, Beaches', bgImage: 'assets/images/bangolore.jpg' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', category: "south-india", gradient: 'from-orange-400 to-orange-600', tagline: 'Land of Temples', description: 'Dravidian Architecture, Hill Stations', bgImage: 'assets/images/goa.jpg' },
  { id: 'delhi', name: 'Delhi', category: "north-india", gradient: 'from-yellow-400 to-yellow-600', tagline: 'Pearl of the Orient', description: 'Beaches, Nightlife, Portuguese Heritage', bgImage: 'assets/images/delhi.jpg' },
  { id: 'goa', name: 'Goa', category: "south-india", gradient: 'from-yellow-400 to-yellow-600', tagline: 'Pearl of the Orient', description: 'Beaches, Nightlife, Portuguese Heritage' },
  { id: 'rajasthan', name: 'Rajasthan', category: "north-india", gradient: 'from-purple-400 to-purple-600', tagline: 'Land of Kings', description: 'Palaces, Forts, Desert Safaris' },
  { id: 'kashmir', name: 'Kashmir', category: "north-india", gradient: 'from-red-400 to-red-600', tagline: 'Himalayan Paradise', description: 'Mountains, Temples, Heritage Sites' },
];

export const inboundKeralaPackages = [
  // { id: 'kerala', name: 'Kerala', category: "", gradient: 'from-green-400 to-green-600', tagline: "God's Own Country", description: 'Backwaters, Tea Gardens, Ayurveda', bgImage: 'assets/images/l.jpeg' },
  { id: 'kerala-1', name: 'CHARM OF KERALA TOUR - 1', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '02 NIGHTS / 03 DAYS', description: 'COCHIN - MUNNAR - COCHIN', bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBMq-oGqD2DoMs2PTwX9O4IJRxVNp2T9GVg&s' },
  { id: 'kerala-2', name: 'CHARM OF KERALA TOUR - 2', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: "03 NIGHTS / 04 DAYS", description: "COCHIN-MUNNAR-THEKKADY-COCHIN", bgImage: 'https://d2qa7a8q0vuocm.cloudfront.net/images/4566720240912074442.png' },
  { id: 'kerala-3', name: 'CHARM OF KERALA TOUR - 3', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '04 NIGHTS / 05 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-COCHIN', bgImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/34/1200x900/2191395-2191394_munnar-1.jpg' },
  { id: 'kerala-4', name: 'CHARM OF KERALA TOUR - 4', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '05 NIGHTS / 06 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-COCHIN', bgImage: 'https://irisholidays.com/keralatourism/wp-content/uploads/2017/02/kerala-images-photos.jpg' },
  { id: 'kerala-5', name: 'CHARM OF KERALA TOUR - 5', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-KOVALAM -COCHIN', bgImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE9FFhu4vGhBkizussZetQOW0Sli2r-bNHQNPbJqaKJrk9EstPU5n34aAOGZNLX0Y4qxbcYwfpt8GuJOiwMxigSkDwtFYQIUX0OZJ7xp-oZeNAlk43mCWyVwcWVTE7Fmkap7mwztwmhx_l_bq82CfTHShguEfsP5lAcZ1NrtD0UB7fATct5Jr7AAbaFA/s1055/chirakkal%20kaali%202.jpg' },
  { id: 'kerala-6', name: 'CHARM OF KERALA TOUR - 6', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-KOVALAM TRIVANDRUN AIRPORT', bgImage: 'https://keralatourism.mobi/images/kerala_tourism.jpg' },
  { id: 'kerala-7', name: 'CHARM OF KERALA TOUR - 7', category: "kerala-domestic", gradient: 'from-green-400 to-green-600', tagline: '07 NIGHTS / 08 DAYS', description: 'COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT-VARKALA- POOVAR -TRIVANDRUN AIRPORT', bgImage: 'https://images.unsplash.com/photo-1562007908-61b040f0ea1e' },
  { id: 'kerala-8', name: 'CHARM OF KERALA AND BORDER DESTINATIONS - 1', category: "kerala-border", gradient: 'from-green-400 to-green-600', tagline: '08 NIGHTS / 09 DAYS', description: "COCHIN-MUNNAR-THEKKADY- KUMARAKOM HOUSE BOAT- OOTY- MADURAI", bgImage: 'https://images.unsplash.com/photo-1586864387784-6d5d79ca7a51' },
  { id: 'kerala-9', name: 'CHARM OF KERALA AND BORDER DESTINATIONS - 2', category: "kerala-border", gradient: 'from-green-400 to-green-600', tagline: '08 NIGHTS / 09 DAYS', description: 'MADURAI-RAMESWARAM-KANYAKUMARI-KOVALAM- KUMARAKOM HOUSEBOAT - COCHIN', bgImage: 'https://cdn.pixabay.com/photo/2020/02/28/05/20/munnar-4887474_1280.jpg' },
  { id: 'kerala-10', name: 'CHARM OF KERALA AND BORDER DESTINATIONS - 3', category: "kerala-border", gradient: 'from-green-400 to-green-600', tagline: '06 NIGHTS / 07 DAYS', description: 'COIMBATORE-OOTY-MUNNAR-THEKKADY-KUMARAKOM HOUSE BOAT-COCHIN', bgImage: 'https://cdn.pixabay.com/photo/2016/11/29/02/06/india-1869441_1280.jpg' },

]

export const itineraryRoute = [
  { distance: 0, category: 'city', name: 'Coimbatore', altitude: 411, date: new Date('2025-05-01').getTime(), population: 2, geometry: { type: 'Point', coordinates: [76.956, 11.0168] } },
  { distance: 85, category: 'city', name: 'Ooty', altitude: 2240, date: new Date('2025-05-02').getTime(), population: 1, geometry: { type: 'Point', coordinates: [76.695, 11.4064] } },
  { distance: 190, category: 'city', name: 'Munnar', altitude: 1600, date: new Date('2025-05-03').getTime(), population: 2, geometry: { type: 'Point', coordinates: [77.059, 10.0892] } },
  { distance: 270, category: 'city', name: 'Thekkady', altitude: 915, date: new Date('2025-05-04').getTime(), population: 1, geometry: { type: 'Point', coordinates: [77.212, 9.5980] } },
  { distance: 350, category: 'city', name: 'Kumarakom', altitude: 2, date: new Date('2025-05-05').getTime(), population: 1, geometry: { type: 'Point', coordinates: [76.541, 9.5936] } },
  { distance: 370, category: 'city', name: 'Kochi', altitude: 3, date: new Date('2025-05-06').getTime(), population: 2, geometry: { type: 'Point', coordinates: [76.267, 9.9312] } }
];
