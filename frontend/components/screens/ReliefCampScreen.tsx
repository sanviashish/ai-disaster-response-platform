"use client";

import { useEffect, useState } from "react";
import {
  getCamps,
  ReliefCamp,
} from "@/services/camps.service";

export default function ReliefCampScreen() {
  const [camps, setCamps] = useState<ReliefCamp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadCamps() {
    try {
      setError("");

      const data = await getCamps();

      setCamps(data);
    } catch (err) {
      console.error("Failed to load camps:", err);
      setError("Unable to load relief camp data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCamps();
  }, []);

  const totalPeople = camps.reduce(
    (total, camp) => total + camp.occupancy,
    0
  );

  const totalCapacity = camps.reduce(
    (total, camp) => total + camp.capacity,
    0
  );

  const availableCapacity = totalCapacity - totalPeople;

  const medicalTeams = camps.filter(
    (camp) =>
      camp.medical_team.toLowerCase() === "present"
  ).length;

  if (loading) {
    return (
      <div className="text-white">
        Loading relief camps...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Relief Camps
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor shelter camps, occupancy, and essential facilities.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Camp
        </button>

      </div>

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {/* Overview */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Active Camps
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {camps.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            People Sheltered
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-400">
            {totalPeople.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Available Capacity
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-400">
            {availableCapacity.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Medical Teams
          </p>

          <h2 className="mt-2 text-3xl font-bold text-purple-400">
            {medicalTeams}
          </h2>
        </div>

      </div>

      {/* Camp Cards */}

      {camps.length === 0 ? (
        <div className="rounded-2xl bg-[#0b1628] p-6 text-slate-400">
          No relief camps found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {camps.map((camp) => {

            const occupancyPercentage =
              Math.round(
                (camp.occupancy / camp.capacity) * 100
              );

            const isNearlyFull =
              camp.status.toLowerCase() === "nearly full";

            return (
              <div
                key={camp.id}
                className="rounded-2xl bg-[#0b1628] p-6"
              >

                {/* Camp Header */}

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold text-white">
                    {camp.name}
                  </h2>

                  <span
                    className={
                      isNearlyFull
                        ? "rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400"
                        : "rounded-full bg-green-500/20 px-4 py-2 text-green-400"
                    }
                  >
                    {camp.status}
                  </span>

                </div>

                {/* Camp Details */}

                <div className="mt-5 space-y-3 text-slate-300">

                  <p>
                    📍 {camp.location}
                  </p>

                  <p>
                    👥 Occupancy: {camp.occupancy} /{" "}
                    {camp.capacity}
                  </p>

                  {/* Occupancy Bar */}

                  <div className="pt-1">

                    <div className="mb-2 flex justify-between text-sm text-slate-400">
                      <span>Capacity Used</span>
                      <span>{occupancyPercentage}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-700">

                      <div
                        className={
                          isNearlyFull
                            ? "h-2 rounded-full bg-yellow-500"
                            : "h-2 rounded-full bg-green-500"
                        }
                        style={{
                          width: `${occupancyPercentage}%`,
                        }}
                      />

                    </div>

                  </div>

                  <p>
                    🍱 Food Stock: {camp.food_stock}
                  </p>

                  <p>
                    💧 Water Supply: {camp.water_supply}
                  </p>

                  <p>
                    🩺 Medical Team: {camp.medical_team}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
} 