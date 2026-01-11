
"use client";

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  PauseCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function SmartAutomation() {
  const [autonomous, setAutonomous] = useState(true);
  const [lockCreative, setLockCreative] = useState(false);
  const [aggressiveness, setAggressiveness] = useState(60);
  const [showKillModal, setShowKillModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-8 text-slate-900">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          AI Marketing Control Center
        </h1>

        {/* Autonomous Toggle */}
        <div className="flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-sm">
          <span className="font-medium">Autonomous Mode</span>
          <button
            onClick={() => setAutonomous(!autonomous)}
            className={`relative h-7 w-14 rounded-full transition ${
              autonomous ? "bg-emerald-500" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                autonomous ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Top Cards */}
      <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          "Ad Fatigue Detection",
          "Auto Creative Rotation",
          "Budget Reallocation",
          "Kill Underperforming Ads",
        ].map((item, i) => (
          <div
            key={item}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{item}</span>
              {i === 3 ? (
                <PauseCircle className="text-red-400" />
              ) : (
                <CheckCircle2 className="text-emerald-500" />
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Confidence + Last Decision */}
      <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-slate-500">
            AI Confidence
          </h3>
          <p className="text-4xl font-bold text-emerald-600">82%</p>
        </div>

        <div className="col-span-2 rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-slate-500">
            Last Decision Made
          </h3>
          <p className="text-lg">
            Paused <strong>Ad Set #23</strong> due to{" "}
            <span className="text-red-500">41% fatigue score</span>
          </p>
        </div>
      </section>

      {/* Ad Health Table */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">Ad Health Monitor</h3>

        <table className="w-full text-sm">
          <thead className="border-b text-slate-500">
            <tr>
              <th className="py-2 text-left">Ad Name</th>
              <th>Fatigue</th>
              <th>CTR Trend</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Creative A</td>
              <td className="text-red-500">78%</td>
              <td className="flex items-center justify-center gap-1 text-red-500">
                <TrendingDown size={16} /> ↓
              </td>
              <td className="text-orange-500">At Risk</td>
            </tr>
            <tr>
              <td className="py-3">Creative B</td>
              <td className="text-emerald-600">22%</td>
              <td className="flex items-center justify-center gap-1 text-emerald-600">
                <TrendingUp size={16} /> ↑
              </td>
              <td className="text-emerald-600">Healthy</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Rotation Timeline */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">
          AI Fatigue-Based Creative Rotation
        </h3>

        <div className="grid grid-cols-4 gap-4 text-center">
          {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
            <div key={day} className="rounded-lg bg-slate-50 p-4">
              <p className="font-medium">{day}</p>
              <p className="mt-2 text-emerald-600">
                {["Ad A", "Ad A", "Ad B", "Ad C"][i]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={lockCreative}
              onChange={() => setLockCreative(!lockCreative)}
            />
            Lock Creative
          </label>

          <div className="flex items-center gap-3">
            <span className="text-sm">Rotation Aggressiveness</span>
            <input
              type="range"
              value={aggressiveness}
              onChange={(e) => setAggressiveness(Number(e.target.value))}
            />
          </div>
        </div>
      </section>

      {/* Live Optimization Panel */}
      <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Campaigns</h3>
          <ul className="space-y-2">
            <li>Campaign A</li>
            <li>Campaign B</li>
            <li>Campaign C</li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Live AI Decisions</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Bot className="text-emerald-500" size={16} />
              [Meta] Lowered bid by 7%
            </li>
            <li className="flex items-center gap-2">
              <Bot className="text-emerald-500" size={16} />
              [Google] Paused keyword “buy cheap”
            </li>
          </ul>
        </div>
      </section>

      {/* Kill Ad Confirmation */}
      <section className="text-center">
        <button
          onClick={() => setShowKillModal(true)}
          className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white shadow"
        >
          Simulate Kill Ad
        </button>
      </section>

      {showKillModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h3 className="mb-3 text-lg font-semibold text-red-600">
              ⚠️ AI wants to pause Ad #45
            </h3>
            <ul className="mb-6 text-sm">
              <li>CTR ↓ 53%</li>
              <li>Fatigue ↑ 81%</li>
            </ul>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowKillModal(false)}
                className="rounded-md px-4 py-2"
              >
                Keep Running
              </button>
              <button className="rounded-md bg-red-500 px-4 py-2 text-white">
                Pause Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
