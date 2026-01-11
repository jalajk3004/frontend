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
        "Budget & objective based auto-configuration",
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
      redirectTo: "/features/smartAutomation",
    },
    {
      key: "analytics",
      title: "Analytics & performance intelligence",
      description: [
        "Ad analyzer dashboard",
        "Performance intelligence engine",
        "Facebook performance dashboard",
        "Google Ads performance dashboard",
        "Ad intelligence tools",
        "Automated reporting (weekly / monthly)",
        "ROI & cost-per-lead tracking",
        "Influencer performance tracking",
      ],
      icon: Rocket,
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
        "Funnel drop-off detection",
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
        "DM-to-CRM sync",
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
        "Hyper-local influencer discovery",
      ],
      icon: LineChart,
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
        "Brand × creator matchmaking (future)",
      ],
      icon: Globe,
      redirectTo: "/features/influencer-marketing",
    },
  ];
  
  interface FeaturesLandingProps {
    showCTA?: boolean;
    button?: boolean;
    onFeatureClick?: (feature: Feature) => void;
  }
  
  function FeaturesLanding({
    showCTA = true,
    button = false,
    onFeatureClick,
  }: FeaturesLandingProps = {}) {
    const navigate = useNavigate();
  
    return (
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          {/* Header */}
          <div className="space-y-3">
            <p className="inline-flex items-center rounded-full bg-amber-100/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-700 ring-1 ring-amber-300/50">
              Built for scale
            </p>
  
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Core capabilities. One growth OS.
            </h2>
  
            <p className="text-base text-slate-600 sm:text-lg">
              Everything your team needs to launch, optimize, and protect growth—without stitching tools together.
            </p>
          </div>
  
          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/80 p-5 text-left shadow-md shadow-emerald-200/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/70 hover:bg-white hover:shadow-lg hover:shadow-emerald-300/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-200/40 via-cyan-200/30 to-amber-100/30 text-emerald-800 ring-1 ring-emerald-300/40">
                      {Icon ? <Icon className="h-6 w-6" /> : null}
                    </span>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
  
                  <ul className="mt-3 space-y-1 text-sm leading-relaxed text-slate-700">
                    {feature.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
  
                  {button && (
                    <Button
                      className="mt-4 w-full bg-slate-900 text-white hover:bg-slate-800"
                      onClick={() => onFeatureClick?.(feature)}
                    >
                      Use this
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
  
          {/* CTA */}
          {showCTA && (
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/features")}
                className="rounded-full bg-gradient-to-r from-amber-400 via-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-emerald-400/40"
              >
                Explore 50+ more features
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
  
  export default FeaturesLanding;
  