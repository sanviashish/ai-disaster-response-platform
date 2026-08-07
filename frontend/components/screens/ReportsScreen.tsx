export default function ReportsScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Reports
          </h1>

          <p className="mt-2 text-slate-400">
            Generate, manage, and export disaster response reports.
          </p>

        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Generate Report
        </button>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Total Reports</p>
          <h2 className="mt-2 text-3xl font-bold text-white">128</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Generated Today</p>
          <h2 className="mt-2 text-3xl font-bold text-green-400">12</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Pending Review</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-400">5</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Archived</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-400">111</h2>
        </div>

      </div>

      {/* Recent Reports */}

      <div className="rounded-2xl bg-[#0b1628] p-6">

        <h2 className="text-2xl font-bold text-white">
          Recent Reports
        </h2>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between rounded-xl bg-[#111d31] p-4">

            <div>

              <h3 className="text-lg font-semibold text-white">
                Odisha Flood Assessment
              </h3>

              <p className="text-slate-400">
                Generated • 2 hours ago
              </p>

            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Download
            </button>

          </div>

          <div className="flex items-center justify-between rounded-xl bg-[#111d31] p-4">

            <div>

              <h3 className="text-lg font-semibold text-white">
                Resource Allocation Report
              </h3>

              <p className="text-slate-400">
                Generated • Yesterday
              </p>

            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Download
            </button>

          </div>

          <div className="flex items-center justify-between rounded-xl bg-[#111d31] p-4">

            <div>

              <h3 className="text-lg font-semibold text-white">
                Rescue Operations Summary
              </h3>

              <p className="text-slate-400">
                Generated • 3 days ago
              </p>

            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Download
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}