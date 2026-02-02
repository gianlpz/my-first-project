"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "gradient";
  children: React.ReactNode;
}

export function GlassCard({
  variant = "default",
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-4 transition-all duration-200",
        variant === "default" && "gb-glass-card",
        variant === "strong" && "gb-glass-card-strong",
        variant === "gradient" && "gb-balance-card text-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glass" | "primary" | "outline";
  size?: "default" | "lg" | "icon";
  children: React.ReactNode;
}

export function GlassButton({
  variant = "glass",
  size = "default",
  className,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        "font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] min-h-[44px]",
        size === "default" && "px-6 py-3",
        size === "lg" && "px-8 py-4 text-lg",
        size === "icon" && "p-3 w-12 h-12",
        variant === "glass" && "gb-glass-button text-white",
        variant === "primary" &&
          "gb-gradient-primary text-white shadow-lg shadow-purple-500/25",
        variant === "outline" &&
          "border border-white/20 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
