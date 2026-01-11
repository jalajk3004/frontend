import Features from "@/components/features";
import { AnimatedModalDemo } from "@/components/modal";
import { AICreativeIntelligenceModal } from "@/components/modals/AICreativeIntelligence";
import type { Feature } from "@/types/feature";
import {
  Bot,
  Gauge,
  LineChart,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const FullFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [showAIChat, setShowAIChat] = useState(false);
  const navigate = useNavigate();
  return (
    <>
    
        
    <main className="min-h-screen relative">
      {/* Light gradient background matching landing page */}
      

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-200/25 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 ring-1 ring-amber-300/50">
              <Sparkles className="h-3.5 w-3.5" />
              Full growth feature map
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-amber-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                automate growth
              </span>{" "}
              end‑to‑end.
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Raftra unifies strategy, execution, and intelligence into one Growth OS. Explore the
              capabilities that power always‑on experimentation, AI agents, and confident decisions.
            </p>

            <dl className="grid grid-cols-2 gap-4 text-left sm:max-w-md">
              <div className="rounded-2xl bg-white/60 backdrop-blur-md px-4 py-3 ring-1 ring-emerald-200/50 shadow-sm">
                <dt className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                  Channels automated
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-800">10+</dd>
              </div>
              <div className="rounded-2xl bg-white/60 backdrop-blur-md px-4 py-3 ring-1 ring-teal-200/50 shadow-sm">
                <dt className="text-xs font-medium uppercase tracking-wide text-teal-600">
                  Playbooks included
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-800">50+</dd>
              </div>
            </dl>
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-4 rounded-3xl bg-white/50 backdrop-blur-xl p-4 ring-1 ring-white/60 shadow-lg">
            <FeaturePill
              icon={Rocket}
              title="Launch automation"
              description="Blueprints for go‑lives, migrations, and promos with safe‑guarded rollouts."
              accent="from-emerald-400 to-cyan-400"
            />
            <FeaturePill
              icon={Bot}
              title="AI agents"
              description="Composable agents for briefs, QA, approvals, and reporting."
              accent="from-cyan-400 to-violet-400"
            />
            <FeaturePill
              icon={Gauge}
              title="Real‑time performance"
              description="Unified dashboards with health scores and anomaly alerts."
              accent="from-amber-400 to-orange-400"
            />
            <FeaturePill
              icon={LineChart}
              title="Forecasting"
              description="Predictive curves for CAC, LTV, and budget scenarios."
              accent="from-lime-400 to-emerald-400"
            />
          </div>
        </div>
      </section> 

      {/* Detailed feature grid (11 core capabilities) */}
      <Features
          variant="light"
          showCTA={false}
          button={true}
          onFeatureClick={(feature) => {
            console.log("Feature clicked:", feature.key, feature.openMode);
          
            if (feature.openMode === "redirect" && feature.redirectTo) {
              navigate(feature.redirectTo);
              return;
            }
            if (feature.openMode === "direct") {
              setShowAIChat(true);
              setSelectedFeature(null);
              return;
            }
            setSelectedFeature(feature);
            setShowAIChat(false);
          }}
        />

        {/* ✅ AI Chat opens directly (no modal) */}
        {showAIChat && (
          <AICreativeIntelligenceModal onClose={() => setShowAIChat(false)} />
        )}

        {/* ✅ Modal for other features */}
        <AnimatedModalDemo
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
    </main>
</>
  );
};

type PillProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  accent: string;
};

const FeaturePill = ({ icon: Icon, title, description, accent }: PillProps) => {
    return (
    <div className="group flex flex-col gap-2 rounded-2xl bg-white/70 backdrop-blur-sm p-3 shadow-md shadow-emerald-200/20 ring-1 ring-emerald-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-300/30 hover:ring-emerald-300/60">
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FullFeatures;























