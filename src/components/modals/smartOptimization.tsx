"use client";

import { Button } from "@/components/ui/button";

export function SmartAutomationOptimizationModal() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
          platforms: formData.getAll("platforms"),
          adAccountId: formData.get("adAccountId"),
          campaigns: formData.get("campaigns"),
          objective: formData.get("objective"),
          ctrDrop: formData.get("ctrDrop"),
          conversionDrop: formData.get("conversionDrop"),
          timeWindow: formData.get("timeWindow"),
          pauseRules: {
            minCTR: formData.get("minCTR"),
            maxCPA: formData.get("maxCPA"),
            maxSpend: formData.get("maxSpend"),
          },
          automationMode: formData.get("automationMode"),
          budgetShift: formData.get("budgetShift") === "on",
          bidAdjust: formData.get("bidAdjust") === "on",
          creativeRotation: formData.get("creativeRotation"),
          maxCreativeChanges: formData.get("maxCreativeChanges"),
          notifications: formData.getAll("notifications"),
        };

        console.log("Smart Automation Config:", data);

        // redirect after setup
        window.location.href = "/features/smart-automation/dashboard";
      }}
      className="flex flex-col max-h-[70vh]"
    >
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-8 pr-2">

        {/* Platforms */}
        <Section title="Ad Platforms">
          <CheckboxGroup
            name="platforms"
            options={["Meta (Facebook & Instagram)", "Google Ads"]}
          />
          <Input
            label="Ad Account ID"
            name="adAccountId"
            placeholder="123-456-789"
            required
          />
        </Section>

        {/* Campaign Scope */}
        <Section title="Campaign Scope">
          <RadioGroup
            name="campaigns"
            options={[
              "All Active Campaigns",
              "Select Specific Campaigns",
            ]}
            required
          />
          <RadioGroup
            name="objective"
            options={[
              "Conversions",
              "Leads",
              "Sales",
              "Traffic",
            ]}
          />
        </Section>

        {/* Ad Fatigue Detection */}
        <Section title="Ad Fatigue Detection">
          <Input
            label="CTR Drop Trigger (%)"
            name="ctrDrop"
            type="number"
            placeholder="e.g. 25"
          />
          <Input
            label="Conversion Drop Trigger (%)"
            name="conversionDrop"
            type="number"
            placeholder="e.g. 20"
          />
          <RadioGroup
            name="timeWindow"
            options={["Last 3 Days", "Last 7 Days", "Last 14 Days"]}
          />
        </Section>

        {/* Underperforming Ad Rules */}
        <Section title="Underperforming Ad Auto-Pause Rules">
          <Input
            label="Pause if CTR below (%)"
            name="minCTR"
            type="number"
          />
          <Input
            label="Pause if CPA above (₹)"
            name="maxCPA"
            type="number"
          />
          <Input
            label="Pause if Spend exceeds (₹)"
            name="maxSpend"
            type="number"
          />
        </Section>

        {/* Automation Level */}
        <Section title="Automation Level">
          <RadioGroup
            name="automationMode"
            options={[
              "Suggest Only",
              "Semi-Automated",
              "Fully Autonomous",
            ]}
            required
          />

          <CheckboxGroup
            name="budgetShift"
            options={["Allow Budget Shifts Between Ad Sets"]}
          />

          <CheckboxGroup
            name="bidAdjust"
            options={["Allow Automatic Bid Adjustments"]}
          />
        </Section>

        {/* Creative Optimization */}
        <Section title="Creative Optimization">
          <RadioGroup
            name="creativeRotation"
            options={[
              "Rotate Existing Creatives",
              "Generate New Creatives with AI",
              "Use Uploaded Backup Creatives",
            ]}
          />
          <Input
            label="Max Creative Changes Per Day"
            name="maxCreativeChanges"
            type="number"
            placeholder="Default: 2"
          />
        </Section>

        {/* Notifications */}
        <Section title="Notifications & Reports">
          <CheckboxGroup
            name="notifications"
            options={[
              "Dashboard Alerts",
              "Email Notifications",
              "WhatsApp Alerts (Premium)",
            ]}
          />
        </Section>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 bg-background pt-4 border-t">
        <Button type="submit" className="w-full h-11 text-base">
          Activate Smart Automation
        </Button>
      </div>
    </form>
  );
}

/* =========================
   REUSABLE UI HELPERS
========================= */

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-md border px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-emerald-500
                   transition"
      />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      {children}
    </section>
  );
}

function RadioGroup({
  name,
  options,
  required,
}: {
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 rounded-md border px-3 py-2
                     cursor-pointer hover:bg-muted transition"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            required={required}
          />
          <span className="text-sm">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 rounded-md border px-3 py-2
                     cursor-pointer hover:bg-muted transition"
        >
          <input type="checkbox" name={name} value={opt} />
          <span className="text-sm">{opt}</span>
        </label>
      ))}
    </div>
  );
}
