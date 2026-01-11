"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Bot,
  MapPin,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function GeoTargetingIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-8 text-slate-900">
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Geo & Targeting Intelligence
        </h1>
        <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm">
          <Bot className="text-emerald-500" size={18} />
          <span className="text-sm font-medium">
            GEO Engine Actively Optimizing
          </span>
        </div>
      </header>

      {/* KPI Overview */}
      <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          { title: "Geo ROAS Lift", value: "+42%", icon: TrendingUp },
          { title: "Cities Optimized", value: "37", icon: MapPin },
          { title: "Local Influencers", value: "126", icon: Users },
          { title: "AI Targeting Precision", value: "91%", icon: Target },
        ].map(({ title, value, icon: Icon }) => (
          <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className="mt-2 text-2xl font-bold text-emerald-600">
                  {value}
                </p>
              </div>
              <Icon className="text-emerald-500" />
            </div>
          </div>
        ))}
      </section>

      {/* GEO & AI Search Visibility */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            Generative Engine Optimisation (GEO)
          </h3>
          <Line
            data={{
              labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
              datasets: [
                {
                  label: "AI Search Visibility %",
                  data: [48, 57, 68, 79],
                  borderColor: "#10b981",
                  tension: 0.4,
                },
              ],
            }}
          />
          <p className="mt-4 text-sm text-slate-500">
            Optimizes brand presence in AI-generated answers (Chat, Search, Voice).
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            Competitor Benchmarking AI
          </h3>
          <Bar
            data={{
              labels: ["Your Brand", "Competitor A", "Competitor B"],
              datasets: [
                {
                  label: "Geo Visibility Score",
                  data: [82, 63, 58],
                  backgroundColor: [
                    "#10b981",
                    "#94a3b8",
                    "#94a3b8",
                  ],
                },
              ],
            }}
          />
        </div>
      </section>

      {/* Local Demand Heatmap */}
      <section className="mb-12 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-6 font-semibold">
          Local Demand Heatmap (Simulated)
        </h3>

        <div className="grid grid-cols-5 gap-4">
          {[
            "Delhi",
            "Mumbai",
            "Bangalore",
            "Hyderabad",
            "Pune",
            "Chennai",
            "Kolkata",
            "Jaipur",
            "Ahmedabad",
            "Indore",
          ].map((city, i) => (
            <div
              key={city}
              className={`rounded-lg p-4 text-center font-medium text-white ${
                i % 3 === 0
                  ? "bg-red-400"
                  : i % 3 === 1
                  ? "bg-amber-400"
                  : "bg-emerald-500"
              }`}
            >
              {city}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Color intensity represents predicted local demand based on AI signals.
        </p>
      </section>

      {/* City-wise Targeting Engine */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            City-wise Budget Allocation
          </h3>
          <Doughnut
            data={{
              labels: ["Delhi", "Mumbai", "Bangalore", "Others"],
              datasets: [
                {
                  data: [35, 25, 20, 20],
                  backgroundColor: [
                    "#10b981",
                    "#3b82f6",
                    "#f59e0b",
                    "#94a3b8",
                  ],
                },
              ],
            }}
          />
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            Geo-based Conversion Trends
          </h3>
          <Line
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
              datasets: [
                {
                  label: "Urban",
                  data: [120, 140, 165, 180, 210],
                  borderColor: "#10b981",
                },
                {
                  label: "Tier 2/3",
                  data: [80, 95, 110, 130, 150],
                  borderColor: "#6366f1",
                },
              ],
            }}
          />
        </div>
      </section>

      {/* Hyper-local Influencer Discovery */}
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold">
          Hyper-Local Influencer Discovery
        </h3>

        <table className="w-full text-sm">
          <thead className="border-b text-slate-500">
            <tr>
              <th className="py-2 text-left">Influencer</th>
              <th>City</th>
              <th>Engagement</th>
              <th>AI Fit Score</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Riya Talks", "Delhi", "4.8%", "92%"],
              ["FitWithArjun", "Mumbai", "5.3%", "88%"],
              ["TechTamil", "Chennai", "6.1%", "94%"],
            ].map(([name, city, eng, fit]) => (
              <tr key={name} className="border-b last:border-0">
                <td className="py-3">{name}</td>
                <td>{city}</td>
                <td>{eng}</td>
                <td className="text-emerald-600 font-medium">{fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
