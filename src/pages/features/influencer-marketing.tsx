"use client";

import {
  BadgeCheck,
  Briefcase,
  Building2,
  Link,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";

export default function CreatorInfluencerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-8 text-slate-900">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Influencer Marketing
        </h1>
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          Creator Account
        </span>
      </header>

      {/* Creator Profile */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Creator"
            className="h-24 w-24 rounded-full object-cover"
          />

          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              Riya Sharma <BadgeCheck className="text-emerald-500" size={18} />
            </h2>
            <p className="text-slate-500">Fashion & Lifestyle Creator</p>

            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Delhi
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} /> 42K Followers
              </span>
              <span className="flex items-center gap-1 text-emerald-600">
                <TrendingUp size={14} /> 5.1% Engagement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Visibility */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">
          Brands Discovering You
        </h3>

        <div className="flex flex-wrap gap-3">
          {["Nykaa", "Zara", "H&M", "Mamaearth", "Myntra"].map((brand) => (
            <span
              key={brand}
              className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
            >
              {brand}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm text-slate-500">
          These brands can view your profile and reach out for collaborations.
        </p>
      </section>

      {/* Incoming Brand Requests */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">
          Brand Collaboration Requests
        </h3>

        <div className="space-y-4">
          {[
            {
              brand: "Nykaa",
              campaign: "Festive Makeup Launch",
              type: "Performance-based",
            },
            {
              brand: "Zara",
              campaign: "Summer Collection Reel",
              type: "Fixed + Bonus",
            },
          ].map((req) => (
            <div
              key={req.brand}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <Building2 size={16} /> {req.brand}
                </p>
                <p className="text-sm text-slate-500">
                  {req.campaign} · {req.type}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="rounded-md border px-4 py-2 text-sm">
                  View
                </button>
                <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white">
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">
          Active Campaigns
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              brand: "H&M",
              metric: "₹18,400 Sales",
              code: "RIYA10",
            },
            {
              brand: "Mamaearth",
              metric: "326 Leads",
              code: "ME-RIYA",
            },
          ].map((camp) => (
            <div
              key={camp.brand}
              className="rounded-lg border p-5"
            >
              <p className="mb-1 flex items-center gap-2 font-medium">
                <Briefcase size={16} /> {camp.brand}
              </p>
              <p className="text-sm text-slate-500">
                Performance Tracking Enabled
              </p>

              <div className="mt-3 text-sm">
                <p className="flex items-center gap-2">
                  <Link size={14} /> Coupon:{" "}
                  <strong>{camp.code}</strong>
                </p>
                <p className="mt-1 text-emerald-600 font-medium">
                  {camp.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Influencer Analytics */}
      <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">
          Influencer Analytics
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: "Total Earnings", value: "₹1.42L" },
            { label: "Avg Campaign ROI", value: "3.1x" },
            { label: "Brand Rehire Rate", value: "68%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-slate-50 p-5">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-xl font-bold text-emerald-600">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Future AI Matchmaking */}
      <section className="rounded-xl border border-dashed border-emerald-300 bg-white p-6 text-center">
        <BadgeCheck className="mx-auto mb-3 text-emerald-500" />
        <h3 className="font-semibold">
          Brand × Creator Matchmaking (Coming Soon)
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          AI will automatically surface high-fit brands based on your audience,
          content style, performance & location.
        </p>
      </section>
    </div>
  );
}
