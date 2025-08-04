
const Hero = () => {
  return (
    <section className=" w-full flex flex-col lg:flex-row lg:justify-between items-center pt-8">
      <div className="lg:max-w-[50%]">
        <h2 className="text-white max-lg:max-w-[700px] text-3xl sm:text-4xl lg:text-5xl font-semibold">
          No More Awkward Moments — Just Easy <span className="text-purple-800 font-bold">Splitting</span> and Instant <span className="text-purple-800 font-bold">Settling</span>.
        </h2>
        <p className="text-gray-300 mt-5">
          Whether it’s rent, trips, lunch with friends, or office contributions, DivvyUp handles the math, sends reminders, and automates wallet-to-wallet payments.
        </p>
        <div className="text-white flex items-center pt-8 gap-5">
          <button className="bg-purple-700 px-5 p-2 rounded-full">
            How It Works
          </button>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="w-full lg:max-w-[50%] flex justify-center mt-9 lg:mt-0 rounded-md p-8 overflow-hidden">
        <div className="w-full max-w-[500px] max-h-[500px] rounded-lg overflow-hidden">
              <img
              src="/hero-image.jpeg"
               className="w-full h-full object-cover"
              alt=""
            />
        </div>
        </div>
    </section>
  );
};

export default Hero;
