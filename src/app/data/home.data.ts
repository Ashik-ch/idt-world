export interface Feature {
    iconBg: string;
    iconColor: string;
    iconPath: string;
    innerIcon?: string;
    title: string;
    description: string;
    image: string;
}

export const features: Feature[] = [
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
        innerIcon: 'M15 11a3 3 0 11-6 0 3 3 0z',
        title: 'Tailored private tours',
        description:
            'Every tour is customized to match your travel style, interests, and pace — giving you a truly personal experience.',
        image: 'assets/images/feature.jpg',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M4 17l6-6 4 4 8-8M21 12v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11',
        title: 'Vehicle available throughout the tour',
        description:
            'Travel with comfort and convenience — enjoy a dedicated vehicle and driver for your entire journey, from arrival to departure.',
        image: 'assets/images/feature9.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Customized meal options',
        description:
            'Relish handpicked cuisines — from traditional local flavors to special dietary meals tailored to your preferences.',
        image: 'assets/images/feature1.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M18 13v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6M12 3v10m0 0l3-3m-3 3l-3-3',
        title: 'Ultimate travel freedom',
        description:
            'Experience total flexibility — change your itinerary, explore at your pace, and make every moment your own.',
        image: 'assets/images/feature10.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
        title: 'Curated activities for each guest',
        description:
            'Enjoy thoughtfully designed activities that blend culture, adventure, and relaxation — tailored for every traveler.',
        image: 'assets/images/feature4.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
        title: 'Transparent all-inclusive pricing',
        description:
            'No hidden costs — every package includes taxes, tolls, and fees, ensuring a worry-free experience from start to finish.',
        image: 'assets/images/feature5.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
        title: 'Airport assistance for every guest',
        description:
            'From meet-and-greet services to hassle-free transfers, we ensure a smooth start and end to your journey.',
        image: 'assets/images/feature6.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
        title: 'Full flexibility',
        description:
            'Plans changed? No problem — modify your travel dates or itinerary without additional fees up to 24 hours before departure.',
        image: 'assets/images/feature3.png',
    },
    {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        iconPath:
            'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
        title: 'Prompt response to inquiries',
        description:
            'Our support team is available round the clock — quick answers and personalized guidance, whenever you need.',
        image: 'assets/images/feature7.png',
    },
];

export const Services = [
    {
        id: 'transportation',
        icon: 'pi pi-car',
        title: 'Transportation',
        subtitle: 'Private Chauffeur & Premium Vehicles',
        categories: [
            'Sedan Car (Toyota Etios/Swift Dzire)',
            'Toyota Innova Crysta',
            '12-Seater Force Traveller',
            '17-Seater Force Traveller',
            'Mini Luxury Bus',
            'Luxury Bus'
        ],
        desc: 'Travel in modern, air-conditioned vehicles driven by experienced chauffeurs for a smooth and safe journey.',
        images: ['assets/images/bus.jpg', 'assets/images/crysta.jpg', 'assets/images/force.jpg']
    },
    {
        id: 'activities',
        icon: 'pi pi-sparkles',
        title: 'Activities',
        subtitle: 'Exclusive Kerala Adventures',
        categories: [
            'Cookery Demonstration Tour',
            'Kalarippayattu Programme',
            'Backwater Cruises',
            'Cultural Heritage Tours'
        ],
        desc: 'Discover unique attractions and curated add-on activities — from serene backwater cruises to cultural heritage tours.',
        images: ['assets/images/kalari.jpg', 'assets/images/culture.jpg', 'assets/images/h.jpg']
    },
    {
        id: 'houseboats',
        icon: 'pi pi-home',
        title: 'Houseboats',
        subtitle: 'Backwater Retreats',
        categories: [
            'Standard Houseboats',
            'Luxury Houseboats',
            'Deluxe Houseboats',
            'Premium Houseboats',
        ],
        desc: 'Sail across Kerala’s iconic backwaters in comfort with a range of houseboat experiences, from luxury to traditional.',
        images: ['assets/images/h.jpg', 'assets/images/i.jpg']
    },
    {
        id: 'tours',
        icon: 'pi pi-globe',
        title: 'Distinctive Tours',
        subtitle: 'Adventure & Culture',
        categories: [
            'Mountain Trekking',
            'Bamboo River Rafting',
            'Jeep Safari',
            'Elephant Safari',
            'Village Walks',
            'Bird Watching',
            'Heritage Walks',
            'Cycling Tours'
        ],
        desc: 'Curated tours to connect you with nature, culture, and authentic Kerala adventures.',
        images: ['assets/images/m.jpeg', 'assets/images/k.jpg', 'assets/images/f.jpg']
    },
    {
        id: 'villas',
        icon: 'pi pi-home',
        title: 'Villas & Rentals',
        subtitle: 'Private Stays',
        categories: ['Coming Soon'],
        desc: 'Exclusive private villas and rental properties launching soon.',
        images: ['assets/images/d.jpg', 'assets/images/c.jpg']
    },
    // {
    //     icon: 'pi pi-briefcase',
    //     title: 'Meeting Venues',
    //     subtitle: 'Corporate & Events',
    //     categories: ['Coming Soon'],
    //     desc: 'Tailored venues for business meetings, conferences, and events — coming soon.',
    //     images: ['assets/images/i.jpg']
    // }
];

