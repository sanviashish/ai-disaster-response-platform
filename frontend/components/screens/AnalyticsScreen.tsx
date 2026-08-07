export default function AnalyticsScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Disaster Analytics
          </h1>

          <p className="mt-2 text-slate-400">
            Analyze disaster trends, response performance, and resource utilization.
          </p>

        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          Export Analytics
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Total Incidents</p>
          <h2 className="mt-2 text-3xl font-bold text-red-400">438</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Resolved</p>
          <h2 className="mt-2 text-3xl font-bold text-green-400">391</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Avg Response</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-400">5.8 min</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">People Assisted</p>
          <h2 className="mt-2 text-3xl font-bold text-purple-400">14,920</h2>
        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <h2 className="text-xl font-bold text-white">
            Incident Trend
          </h2>

          <div className="mt-6 flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-600">

            <div className="text-center">

              <p className="text-6xl">📈</p>

              <p className="mt-4 text-slate-400">
                Line Chart will appear here
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <h2 className="text-xl font-bold text-white">
            Disaster Distribution
          </h2>

          <div className="mt-6 flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-600">

            <div className="text-center">

              <p className="text-6xl">🥧</p>

              <p className="mt-4 text-slate-400">
                Pie Chart will appear here
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* AI Insight */}

      <div className="rounded-2xl border border-blue-500/20 bg-[#0b1628] p-6">

        <h2 className="text-2xl font-bold text-blue-400">
          AI Insight
        </h2>

        <p className="mt-4 text-slate-300 leading-7">
          Based on recent weather patterns and historical disaster data,
          the AI predicts an increased probability of flooding in coastal
          districts over the next 24 hours. Resource deployment to these
          areas is recommended.
        </p>

      </div>

    </div>
  );
}