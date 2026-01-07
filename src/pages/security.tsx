import React, { useState } from "react";
import { Shield, Lock, LogOut, Clock, Eye, EyeOff, CheckCircle, AlertCircle, Smartphone, Monitor, Key } from "lucide-react";

export default function SecurityDashboard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Security Settings
              </h1>
              <p className="text-slate-600 text-sm flex items-center gap-2 mt-1">
                <Lock className="w-4 h-4 text-emerald-500" />
                Manage your account security and access
              </p>
            </div>
          </div>
        </div>

        {/* GRID: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChangePasswordSection 
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showNewPassword={showNewPassword}
            setShowNewPassword={setShowNewPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
          />
          <ActiveSessionsSection />
          <LastLoginSection />
          <SecurityOptionsSection />
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
  fullWidth = false,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  gradient: string;
  fullWidth?: boolean;
}) => (
  <div className={`group bg-white/80 backdrop-blur-sm rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden ${fullWidth ? 'lg:col-span-2' : ''}`}>
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

/* ───────────── CHANGE PASSWORD SECTION ───────────── */

const ChangePasswordSection = ({
  showPassword,
  setShowPassword,
  showNewPassword,
  setShowNewPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}: any) => (
  <Card 
    title="Change Password" 
    icon={Key}
    gradient="from-violet-100 via-purple-100 to-fuchsia-100"
  >
    <div className="space-y-5">
      <PasswordInput 
        label="Current Password"
        placeholder="Enter current password"
        show={showPassword}
        setShow={setShowPassword}
      />
      <PasswordInput 
        label="New Password"
        placeholder="Enter new password"
        show={showNewPassword}
        setShow={setShowNewPassword}
      />
      <PasswordInput 
        label="Confirm New Password"
        placeholder="Confirm new password"
        show={showConfirmPassword}
        setShow={setShowConfirmPassword}
      />

      {/* Password Strength Indicator */}
      <div className="pt-2">
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Password Strength
        </label>
        <div className="relative h-3 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 overflow-hidden shadow-inner">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 rounded-full shadow-lg transition-all duration-500"
            style={{ width: '60%' }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse" />
          </div>
        </div>
        <span className="text-xs font-medium text-orange-600 mt-1 inline-block">
          Medium - Add special characters for stronger security
        </span>
      </div>

      <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Update Password
        </span>
      </button>
    </div>
  </Card>
);

/* ───────────── ACTIVE SESSIONS SECTION ───────────── */

const ActiveSessionsSection = () => (
  <Card 
    title="Active Sessions" 
    icon={Monitor}
    gradient="from-cyan-100 via-blue-100 to-indigo-100"
  >
    <div className="space-y-4">
      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
        <div className="p-2 bg-emerald-500 rounded-lg">
          <Monitor className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-800">Windows PC - Chrome</h3>
            <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-full">
              Current
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-1">Delhi, India</p>
          <p className="text-xs text-slate-500 mt-1">Last active: Just now</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="p-2 bg-slate-400 rounded-lg">
          <Smartphone className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800">iPhone - Safari</h3>
          <p className="text-sm text-slate-600 mt-1">Delhi, India</p>
          <p className="text-xs text-slate-500 mt-1">Last active: 2 hours ago</p>
        </div>
      </div>

      <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <span className="relative z-10 flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout from All Devices
        </span>
      </button>
    </div>
  </Card>
);

/* ───────────── LAST LOGIN SECTION ───────────── */

const LastLoginSection = () => (
  <Card 
    title="Last Login Activity" 
    icon={Clock}
    gradient="from-amber-100 via-orange-100 to-rose-100"
  >
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500 rounded-lg">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Last Successful Login</p>
            <p className="text-xs text-slate-600 mt-1">Tuesday, January 06, 2026 at 3:45 PM</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <ReadOnlyField label="IP Address" value="103.214.xx.xxx" />
        <ReadOnlyField label="Location" value="Delhi, India" />
        <ReadOnlyField label="Device" value="Windows PC - Chrome Browser" />
      </div>

      <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-slate-700">
          If you notice any suspicious activity, change your password immediately and contact support.
        </p>
      </div>
    </div>
  </Card>
);

/* ───────────── SECURITY OPTIONS SECTION ───────────── */

const SecurityOptionsSection = () => (
  <Card 
    title="Security Options" 
    icon={Shield}
    gradient="from-emerald-100 via-teal-100 to-cyan-100"
  >
    <div className="space-y-4">
      <ToggleOption 
        label="Two-Factor Authentication"
        description="Add an extra layer of security to your account"
        enabled={false}
      />
      <ToggleOption 
        label="Login Notifications"
        description="Get notified when someone logs into your account"
        enabled={true}
      />
      <ToggleOption 
        label="Session Timeout"
        description="Automatically logout after 30 minutes of inactivity"
        enabled={true}
      />

      <div className="pt-2">
        <button className="w-full px-6 py-3 border-2 border-violet-300 text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-all duration-300">
          View Security Log
        </button>
      </div>
    </div>
  </Card>
);

/* ───────────── FORM CONTROLS ───────────── */

const PasswordInput = ({ 
  label, 
  placeholder,
  show,
  setShow,
}: { 
  label: string; 
  placeholder: string;
  show: boolean;
  setShow: (show: boolean) => void;
}) => (
  <div>
    <label className="text-sm font-semibold text-slate-700 mb-2 block">
      {label}
    </label>
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 pr-12 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-200 hover:border-slate-300"
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  </div>
);

const ReadOnlyField = ({ label, value }: { label: string; value: string }) => (
  <div>
    <label className="text-sm font-semibold text-slate-700 mb-2 block">
      {label}
    </label>
    <div className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm bg-slate-100 text-slate-600">
      {value}
    </div>
  </div>
);

const ToggleOption = ({ 
  label, 
  description, 
  enabled 
}: { 
  label: string; 
  description: string; 
  enabled: boolean;
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  return (
    <div className="flex items-start justify-between gap-4 p-4 bg-white/50 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
      <div className="flex-1">
        <h3 className="font-semibold text-slate-800">{label}</h3>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
      </div>
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
          isEnabled 
            ? 'bg-gradient-to-r from-emerald-400 to-teal-400' 
            : 'bg-slate-300'
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
            isEnabled ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};