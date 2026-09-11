import { ArrowRightIcon, LeafIcon } from "lucide-react"
import { heroSectionData } from "../../assets/assets"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center">

        {/* 🛠️ FIXED TYPO: "insset-0" to "inset-0" & added "w-full" so the background image covers the area properly */}
        <img src={heroSectionData.hero_image} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent"/>

        {/* 🛠️ FIXED TYPO: "pyy-20" to "py-20" */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-xl xl:pl-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-orange-300 bg-orange-300/10 rounded-full mb-5">
                    <LeafIcon className="size-3"/> Farm-Fresh & Organic
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
                    Nourish your home with <span className="text-orange-300">Earth's finest</span>
                </h1>

                <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">
                    Fresh, organic groceries delivered from local farms to your doorstep. Quality you can taste, convenience you deserve.
                </p>

                {/* 🛠️ FIXED LAYOUT: Added flex layout to place buttons side-by-side with wrapping for mobile views */}
                <div className="flex flex-wrap items-center gap-4">
                    <Link to="/products" className="px-7 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                        Shop Now <ArrowRightIcon className="size-4"/>
                    </Link>

                    {/* 🛠️ FIXED BUTTON: Added inline-flex/center utilities and active transition scale matching the first action */}
                    <Link to="/products" className="px-7 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center active:scale-[0.98]">
                        Browse Categories 
                    </Link>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero
