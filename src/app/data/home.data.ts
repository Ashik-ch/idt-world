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
        icon: 'pi pi-building',
        title: 'Relax in Our Choice of Hotels',
        subtitle: 'Handpicked Stays for Every Destination',
        desc: 'Stay in carefully selected hotels across Kerala — combining comfort, style, and authentic local charm for a memorable experience.',
        images: [
            'assets/images/a.jpg',
            'assets/images/b.jpg',
            'assets/images/c.jpg'
        ]
    },
    {
        icon: 'pi pi-car',
        title: 'Ride in Comfort & Style',
        subtitle: 'Private Chauffeur & Premium Vehicles',
        desc: 'Travel in modern, air-conditioned vehicles driven by experienced chauffeurs for a smooth and safe journey.',
        images: [
            'assets/images/d.jpg',
            'assets/images/e.jpg'
        ]
    },
    {
        icon: 'pi pi-sparkles',
        title: 'Enjoy One-of-a-Kind Experiences',
        subtitle: 'Exclusive Kerala Adventures',
        desc: 'Discover unique attractions and curated add-on adventures — from serene backwater cruises to cultural heritage tours.',
        images: [
            'assets/images/g.jpg',
            'assets/images/f.jpg',
            'assets/images/h.jpg'
        ]
    },
    {
        icon: 'pi pi-headphones',
        title: 'Dedicated Assistance',
        subtitle: '24x7 Guest Support',
        desc: 'Our expert team is available around the clock to ensure a seamless and stress-free travel experience.',
        images: [
            'assets/images/i.jpg'
        ]
    },
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
