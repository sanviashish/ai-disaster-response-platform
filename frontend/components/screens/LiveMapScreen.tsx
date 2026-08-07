"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const disasterIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LiveMapScreen() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Live Disaster Map
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor disasters and rescue operations in real time.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          Refresh
        </button>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">Active Alerts</p>
          <h2 className="mt-2 text-3xl font-bold text-red-400">24</h2>
        </div>

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">High Risk</p>
          <h2 className="mt-2 text-3xl font-bold text-orange-400">8</h2>
        </div>

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">Rescue Teams</p>
          <h2 className="mt-2 text-3xl font-bold text-green-400">31</h2>
        </div>

        <div className="rounded-2xl bg-[#0d1728] p-5">
          <p className="text-sm text-slate-400">Response Time</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-400">4 min</h2>
        </div>

      </div>

      {/* Interactive Map */}

      <div className="h-[550px] overflow-hidden rounded-3xl border border-white/10">

        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          scrollWheelZoom={true}
          className="h-full w-full"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[19.0760, 72.8777]}
            icon={disasterIcon}
          >
            <Popup>
              <strong>Mumbai Flood</strong>
              <br />
              Severity: High
            </Popup>
          </Marker>

          <Marker
            position={[28.6139, 77.2090]}
            icon={disasterIcon}
          >
            <Popup>
              <strong>Delhi Heatwave</strong>
              <br />
              Severity: Medium
            </Popup>
          </Marker>

          <Marker
            position={[22.5726, 88.3639]}
            icon={disasterIcon}
          >
            <Popup>
              <strong>Kolkata Cyclone Alert</strong>
            </Popup>
          </Marker>

        </MapContainer>

      </div>

    </div>
  );
}