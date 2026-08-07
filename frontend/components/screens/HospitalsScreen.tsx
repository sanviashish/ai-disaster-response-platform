"use client";

import { useEffect, useState } from "react";
import {
  getHospitals,
  Hospital,
} from "@/services/hospital.service";

export default function HospitalsScreen() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadHospitals() {
    try {
      setError("");

      const data = await getHospitals();

      setHospitals(data);
    } catch (err) {
      console.error("Failed to load hospitals:", err);
      setError("Unable to load hospital data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHospitals();
  }, []);

  const totalBeds = hospitals.reduce(
    (total, hospital) => total + hospital.available_beds,
    0
  );

  const hospitalsWithOxygen = hospitals.filter(
    (hospital) => hospital.oxygen
  ).length;

  if (loading) {
    return (
      <div className="text-white">
        Loading hospitals...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Hospitals
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor hospital capacity and emergency medical resources.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          + Add Hospital
        </button>

      </div>

      {/* ================= ERROR ================= */}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {/* ================= SUMMARY CARDS ================= */}

      <div className="grid grid-cols-3 gap-5">

        {/* Hospitals */}

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Hospitals
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {hospitals.length}
          </h2>
        </div>

        {/* Available Beds */}

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Available Beds
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-400">
            {totalBeds}
          </h2>
        </div>

        {/* Oxygen Availability */}

        <div className="rounded-2xl bg-[#0b1628] p-5">
          <p className="text-slate-400">
            Oxygen Available
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-400">
            {hospitalsWithOxygen}/{hospitals.length}
          </h2>
        </div>

      </div>

      {/* ================= HOSPITAL LIST ================= */}

      <div className="space-y-5">

        {hospitals.length === 0 ? (
          <div className="rounded-2xl bg-[#0b1628] p-6 text-slate-400">
            No hospitals found.
          </div>
        ) : (
          hospitals.map((hospital) => {

            const isAvailable = hospital.available_beds > 0;

            return (
              <div
                key={hospital.id}
                className="rounded-2xl border border-white/10 bg-[#0b1628] p-6"
              >

                {/* Hospital Header */}

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {hospital.name}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      📍 {hospital.location}
                    </p>

                  </div>

                  <span
                    className={
                      isAvailable
                        ? "rounded-full bg-green-500/20 px-4 py-2 text-green-400"
                        : "rounded-full bg-red-500/20 px-4 py-2 text-red-400"
                    }
                  >
                    {isAvailable
                      ? "Available"
                      : "No Beds"}
                  </span>

                </div>

                {/* Hospital Stats */}

                <div className="mt-5 grid grid-cols-2 gap-4 text-white">

                  {/* Beds */}

                  <div className="rounded-xl bg-white/5 p-4">

                    <p className="text-slate-400">
                      Available Beds
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {hospital.available_beds}
                    </h3>

                  </div>

                  {/* Oxygen */}

                  <div className="rounded-xl bg-white/5 p-4">

                    <p className="text-slate-400">
                      Oxygen
                    </p>

                    <h3
                      className={
                        hospital.oxygen
                          ? "mt-1 text-xl font-bold text-green-400"
                          : "mt-1 text-xl font-bold text-red-400"
                      }
                    >
                      {hospital.oxygen
                        ? "Available"
                        : "Unavailable"}
                    </h3>

                  </div>

                </div>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
}