"use client";

import { useEffect, useState } from "react";
import {
  getSOSRequests,
  createSOSRequest,
  SOSRequest,
} from "@/services/sos.service";

export default function SOSScreen() {
  const [requests, setRequests] = useState<SOSRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("High");
  const [submitting, setSubmitting] = useState(false);

  async function loadSOSRequests() {
    try {
      setError("");

      const data = await getSOSRequests();

      setRequests(data);
    } catch (err) {
      console.error("Failed to load SOS requests:", err);
      setError("Unable to load SOS requests");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSOSRequests();
  }, []);

  async function handleCreateSOS(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !location.trim()) {
      setError("Please enter name and location");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      await createSOSRequest({
        name: name.trim(),
        location: location.trim(),
        priority,
      });

      // Clear form
      setName("");
      setLocation("");
      setPriority("High");
      setShowForm(false);

      // Reload SOS requests from backend
      await loadSOSRequests();
    } catch (err) {
      console.error("Failed to create SOS:", err);
      setError("Unable to create SOS request");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="text-white">
        Loading SOS requests...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            SOS Requests
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor and manage incoming emergency requests.
          </p>
        </div>

        <button
          onClick={() => {
            setShowForm(!showForm);
            setError("");
          }}
          className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          + New Request
        </button>

      </div>

      {/* ================= ERROR ================= */}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {/* ================= NEW SOS FORM ================= */}

      {showForm && (
        <form
          onSubmit={handleCreateSOS}
          className="rounded-2xl border border-white/10 bg-[#0b1628] p-6"
        >

          <h2 className="mb-5 text-2xl font-bold text-white">
            Create New SOS
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            {/* Name */}

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101d32] p-4 text-white outline-none"
            />

            {/* Location */}

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101d32] p-4 text-white outline-none"
            />

            {/* Priority */}

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101d32] p-4 text-white outline-none"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

          </div>

          {/* Form buttons */}

          <div className="mt-5 flex gap-3">

            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-50"
            >
              {submitting ? "Creating..." : "Create SOS"}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setError("");
              }}
              className="rounded-xl border border-white/10 px-5 py-3 text-white hover:bg-white/5"
            >
              Cancel
            </button>

          </div>

        </form>
      )}

      {/* ================= SEARCH ================= */}

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Search by name or location..."
          className="flex-1 rounded-xl border border-white/10 bg-[#0b1628] p-4 text-white outline-none"
        />

        <button className="rounded-xl border border-white/10 bg-[#0b1628] px-6 text-white hover:bg-white/5">
          Filter
        </button>

      </div>

      {/* ================= SOS CARDS ================= */}

      <div className="space-y-5">

        {requests.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-6 text-slate-400">
            No SOS requests found.
          </div>
        ) : (
          requests.map((request) => {

            /*
             * The backend currently has one test record
             * that may not contain priority/name/location/status.
             *
             * These fallback values prevent the frontend
             * from crashing.
             */

            const safeName = request.name || "Unknown";
            const safeLocation =
              request.location || "Unknown location";
            const safePriority =
              request.priority || "Low";
            const safeStatus =
              request.status || "Pending";

            const priority = safePriority.toLowerCase();

            const borderColor =
              priority === "high"
                ? "border-red-500/30"
                : priority === "medium"
                ? "border-yellow-500/30"
                : "border-green-500/30";

            const badgeColor =
              priority === "high"
                ? "bg-red-500/20 text-red-400"
                : priority === "medium"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-green-500/20 text-green-400";

            const isRescued =
              safeStatus.toLowerCase() === "rescued";

            return (
              <div
                key={request.id}
                className={`rounded-2xl border ${borderColor} bg-[#0b1628] p-6`}
              >

                <div className="flex items-center justify-between">

                  {/* SOS information */}

                  <div>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeColor}`}
                    >
                      {safePriority.toUpperCase()} PRIORITY
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-white">
                      {safeName}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      Emergency • {safeLocation}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Status: {safeStatus}
                    </p>

                  </div>

                  {/* Action button */}

                  <button
                    className={
                      isRescued
                        ? "rounded-xl bg-green-600 px-5 py-3 text-white"
                        : "rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
                    }
                  >
                    {isRescued
                      ? "Rescued"
                      : "Assign Team"}
                  </button>

                </div>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
}