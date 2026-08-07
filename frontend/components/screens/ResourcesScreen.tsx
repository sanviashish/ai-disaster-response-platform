export default function ResourcesScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Resource Management
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor and manage relief resources across all locations.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Resource
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Food Kits</p>
          <h2 className="mt-2 text-3xl font-bold text-white">2,480</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Water Bottles</p>
          <h2 className="mt-2 text-3xl font-bold text-white">12,340</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Medical Kits</p>
          <h2 className="mt-2 text-3xl font-bold text-white">930</h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">Generators</p>
          <h2 className="mt-2 text-3xl font-bold text-white">48</h2>
        </div>

      </div>

      {/* Inventory */}

      <div className="rounded-2xl bg-[#0b1628] p-6">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Current Inventory
        </h2>

        <div className="space-y-6">

          <div>
            <div className="mb-2 flex justify-between text-white">
              <span>🍞 Food Supplies</span>
              <span>82%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div className="h-3 w-[82%] rounded-full bg-green-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-white">
              <span>💧 Water</span>
              <span>65%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div className="h-3 w-[65%] rounded-full bg-blue-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-white">
              <span>💊 Medicines</span>
              <span>39%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div className="h-3 w-[39%] rounded-full bg-yellow-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-white">
              <span>⛺ Shelter Kits</span>
              <span>91%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div className="h-3 w-[91%] rounded-full bg-purple-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-white">
              <span>🔋 Power Units</span>
              <span>27%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div className="h-3 w-[27%] rounded-full bg-red-500"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}