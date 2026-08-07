"use client";

import { useEffect, useState } from "react";
import {
  getTeams,
  RescueTeam,
} from "@/services/teams.service";

export default function RescueTeamsScreen() {
  const [teams, setTeams] = useState<RescueTeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadTeams() {
    try {
      setError("");

      const data = await getTeams();

      setTeams(data);
    } catch (err) {
      console.error("Failed to load rescue teams:", err);
      setError("Unable to load rescue team data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTeams();
  }, []);

  const availableTeams = teams.filter(
    (team) => team.status.toLowerCase() === "available"
  ).length;

  const teamsOnMission = teams.filter(
    (team) => team.status.toLowerCase() === "on mission"
  ).length;

  const totalMembers = teams.reduce(
    (total, team) => total + team.members,
    0
  );

  if (loading) {
    return (
      <div className="text-white">
        Loading rescue teams...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Rescue Teams
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor rescue teams and assign emergency missions.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Team
        </button>

      </div>

      {/* ================= ERROR ================= */}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {/* ================= SUMMARY ================= */}

      <div className="grid grid-cols-3 gap-5">

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Total Teams
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {teams.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Available Teams
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-400">
            {availableTeams}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Members on Teams
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-400">
            {totalMembers}
          </h2>
        </div>

      </div>

      {/* ================= SEARCH ================= */}

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Search team..."
          className="flex-1 rounded-xl border border-white/10 bg-[#0b1628] p-4 text-white outline-none"
        />

        <button className="rounded-xl border border-white/10 bg-[#0b1628] px-6 text-white hover:bg-white/5">
          Filter
        </button>

      </div>

      {/* ================= TEAM CARDS ================= */}

      {teams.length === 0 ? (
        <div className="rounded-2xl bg-[#0b1628] p-6 text-slate-400">
          No rescue teams found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {teams.map((team) => {

            const status = team.status.toLowerCase();

            const isAvailable = status === "available";
            const isMission = status === "on mission";

            const borderColor = isAvailable
              ? "border-green-500/20"
              : isMission
              ? "border-yellow-500/20"
              : "border-red-500/20";

            const statusColor = isAvailable
              ? "bg-green-500/20 text-green-400"
              : isMission
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400";

            return (
              <div
                key={team.id}
                className={`rounded-2xl border ${borderColor} bg-[#0b1628] p-6`}
              >

                {/* Team Header */}

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold text-white">
                    {team.team}
                  </h2>

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${statusColor}`}
                  >
                    {team.status}
                  </span>

                </div>

                {/* Team Information */}

                <div className="mt-5 space-y-3 text-slate-400">

                  <p>
                    📍 {team.location}
                  </p>

                  <p>
                    👥 {team.members} Members
                  </p>

                  <p>
                    🚨 Status: {team.status}
                  </p>

                </div>

                {/* Action */}

                <button
                  className={
                    isAvailable
                      ? "mt-6 w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700"
                      : "mt-6 w-full rounded-xl border border-white/10 py-3 text-slate-300 hover:bg-white/5"
                  }
                >
                  {isAvailable
                    ? "Assign Mission"
                    : "View Mission"}
                </button>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}