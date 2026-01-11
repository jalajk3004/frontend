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
import { Bot, TrendingUp, DollarSign, Users } from "lucide-react";

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

export default function AnalyticsPerformanceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-8">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Analytics & Performance Intelligence
        </h1>
        <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm">
          <Bot className="text-emerald-500" size={18} />
          <span className="text-sm font-medium">
            Performance Intelligence Engine Active
          </span>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          {
            title: "Total ROI",
            value: "3.4x",
            icon: TrendingUp,
            color: "text-emerald-600",
          },
          {
            title: "Cost Per Lead",
            value: "₹214",
            icon: DollarSign,
            color: "text-cyan-600",
          },
          {
            title: "Weekly Report",
            value: "Generated",
            icon: Bot,
            color: "text-indigo-600",
          },
          {
            title: "Influencers Tracked",
            value: "18",
            icon: Users,
            color: "text-pink-600",
          },
        ].map(({ title, value, icon: Icon, color }) => (
          <div
            key={title}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className={`mt-2 text-2xl font-bold ${color}`}>
                  {value}
                </p>
              </div>
              <Icon className={color} />
            </div>
          </div>
        ))}
      </section>

      {/* Ad Analyzer Dashboard */}
      <section className="mb-12 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Ad Analyzer Dashboard
        </h2>
        <Line
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "CTR %",
                data: [2.1, 2.4, 2.2, 2.7, 2.9, 2.5, 3.1],
                borderColor: "#10b981",
                backgroundColor: "rgba(16,185,129,0.2)",
                tension: 0.4,
              },
              {
                label: "CPA ₹",
                data: [320, 300, 290, 270, 250, 260, 230],
                borderColor: "#6366f1",
                backgroundColor: "rgba(99,102,241,0.2)",
                tension: 0.4,
              },
            ],
          }}
        />
      </section>

      {/* Facebook + Google Dashboards */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            Facebook Ads Performance
          </h3>
          <Bar
            data={{
              labels: ["Reach", "Clicks", "Leads", "Conversions"],
              datasets: [
                {
                  label: "Facebook",
                  data: [12000, 3200, 860, 420],
                  backgroundColor: "#3b82f6",
                },
              ],
            }}
          />
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            Google Ads Performance
          </h3>
          <Bar
            data={{
              labels: ["Impressions", "Clicks", "Leads", "Sales"],
              datasets: [
                {
                  label: "Google Ads",
                  data: [18000, 4100, 1020, 510],
                  backgroundColor: "#f59e0b",
                },
              ],
            }}
          />
        </div>
      </section>

      {/* ROI & Cost Intelligence */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            ROI Distribution
          </h3>
          <Doughnut
            data={{
              labels: ["Facebook", "Google", "Influencers"],
              datasets: [
                {
                  data: [45, 35, 20],
                  backgroundColor: [
                    "#3b82f6",
                    "#f59e0b",
                    "#10b981",
                  ],
                },
              ],
            }}
          />
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">
            Cost Per Lead Tracking
          </h3>
          <Line
            data={{
              labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
              datasets: [
                {
                  label: "CPL ₹",
                  data: [320, 290, 260, 214],
                  borderColor: "#ec4899",
                  tension: 0.4,
                },
              ],
            }}
          />
        </div>
      </section>

      {/* Influencer Performance */}
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold">
          Influencer Performance Tracking
        </h3>
        <Bar
          data={{
            labels: ["Influencer A", "B", "C", "D"],
            datasets: [
              {
                label: "Leads Generated",
                data: [320, 210, 410, 180],
                backgroundColor: "#10b981",
              },
            ],
          }}
        />
      </section>
    </div>
  );
}
