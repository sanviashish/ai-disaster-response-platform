import GlobeMap from "../map/GlobeMap";
import AICommander from "../ai/AICommander";
import MetricSection from "../stats/MetricSection";
import QuickActionSection from "../actions/QuickActionSection";

export default function Dashboard() {
  return (
    <div className="flex h-full flex-col gap-6">

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          <GlobeMap />
        </div>

        <div className="col-span-4">
          <AICommander />
        </div>

      </div>

      <MetricSection />

      <QuickActionSection />

    </div>
  );
}