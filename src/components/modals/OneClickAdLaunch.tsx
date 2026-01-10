"use client";

import { Button } from "@/components/ui/button";

export function OneClickAdLaunchModal() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
          campaignName: formData.get("campaignName"),
          website: formData.get("website"),
          objective: formData.get("objective"),
          platforms: formData.getAll("platforms"),
          budgetType: formData.get("budgetType"),
          budget: formData.get("budget"),
          audienceType: formData.get("audienceType"),
          creativeStyle: formData.getAll("creativeStyle"),
          optimization: formData.get("optimization"),
        };

        console.log("One-Click Ad Launch Data:", data);
      }}
      className="flex flex-col max-h-[70vh]"
    >
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-8 pr-2">
        {/* Campaign Basics */}
        <Section title="Campaign Basics">
          <Input label="Campaign Name" name="campaignName" required />
          <Input
            label="Business Website"
            name="website"
            type="url"
            required
          />
        </Section>

        {/* Objective */}
        <Section title="Campaign Objective">
          <RadioGroup
            name="objective"
            options={[
              "Leads",
              "Website Traffic",
              "Sales",
              "Awareness",
            ]}
            required
          />
        </Section>

        {/* Platforms */}
        <Section title="Ad Platforms">
          <CheckboxGroup
            name="platforms"
            options={["Meta", "Google Ads"]}
          />
        </Section>

        {/* Budget */}
        <Section title="Budget">
          <RadioGroup
            name="budgetType"
            options={["Daily", "Lifetime"]}
          />
          <Input
            label="Budget Amount"
            name="budget"
            type="number"
            required
          />
        </Section>

        {/* Audience */}
        <Section title="Audience Type">
          <RadioGroup
            name="audienceType"
            options={[
              "Broad",
              "Interest-based",
              "Retargeting",
            ]}
          />
        </Section>

        {/* Creative */}
        <Section title="Creative Style">
          <CheckboxGroup
            name="creativeStyle"
            options={[
              "Professional",
              "Meme",
              "UGC",
              "Product",
            ]}
          />
        </Section>

        {/* Optimization */}
        <Section title="Optimization Level">
          <RadioGroup
            name="optimization"
            options={[
              "Auto",
              "Semi-auto",
              "Manual",
            ]}
          />
        </Section>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 bg-background pt-4 border-t">
        <Button
          type="submit"
          className="w-full h-11 text-base"
        >
          Launch Campaign
        </Button>
      </div>
    </form>
  );
}

/* =========================
   SIMPLE UI HELPERS
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
