"use client";

import {
  Search,
  Bell,
  Moon,
  Clock3,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="flex h-[92px] items-center justify-between border-b border-[#18263E] bg-[#030814] px-10">

      {/* Search */}

      <div className="relative w-[560px]">

        <Search
          size={18}
          className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search incidents, teams, hospitals..."
          className="h-[56px] w-full rounded-[24px] border border-[#243753] bg-[#071220] pl-16 pr-6 text-[16px] font-medium text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#1C7CFF] focus:shadow-[0_0_25px_rgba(28,124,255,.25)]"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Time */}

        <div className="rounded-2xl border border-[#243753] bg-[#071220] px-5 py-3">

          <div className="flex items-center gap-2 text-white">

            <Clock3 size={18} />

            <span className="text-xl font-semibold">

              10:42 AM

            </span>

          </div>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">

            <CalendarDays size={15} />

            24 May 2025

          </div>

        </div>

        {/* Notification */}

        <button className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-[#243753] bg-[#071220] text-slate-300 transition-all duration-300 hover:border-[#1C7CFF] hover:text-white hover:shadow-[0_0_25px_rgba(28,124,255,.25)]">

          <Bell size={21} />

        </button>

        {/* Theme */}

        <button className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-[#243753] bg-[#071220] text-slate-300 transition-all duration-300 hover:border-[#1C7CFF] hover:text-white hover:shadow-[0_0_25px_rgba(28,124,255,.25)]">

          <Moon size={21} />

        </button>

        {/* User */}

        <button className="flex items-center gap-4 rounded-2xl border border-[#243753] bg-[#071220] px-5 py-2 transition-all duration-300 hover:border-[#1C7CFF] hover:shadow-[0_0_25px_rgba(28,124,255,.25)]">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#20D2FF] to-[#2463FF] text-xl font-bold text-white shadow-[0_0_25px_rgba(28,124,255,.35)]">

            S

          </div>

          <div className="text-left">

            <p className="font-semibold text-white">

              Sanvi

            </p>

            <p className="text-sm text-slate-400">

              Mission Control

            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </header>
  );
}