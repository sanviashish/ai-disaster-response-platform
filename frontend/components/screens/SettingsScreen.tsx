export default function SettingsScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-2 text-slate-400">
            Configure platform preferences, notifications, and AI services.
          </p>

        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          Save Changes
        </button>

      </div>

      {/* Settings Sections */}

      <div className="grid grid-cols-2 gap-6">

        {/* Notifications */}

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <h2 className="text-2xl font-bold text-white">
            Notifications
          </h2>

          <div className="mt-6 space-y-5">

            <label className="flex items-center justify-between text-white">
              <span>Email Alerts</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between text-white">
              <span>SMS Alerts</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between text-white">
              <span>Push Notifications</span>
              <input type="checkbox" />
            </label>

          </div>

        </div>

        {/* AI Configuration */}

        <div className="rounded-2xl bg-[#0b1628] p-6">

          <h2 className="text-2xl font-bold text-white">
            AI Configuration
          </h2>

          <div className="mt-6 space-y-5">

            <div>

              <p className="mb-2 text-slate-400">
                AI Model
              </p>

              <select className="w-full rounded-xl bg-[#111d31] p-3 text-white">

                <option>Gemini 2.5</option>

                <option>OpenAI GPT</option>

                <option>Claude</option>

              </select>

            </div>

            <div>

              <p className="mb-2 text-slate-400">
                Response Mode
              </p>

              <select className="w-full rounded-xl bg-[#111d31] p-3 text-white">

                <option>Balanced</option>

                <option>Fast</option>

                <option>Accurate</option>

              </select>

            </div>

          </div>

        </div>

      </div>

      {/* System Information */}

      <div className="rounded-2xl bg-[#0b1628] p-6">

        <h2 className="text-2xl font-bold text-white">
          System Information
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-6">

          <div>

            <p className="text-slate-400">
              Version
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              v1.0.0
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              Backend Status
            </p>

            <h3 className="mt-2 font-bold text-green-400">
              Online
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              Database
            </p>

            <h3 className="mt-2 font-bold text-green-400">
              Connected
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}