import { MoveUpRightIcon, StarsIcon, Target, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "50K+",
    label: "Active Users",
    icon: Users,
  },
  {
    id: 2,
    value: "2.4M",
    label: "Campaigns Managed",
    icon: Target,
  },
  {
    id: 3,
    value: "18M",
    label: "AI Insights Generated",
    icon: StarsIcon,
  },
  {
    id: 4,
    value: "342%",
    label: "Average ROI",
    icon: MoveUpRightIcon,
  },
];

export default function Achieve() {
  return (
    <section className="relative w-full py-14">
      {/* Translucent background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center gap-3"
              >
                <Icon className="h-6 w-6 text-white/80" />
                <span className="text-3xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-white/70">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
