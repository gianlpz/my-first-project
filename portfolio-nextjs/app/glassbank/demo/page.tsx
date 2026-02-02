import type { Metadata } from "next";
import Link from "next/link";
import { GlassBankApp } from "@/components/glassbank-demo/GlassBankApp";

export const metadata: Metadata = {
  title: "GlassBank Demo | Gian Pierre Lopez Manzano",
  description:
    "Interactive demo of the GlassBank mobile banking app prototype.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-20 pb-12 px-4">
      {/* Header with back link */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/glassbank"
          className="inline-flex items-center gap-2 text-white/60 hover:text-coral transition-colors text-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Case Study
        </Link>
      </div>

      {/* Title */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          GlassBank Interactive Demo
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-md mx-auto">
          Experience the app prototype. Try switching languages and exploring
          the dashboard.
        </p>
      </div>

      {/* iPhone Frame Container */}
      <div className="flex justify-center">
        {/* Desktop: iPhone Frame */}
        <div className="hidden md:block">
          <div className="iphone-frame">
            {/* Dynamic Island */}
            <div className="dynamic-island" />

            {/* Screen Content */}
            <div className="iphone-screen">
              <GlassBankApp />
            </div>
          </div>
        </div>

        {/* Mobile: Full Screen App */}
        <div className="md:hidden w-full max-w-md mx-auto h-[600px] rounded-3xl overflow-hidden border border-white/10">
          <GlassBankApp />
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-md mx-auto mt-8 text-center">
        <p className="text-white/40 text-xs md:text-sm">
          This is a functional prototype demonstrating the GlassBank user
          experience. Tap &quot;Get Started&quot; to begin the onboarding flow.
        </p>
      </div>
    </main>
  );
}
