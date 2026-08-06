import QuickAction from "./QuickAction";

export default function QuickActionSection() {
  return (
    <div className="mt-6">

      <h2 className="mb-4 text-2xl font-bold">

        Quick Actions

      </h2>

      <div className="grid grid-cols-3 gap-6">

        <QuickAction
          title="Deploy Rescue Team"
          description="Assign the nearest available rescue team."
        />

        <QuickAction
          title="Open Relief Camp"
          description="Activate the closest emergency shelter."
        />

        <QuickAction
          title="Send Emergency Alert"
          description="Broadcast alerts to affected citizens."
        />

      </div>

    </div>
  );
}