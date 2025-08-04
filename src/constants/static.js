import { Handshake, Users , Map } from "lucide-react"

export const navLinks = [
    {
      label: "Home",
      to: "/"
    },
    {
      label: "About us",
      to: "/about"
    },
    {
      label: "Contact",
      to: "/contact"
    },
    {
      label: "Pricing",
      to: "/pricing"
    }
  ]

export const landingPagePerks = [
        {
            icon: Handshake,
            title: "Clean Interface",
            desc: "No clutter, no confusion. DivvyUp is built to be as easy as chatting with friends — just tap, split, and settle.",
        },
        {
            icon: Users,
            title: "Perfect for Any Group",
            desc: "Whether you’re roommates, coworkers, NYSC team members, or a circle of friends — DivvyUp works for any group setup, large or small.",
        },
        {
            icon: Map,
            title: "Built for Nigerians",
            desc: "DivvyUp understands the local experience. From Naira-based transactions to wallet-friendly transfers and mobile-first design, it fits your everyday life.",
        },
    ]

export const landingPageWorkflows = [
    {
        number: 1,
        title: "Sign Up & Customize Your Group",
        desc: "Create an account in minutes and set up your first group — give it a name, choose how you want to split, and invite your people.  It's fast, flexible, and made for all kinds of group expenses.",
        src: "/happy.svg",
        alt: "happy"
    },
    {
        number: 2,
        title: "Add Expenses & Choose How to Split",
        desc: "Add any shared cost, choose to split it equally or manually, and DivvyUp will calculate who owes what. No math, no spreadsheets — we do the heavy lifting.",
        src: "/accounts.svg",
        alt: "accounts"
    },
    {
        number: 3,
        title: "Track and Settle With Ease",
        desc: "DivvyUp keeps everyone updated and sends reminders until payments are settled — so no one’s left guessing. Stay organized, stress-free, and focused on what matters.",
        src: "/savings.svg",
        alt: "savings"
    },
]

export const slidingLogos = [
  {
    company: "Stripe",
    src: "https://cdn.simpleicons.org/stripe/0F62FE",
  },
  {
    company: "PayPal",
    src: "https://cdn.simpleicons.org/paypal/00457C",
  },
  {
    company: "Visa",
    src: "https://cdn.simpleicons.org/visa/1A1F71",
  },
  {
    company: "MasterCard",
    src: "https://cdn.simpleicons.org/mastercard/EB001B",
  },
  {
    company: "Coinbase",
    src: "https://cdn.simpleicons.org/coinbase/0052FF",
  },
  {
    company: "Cash App",
    src: "https://cdn.simpleicons.org/cashapp/00C244",
  },
  {
    company: "Wise",
    src: "https://cdn.simpleicons.org/wise/0ABF53",
  },
  {
    company: "Square",
    src: "https://cdn.simpleicons.org/square/28C101",
  },
  {
    company: "Apple Pay",
    src: "https://cdn.simpleicons.org/applepay/ffffff",
  },
  {
    company: "Google Pay",
    src: "https://cdn.simpleicons.org/googlepay/4285F4",
  },
];

export const defaultTestimonials = [
  {
    text: 'DivvyUp completely changed the way we split bills in my friend group. No more awkward follow-ups — everyone pays their share.',
    imageSrc: '/assets/avatars/avatar-1.webp',
    name: 'Arjun Mehta',
    username: '@arjmehta',
    role: 'Student',
  },
  {
    text: 'I’ve tried other apps, but this one’s by far the easiest. Simple UI, no confusion — just works for group money stuff.',
    imageSrc: '/assets/avatars/avatar-2.webp',
    name: 'Sara Lin',
    username: '@sarafintech',
    role: 'NYSC Member',
  },
  {
    text: 'We use DivvyUp in our apartment to manage shared expenses. It saves time, avoids tension, and keeps things fair.',
    imageSrc: '/assets/avatars/avatar-3.webp',
    name: 'Devon Carter',
    username: '@devcarter',
    role: 'Roommate',
  },
  {
    text: 'Instead of chasing people in WhatsApp, I just send a DivvyUp link. Everyone sees what they owe and pays up.',
    imageSrc: '/assets/avatars/avatar-4.webp',
    name: 'Priya Shah',
    username: '@priyafinance',
    role: 'Corper',
  },
  {
    text: 'Even my less tech-savvy friends figured it out fast. It’s clean, fast, and perfect for anything we do together.',
    imageSrc: '/assets/avatars/avatar-5.webp',
    name: 'Leo Martin',
    username: '@leosaves',
    role: 'Church Group Member',
  },
  {
    text: 'We use it for trips, hangouts, and bridal contributions. DivvyUp is now part of our group routine.',
    imageSrc: '/assets/avatars/avatar-6.webp',
    name: 'Chloe Winters',
    username: '@chloebudgets',
    role: 'Event Planner',
  },
]