export const DESTINATIONS = [
    {
        name: 'Munnar',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'West Wood Resort',
                    image: 'assets/images/banner1.png',
                    desc: 'Eco-friendly resort nestled amidst lush greenery, offering comfortable stays with scenic views.'
                },
                {
                    name: 'Eastend Hotel',
                    image: 'assets/images/banner2.png',
                    desc: 'Well-located hotel close to town, ideal for relaxed sightseeing and family stays.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Trivers Resort',
                    image: 'assets/resorts/munnar/trivers.jpg',
                    desc: 'Luxury hillside resort with infinity pool and breathtaking valley views.'
                },
                {
                    name: 'Rivulet Resort',
                    image: 'assets/images/a.jpg',
                    desc: 'Boutique riverside resort blending modern comfort with serene nature.'
                },
                {
                    name: 'Elephant Passage Resort',
                    image: 'assets/resorts/munnar/elephant-passage.jpg',
                    desc: 'Premium nature resort with panoramic mountain views and elegant rooms.'
                },
                {
                    name: 'Fog Resort',
                    image: 'assets/resorts/munnar/fog.jpg',
                    desc: 'Hilltop retreat famous for misty mornings and peaceful ambiance.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Tall Trees Resort',
                    image: 'assets/resorts/munnar/tall-trees.jpg',
                    desc: 'Luxury forest resort surrounded by tall trees and tranquil landscapes.'
                },
                {
                    name: 'Blanket Hotel',
                    image: 'assets/resorts/munnar/blanket.jpg',
                    desc: 'Elegant luxury hotel offering infinity pool and panoramic views.'
                },
                {
                    name: 'The Valle Resort',
                    image: 'assets/resorts/munnar/valle.jpg',
                    desc: 'Valley-facing premium resort ideal for honeymooners and couples.'
                },
                {
                    name: 'Fragrant Nature Resort',
                    image: 'assets/resorts/munnar/fragrant-nature.jpg',
                    desc: 'Heritage-inspired luxury property with modern amenities.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Tea Castle',
                    image: 'assets/resorts/munnar/tea-castle.jpg',
                    desc: 'Palatial heritage resort set amid tea plantations.'
                },
                {
                    name: 'Chandys Windy Woods',
                    image: 'assets/resorts/munnar/windy-woods.jpg',
                    desc: 'Ultra-luxury forest retreat with premium villas.'
                },
                {
                    name: 'Chandys Drizzle Drops',
                    image: 'assets/resorts/munnar/drizzle-drops.jpg',
                    desc: 'Nature luxury resort designed for serenity and privacy.'
                },
                {
                    name: 'Spice Tree Resort',
                    image: 'assets/resorts/munnar/spice-tree.jpg',
                    desc: 'Luxury hill resort blending spice aromas with scenic views.'
                },
                {
                    name: 'Grand Cliff Resort',
                    image: 'assets/resorts/munnar/grand-cliff.jpg',
                    desc: 'Cliff-top luxury resort with uninterrupted valley views.'
                }
            ]
        }
    },
    {
        name: 'Wayanad',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Le Coffee Resort',
                    image: 'assets/resorts/wayanad/le-coffee.jpg',
                    desc: 'Coffee plantation stay offering peaceful nature experience.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Vythiri Village',
                    image: 'assets/resorts/wayanad/vythiri-village.jpg',
                    desc: 'Forest-themed resort with pools, spa, and family activities.'
                },
                {
                    name: 'Vythiri Mist Resort',
                    image: 'assets/resorts/wayanad/vythiri-mist.jpg',
                    desc: 'Mist-covered luxury retreat surrounded by rainforest.'
                },
                {
                    name: 'Serene Valley Resort',
                    image: 'assets/resorts/wayanad/serene-valley.jpg',
                    desc: 'Eco-resort near river offering calm and relaxation.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Flora Vythiri Resort',
                    image: 'assets/resorts/wayanad/flora.jpg',
                    desc: 'Luxury eco-resort located in lush greenery.'
                },
                {
                    name: 'Pepper Trail Resort',
                    image: 'assets/resorts/wayanad/pepper-trail.jpg',
                    desc: 'Heritage plantation resort with colonial charm.'
                },
                {
                    name: 'GRT Great Trails',
                    image: 'assets/resorts/wayanad/grt.jpg',
                    desc: 'Premium hillside resort with scenic viewpoints.'
                },
                {
                    name: 'Wayanad Wild Resort CGH',
                    image: 'assets/resorts/wayanad/wild.jpg',
                    desc: 'Wildlife-inspired luxury stay near forest reserves.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Taj Wayanad',
                    image: 'assets/resorts/wayanad/taj.jpg',
                    desc: 'Ultra-luxury forest resort with signature Taj hospitality.'
                },
                {
                    name: 'Mountain Shadows Resort',
                    image: 'assets/resorts/wayanad/mountain-shadows.jpg',
                    desc: 'Riverside luxury villas with private pools.'
                }
            ]
        }
    },
    {
        name: 'Thekkady',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Abad Green Forest',
                    image: 'assets/resorts/thekkady/abad-green-forest.jpg',
                    desc: 'Nature-friendly resort close to Periyar Wildlife Sanctuary.'
                },
                {
                    name: 'Pepper Vine Resort',
                    image: 'assets/resorts/thekkady/pepper-vine.jpg',
                    desc: 'Eco-resort set amidst spice plantations offering serene stays.'
                },
                {
                    name: 'Hotel Lincoln Square',
                    image: 'assets/resorts/thekkady/lincoln-square.jpg',
                    desc: 'Comfortable hotel near town, ideal for short wildlife visits.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Mountain Courtyard Resort',
                    image: 'assets/resorts/thekkady/mountain-courtyard.jpg',
                    desc: 'Hill-view resort with modern rooms and tranquil ambiance.'
                },
                {
                    name: 'Forest Canopy Resort',
                    image: 'assets/resorts/thekkady/forest-canopy.jpg',
                    desc: 'Eco-luxury stay surrounded by dense greenery.'
                },
                {
                    name: 'Reen Resorts',
                    image: 'assets/resorts/thekkady/reen-resort.jpg',
                    desc: 'Premium plantation resort with scenic surroundings.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Poetree Resort',
                    image: 'assets/resorts/thekkady/poetree.jpg',
                    desc: 'Luxury hillside resort with panoramic valley views.'
                },
                {
                    name: 'Elephant Court',
                    image: 'assets/resorts/thekkady/elephant-court.jpg',
                    desc: 'Elegant luxury resort inspired by traditional Kerala design.'
                },
                {
                    name: 'Green Woods Resort',
                    image: 'assets/resorts/thekkady/green-woods.jpg',
                    desc: 'Premium forest resort offering comfort and nature.'
                },
                {
                    name: 'Hills & Hues Resort',
                    image: 'assets/resorts/thekkady/hills-hues.jpg',
                    desc: 'Modern luxury stay overlooking lush hills.'
                },
                {
                    name: 'Blanket Resort',
                    image: 'assets/resorts/thekkady/blanket.jpg',
                    desc: 'Luxury retreat blending comfort with nature views.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Spice Village Resort',
                    image: 'assets/resorts/thekkady/spice-village.jpg',
                    desc: 'Award-winning eco-luxury resort inspired by tribal architecture.'
                },
                {
                    name: 'Lake Palace Resort KTDC',
                    image: 'assets/resorts/thekkady/lake-palace.jpg',
                    desc: 'Luxury lakefront resort inside Periyar Tiger Reserve.'
                }
            ]
        }
    },

    {
        name: 'Kumarakom',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Paradise Resort',
                    image: 'assets/resorts/kumarakom/paradise.jpg',
                    desc: 'Backwater-facing resort offering peaceful stays.'
                },
                {
                    name: 'Manor Backwater Resort',
                    image: 'assets/resorts/kumarakom/manor.jpg',
                    desc: 'Heritage backwater resort with traditional charm.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Abad Whispering Palms Resort',
                    image: 'assets/resorts/kumarakom/whispering-palms.jpg',
                    desc: 'Lakeside resort with beautiful sunset views.'
                },
                {
                    name: 'KTDC Water Scapes',
                    image: 'assets/resorts/kumarakom/water-scapes.jpg',
                    desc: 'Premium backwater resort offering floating cottages.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Backwater Ripples Resort',
                    image: 'assets/resorts/kumarakom/backwater-ripples.jpg',
                    desc: 'Luxury resort overlooking Vembanad Lake.'
                },
                {
                    name: 'Gokulam Grand Resort',
                    image: 'assets/resorts/kumarakom/gokulam.jpg',
                    desc: 'Premium lakefront resort with modern amenities.'
                },
                {
                    name: 'Niramaya Retreat Backwaters',
                    image: 'assets/resorts/kumarakom/niramaya.jpg',
                    desc: 'Wellness-focused luxury retreat by the backwaters.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Kumarakom Lake Resort',
                    image: 'assets/resorts/kumarakom/lake-resort.jpg',
                    desc: 'Iconic luxury heritage resort on the lake.'
                },
                {
                    name: 'Coconut Lagoon by CGH',
                    image: 'assets/resorts/kumarakom/coconut-lagoon.jpg',
                    desc: 'Eco-luxury heritage resort with authentic Kerala vibes.'
                },
                {
                    name: 'Taj Kumarakom Resort & Spa',
                    image: 'assets/resorts/kumarakom/taj.jpg',
                    desc: 'Ultra-luxury backwater resort with signature Taj service.'
                }
            ]
        }
    },

    {
        name: 'Kovalam',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Soma Palm Shore',
                    image: 'assets/resorts/kovalam/soma-palm.jpg',
                    desc: 'Beachfront Ayurvedic resort offering wellness stays.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Jasmine Palace',
                    image: 'assets/resorts/kovalam/jasmine.jpg',
                    desc: 'Comfortable resort near Kovalam beach.'
                },
                {
                    name: 'Hotel Neelakanta',
                    image: 'assets/resorts/kovalam/neelakanta.jpg',
                    desc: 'Affordable beachside hotel with ocean views.'
                },
                {
                    name: 'KTDC Samudra Resort',
                    image: 'assets/resorts/kovalam/samudra.jpg',
                    desc: 'Cliff-top resort offering panoramic sea views.'
                },
                {
                    name: 'Trivancore Beach Resort',
                    image: 'assets/resorts/kovalam/trivancore.jpg',
                    desc: 'Beach-facing resort with traditional hospitality.'
                },
                {
                    name: 'Sagara Beach Resort',
                    image: 'assets/resorts/kovalam/sagara.jpg',
                    desc: 'Premium beachfront stay near Lighthouse Beach.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Udaya Samudra Beach Resort',
                    image: 'assets/resorts/kovalam/udaya.jpg',
                    desc: 'Large luxury beach resort with pools and spa.'
                },
                {
                    name: 'Gokulam Grand Turtle on the Beach',
                    image: 'assets/resorts/kovalam/gokulam.jpg',
                    desc: 'Luxury beachfront resort ideal for families.'
                },
                {
                    name: 'Rock Holm at the Lighthouse Beach',
                    image: 'assets/resorts/kovalam/rockholm.jpg',
                    desc: 'Cliffside luxury boutique resort with ocean views.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'The Leela Kovalam',
                    image: 'assets/resorts/kovalam/leela.jpg',
                    desc: 'Iconic cliff-top luxury resort overlooking Arabian Sea.'
                },
                {
                    name: 'Taj Green Cove',
                    image: 'assets/resorts/kovalam/taj-green-cove.jpg',
                    desc: 'Luxury seaside retreat blending nature and elegance.'
                },
                {
                    name: 'Niramaya Surya Samudra',
                    image: 'assets/resorts/kovalam/niramaya.jpg',
                    desc: 'Ultra-luxury wellness retreat with heritage villas.'
                }
            ]
        }
    },
    {
        name: 'Varkala',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Madathil Cottage & Resort',
                    image: 'assets/resorts/varkala/madathil.jpg',
                    desc: 'Cliffside cottage resort offering calm stays near Varkala Beach.'
                },
                {
                    name: 'Hindustan Beach Resort',
                    image: 'assets/resorts/varkala/hindustan.jpg',
                    desc: 'Beachfront resort with relaxed ambiance and ocean views.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Madathil Cottages & Resort',
                    image: 'assets/resorts/varkala/madathil-cottages.jpg',
                    desc: 'Premium cottages near cliffside with modern comforts.'
                },
                {
                    name: 'Hindustan Beach Resort',
                    image: 'assets/resorts/varkala/hindustan.jpg',
                    desc: 'Comfortable beach resort with upgraded amenities.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Deshadan Cliff & Beach Resort',
                    image: 'assets/resorts/varkala/deshadan.jpg',
                    desc: 'Luxury cliffside resort with panoramic sea views.'
                },
                {
                    name: 'Elixir Cliff',
                    image: 'assets/resorts/varkala/elixir.jpg',
                    desc: 'Boutique luxury stay overlooking Varkala Cliff.'
                },
                {
                    name: 'Villa Luca by Elixir Cliff',
                    image: 'assets/resorts/varkala/villa-luca.jpg',
                    desc: 'Premium private villas with ocean-facing views.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Taj Gateway',
                    image: 'assets/resorts/varkala/taj-gateway.jpg',
                    desc: 'Elegant luxury hotel offering refined hospitality.'
                }
            ]
        }
    },

    {
        name: 'Poovar',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Jeevan Beach Resort',
                    image: 'assets/resorts/poovar/jeevan.jpg',
                    desc: 'Beachside resort offering peaceful seaside stays.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Over the Hill Resort',
                    image: 'assets/resorts/poovar/over-the-hill.jpg',
                    desc: 'Hilltop resort with scenic coastal views.'
                },
                {
                    name: 'Isola Di Cocco',
                    image: 'assets/resorts/poovar/isola.jpg',
                    desc: 'Eco-luxury resort set amidst backwaters and greenery.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Poovar Island Resort',
                    image: 'assets/resorts/poovar/poovar-island.jpg',
                    desc: 'Backwater island resort offering unique stay experience.'
                },
                {
                    name: 'Estuary Sarovar Premiere',
                    image: 'assets/resorts/poovar/estuary.jpg',
                    desc: 'Luxury waterfront resort at river-sea confluence.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Poovar Island Resort',
                    image: 'assets/resorts/poovar/poovar-island.jpg',
                    desc: 'Luxury island retreat with private backwater access.'
                },
                {
                    name: 'Estuary Sarovar Premiere',
                    image: 'assets/resorts/poovar/estuary.jpg',
                    desc: 'Premium luxury stay with serene estuary views.'
                }
            ]
        }
    },

    {
        name: 'Kanyakumari',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Singar International',
                    image: 'assets/resorts/kanyakumari/singar.jpg',
                    desc: 'City hotel near major attractions in Kanyakumari.'
                },
                {
                    name: 'Sea View Hotel',
                    image: 'assets/resorts/kanyakumari/sea-view.jpg',
                    desc: 'Hotel offering ocean-facing rooms near the coast.'
                },
                {
                    name: 'Sealand Hotel',
                    image: 'assets/resorts/kanyakumari/sealand.jpg',
                    desc: 'Comfortable hotel close to town center.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Annai Celestial Resort by Sparsa',
                    image: 'assets/resorts/kanyakumari/annai-celestial.jpg',
                    desc: 'Premium resort offering modern comfort and sea views.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Annai Resorts & Spa',
                    image: 'assets/resorts/kanyakumari/annai-resort.jpg',
                    desc: 'Luxury beachside resort with spa facilities.'
                },
                {
                    name: 'Anantya by the Lake',
                    image: 'assets/resorts/kanyakumari/anantya.jpg',
                    desc: 'Luxury lakeside resort with private villas.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Annai Resorts & Spa',
                    image: 'assets/resorts/kanyakumari/annai-resort.jpg',
                    desc: 'Premium luxury beachfront resort experience.'
                },
                {
                    name: 'Anantya by the Lake',
                    image: 'assets/resorts/kanyakumari/anantya.jpg',
                    desc: 'Exclusive luxury stay offering privacy and elegance.'
                }
            ]
        }
    },

    {
        name: 'Vagamon',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Vaga Mist Resort',
                    image: 'assets/resorts/vagamon/vaga-mist.jpg',
                    desc: 'Hilltop resort offering misty valley views.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Wintervale Resort',
                    image: 'assets/resorts/vagamon/wintervale.jpg',
                    desc: 'Luxury hillside retreat with scenic surroundings.'
                },
                {
                    name: 'Orange Valley Resort',
                    image: 'assets/resorts/vagamon/orange-valley.jpg',
                    desc: 'Nature resort set amidst lush valleys.'
                },
                {
                    name: 'Cloud Canopy',
                    image: 'assets/resorts/vagamon/cloud-canopy.jpg',
                    desc: 'Boutique resort offering panoramic hill views.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Falcon Crest Resort',
                    image: 'assets/resorts/vagamon/falcon-crest.jpg',
                    desc: 'Premium hill resort with elegant interiors.'
                },
                {
                    name: 'Foggy Knolls Resort',
                    image: 'assets/resorts/vagamon/foggy-knolls.jpg',
                    desc: 'Luxury retreat nestled in misty hills.'
                },
                {
                    name: 'Tea Terrain Resort',
                    image: 'assets/resorts/vagamon/tea-terrain.jpg',
                    desc: 'Tea plantation resort offering peaceful stays.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Monticle Glamps Resort',
                    image: 'assets/resorts/vagamon/monticle.jpg',
                    desc: 'Luxury glamping experience in scenic hills.'
                },
                {
                    name: 'Elysian Valle Resort',
                    image: 'assets/resorts/vagamon/elysian.jpg',
                    desc: 'Ultra-luxury valley-facing resort.'
                }
            ]
        }
    },

    {
        name: 'Alappuzha',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Kumarakom Gateway Resort KTDC',
                    image: 'assets/resorts/alappuzha/gateway.jpg',
                    desc: 'Backwater resort offering comfortable lakeside stays.'
                },
                {
                    name: 'PalmGrove Lake Resort',
                    image: 'assets/resorts/alappuzha/palmgrove.jpg',
                    desc: 'Peaceful resort near scenic backwaters.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Lake Canopy Resort',
                    image: 'assets/resorts/alappuzha/lake-canopy.jpg',
                    desc: 'Premium backwater-facing resort.'
                },
                {
                    name: 'Deshadan Backwater Resort',
                    image: 'assets/resorts/alappuzha/deshadan.jpg',
                    desc: 'Heritage backwater stay with traditional charm.'
                },
                {
                    name: 'Punnamada Backwater Resort',
                    image: 'assets/resorts/alappuzha/punnamada.jpg',
                    desc: 'Luxury backwater retreat with houseboat views.'
                },
                {
                    name: 'Paloma Backwater Resort',
                    image: 'assets/resorts/alappuzha/paloma.jpg',
                    desc: 'Modern resort overlooking tranquil waters.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Uday Backwater Resort',
                    image: 'assets/resorts/alappuzha/uday.jpg',
                    desc: 'Luxury backwater stay with premium amenities.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Sterling Lake Palace Resort',
                    image: 'assets/resorts/alappuzha/sterling.jpg',
                    desc: 'Ultra-luxury palace-style backwater resort.'
                }
            ]
        }
    },

    {
        name: 'Marari',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Paradise Marari Boutique Resort',
                    image: 'assets/resorts/marari/paradise.jpg',
                    desc: 'Boutique beach resort offering peaceful stays.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Marari Village Beach Resort',
                    image: 'assets/resorts/marari/village.jpg',
                    desc: 'Beachfront village-style resort.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Abad Turtle the Beach',
                    image: 'assets/resorts/marari/abad-turtle.jpg',
                    desc: 'Luxury beach resort with eco-friendly vibes.'
                },
                {
                    name: 'Azuri Tides',
                    image: 'assets/resorts/marari/azuri.jpg',
                    desc: 'Modern boutique beach resort.'
                },
                {
                    name: 'Marari Beach Bungalow',
                    image: 'assets/resorts/marari/bungalow.jpg',
                    desc: 'Private beachfront bungalows.'
                },
                {
                    name: 'Flamingo Boutique Hotel',
                    image: 'assets/resorts/marari/flamingo.jpg',
                    desc: 'Chic boutique stay near Marari Beach.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Marari Beach Resort CGH',
                    image: 'assets/resorts/marari/cgh.jpg',
                    desc: 'Iconic eco-luxury beach resort.'
                },
                {
                    name: 'Xandari Pearl and Sand Beach Resort',
                    image: 'assets/resorts/marari/xandari.jpg',
                    desc: 'Luxury boutique beach resort with elegant design.'
                }
            ]
        }
    },

    {
        name: 'Cochin',
        categories: {
            '3★ Deluxe': [
                {
                    name: 'Napier Heritage',
                    image: 'assets/resorts/cochin/napier.jpg',
                    desc: 'Heritage-style hotel near Fort Kochi.'
                },
                {
                    name: 'The Presidency',
                    image: 'assets/resorts/cochin/presidency.jpg',
                    desc: 'City hotel with modern amenities.'
                },
                {
                    name: 'Cochin Palace',
                    image: 'assets/resorts/cochin/palace.jpg',
                    desc: 'Comfortable city stay with traditional charm.'
                },
                {
                    name: 'Hotel Grand',
                    image: 'assets/resorts/cochin/grand.jpg',
                    desc: 'Budget-friendly hotel in city center.'
                }
            ],
            '4★ Deluxe': [
                {
                    name: 'Abad Plaza',
                    image: 'assets/resorts/cochin/abad-plaza.jpg',
                    desc: 'Premium business-class hotel.'
                },
                {
                    name: 'Abad Atrium',
                    image: 'assets/resorts/cochin/abad-atrium.jpg',
                    desc: 'Upscale hotel with elegant interiors.'
                }
            ],
            '5★ Deluxe': [
                {
                    name: 'Crowne Plaza',
                    image: 'assets/resorts/cochin/crowne.jpg',
                    desc: 'Luxury waterfront hotel with premium facilities.'
                },
                {
                    name: 'Le Meridien',
                    image: 'assets/resorts/cochin/le-meridien.jpg',
                    desc: 'International luxury hotel with resort-style amenities.'
                },
                {
                    name: 'The Fern by Marriott',
                    image: 'assets/resorts/cochin/fern.jpg',
                    desc: 'Eco-friendly luxury business hotel.'
                },
                {
                    name: 'Radisson Blu',
                    image: 'assets/resorts/cochin/radisson.jpg',
                    desc: 'Premium city hotel with modern luxury.'
                }
            ],
            '5★ Luxury': [
                {
                    name: 'Brunton Boatyard',
                    image: 'assets/resorts/cochin/brunton.jpg',
                    desc: 'Luxury heritage waterfront hotel.'
                },
                {
                    name: 'Taj Malabar',
                    image: 'assets/resorts/cochin/taj-malabar.jpg',
                    desc: 'Iconic luxury hotel overlooking the harbor.'
                },
                {
                    name: 'Old Harbour Hotel',
                    image: 'assets/resorts/cochin/old-harbour.jpg',
                    desc: 'Boutique heritage luxury hotel.'
                }
            ]
        }
    }
];



export const testimonialList = [
    {
        name: 'Anjali Nair',
        location: 'Kerala, India',
        whatsapp: "+919847240456",
        contact: "+919847240456",
        rating: 4,
        message:
            'The trip was perfectly organized, and the houseboat experience in Alleppey was unforgettable!',
        avatar: 'assets/images/f.jpg',
    },
    {
        name: 'Rahul Sharma',
        location: 'Delhi, India',
        whatsapp: "+919847240456",
        contact: "+919847240456",
        rating: 4,
        message:
            'A wonderful mix of culture and nature — Munnar’s tea gardens were the highlight for me.',
        avatar: 'https://media.istockphoto.com/id/2006436002/video/happy-confident-and-portrait-of-indian-man-in-office-with-creative-professional-at-tech.jpg?s=640x640&k=20&c=vcKAWd0sGJpV3xR0AK1RCM7zTEpFUcBhQEXbNvN1M78=',
    },
    {
        name: 'Sophia Williams',
        location: 'London, UK',
        whatsapp: "+919847240456",
        contact: "+919847240456",
        rating: 5,
        message:
            'Best travel experience ever! Kerala felt like paradise with such smooth arrangements.',
        avatar: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
    },
];
