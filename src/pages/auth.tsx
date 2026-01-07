import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Sparkles, TrendingUp, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Auth() {
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = () => {
    console.log("submit")

    
  };

  const features = [
    { icon: TrendingUp, text: 'Scale your campaigns 10x faster' },
    { icon: Sparkles, text: 'AI-powered insights & automation' },
    { icon: Zap, text: 'Real-time performance optimization' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:block space-y-8 text-white p-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">AI-Powered Marketing Platform</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-emerald-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Automate Your Growth
            </h1>
            
            <p className="text-xl text-slate-300">
              Join thousands of marketers using AI to scale their campaigns and maximize ROI
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-white">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-emerald-400">50K+</div>
              <div className="text-sm text-slate-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">3.5M+</div>
              <div className="text-sm text-slate-400">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-slate-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="relative">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 rounded-full">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                  AI Marketing
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {authMode === 'login' ? 'Welcome Back' : 'Start Your Journey'}
              </h2>
              <p className="text-slate-600">
                {authMode === 'login' 
                  ? 'Sign in to access your AI marketing dashboard' 
                  : 'Create your account and unlock AI-powered growth'}
              </p>
            </div>

            {/* Mode Toggle */}
            <div className="flex bg-slate-100 rounded-2xl p-1 mb-8">
              <button
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  authMode === 'login'
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                type="button"
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  authMode === 'signup'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                type="button"
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all `}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all `}
                    placeholder="you@example.com"
                  />
                </div>
                
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full pl-12 pr-12 py-3.5 bg-slate-50 border-2 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all `}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
              </div>

              {authMode === 'signup' && (
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="w-5 h-5 mt-0.5 rounded border-2 border-slate-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    I agree to the{' '}
                    <span className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
                      Terms of Service
                    </span>{' '}
                    and{' '}
                    <span className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
                      Privacy Policy
                    </span>
                  </span>
                </label>
              )}

              
             

              {authMode === 'login' && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-slate-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <span className="text-purple-600 hover:text-purple-700 font-medium transition-colors cursor-pointer">
                    Forgot password?
                  </span>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {authMode === 'login' ? (
                  <>
                    <Zap className="h-5 w-5" />
                    Sign In to Dashboard
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Start Free Trial
                  </>
                )}
              </button>
            </div>

            {/* Social proof */}
            {authMode === 'signup' && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>No credit card required • 14-day free trial</span>
                </div>
              </div>
            )}

            {/* Toggle link */}
            <div className="text-center mt-6">
              <p className="text-slate-600 text-sm">
                {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="text-transparent bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text font-semibold hover:from-emerald-700 hover:to-purple-700 transition-all"
                >
                  {authMode === 'login' ? 'Sign up free' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}