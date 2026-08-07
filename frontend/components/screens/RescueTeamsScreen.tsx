export default function RescueTeamsScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Rescue Teams
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor rescue teams and assign emergency missions.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Team
        </button>

      </div>

      {/* Search */}

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Search team..."
          className="flex-1 rounded-xl border border-white/10 bg-[#0b1628] p-4 text-white outline-none"
        />

        <button className="rounded-xl border border-white/10 bg-[#0b1628] px-6 text-white hover:bg-white/5">
          Filter
        </button>

      </div>

      {/* Team Cards */}

      <div className="grid grid-cols-3 gap-6">

        {/* Team Alpha */}

        <div className="rounded-2xl border border-green-500/20 bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Team Alpha
            </h2>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
              Available
            </span>

          </div>

          <div className="mt-5 space-y-2 text-slate-400">

            <p>📍 Bhubaneswar</p>

            <p>👥 6 Members</p>

            <p>🚑 Vehicle Ready</p>

            <p>⛽ Fuel: 82%</p>

          </div>

          <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
            Assign Mission
          </button>

        </div>

        {/* Team Bravo */}

        <div className="rounded-2xl border border-yellow-500/20 bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Team Bravo
            </h2>

            <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
              On Mission
            </span>

          </div>

          <div className="mt-5 space-y-2 text-slate-400">

            <p>📍 Cuttack</p>

            <p>👥 5 Members</p>

            <p>🚑 Vehicle Active</p>

            <p>⛽ Fuel: 64%</p>

          </div>

          <button className="mt-6 w-full rounded-xl bg-yellow-600 py-3 text-white">
            View Mission
          </button>

        </div>

        {/* Team Charlie */}

        <div className="rounded-2xl border border-red-500/20 bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Team Charlie
            </h2>

            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
              Offline
            </span>

          </div>

          <div className="mt-5 space-y-2 text-slate-400">

            <p>📍 Puri</p>

            <p>👥 4 Members</p>

            <p>🚑 Vehicle Maintenance</p>

            <p>⛽ Fuel: 18%</p>

          </div>

          <button className="mt-6 w-full rounded-xl bg-red-600 py-3 text-white">
            Contact Team
          </button>

        </div>

      </div>

    </div>
  );
}