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
        <div className="max-lg:my-3">
          <SlidingLogos />
        </div>
        {/* Manage everything in your hand */}
        <div className="w-full flex flex-col lg:flex-row items-center text-white justify-between mt-2 pb-5">
          <div className="min-w-[50%] flex justify-center mb-9 lg:mb-0">
            <div className="max-w-[400px] h-[300px] sm:max-w-[500px] sm:h-[400px] md:max-w-[550px] lg:h-[450px] rounded-md overflow-hidden">
              <img
                src="/illustration.jpeg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Why People Love DivvyUp
            </h2>
            <p className="text-gray-300 mt-5 text-sm">
              Made for real people, real groups, and real money moments. From
              simple bill splits to group savings and shared payments, DivvyUp
              takes the stress out of managing money with others — so you can
              focus on what really matters.
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
            How DivvyUp Makes Group Money{" "}
            <span className="text-purple-700">Simple</span>
          </h2>
          <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 mt-10">
            {landingPageWorkflows.map((workflow, index) => (
              <div
                key={`${workflow.title}-${index}`}
                className="w-[300px] sm:w-[350px] rounded-lg bg-purple-800 p-5"
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
