import EarthHero from "./EarthHero";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#081120] via-[#0a1630] to-[#07111f] p-10">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            AI Powered Disaster Intelligence
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight text-white">
            Disaster
            <br />
            Command Center
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Monitor disasters, coordinate rescue teams, analyze AI predictions,
            and manage emergency resources from one intelligent dashboard.
          </p>

          <div className="mt-8 flex gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-500">
              Launch AI
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              View Reports
            </button>

          </div>

          {/* Status */}

          <div className="mt-10 flex gap-8">

            <div>
              <p className="text-slate-500">
                Active Alerts
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                26
              </h2>
            </div>

            <div>
              <p className="text-slate-500">
                Rescue Teams
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                14
              </h2>
            </div>

            <div>
              <p className="text-slate-500">
                AI Accuracy
              </p>

              <h2 className="text-3xl font-bold text-cyan-400">
                98.7%
              </h2>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <EarthHero />

      </div>

    </section>
  );
}