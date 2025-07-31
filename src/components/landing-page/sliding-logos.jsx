import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '../ui/kibo-ui/marquee';

import { slidingLogos } from '../../constants/static';

const SlidingLogos = () => (
  <div className="flex size-full items-center justify-center py-16 w-full lg:w-[90%] mx-auto">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent className="flex items-center gap-8">
        {slidingLogos.map((logo, index) => (
          <MarqueeItem className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32" key={index}>
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
