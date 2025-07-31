import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '../ui/kibo-ui/marquee';

const logos = [
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


const SlidingLogos = () => (
  <div className="flex size-full items-center justify-center py-16 w-[90%] mx-auto">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent className="flex items-center gap-8">
        {logos.map((logo, index) => (
          <MarqueeItem className="h-40 w-40" key={index}>
            <img
              alt={logo.company}
              className="overflow-hidden rounded-full w-full h-full object-cover"
              src={logo.src}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default SlidingLogos;
