import Navbar from "../components/landing-page/navbar";
import Hero from "../components/landing-page/hero";
import TestimonialsCarousel from "../components/mvpblocks/testimonials-carousel";
import SlidingLogos from "../components/landing-page/sliding-logos";
import Footer from "../components/landing-page/footer";

import { landingPagePerks, landingPageWorkflows } from "../constants/static";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-5">
        <Hero />
        <div className="max-lg:my-3 md:mt-8">
          <SlidingLogos />
        </div>
        {/* Manage everything in your hand */}
        <div className="w-full flex flex-col lg:flex-row items-center text-white justify-between mt-2 pb-5">
          <div className="min-w-[50%]">
            <img
              src="/manage_everything.webp"
              className="w-[500px] lg:w-full max-lg:max-h-[500px]"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Manage Everything in Your Hand
            </h2>
            <p className="text-gray-300 mt-5 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. facere
              aliquid. Harum voluptate animi voluptates assumenda labore ipsam
              placeat pariatur minima dolorem culpa itaque, molestias, maxime
              suscipit voluptatum quis.
            </p>
            <div className="mt-8 lg:mt-5 space-y-8 lg:space-y-4 pb-13">
              {landingPagePerks.map((perk, i) => (
                <div
                  key={`${perk.title}-${i}`}
                  className="flex items-center gap-3"
                >
                  {/* icon */}
                  <div className="w-[60px] h-[60px] rounded-full bg-purple-800 flex items-center justify-center">
                    <perk.icon className="size-6" />
                  </div>
                  <div className="max-w-[80%]">
                    <h2 className="text-purple-800 font-semibold text-lg">
                      {perk.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* How our platform makes your workflow easier */}
        <div className="text-white flex flex-col items-center pb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-[500px] text-center">
            How our platform makes your workflow{" "}
            <span className="text-purple-700">easier</span>
          </h2>
          <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 mt-10">
            {landingPageWorkflows.map((workflow, index) => (
              <div
                key={`${workflow.title}-${index}`}
                className="w-[300px] sm:w-[350px] rounded-lg bg-purple-700 p-5"
              >
                <div className="w-[50px] h-[50px] rounded-full bg-white text-purple-800 text-xl mb-3 flex items-center justify-center font-bold">
                  {workflow.number}
                </div>
                <h2 className="font-semibold text-xl">{workflow.title}</h2>
                <p className="text-sm text-gray-300 mt-3">{workflow.desc}</p>
                <img
                  src={workflow.src}
                  alt={workflow.alt}
                  className="mt-5 h-[200px] mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <TestimonialsCarousel />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
