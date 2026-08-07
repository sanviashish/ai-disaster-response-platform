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

interface SidebarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    key: "dashboard",
  },
  {
    icon: Map,
    title: "Live Map",
    key: "livemap",
  },
  {
    icon: ShieldAlert,
    title: "SOS Requests",
    key: "sos",
  },
  {
    icon: Ambulance,
    title: "Rescue Teams",
    key: "teams",
  },
  {
    icon: Hospital,
    title: "Resources",
    key: "resources",
  },
  {
    icon: Home,
    title: "Hospitals",
    key: "hospitals",
  },
  {
    icon: ShieldAlert,
    title: "Relief Camps",
    key: "relief",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    key: "analytics",
  },
  {
    icon: FileText,
    title: "Reports",
    key: "reports",
  },
  {
    icon: Settings,
    title: "Settings",
    key: "settings",
  },
];

export default function Sidebar({
  activeScreen,
  setActiveScreen,
}: SidebarProps) {
  return (
    <aside className="flex h-screen w-[265px] flex-col border-r border-[#18263E] bg-[#030814] px-6 py-8">

      {/* Logo */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#23C8FF] via-[#1A8DFF] to-[#2C5DFF] shadow-[0_0_45px_rgba(35,200,255,.35)]">

          <span className="text-4xl">🛡️</span>

        </div>

        <div>

          <h1 className="text-[42px] font-black leading-none text-[#18C7FF]">
            AIDRP
          </h1>

          <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-slate-500">
            Mission Control
          </p>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex flex-1 flex-col justify-between">

        <div className="flex flex-1 flex-col justify-evenly">

          {menu.map((item) => {

            const Icon = item.icon;

            const isActive = activeScreen === item.key;

            return (

              <button
                key={item.key}
                onClick={() => setActiveScreen(item.key)}
                className={`group flex w-full items-center gap-5 rounded-2xl px-5 py-4 transition-all duration-300 ${
                  isActive
                    ? "border border-[#268BFF] bg-gradient-to-r from-[#1A7BFF] via-[#0F66FF] to-[#0A49F4] text-white shadow-[0_0_35px_rgba(26,123,255,.45)]"
                    : "border border-transparent text-slate-400 hover:border-slate-700 hover:bg-[#081324] hover:text-white"
                }`}
              >

                <Icon
                  size={22}
                  className="transition-all duration-300 group-hover:scale-110"
                />

                <span className="text-[17px] font-medium">
                  {item.title}
                </span>

              </button>

            );

          })}

        </div>

        {/* Status */}

        <div className="mt-8 rounded-[28px] border border-cyan-500/10 bg-gradient-to-b from-[#091626] to-[#050D19] p-6 shadow-[0_0_35px_rgba(0,180,255,.08)]">

          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            SYSTEM STATUS
          </p>

          <h3 className="mt-4 text-[30px] font-bold text-[#19FF8A]">
            OPERATIONAL
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            All monitoring services are online and responding normally.
          </p>

          <div className="mt-6 h-[7px] overflow-hidden rounded-full bg-slate-800">

            <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-[#00FF88] to-[#00D5FF]" />

          </div>

          <div className="mt-3 flex justify-between text-xs text-slate-500">

            <span>96%</span>

            <span>Healthy</span>

          </div>

        </div>

      </div>

    </aside>
  );
}