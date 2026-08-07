import Image from "next/image";
import {
  MapPin,
  AlertTriangle,
  Navigation,
  ShieldAlert,
} from "lucide-react";

export default function HeroMap() {
  return (
    <section className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#07111F]">

      {/* Satellite Background */}

      <Image
        src="/satellite.gif"
        alt="Satellite Map"
        fill
        priority
        className="object-cover opacity-90"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/60 to-[#07111F]/40" />

      {/* Blue Glow */}

      <div className="absolute inset-0 bg-blue-600/10" />

      {/* Left Content */}

      <div className="absolute left-8 top-8 max-w-md">

        <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
          HIGH RISK
        </span>

        <h1 className="mt-5 text-5xl font-black text-white">
          Cyclone Alert
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-300">
          AI predicts severe cyclone activity across the eastern coastline.
          Emergency teams have been placed on standby.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
            View Live Map
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">
            Deploy Team
          </button>

        </div>

      </div>

      {/* Floating Markers */}

      <div className="absolute left-[58%] top-[35%]">

        <div className="relative">

          <span className="absolute h-8 w-8 animate-ping rounded-full bg-red-500 opacity-60"></span>

          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/50">

            <AlertTriangle size={18} className="text-white" />

          </div>

        </div>

      </div>

      <div className="absolute left-[72%] top-[52%]">

        <div className="relative">

          <span className="absolute h-8 w-8 animate-ping rounded-full bg-yellow-500 opacity-60"></span>

          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">

            <ShieldAlert size={18} className="text-white" />

          </div>

        </div>

      </div>

      <div className="absolute left-[82%] top-[25%]">

        <div className="relative">

          <span className="absolute h-8 w-8 animate-ping rounded-full bg-green-500 opacity-60"></span>

          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-500">

            <Navigation size={18} className="text-white" />

          </div>

        </div>

      </div>

      <div className="absolute left-[68%] top-[70%]">

        <div className="relative">

          <span className="absolute h-8 w-8 animate-ping rounded-full bg-cyan-500 opacity-60"></span>

          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500">

            <MapPin size={18} className="text-white" />

          </div>

        </div>

      </div>

      {/* Bottom Card */}

      <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-[#0B1628]/90 px-6 py-4 backdrop-blur-xl">

        <p className="text-sm text-slate-400">
          Active Disaster Zone
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Odisha Coastline
        </h2>

      </div>

    </section>
  );
}