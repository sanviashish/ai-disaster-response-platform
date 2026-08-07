import {
  Ambulance,
  Clock3,
  MapPin,
} from "lucide-react";

const missions = [
  {
    team: "Team Alpha",
    location: "Bhubaneswar",
    progress: 82,
    status: "Active",
    color: "bg-green-500",
    badge: "text-green-400 bg-green-500/20",
  },
  {
    team: "Team Bravo",
    location: "Cuttack",
    progress: 56,
    status: "En Route",
    color: "bg-yellow-500",
    badge: "text-yellow-400 bg-yellow-500/20",
  },
  {
    team: "Team Charlie",
    location: "Puri",
    progress: 29,
    status: "Deploying",
    color: "bg-blue-500",
    badge: "text-blue-400 bg-blue-500/20",
  },
];

export default function MissionStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#09111f] p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Mission Status
          </h2>

          <p className="mt-2 text-slate-400">
            Live monitoring of deployed rescue teams
          </p>

        </div>

        <Ambulance
          size={34}
          className="text-cyan-400"
        />

      </div>

      <div className="space-y-6">

        {missions.map((mission) => (

          <div
            key={mission.team}
            className="rounded-2xl border border-white/5 bg-[#111d31]/60 p-6 transition-all duration-300 hover:border-blue-500/20 hover:bg-[#16233c]"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-white">
                  {mission.team}
                </h3>

                <div className="mt-2 flex items-center gap-5 text-slate-400">

                  <div className="flex items-center gap-2">

                    <MapPin size={16} />

                    {mission.location}

                  </div>

                  <div className="flex items-center gap-2">

                    <Clock3 size={16} />

                    Live

                  </div>

                </div>

              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${mission.badge}`}
              >
                {mission.status}
              </span>

            </div>

            <div className="mt-6">

              <div className="mb-2 flex justify-between text-sm">

                <span className="text-slate-400">
                  Mission Progress
                </span>

                <span className="font-semibold text-white">
                  {mission.progress}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className={`${mission.color} h-full rounded-full transition-all duration-700`}
                  style={{
                    width: `${mission.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}