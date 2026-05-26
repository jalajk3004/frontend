import { useMemo, useState } from "react";

export default function Pricing() {
  const [adSpend, setAdSpend] = useState(25000);
  const [yearly, setYearly] = useState(false);

  const pricing = useMemo(() => {
    if (adSpend <= 25000) return { price: 6999, label: "Starter" };
    if (adSpend <= 50000) return { price: 15000, label: "Growth" };
    if (adSpend <= 100000) return { price: 20000, label: "Pro" };
    if (adSpend <= 200000) return { price: 40000, label: "Scale" };
    if (adSpend <= 500000) return { price: 50000, label: "Elite" };
    return { price: null, label: "Enterprise" };
  }, [adSpend]);

  const finalPrice = pricing.price
    ? yearly
      ? Math.round(pricing.price * 12 * 0.8)
      : pricing.price
    : null;

  const formatINR = (value: number) =>
    new Intl.NumberFormat("en-IN").format(value);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">Scale Pricing With Your Ad Spend</h1>
          <p className="text-zinc-400 text-lg">
            Raftraa pricing that grows as your business scales.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl shadow-xl border border-zinc-800 p-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Monthly Ad Spend</h2>
            <div className="flex items-center gap-3 bg-zinc-800 rounded-full p-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-4 py-2 rounded-full text-sm ${
                  !yearly ? "bg-white text-black" : "text-zinc-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-4 py-2 rounded-full text-sm ${
                  yearly ? "bg-white text-black" : "text-zinc-300"
                }`}
              >
                Yearly (20% Off)
              </button>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="600000"
            step="5000"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full mb-4"
          />

          <div className="flex justify-between text-zinc-400 text-sm">
            <span>₹0</span>
            <span>₹6L+</span>
          </div>

          <div className="mt-10 text-center">
            <p className="text-zinc-400 mb-2">Current Ad Spend</p>
            <h3 className="text-4xl font-bold">₹{formatINR(adSpend)}</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white text-black rounded-3xl p-10 shadow-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-black text-white text-sm mb-5">
              Most Relevant Plan
            </span>
            <h2 className="text-4xl font-bold mb-2">{pricing.label}</h2>

            <div className="my-6">
              {finalPrice ? (
                <>
                  <span className="text-5xl font-bold">₹{formatINR(finalPrice)}</span>
                  <span className="text-lg text-zinc-600 ml-2">
                    / {yearly ? "year" : "month"}
                  </span>
                </>
              ) : (
                <span className="text-5xl font-bold">Custom Pricing</span>
              )}
            </div>

            <ul className="space-y-4 text-lg">
              <li>✓ AI Campaign Automation</li>
              <li>✓ Ad Creative Generation</li>
              <li>✓ Audience Optimization</li>
              <li>✓ Performance Analytics</li>
              <li>✓ WhatsApp & Multi-platform Support</li>
              <li>✓ Dedicated Support</li>
            </ul>

            <button className="mt-8 w-full bg-black text-white py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition">
              {finalPrice ? "Get Started" : "Book Demo"}
            </button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-6">Pricing Slabs</h3>
            <div className="space-y-5 text-zinc-300">
              <div className="flex justify-between"><span>₹0 – ₹25K</span><span>₹6,999</span></div>
              <div className="flex justify-between"><span>₹25K – ₹50K</span><span>₹15,000</span></div>
              <div className="flex justify-between"><span>₹50K – ₹1L</span><span>₹20,000</span></div>
              <div className="flex justify-between"><span>₹1L – ₹2L</span><span>₹40,000</span></div>
              <div className="flex justify-between"><span>₹2L – ₹5L</span><span>₹50,000</span></div>
              <div className="flex justify-between"><span>₹5L+</span><span>Custom</span></div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-zinc-800 text-zinc-300">
              Designed like a premium SaaS pricing engine where cost increases as
              ad budget scales — similar to performance marketing tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
