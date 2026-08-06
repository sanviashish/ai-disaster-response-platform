"use client";

import {
  LayoutDashboard,
  Map,
  ShieldAlert,
  Ambulance,
  Hospital,
  Home,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Dashboard", active: true },
  { icon: Map, title: "Live Map" },
  { icon: ShieldAlert, title: "SOS Requests" },
  { icon: Ambulance, title: "Rescue Teams" },
  { icon: Hospital, title: "Resources" },
  { icon: Home, title: "Hospitals" },
  { icon: ShieldAlert, title: "Relief Camps" },
  { icon: BarChart3, title: "Analytics" },
  { icon: FileText, title: "Reports" },
  { icon: Settings, title: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="relative flex h-screen w-[250px] flex-col border-r border-white/5 bg-[#07111f]">

      {/* Logo */}

      <div className="border-b border-white/5 p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-2xl shadow-lg shadow-blue-500/30">

            🛡️

          </div>

          <div>

            <h1 className="text-4xl font-extrabold tracking-tight text-blue-400">

              AIDRP

            </h1>

            <p className="mt-1 text-xs text-slate-500">

              AI Disaster Response Platform

            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="mt-6 flex-1 px-4">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`mb-2 flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                item.active
                  ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/10"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span className="text-[15px]">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Status */}

      <div className="m-4 rounded-2xl border border-white/5 bg-[#0b1628] p-5">

        <p className="text-xs uppercase tracking-wider text-slate-500">

          System Status

        </p>

        <h3 className="mt-2 text-lg font-bold text-green-400">

          OPERATIONAL

        </h3>

        <p className="mt-1 text-sm text-slate-500">

          All systems running
        </p>

        <div className="mt-5 h-1 w-full rounded-full bg-slate-800">

          <div className="h-1 w-4/5 rounded-full bg-green-400"></div>

        </div>

      </div>
    </aside>
  );
} 