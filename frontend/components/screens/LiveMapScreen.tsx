export default function LiveMapScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Live Disaster Map
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor disasters and rescue operations in real time.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          Refresh
        </button>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">Active Alerts</p>
          <h2 className="mt-2 text-3xl font-bold text-red-400">24</h2>
        </div>

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">High Risk</p>
          <h2 className="mt-2 text-3xl font-bold text-orange-400">8</h2>
        </div>

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">Rescue Teams</p>
          <h2 className="mt-2 text-3xl font-bold text-green-400">31</h2>
        </div>

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">Response Time</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-400">4 min</h2>
        </div>

      </div>

      {/* Map Placeholder */}

      <div className="flex h-[500px] items-center justify-center rounded-3xl border border-white/10 bg-[#0b1628]">

        <div className="text-center">

          <div className="text-7xl">🌍</div>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Interactive Disaster Map
          </h2>

          <p className="mt-3 text-slate-400">
            Live map will be integrated here.
          </p>

        </div>

      </div>

    </div>
  );
}