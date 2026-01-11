import {
  Sparkles,
  ShieldCheck,
  Gauge,
  Rocket,
  Cpu,
  Bot,
  LineChart,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button";
import type { Feature } from "@/types/feature";
import { useNavigate } from "react-router-dom";



const features: Feature[] = [
  {
    key: "one_click_ad_launch",
    title: "One-click ad launch",
    description: [
      "Automated ad launch tool",
      "Multi-platform publishing (Meta + Google Ads)",
      "Ad launch plus (goal-based setup)",
      "Facebook Ads orchestrator",
      "Google Ads orchestrator (Search + Local + Lead ads)",
      "One-click retargeting setup",
      "Budget & objective based auto-configuration"
    ],
    icon: Sparkles,

  },
  {
    key: "ai_creative_intelligence",
    title: "AI creative intelligence",
    description: [
      "AI ads generator (image + video)",
      "Meme-style creative adaptation",
      "Creative refresh agent",
      "AI creative director",
      "AI copywriter (hooks, headlines, CTAs)",
      "Platform-wise creative resizing",
      "Creative A/B testing engine",
    ],
    icon: ShieldCheck,
    openMode: "direct"
  },
  {
    key: "smart_automation",
    title: "Smart automation & optimization",
    description: [
      "Ad fatigue detector",
      "AI fatigue-based rotation",
      "Campaign optimization engine",
      "Real-time Meta ads optimization",
      "Real-time Google Ads optimization",
      "Autonomous marketing manager",
      "Budget reallocation AI",
      "Underperforming ad killer",
    ],
    icon: Gauge,
    openMode: "redirect",
    redirectTo: "/features/smart-automation",
  },
  {
    key: "analytics",
    title: "Analytics & performance intelligence",
    description: [
      "Ad analyzer dashboard",
      "Performance intelligence engine",
      "Facebook performance dashboard",
      "Google Ads performance dashboard",
      'Ad intelligence tools',
      "Automated reporting (weekly / monthly)",
      "ROI & cost-per-lead tracking",
      "Influencer performance tracking"
    ],
    icon: Rocket,
    openMode: "redirect",
    redirectTo: "/features/analytics",
  },
  {
    key: "campaign_management",
    title: "AI campaign management",
    description: [
      "AI campaign manager",
      "AI performance marketer",
      "AI paid social manager",
      "Campaign tools suite",
      "AI media buyer",
      "Goal-based campaign scaling",
      "Funnel drop-off detection"
    ],
    icon: Cpu,

  },
  {
    key: "social_media",
    title: "Social media management",
    description: [
      "Meta AI comment responder",
      "Meta AI comment manager",
      "Instagram AI automation",
      "Instagram AI management tools",
      "Facebook marketing tools",
      "Lead reply automation",
      "DM-to-CRM sync"
    ],
    icon: Bot,
  },
  {
    key: "geo_targeting",
    title: "Geo & targeting intelligence",
    description: [
      "Generative Engine Optimisation (GEO)",
      "AI search visibility optimisation",
      "Geo + local trend layer",
      "Competitor benchmarking AI",
      "Local demand heatmap",
      "Ad intelligence platform",
      "City-wise targeting engine",
      "Hyper-local influencer discovery"
    ],
    icon: LineChart,
    openMode: "redirect",
    redirectTo: "/features/geo-targeting",
  },
  {
    key: "influencer_marketing",
    title: "Influencer marketing",
    description: [
      "Influencer discovery engine",
      "Micro & nano creator marketplace",
      "Location & niche based filtering",
      "Influencer campaign manager",
      "Performance-based influencer campaigns",
      "Coupon & link tracking",
      "Influencer analytics dashboard",
      "Brand × creator matchmaking (future)"],
    icon: Globe,
    openMode: "redirect",
    redirectTo: "/features/influencer-marketing",
  },
];


interface FeaturesProps {
  variant?: "light" | "dark";
  showCTA?: boolean;
  button?: boolean;
  onFeatureClick?: (feature: Feature) => void;
}

function Features({
  variant = "dark",
  showCTA = true,
  button = false,
  onFeatureClick,
}: FeaturesProps = {}) {
  const isLight = variant === "light";

  const navigate = useNavigate();

  

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {!isLight && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_38%)]" />
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 text-center">
        <div className="space-y-3">
          <p className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ring-1 ${isLight
            ? "bg-amber-100/80 text-amber-700 ring-amber-300/50"
            : "bg-white/5 text-emerald-200/90 ring-emerald-300/30"
            }`}>
            Built for scale
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isLight ? "text-slate-800" : "text-white"
            }`}>
            Core capabilities. One growth OS.
          </h2>
          <p className={`text-base sm:text-lg ${isLight ? "text-slate-600" : "text-slate-200/80"
            }`}>
            Everything your team needs to launch, optimize, and protect growth—without stitching tools together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${isLight
                  ? "border-emerald-200/50 bg-white/60 shadow-md shadow-emerald-200/20 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-300/30"
                  : "border-white/10 bg-white/5 shadow-sm shadow-black/30 hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-500/20"
                  }`}
              >
                {!isLight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/5 via-cyan-200/5 to-amber-100/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
                <div className="flex items-center gap-3 relative text-white">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-200/30 via-cyan-200/25 to-amber-100/25 ring-1 ${isLight ? "text-emerald-700 ring-emerald-200/30" : "text-emerald-900 ring-white/10"
                    }`}>
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </span>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-800" : "text-white"
                    }`}>
                    {feature.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed ">

                  {feature.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full ${isLight ? "bg-emerald-500" : "bg-emerald-300/80"
                        }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {button && (
                  <Button
                    variant="default"
                    className="w-full bg-black text-white dark:bg-white dark:text-black border border-black"
                    onClick={() => onFeatureClick?.(feature)}
                  >
                    Use this
                  </Button>
                )}

              </div>
            );
          })}
        </div>

        {showCTA && (
          <div className="flex justify-center">
            <button
            onClick={() => navigate("/features")} 
            className="rounded-full bg-gradient-to-r from-amber-400 via-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-emerald-400/40">
              Explore 50+ more features
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;

