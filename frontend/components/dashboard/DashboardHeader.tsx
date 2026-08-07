import {
  Bell,
  Moon,
  CalendarDays,
  Clock3,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">

      {/* Left */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          AIDRP
        </p>

        <h1 className="mt-2 text-4xl font-extrabold text-white">
          AI Disaster Response Platform
        </h1>

        <p className="mt-2 text-slate-400">
          Smarter Decisions. Faster Response. Saving Lives.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Time */}

        <div className="rounded-2xl border border-white/10 bg-[#0B1628] px-5 py-3">

          <div className="flex items-center gap-2 text-slate-300">

            <Clock3 size={18} />

            <span>10:42 AM</span>

          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays size={15} />

            <span>24 May 2025</span>

          </div>

        </div>

        {/* Notification */}

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1628] text-slate-300 transition hover:border-blue-500 hover:text-white">

          <Bell size={20} />

        </button>

        {/* Theme */}

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1628] text-slate-300 transition hover:border-blue-500 hover:text-white">

          <Moon size={20} />

        </button>

      </div>

    </header>
  );
}