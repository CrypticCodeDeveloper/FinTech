
const Hero = () => {
  return (
    <section className="h-[70vh] w-full flex items-center">
      <div className="max-w-[50%]">
        <h2 className="text-white text-5xl font-semibold">
          Take control of your <span className="text-purple-700">finances</span>{" "}
          with powerful <span className="text-purple-700">tools</span>
        </h2>
        <p className="text-gray-300 mt-5">
          Track every dollar, automate savings, and plan your future —
          effortlessly. Smart Budgeting. Set goals and let our AI-powered
          assistant help you stick to them.
        </p>
        <div className="text-white flex items-center pt-8 gap-5">
          <button className="bg-purple-700 px-5 p-2 rounded-full">
            How It Works
          </button>
          <button>CONTACT US</button>
        </div>
      </div>
      <div>
        <img src='/finance_tools.webp' alt='' className="w-[800px]" />
      </div>
    </section>
  );
};

export default Hero;
