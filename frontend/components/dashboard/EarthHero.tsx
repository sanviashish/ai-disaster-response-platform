import Image from "next/image";

export default function EarthHero() {
  return (
    <div className="relative flex h-[520px] items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-[80px]" />

      {/* Orbit Ring */}
      <div className="absolute h-[390px] w-[390px] rounded-full border border-blue-400/20" />

      <div className="absolute h-[450px] w-[450px] rounded-full border border-cyan-400/10" />

      {/* Earth */}

      <div className="animate-spin-slow relative">

        <Image
          src="/globe.png"
          alt="Earth"
          width={360}
          height={360}
          priority
          className="drop-shadow-[0_0_70px_rgba(59,130,246,0.9)]"
        />

      </div>

      {/* Floating Status */}

      <div className="absolute left-5 top-10 rounded-2xl border border-blue-500/20 bg-[#09111f]/80 px-5 py-4 backdrop-blur-xl">

        <p className="text-xs uppercase tracking-widest text-slate-400">
          Earth Status
        </p>

        <h3 className="mt-2 text-2xl font-bold text-green-400">
          Stable
        </h3>

      </div>

      <div className="absolute bottom-10 right-0 rounded-2xl border border-cyan-500/20 bg-[#09111f]/80 px-5 py-4 backdrop-blur-xl">

        <p className="text-xs uppercase tracking-widest text-slate-400">
          Satellites
        </p>

        <h3 className="mt-2 text-2xl font-bold text-cyan-400">
          126
        </h3>

      </div>

    </div>
  );
}