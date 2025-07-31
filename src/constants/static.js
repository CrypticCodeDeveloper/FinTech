import { Handshake, PhoneCall, Lock } from "lucide-react"

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
            title: "User Friendly",
            desc: "lorem ipsum, dolor sit amet consectetur adipisicing elit. facere aliquid. Harum voluptate animi voluptates assumenda",
        },
        {
            icon: PhoneCall,
            title: "Best Support",
            desc: "lorem ipsum, dolor sit amet consectetur adipisicing elit. facere aliquid. Harum voluptate animi voluptates assumenda",
        },
        {
            icon: Lock,
            title: "Secure",
            desc: "lorem ipsum, dolor sit amet consectetur adipisicing elit. facere aliquid. Harum voluptate animi voluptates assumenda",
        },
    ]

export const landingPageWorkflows = [
    {
        number: 1,
        title: "Sign up and customize",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere magnam iste deleniti aliquid qui.",
        src: "/happy.svg",
        alt: "happy"
    },
    {
        number: 2,
        title: "Link Your Accounts",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere magnam iste deleniti aliquid qui.",
        src: "/accounts.svg",
        alt: "accounts"
    },
    {
        number: 3,
        title: "Start Saving",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere magnam iste deleniti aliquid qui.",
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
    text: 'This app completely changed the way I manage money. I automated my savings, tracked spending, and stopped worrying.',
    imageSrc: '/assets/avatars/avatar-1.webp',
    name: 'Arjun Mehta',
    username: '@arjmehta',
    role: 'Software Engineer',
  },
  {
    text: 'I’ve used a dozen finance tools, but this is by far the smoothest. Clean UI, no learning curve — just works.',
    imageSrc: '/assets/avatars/avatar-2.webp',
    name: 'Sara Lin',
    username: '@sarafintech',
    role: 'UX Designer',
  },
  {
    text: 'Our startup team now uses it for payroll, expense tracking, and budgeting. We launched fast and never looked back.',
    imageSrc: '/assets/avatars/avatar-3.webp',
    name: 'Devon Carter',
    username: '@devcarter',
    role: 'Startup Founder',
  },
  {
    text: 'I connected my accounts, and within minutes, the app gave me insights that took me hours before. Game-changer.',
    imageSrc: '/assets/avatars/avatar-4.webp',
    name: 'Priya Shah',
    username: '@priyafinance',
    role: 'Full Stack Developer',
  },
  {
    text: 'I built my emergency fund using the auto-save feature. Never knew saving could be this easy.',
    imageSrc: '/assets/avatars/avatar-5.webp',
    name: 'Leo Martin',
    username: '@leosaves',
    role: 'Freelancer',
  },
  {
    text: 'We use it to track personal and team budgets — and haven’t opened a spreadsheet in weeks.',
    imageSrc: '/assets/avatars/avatar-6.webp',
    name: 'Chloe Winters',
    username: '@chloebudgets',
    role: 'Operations Lead',
  },
];
