export interface ChatStep {
    id: string;
    question: string;
    options: { text: string; next?: string; url?: string }[];
}

export interface ChatOption {
    text: string;
    next: string;
}

export const chatFlow: ChatStep[] = [
    {
        id: 'welcome',
        question: '👋 Hi there!  What would you like help with today?',
        options: [
            { text: '🏞️ Inbound Packages', next: 'inbound' },
            { text: '✈️ Outbound Packages', next: 'outbound' },
            { text: '💼 Our Services', next: 'services' },
            { text: '📞 Contact Support', next: 'contact' },
        ],
    },
    {
        id: 'inbound',
        question: '🇮🇳 Wonderful! Which region in India interests you the most?',
        options: [
            { text: '🌴 Kerala', next: 'inbound_kerala' },
            { text: '🏜️ South India', next: 'inbound_south' },
            { text: '🏔️ North India', next: 'inbound_north' },
            { text: '⬅️ Back', next: 'welcome' },
        ],
    },
    {
        id: 'inbound_south',
        question: '🌅 Great choice! Kerala, Tamil Nadu, and Karnataka are top favourites. Would you like us to share sample itineraries?',
        options: [
            { text: 'Yes, show me Kerala tours', next: 'end' },
            { text: 'Show all South India tours', next: 'end' },
            { text: 'Back', next: 'inbound' },
        ],
    },
    {
        id: 'inbound_north',
        question: '🏔️ North India is full of heritage and adventure! Which interests you more?',
        options: [
            { text: 'Golden Triangle (Delhi-Agra-Jaipur)', next: 'end' },
            { text: 'Himalayan Tours', next: 'end' },
            { text: 'Back', next: 'inbound' },
        ],
    },
    {
        id: 'inbound_kerala',
        question: '🌅 Kerala is known for its backwaters, beaches, and lush greenery. Want us to share the best deals?',
        options: [
            { text: 'Yes, please!', next: 'end' },
            { text: 'Back', next: 'inbound' },
        ],
    },
    {
        id: 'outbound',
        question: '🌍 Amazing! Where would you like to explore?',
        options: [
            { text: '🕌 Asia (Singapore, Dubai, Thailand...)', next: 'outbound_asia' },
            { text: '🏰 Europe (Switzerland, Italy, France...)', next: 'outbound_europe' },
            { text: '🗽 Americas', next: 'outbound_america' },
            { text: '⬅️ Back', next: 'welcome' },
        ],
    },
    {
        id: 'outbound_asia',
        question: '🌏 Asia is full of wonder! Do you have a specific destination in mind?',
        options: [
            { text: 'Dubai / UAE', next: 'end' },
            { text: 'Andaman Nicobar', next: 'end' },
            { text: 'Singapore', next: 'end' },
            { text: 'Thailand', next: 'end' },
            { text: 'Back', next: 'outbound' },
        ],
    },
    {
        id: 'outbound_europe',
        question: '🇪🇺 Europe awaits! Which type of tour are you interested in?',
        options: [
            { text: 'Honeymoon Packages', next: 'end' },
            { text: 'Group / Family Trips', next: 'end' },
            { text: 'Luxury Vacations', next: 'end' },
            { text: 'Back', next: 'outbound' },
        ],
    },
    {
        id: 'outbound_america',
        question: '🇺🇸 Dreaming of the Americas? We offer curated tours to the US, Canada & South America.',
        options: [
            { text: 'Show me options', next: 'end' },
            { text: 'Back', next: 'outbound' },
        ],
    },

    // 💼 Services Flow
    {
        id: 'services',
        question: '💼 We offer a range of travel services. What would you like to know about?',
        options: [
            { text: '🏨 Hotel & Resort Booking', next: 'end' },
            { text: '🚗 Transport & Chauffeur Service', next: 'end' },
            { text: '🧭 Custom Tour Planning', next: 'end' },
            { text: '🛫 Visa & Flight Assistance', next: 'end' },
            { text: 'Back', next: 'welcome' },
        ],
    },

    // 📞 Contact Flow
    {
        id: 'contact',
        question: '📞 Sure! How would you prefer to reach us?',
        options: [
            { text: '📧 Email:', url: 'mailto:go@indiadestinationtours.com' },
            { text: '📱 Call: +91 99958 88739', url: 'tel:+919995888739' },
            { text: '💬 WhatsApp Chat', url: 'https://wa.me/919995888739' },
            { text: '⬅️ Back', next: 'welcome' }
        ]
    },

    // ✅ End
    {
        id: 'end',
        question: '🎉 Thank you! Our travel expert will reach out soon with personalized details. ✨',
        options: [
            { text: '🔁 Start Over', next: 'welcome' },
        ],
    },
];
