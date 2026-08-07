import {
  BrainCircuit,
  Radio,
  Users,
  Map,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function AICommander() {
  return (
    <div className="h-full rounded-[30px] border border-[#1B2E4B] bg-gradient-to-b from-[#071220] to-[#040B17] p-8 shadow-[0_0_40px_rgba(18,124,255,.08)]">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <BrainCircuit
              size={34}
              className="text-cyan-400"
            />

            <h2 className="text-4xl font-bold text-white">

              AI Commander

            </h2>

            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300">

              BETA

            </span>

          </div>

          <p className="mt-2 text-sm text-slate-400">

            Gemini Intelligence Engine

          </p>

        </div>

        <div className="h-10 w-24 rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-transparent blur-md"></div>

      </div>

      {/* Recommendation */}

      <div className="mt-8">

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">

          AI Recommendation

        </p>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#0A1629] p-5">

          <div className="flex items-start gap-3">

            <Sparkles
              className="mt-1 text-cyan-400"
              size={20}
            />

            <p className="text-lg leading-8 text-slate-200">

              Deploy <span className="font-semibold text-white">2 additional rescue teams</span> to the eastern coastline.
              Flood probability has increased significantly.

            </p>

          </div>

        </div>

      </div>

      {/* Confidence */}

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-lg text-slate-300">

            Confidence Level

          </span>

          <span className="text-2xl font-bold text-cyan-400">

            96%

          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-[#15233A]">

          <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-10">

        <h3 className="mb-5 text-2xl font-bold text-white">

          Quick Actions

        </h3>

        <div className="grid grid-cols-2 gap-4">

          <button className="group rounded-2xl border border-[#1E3354] bg-[#091423] p-5 transition hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(18,124,255,.18)]">

            <Radio className="mb-4 text-red-400" />

            <p className="font-medium text-white">

              Broadcast Alert

            </p>

          </button>

          <button className="group rounded-2xl border border-[#1E3354] bg-[#091423] p-5 transition hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(18,124,255,.18)]">

            <Users className="mb-4 text-blue-400" />

            <p className="font-medium text-white">

              Deploy Teams

            </p>

          </button>

          <button className="group rounded-2xl border border-[#1E3354] bg-[#091423] p-5 transition hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(18,124,255,.18)]">

            <Map className="mb-4 text-green-400" />

            <p className="font-medium text-white">

              View Resources

            </p>

          </button>

          <button className="group rounded-2xl border border-[#1E3354] bg-[#091423] p-5 transition hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(18,124,255,.18)]">

            <BrainCircuit className="mb-4 text-violet-400" />

            <p className="font-medium text-white">

              AI Prediction

            </p>

          </button>

        </div>

      </div>

    </div>
  );
}