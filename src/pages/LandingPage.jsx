import { Link } from 'react-router-dom'
import Galaxy from '@/components/deco/Galaxy'

export default function LandingPage() {
  return (
    <div className="relative w-full h-full bg-black">

      <div className="absolute inset-0">
        <Galaxy
          starSpeed={0.1}
          rotationSpeed={0}
          speed={0.4}
          hueShift={140}
          density={1}
          glowIntensity={0.3}
          twinkleIntensity={0.3}
          mouseRepulsion={false}
          transparent={false}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 text-white">
        <h1 className="text-5xl font-light tracking-widest">
          StarryWhisper
        </h1>
        <p className="text-white/40 text-sm tracking-widest">
          cast your dream in admist a sky full of aspirations and ambitions
        </p>
        <Link to="/universe">
          <button className="m-4 px-16 py-3 border-3 justify-center border-white/20 rounded-full text-sm tracking-widest text-white/70 hover:border-white/50 hover:text-white transition-all duration-300 cursor-pointer">
            Enter The Universe
          </button>
        </Link>
      </div>

    </div>
  )
}