export default function SOSScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            SOS Requests
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor and manage incoming emergency requests.
          </p>
        </div>

        <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
          + New Request
        </button>

      </div>

      {/* Search */}

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Search by name or location..."
          className="flex-1 rounded-xl border border-white/10 bg-[#0b1628] p-4 text-white outline-none"
        />

        <button className="rounded-xl border border-white/10 bg-[#0b1628] px-6 text-white hover:bg-white/5">
          Filter
        </button>

      </div>

      {/* SOS Cards */}

      <div className="space-y-5">

        {/* Card 1 */}

        <div className="rounded-2xl border border-red-500/30 bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <div>

              <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-semibold text-red-400">
                HIGH PRIORITY
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Rahul Sharma
              </h2>

              <p className="mt-2 text-slate-400">
                Flood Emergency • Bhubaneswar
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Reported 5 minutes ago
              </p>

            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
              Assign Team
            </button>

          </div>

        </div>

        {/* Card 2 */}

        <div className="rounded-2xl border border-yellow-500/30 bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <div>

              <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400">
                MEDIUM PRIORITY
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Priya Das
              </h2>

              <p className="mt-2 text-slate-400">
                Medical Emergency • Cuttack
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Reported 12 minutes ago
              </p>

            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
              Assign Team
            </button>

          </div>

        </div>

        {/* Card 3 */}

        <div className="rounded-2xl border border-green-500/30 bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <div>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
                LOW PRIORITY
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Ankit Singh
              </h2>

              <p className="mt-2 text-slate-400">
                Food Shortage • Puri
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Reported 35 minutes ago
              </p>

            </div>

            <button className="rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700">
              Resolved
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}