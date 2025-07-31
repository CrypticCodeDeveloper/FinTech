import Navbar from "../components/landing-page/navbar"
import Hero from "../components/landing-page/hero"
import {Handshake, PhoneCall, Lock} from "lucide-react"
import TestimonialsCarousel from "../components/mvpblocks/testimonials-carousel"
import SlidingLogos from "../components/landing-page/sliding-logos"
import Footer from "../components/landing-page/footer"

const LandingPage = () => {

    const perks = [
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

  return (
    <>
        <Navbar />
        <div className="px-5">
            <Hero />
            <SlidingLogos />
            {/* Manage everything in your hand */}
            <div className="w-full flex items-center text-white justify-between mt-10 pb-5">
                <div className="min-w-[50%]">
                    <img src="/manage_everything.webp" alt="" />
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">Manage Everything in Your Hand</h2>
                    <p className="text-gray-300 mt-5 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. facere aliquid. Harum voluptate animi voluptates assumenda labore ipsam placeat pariatur minima dolorem culpa itaque, molestias, maxime suscipit voluptatum quis.
                    </p>
                    <div className="mt-5 space-y-4 pb-13">

                        {
                            perks.map((perk) => 
                            <div className="flex items-center gap-3">
                                {/* icon */}
                                <div className="w-[100px] h-[100px] rounded-full bg-purple-800 flex items-center justify-center">
                                    <perk.icon className="size-9" />
                                </div>
                                <div className="max-w-[80%]">
                                    <h2 className="text-purple-800 font-semibold text-lg">{perk.title}</h2>
                                    <p className="mt-1 text-sm text-gray-400">{perk.desc}</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
            {/* How our platform makes your workflow easier */}
            <div className="text-white flex flex-col items-center pb-10">
                <h2 className="text-4xl max-w-[500px] text-center">How our platform makes your workflow <span className="text-purple-700">easier</span></h2>
                <div className="w-full flex items-center justify-center gap-10 mt-10">
                        
                    <div className="w-[350px] rounded-lg bg-purple-700 p-5">
                        <div className="w-[50px] h-[50px] rounded-full bg-white text-purple-800 text-xl mb-3 flex items-center justify-center font-bold">
                            1
                        </div>
                        <h2 className="font-semibold text-xl">Sign up and customize</h2>
                        <p className="text-sm text-gray-300 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere magnam iste deleniti aliquid qui.
                        </p>
                        <img src="/happy.svg" alt="happy" className="mt-5 h-[200px] mx-auto" />
                    </div>

                    <div className="w-[350px] rounded-lg bg-purple-700 p-5">
                        <div className="w-[50px] h-[50px] rounded-full bg-white text-purple-800 text-xl mb-3 flex items-center justify-center font-bold">
                            2
                        </div>
                        <h2 className="font-semibold text-xl">Link Your Accounts</h2>
                        <p className="text-sm text-gray-300 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere magnam iste deleniti aliquid qui.
                        </p>
                        <img src="/accounts.svg" alt="accounts" className="mt-5 h-[200px] mx-auto" />
                    </div>

                    <div className="w-[350px] rounded-lg bg-purple-700 p-5">
                        <div className="w-[50px] h-[50px] rounded-full bg-white text-purple-800 text-xl mb-3 flex items-center justify-center font-bold">
                            3
                        </div>
                        <h2 className="font-semibold text-xl">Start Saving</h2>
                        <p className="text-sm text-gray-300 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere magnam iste deleniti aliquid qui.
                        </p>
                        <img src="/savings.svg" alt="savings" className="mt-5 h-[200px] mx-auto" />
                    </div>

                </div>
            </div>
            <TestimonialsCarousel />
            <Footer />
        </div>
    </>
  )
}

export default LandingPage