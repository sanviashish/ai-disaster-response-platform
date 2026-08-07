"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Users,
  Activity,
  ShieldCheck,
} from "lucide-react";

import { getDashboard } from "@/services/dashboard.service";

interface DashboardData {
  active_sos: number;
  high_risk_zones: number;
  rescue_teams: number;
  lives_saved: number;
}

function Sparkline({ data }: { data: number[] }) {
  const width = 120;
  const height = 40;

  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y =
        height - ((value - min) / (max - min || 1)) * height;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="mt-4"
    >
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-cyan-400"
      />
    </svg>
  );
}

export default function StatsCards() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const result = await getDashboard();
        setData(result);
      } catch (err) {
        console.error("Failed to load dashboard:", err);
        setError("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="mt-5 rounded-3xl border border-white/10 bg-[#0B1628] p-6 text-white">
        Loading dashboard data...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="mt-5 rounded-3xl border border-red-500/20 bg-[#0B1628] p-6 text-red-400">
        {error || "No dashboard data available"}
      </div>
    );
  }

  const cards = [
    {
      title: "Active SOS",
      value: data.active_sos.toString(),
      change: "Live",
      color: "text-red-400",
      icon: AlertTriangle,
      chart: [35, 42, 38, 60, 55, 74, data.active_sos],
    },
    {
      title: "High Risk Zones",
      value: data.high_risk_zones.toString(),
      change: "Live",
      color: "text-orange-400",
      icon: Activity,
      chart: [4, 5, 6, 5, 7, 6, data.high_risk_zones],
    },
    {
      title: "Rescue Teams",
      value: data.rescue_teams.toString(),
      change: "Live",
      color: "text-cyan-400",
      icon: Users,
      chart: [15, 22, 20, 28, 35, 42, data.rescue_teams],
    },
    {
      title: "Lives Saved",
      value: data.lives_saved.toString(),
      change: "Live",
      color: "text-green-400",
      icon: ShieldCheck,
      chart: [1800, 1950, 2100, 2200, 2300, 2400, data.lives_saved],
    },
  ];

  return (
    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-[#0B1628] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-white/5 p-3">
                <Icon
                  size={28}
                  className={card.color}
                />
              </div>
            </div>

            <Sparkline data={card.chart} />

            <p
              className={`mt-3 text-sm font-semibold ${card.color}`}
            >
              {card.change}
            </p>
          </div>
        );
      })}
    </div>
  );
}