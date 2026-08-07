import DashboardHeader from "./DashboardHeader";
import HeroMap from "./HeroMap";
import AICommander from "./AICommander";
import StatsCards from "./StatsCards";

export default function Dashboard() {
  return (
    <div className="space-y-7">

      <DashboardHeader />

      <div className="grid grid-cols-[1.9fr_0.7fr] gap-5">

        <HeroMap />

        <AICommander />

      </div>

      <StatsCards />

    </div>
  );
}