import {
  AlertTriangle,
  HeartPulse,
  CheckCircle2,
  Waves,
} from "lucide-react";

const alerts = [
  {
    icon: AlertTriangle,
    title: "Flash Flood Warning",
    location: "Bhubaneswar",
    time: "2 min ago",
    status: "Critical",
    color: "text-red-400",
    border: "border-red-500",
    bg: "bg-red-500",
  },
  {
    icon: HeartPulse,
    title: "Medical SOS",
    location: "Cuttack",
    time: "7 min ago",
    status: "High",
    color: "text-yellow-400",
    border: "border-yellow-500",
    bg: "bg-yellow-500",
  },
  {
    icon: Waves,
    title: "Cyclone Alert",
    location: "Puri Coast",
    time: "15 min ago",
    status: "Medium",
    color: "text-blue-400",
    border: "border-blue-500",
    bg: "bg-blue-500",
  },
  {
    icon: CheckCircle2,
    title: "Rescue Mission Completed",
    location: "Jagatsinghpur",
    time: "26 min ago",
    status: "Resolved",
    color: "text-green-400",
    border: "border-green-500",
    bg: "bg-green-500",
  },
];

export default function RecentAlerts() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#09111f] p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Live Alert Feed
          </h2>

          <p className="mt-2 text-slate-400">
            Real-time emergency updates
          </p>

        </div>

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

          <span className="text-green-400 font-semibold">
            LIVE
          </span>

        </div>

      </div>

      <div className="space-y-5">

        {alerts.map((alert) => {

          const Icon = alert.icon;

          return (

            <div
              key={alert.title}
              className={`group rounded-2xl border-l-4 ${alert.border} bg-[#111d31]/70 p-5 transition-all duration-300 hover:bg-[#16233c] hover:translate-x-2`}
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${alert.bg}/20`}
                  >

                    <Icon
                      size={28}
                      className={alert.color}
                    />

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-white">
                      {alert.title}
                    </h3>

                    <p className="mt-1 text-slate-400">
                      {alert.location}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className={`font-semibold ${alert.color}`}>
                    {alert.status}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {alert.time}
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}