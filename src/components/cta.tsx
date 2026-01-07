'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative mx-auto my-24 w-full max-w-6xl px-6">
      {/* Ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-emerald-400/20 blur-2xl" />

      {/* Glass container */}
      <div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl px-8 py-16 text-center shadow-xl">
        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />

        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Ready to Scale Your Brand?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
          Join thousands of fast-growing brands using Raftra as their complete
          AI-powered marketing growth operating system.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:bg-white/10">
            Contact Sales
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-xs text-white/50">
          No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
