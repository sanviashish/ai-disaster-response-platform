import {
  Brain,
  ShieldAlert,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function AIInsights() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#09111f] via-[#0d1830] to-[#09111f] p-8">

      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-blue-500/20 p-4">

              <Brain className="text-blue-400" size={32} />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                AI Situation Report
              </h2>

              <p className="text-slate-400">
                Gemini Disaster Intelligence Engine
              </p>

            </div>

          </div>

          <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
            ● ONLINE
          </span>

        </div>

        {/* Confidence */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-[#111d31]/70 p-5">

            <p className="text-slate-400">
              Confidence
            </p>

            <h3 className="mt-2 text-4xl font-black text-cyan-400">
              98.6%
            </h3>

          </div>

          <div className="rounded-2xl bg-[#111d31]/70 p-5">

            <p className="text-slate-400">
              Threat Level
            </p>

            <h3 className="mt-2 text-4xl font-black text-red-400">
              HIGH
            </h3>

          </div>

          <div className="rounded-2xl bg-[#111d31]/70 p-5">

            <p className="text-slate-400">
              Prediction Window
            </p>

            <h3 className="mt-2 text-4xl font-black text-green-400">
              24 hrs
            </h3>

          </div>

        </div>

        {/* Recommendations */}

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111d31]/70 p-6">

          <div className="mb-6 flex items-center gap-3">

            <Sparkles className="text-yellow-400" />

            <h3 className="text-xl font-bold text-white">
              AI Recommendations
            </h3>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <ShieldAlert className="text-red-400" />

              <p className="text-slate-300">
                High flood probability detected along the eastern coastal
                region. Deploy emergency teams immediately.
              </p>

            </div>

            <div className="flex items-center gap-4">

              <TrendingUp className="text-cyan-400" />

              <p className="text-slate-300">
                Increase medical resource allocation by 20% in high-risk
                districts.
              </p>

            </div>

            <div className="flex items-center gap-4">

              <Brain className="text-blue-400" />

              <p className="text-slate-300">
                AI forecasts a 92% chance of additional SOS requests within
                the next six hours.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}