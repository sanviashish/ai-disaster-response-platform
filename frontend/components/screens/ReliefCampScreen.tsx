export default function ReliefCampScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Relief Camps
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor shelter camps, occupancy, and essential facilities.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Camp
        </button>

      </div>

      {/* Overview */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Active Camps</p>
          <h2 className="mt-2 text-3xl font-bold text-white">18</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">People Sheltered</p>
          <h2 className="mt-2 text-3xl font-bold text-green-400">5,240</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Available Capacity</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-400">2,180</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Medical Staff</p>
          <h2 className="mt-2 text-3xl font-bold text-purple-400">84</h2>
        </div>

      </div>

      {/* Camp Cards */}

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Camp Alpha
            </h2>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              Open
            </span>

          </div>

          <div className="mt-5 space-y-3 text-slate-300">

            <p>📍 Bhubaneswar</p>
            <p>👥 Occupancy: 320 / 500</p>
            <p>🍞 Food Stock: Sufficient</p>
            <p>💧 Water Supply: Available</p>
            <p>🏥 Medical Team: Present</p>

          </div>

        </div>

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Camp Bravo
            </h2>

            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400">
              Nearly Full
            </span>

          </div>

          <div className="mt-5 space-y-3 text-slate-300">

            <p>📍 Cuttack</p>
            <p>👥 Occupancy: 470 / 500</p>
            <p>🍞 Food Stock: Low</p>
            <p>💧 Water Supply: Available</p>
            <p>🏥 Medical Team: Present</p>

          </div>

        </div>

      </div>

    </div>
  );
}