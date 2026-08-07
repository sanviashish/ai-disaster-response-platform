import {
  Ambulance,
  Map,
  FileText,
  Megaphone,
  Brain,
  Package,
} from "lucide-react";

const actions = [
  {
    title: "Dispatch Rescue Team",
    description: "Assign nearest rescue unit",
    icon: Ambulance,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Open Live Map",
    description: "View all active incidents",
    icon: Map,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Generate AI Report",
    description: "Create disaster analysis",
    icon: Brain,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Broadcast Alert",
    description: "Send emergency notification",
    icon: Megaphone,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Manage Resources",
    description: "Food, water & medicine",
    icon: Package,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Export Report",
    description: "Download latest reports",
    icon: FileText,
    color: "from-indigo-500 to-blue-500",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#09111f] p-8">

      <h2 className="text-3xl font-bold text-white">
        Quick Actions
      </h2>

      <p className="mt-2 text-slate-400">
        Frequently used emergency operations
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111d31]/70 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >

              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color}`}
              >

                <Icon
                  size={30}
                  className="text-white"
                />

              </div>

              <h3 className="text-xl font-bold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {action.description}
              </p>

            </button>

          );

        })}

      </div>

    </section>
  );
}