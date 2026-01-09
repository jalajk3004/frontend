import {
  Sparkles,
  ShieldCheck,
  Gauge,
  Rocket,
  Cpu,
  Bot,
  LineChart,
  Layers,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button";
import type { Feature } from "@/types/feature";



const features: Feature[] = [
  {
    title: "One-click ad launch",
    description: [
      "Automated ad launch across platforms",
      "Multi-platform publishing from one dashboard",
      "Instant campaign duplication & scaling",
      "Facebook ads orchestration engine",
    ],
    icon: Sparkles,
  },
  {
    title: "AI creative intelligence",
    description: [
      "AI-powered ad & creative generation",
      "Meme-style creative adaptation engine",
      "Automated creative refresh agent",
      "AI creative director & copywriter",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Smart automation & optimization",
    description: [
      "Ad fatigue detection in real time",
      "AI-based creative & budget rotation",
      "Autonomous campaign optimization engine",
      "Live Meta ads performance tuning",
    ],
    icon: Gauge,
  },
  {
    title: "Analytics & performance intelligence",
    description: [
      "Unified ad analytics dashboard",
      "Performance intelligence & insights",
      "Facebook performance breakdowns",
      "Automated reporting & alerts",
    ],
    icon: Rocket,
  },
  {
    title: "AI campaign management",
    description: [
      "AI campaign & performance manager",
      "AI-powered paid social execution",
      "Campaign planning & scaling tools",
      "Autonomous AI media buyer",
    ],
    icon: Cpu,
  },
  {
    title: "Social media management",
    description: [
      "AI comment responder for Meta",
      "Automated comment moderation",
      "Instagram AI automation tools",
      "Facebook & Instagram growth suite",
    ],
    icon: Bot,
  },
  {
    title: "Geo & targeting intelligence",
    description: [
      "Generative engine optimization (GEO)",
      "Local & geo-based trend detection",
      "AI-powered competitor benchmarking",
      "Advanced ad intelligence platform",
    ],
    icon: LineChart,
  },
  {
    title: "Agency & enterprise tools",
    description: [
      "Multi-client & multi-brand workspace",
      "Ecommerce-focused ad platform",
      "Enterprise-grade ad management suite",
      "Advanced optimization software",
    ],
    icon: Layers,
  },
  {
    title: "Influencer marketing",
    description: [
      "Influencer discovery & vetting",
      "Localized influencer campaigns",
      "Performance-based influencer tracking",
      "Brand-safe collaboration workflows",
    ],
    icon: Globe,
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
                    <Icon className="h-6 w-6" />
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
            <button className="rounded-full bg-gradient-to-r from-amber-400 via-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-emerald-400/40">
              Explore 50+ more features
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;

