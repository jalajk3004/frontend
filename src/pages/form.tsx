import React, { useState } from "react";
import { User, Briefcase, Users, Phone, Sparkles, TrendingUp } from "lucide-react";

export default function ProfileDashboard() {
  const [completion, setCompletion] = useState(65);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        {/* PAGE HEADER */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Complete Your Profile
              </h1>
              <p className="text-slate-600 text-sm flex items-center gap-2 mt-1">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                Keep your profile updated to unlock better opportunities
              </p>
            </div>
          </div>
        </div>

        {/* GRID: 2 ABOVE + 2 BELOW */}
        {/* TOP ROW */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <AccountOverview completion={completion} />
  <BusinessDetails />
</div>

{/* BOTTOM ROW */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <TeamInfo />
  <ContactInfo />
</div>


        {/* CTA BUTTON */}
        <div className="flex justify-center pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Save & Continue
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────────── CARD COMPONENT ───────────── */

const Card = ({
  title,
  icon: Icon,
  children,
  gradient,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  gradient: string;
}) => (
  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
    <div className={`px-6 py-4 bg-gradient-to-r ${gradient} border-b border-white/50`}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/90 rounded-xl shadow-md">
          <Icon className="w-5 h-5 text-slate-700" />
        </div>
        <h2 className="font-bold text-slate-800 text-lg">{title}</h2>
      </div>
    </div>
    <div className="p-6 space-y-5">{children}</div>
  </div>
);

/* ───────────── SECTION 1 ───────────── */

const AccountOverview = ({ completion }: { completion: number }) => (
  <Card 
    title="Account Overview" 
    icon={User}
    gradient="from-violet-100 via-purple-100 to-fuchsia-100"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Input label="Name" placeholder="Enter your name" />
      <Input label="Email" placeholder="your@email.com" type="email" />
      <Select
        label="Account Type"
        options={["Individual", "Agency", "Brand"]}
      />
      
    </div>
  </Card>
);

/* ───────────── SECTION 2 ───────────── */

const BusinessDetails = () => (
  <Card 
    title="Business Details" 
    icon={Briefcase}
    gradient="from-cyan-100 via-blue-100 to-indigo-100"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Input label="Business / Brand Name" placeholder="Your business name" />
      <Select
        label="Business Type"
        options={["Solo", "Agency", "Brand"]}
      />
      <Input label="Industry" placeholder="e.g. Technology, Fashion" />
      <Input label="Country / Timezone" placeholder="e.g. India (IST)" />
    </div>
  </Card>
);

/* ───────────── SECTION 3 ───────────── */

const TeamInfo = () => (
  <Card 
    title="Team Info" 
    icon={Users}
    gradient="from-amber-100 via-orange-100 to-rose-100"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Select
        label="Team Size"
        options={["1", "2–5", "6–15", "15+"]}
      />
      <Select
        label="Role in Company"
        options={[
          "Founder",
          "Marketer",
          "Manager",
          "Team member",
        ]}
      />
    </div>
  </Card>
);

/* ───────────── SECTION 4 ───────────── */

const ContactInfo = () => (
  <Card 
    title="Contact Info" 
    icon={Phone}
    gradient="from-emerald-100 via-teal-100 to-cyan-100"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Input label="Phone Number" placeholder="+91 98765 43210" type="tel" />
      <Input label="Email ID" placeholder="contact@business.com" type="email" />
      <Input label="WhatsApp Number (optional)" placeholder="+91 98765 43210" type="tel" />
    </div>
  </Card>
);

/* ───────────── FORM CONTROLS ───────────── */

const Input = ({ 
  label, 
  placeholder, 
  type = "text" 
}: { 
  label: string; 
  placeholder?: string;
  type?: string;
}) => (
  <div>
    <label className="text-sm font-semibold text-slate-700 mb-2 block">
      {label}
    </label>
    <input
      type={type}
      className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-200 hover:border-slate-300"
      placeholder={placeholder || label}
    />
  </div>
);

const Select = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => (
  <div>
    <label className="text-sm font-semibold text-slate-700 mb-2 block">
      {label}
    </label>
    <select className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-200 hover:border-slate-300 cursor-pointer">
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);