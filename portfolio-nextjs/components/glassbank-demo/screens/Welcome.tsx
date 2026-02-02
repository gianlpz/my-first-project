"use client";

import { GlassButton } from "../GlassCard";
import { useLanguage } from "../context";

interface WelcomeProps {
  onGetStarted: () => void;
}

export function Welcome({ onGetStarted }: WelcomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-full flex flex-col items-center justify-between px-4 py-8 fade-in">
      {/* Background gradient effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#7B3FF2] rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#EC4899] rounded-full blur-[80px] opacity-20" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Logo and Welcome Text */}
      <div className="flex flex-col items-center gap-6 slide-up w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl gb-gradient-primary flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <span className="text-white font-bold text-4xl">G</span>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 w-24 h-24 rounded-2xl gb-gradient-primary blur-xl opacity-50" />
        </div>

        {/* App name */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">GlassBank</h1>
          <p className="text-white/60 text-base">Banking. Simplified.</p>
        </div>

        {/* Welcome message */}
        <p className="text-center text-white/80 text-base max-w-[280px]">
          {t("welcome")}
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Get Started Button */}
      <div
        className="w-full max-w-xs mx-auto slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <GlassButton
          variant="primary"
          size="lg"
          onClick={onGetStarted}
          className="w-full"
        >
          {t("getStarted")}
        </GlassButton>

        <p className="text-center text-white/40 text-xs mt-4">
          Open your account in 5 minutes
        </p>
      </div>
    </div>
  );
}
