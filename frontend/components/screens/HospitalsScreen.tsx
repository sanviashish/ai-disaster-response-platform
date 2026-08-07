export default function HospitalsScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Hospitals
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor hospital capacity and emergency medical resources.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Hospital
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Hospitals</p>
          <h2 className="mt-2 text-3xl font-bold text-white">28</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Available Beds</p>
          <h2 className="mt-2 text-3xl font-bold text-green-400">1,248</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">ICU Beds</p>
          <h2 className="mt-2 text-3xl font-bold text-red-400">182</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Ambulances</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-400">74</h2>
        </div>

      </div>

      {/* Hospital List */}

      <div className="space-y-5">

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                AIIMS Bhubaneswar
              </h2>

              <p className="mt-2 text-slate-400">
                📍 Bhubaneswar
              </p>

            </div>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              Available
            </span>

          </div>

          <div className="mt-5 grid grid-cols-4 gap-4 text-white">

            <div>
              <p className="text-slate-400">Beds</p>
              <h3 className="text-xl font-bold">340</h3>
            </div>

            <div>
              <p className="text-slate-400">ICU</p>
              <h3 className="text-xl font-bold">42</h3>
            </div>

            <div>
              <p className="text-slate-400">Doctors</p>
              <h3 className="text-xl font-bold">215</h3>
            </div>

            <div>
              <p className="text-slate-400">Ambulances</p>
              <h3 className="text-xl font-bold">14</h3>
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Capital Hospital
              </h2>

              <p className="mt-2 text-slate-400">
                📍 Bhubaneswar
              </p>

            </div>

            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400">
              Busy
            </span>

          </div>

          <div className="mt-5 grid grid-cols-4 gap-4 text-white">

            <div>
              <p className="text-slate-400">Beds</p>
              <h3 className="text-xl font-bold">182</h3>
            </div>

            <div>
              <p className="text-slate-400">ICU</p>
              <h3 className="text-xl font-bold">26</h3>
            </div>

            <div>
              <p className="text-slate-400">Doctors</p>
              <h3 className="text-xl font-bold">124</h3>
            </div>

            <div>
              <p className="text-slate-400">Ambulances</p>
              <h3 className="text-xl font-bold">8</h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}