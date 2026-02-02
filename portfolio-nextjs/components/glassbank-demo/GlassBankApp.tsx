"use client";

import { useState, useEffect } from "react";

export function GlassBankApp() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback timeout in case onLoad doesn't fire for cross-origin iframe
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 bg-[#1E1E1E] flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-white/20 border-t-[#7B3FF2] rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src="https://glassbank-app.vercel.app/"
        className="w-full h-full border-0"
        title="GlassBank Demo"
        allow="fullscreen"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
