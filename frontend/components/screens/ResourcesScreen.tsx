"use client";

import { useEffect, useState } from "react";
import {
  getResources,
  Resource,
} from "@/services/resources.service";

export default function ResourcesScreen() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadResources() {
    try {
      setError("");

      const data = await getResources();

      setResources(data);
    } catch (err) {
      console.error("Failed to load resources:", err);
      setError("Unable to load resource data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResources();
  }, []);

  if (loading) {
    return (
      <div className="text-white">
        Loading resources...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Resource Management
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor and manage relief resources across all locations.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Resource
        </button>

      </div>

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-5">

        {resources.slice(0, 4).map((resource) => (
          <div
            key={resource.id}
            className="rounded-2xl bg-[#0b1628] p-5"
          >
            <p className="text-slate-400">
              {resource.name}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {resource.quantity.toLocaleString()}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {resource.unit}
            </p>
          </div>
        ))}

      </div>

      {/* Inventory */}

      <div className="rounded-2xl bg-[#0b1628] p-6">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Current Inventory
        </h2>

        <div className="space-y-6">

          {resources.map((resource) => {

            const percentage = Math.max(
              0,
              Math.min(100, resource.percentage)
            );

            let progressColor = "bg-green-500";

            if (resource.status === "Critical") {
              progressColor = "bg-red-500";
            } else if (resource.status === "Low") {
              progressColor = "bg-yellow-500";
            } else if (resource.name === "Water") {
              progressColor = "bg-blue-500";
            } else if (resource.name === "Shelter Kits") {
              progressColor = "bg-purple-500";
            }

            return (
              <div key={resource.id}>

                <div className="mb-2 flex justify-between text-white">

                  <span>
                    {resource.name}
                  </span>

                  <span>
                    {percentage}%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-700">

                  <div
                    className={`h-3 rounded-full ${progressColor}`}
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {resource.quantity.toLocaleString()}{" "}
                  {resource.unit}
                  {" • "}
                  {resource.status}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}