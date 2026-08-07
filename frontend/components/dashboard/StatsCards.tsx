import {
  AlertTriangle,
  Users,
  Activity,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "Active Alerts",
    value: "24",
    change: "+12%",
    color: "text-red-400",
    icon: AlertTriangle,
    chart: [35, 42, 38, 60, 55, 74, 68],
  },
  {
    title: "Rescue Teams",
    value: "18",
    change: "+4",
    color: "text-cyan-400",
    icon: Users,
    chart: [15, 22, 20, 28, 35, 42, 50],
  },
  {
    title: "Response Time",
    value: "12m",
    change: "-18%",
    color: "text-green-400",
    icon: Activity,
    chart: [60, 55, 48, 42, 36, 30, 24],
  },
  {
    title: "System Health",
    value: "99%",
    change: "Stable",
    color: "text-blue-400",
    icon: ShieldCheck,
    chart: [82, 86, 88, 91, 93, 95, 99],
  },
];

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
      className="mt-4"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        points={points}
        className="text-cyan-400"
      />
    </svg>
  );
}

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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

            <p className={`mt-3 text-sm font-semibold ${card.color}`}>
              {card.change}
            </p>

          </div>

        );

      })}

    </div>
  );
}