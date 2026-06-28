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
            { text: "🏞️ Inbound Tours (India)", next: "inbound_region" },
            { text: "✈️ Outbound Tours", next: "outbound_region" },
            { text: "💼 Other Services", next: "services" },
            { text: "� Contact Support", next: "contact" },
        ],
    },
    {
        id: "inbound_region",
        question: "🇮🇳 Which region in India are you interested in?",
        options: [
            { text: "🌴 Kerala", next: "travel_details" },
            { text: "🏔️ North India", next: "travel_details" },
            { text: "🌄 South India", next: "travel_details" },
            { text: "⬅️ Back", next: "welcome" },
        ],
    },

    // 📅 Travel Details
    {
        id: "travel_details",
        question: "📅 How many days are you planning for your trip?",
        options: [
            { text: "2 Nights / 3 Days", next: "rooms" },
            { text: "3 Nights / 4 Days", next: "rooms" },
            { text: "4 Nights / 5 Days", next: "rooms" },
            { text: "5 Nights / 6 Days", next: "rooms" },
            { text: "6 Nights / 7 Days", next: "rooms" },
            { text: "7 Nights / 8 Days", next: "rooms" },
            { text: "8 Nights +", next: "rooms" }
        ]
    },

    // 🏨 Rooms
    {
        id: "rooms",
        question: "🏨 How many rooms do you need?",
        options: [
            { text: "1 Room", next: "persons" },
            { text: "2 Rooms", next: "persons" },
            { text: "3+ Rooms", next: "persons" },
        ],
    },

    // 👨‍👩‍👧 Persons
    {
        id: "persons",
        question: "👨‍👩‍👧 Who are traveling?",
        options: [
            { text: "2 Adults", next: "hotel_type" },
            { text: "Family (Adults + Kids)", next: "hotel_type" },
            { text: "Group Travel", next: "hotel_type" },
        ],
    },

    // 🏩 Hotel Category
    {
        id: "hotel_type",
        question: "🏨 What type of hotel do you prefer?",
        options: [
            { text: "⭐ 3 Star", next: "meal_plan" },
            { text: "⭐⭐ 4 Star", next: "meal_plan" },
            { text: "⭐⭐⭐ 5 Star", next: "meal_plan" },
            { text: "💎 Luxury Stay", next: "meal_plan" },
        ],
    },

    // 🍽️ Meal Plan
    {
        id: "meal_plan",
        question: "🍽️ Choose your meal plan:",
        options: [
            { text: "Breakfast (CP)", next: "inbound_result" },
            { text: "Breakfast + Dinner (MAP)", next: "inbound_result" },
            { text: "All Meals (AP)", next: "inbound_result" },
        ],
    },

    // 🎁 Inbound Result
    {
        id: "inbound_result",
        question:
            "✨ Great! We have some amazing packages for you. Would you like to receive full details?",
        options: [
            { text: "📄 Show Packages", next: "end" },
            { text: "🛠️ Customize My Trip", next: "end" },
            { text: "💬 WhatsApp Me Details", url: "https://wa.me/919995888739" },
        ],
    },

    // =========================
    // ✈️ OUTBOUND FLOW
    // =========================
    {
        id: "outbound_region",
        question: "🌍 Where would you like to travel?",
        options: [
            { text: "🌏 Asia", next: "outbound_details" },
            { text: "🇪🇺 Europe", next: "outbound_details" },
            { text: "🇺🇸 Americas", next: "outbound_details" },
            { text: "⬅️ Back", next: "welcome" },
        ],
    },

    {
        id: "outbound_details",
        question: "📅 How long is your planned trip?",
        options: [
            { text: "3–5 Days", next: "outbound_result" },
            { text: "5–7 Days", next: "outbound_result" },
            { text: "7+ Days", next: "outbound_result" },
        ],
    },

    {
        id: "outbound_result",
        question:
            "✈️ Awesome! We have curated international packages ready for you.",
        options: [
            { text: "📄 Show Packages", next: "end" },
            { text: "💬 Get Details on WhatsApp", url: "https://wa.me/919995888739" },
        ],
    },

    // =========================
    // 💼 SERVICES FLOW
    // =========================
    {
        id: "services",
        question: "💼 What service are you looking for?",
        options: [
            { text: "🏨 Hotel Booking", next: "end" },
            { text: "🚗 Transport Service", next: "end" },
            { text: "🛫 Visa Assistance", next: "end" },
            { text: "🧭 Custom Tour Planning", next: "end" },
            { text: "⬅️ Back", next: "welcome" },
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

    // ✅ END
    {
        id: "end",
        question:
            "🎉 Thank you! Our travel expert will contact you shortly with the best options.",
        options: [{ text: "🔁 Start Over", next: "welcome" }],
    },
];