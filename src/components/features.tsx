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
  Lock,
  Workflow,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    title: "AI Strategy Copilot",
    description: "Adaptive plans, channel mixes, and next-best actions tailored to your goals.",
    icon: Sparkles,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade controls with audit trails, SSO, and policy guardrails.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Dashboards",
    description: "Live insights with multi-touch attribution and ROI tracking across channels.",
    icon: Gauge,
  },
  {
    title: "Launch Automation",
    description: "One-click campaigns with presets, QA checks, and safe rollout windows.",
    icon: Rocket,
  },
  {
    title: "Creative Intelligence",
    description: "On-brand assets auto-generated with variant testing and tone controls.",
    icon: Cpu,
  },
  {
    title: "AI Agents & Workflows",
    description: "Composable bots that handle briefs, approvals, and reporting end-to-end.",
    icon: Bot,
  },
  {
    title: "Predictive Forecasting",
    description: "Budget curves, CAC/LTV forecasts, and scenario planning in minutes.",
    icon: LineChart,
  },
  {
    title: "Unified Data Layer",
    description: "Warehouse-native connectors with clean rooms and privacy-safe joins.",
    icon: Layers,
  },
  {
    title: "Global Orchestration",
    description: "Run localized variants with guardrails, translations, and geo controls.",
    icon: Globe,
  },
  {
    title: "Access Controls",
    description: "Role-based permissions, approval chains, and least-privilege defaults.",
    icon: Lock,
  },
  {
    title: "Process Templates",
    description: "Prebuilt blueprints for launches, migrations, experiments, and QA.",
    icon: Workflow,
  },
];

function Features() {
  return (
    <section className="relative overflow-hidden  py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_38%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 text-center">
        <div className="space-y-3">
          <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-200/90 ring-1 ring-emerald-300/30">
            Built for scale
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            11 core capabilities. One growth OS.
          </h2>
          <p className="text-base text-slate-200/80 sm:text-lg">
            Everything your team needs to launch, optimize, and protect growth—without stitching tools together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-sm shadow-black/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/5 via-cyan-200/5 to-amber-100/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-200/30 via-cyan-200/25 to-amber-100/25 text-emerald-900 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-200/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-amber-400 via-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-emerald-400/40">
            Explore 50+ more features
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;

