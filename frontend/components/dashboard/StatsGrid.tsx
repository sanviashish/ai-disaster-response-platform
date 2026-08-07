import {
  AlertTriangle,
  Ambulance,
  Hospital,
  Boxes,
} from "lucide-react";

const stats = [
  {
    title: "Active Alerts",
    value: "26",
    change: "+8%",
    color: "text-red-400",
    bg: "from-red-500/20 to-red-500/5",
    icon: AlertTriangle,
  },
  {
    title: "Rescue Teams",
    value: "14",
    change: "+2",
    color: "text-green-400",
    bg: "from-green-500/20 to-green-500/5",
    icon: Ambulance,
  },
  {
    title: "Hospitals Ready",
    value: "28",
    change: "100%",
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-cyan-500/5",
    icon: Hospital,
  },
  {
    title: "Resources",
    value: "92%",
    change: "Healthy",
    color: "text-blue-400",
    bg: "from-blue-500/20 to-blue-500/5",
    icon: Boxes,
  },
];

export default function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${item.bg} p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40`}
          >

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-[#09111f]/70 p-4">

                  <Icon
                    size={30}
                    className={`${item.color} transition-transform duration-300 group-hover:scale-110`}
                  />

                </div>

                <span className={`${item.color} text-sm font-semibold`}>
                  {item.change}
                </span>

              </div>

              <p className="mt-6 text-slate-400">
                {item.title}
              </p>

              <h2 className="mt-2 text-5xl font-black text-white">
                {item.value}
              </h2>

            </div>

          </div>

        );
      })}

    </section>
  );
}