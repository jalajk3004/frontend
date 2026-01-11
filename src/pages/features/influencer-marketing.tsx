"use client";

import { useState } from "react";
import {
  MapPin,
  TrendingUp,
  Users,
  BadgeCheck,
  MessageSquare,
} from "lucide-react";

type Creator = {
  name: string;
  city: string;
  niche: string;
  followers: string;
  engagement: string;
  image: string;
  brands: string[];
};

const creators: Creator[] = [
  {
    name: "Riya Sharma",
    city: "Delhi",
    niche: "Fashion",
    followers: "42K",
    engagement: "5.1%",
    image: "https://i.pravatar.cc/150?img=47",
    brands: ["Zara", "Nykaa", "H&M"],
  },
  {
    name: "Arjun Fit",
    city: "Mumbai",
    niche: "Fitness",
    followers: "68K",
    engagement: "6.4%",
    image: "https://i.pravatar.cc/150?img=12",
    brands: ["CultFit", "MyProtein"],
  },
  {
    name: "Tech Tamilan",
    city: "Chennai",
    niche: "Tech",
    followers: "91K",
    engagement: "4.9%",
    image: "https://i.pravatar.cc/150?img=33",
    brands: ["Boat", "Amazon"],
  },
  {
    name: "Foodie Pooja",
    city: "Pune",
    niche: "Food",
    followers: "36K",
    engagement: "7.2%",
    image: "https://i.pravatar.cc/150?img=25",
    brands: ["Zomato", "Swiggy"],
  },
];

export default function InfluencerMarketingDashboard() {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-8 text-slate-900">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Influencer Marketing
        </h1>
        <div className="rounded-full bg-white px-5 py-2 shadow-sm text-sm font-medium">
          Micro & Nano Creator Marketplace
        </div>
      </header>

      {/* Filters */}
      <section className="mb-8 flex flex-wrap gap-4 rounded-xl bg-white p-4 shadow-sm">
        <select className="rounded-md border px-3 py-2 text-sm">
          <option>All Locations</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>

        <select className="rounded-md border px-3 py-2 text-sm">
          <option>All Niches</option>
          <option>Fashion</option>
          <option>Fitness</option>
          <option>Tech</option>
          <option>Food</option>
        </select>

        <select className="rounded-md border px-3 py-2 text-sm">
          <option>Engagement</option>
          <option>High → Low</option>
          <option>Low → High</option>
        </select>
      </section>

      {/* Creator Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {creators.map((creator) => (
          <div
            key={creator.name}
            className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Profile */}
            <div className="flex flex-col items-center text-center">
              <img
                src={creator.image}
                alt={creator.name}
                className="mb-3 h-20 w-20 rounded-full object-cover"
              />
              <h3 className="font-semibold">{creator.name}</h3>
              <p className="text-sm text-slate-500">
                {creator.niche} Creator
              </p>
            </div>

            {/* Meta */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-400" />
                {creator.city}
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-slate-400" />
                {creator.followers} Followers
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-emerald-500" />
                {creator.engagement} Engagement
              </div>
            </div>

            {/* Brands */}
            <div className="mt-4">
              <p className="mb-2 text-xs font-medium text-slate-500">
                Brands worked with
              </p>
              <div className="flex flex-wrap gap-2">
                {creator.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setSelectedCreator(creator)}
                className="flex flex-1 items-center justify-center gap-1 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white"
              >
                <MessageSquare size={14} />
                Reach Out
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Reach Out Panel */}
      {selectedCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">
              Reach out to {selectedCreator.name}
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              Brand-to-creator collaboration request
            </p>

            <textarea
              placeholder="Introduce your brand & campaign goals..."
              className="mb-4 w-full rounded-md border p-3 text-sm"
              rows={4}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedCreator(null)}
                className="rounded-md px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white">
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Future Section */}
      <section className="mt-14 rounded-xl border border-dashed border-emerald-300 bg-white p-6 text-center">
        <BadgeCheck className="mx-auto mb-3 text-emerald-500" />
        <h3 className="font-semibold">
          Brand × Creator Matchmaking (Coming Soon)
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          AI will auto-match brands with creators based on audience overlap,
          location, performance & intent.
        </p>
      </section>
    </div>
  );
}
