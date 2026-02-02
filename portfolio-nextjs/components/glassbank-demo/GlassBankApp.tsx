"use client";

import { useState } from "react";
import { AppModeProvider, LanguageProvider } from "./context";
import { Welcome } from "./screens/Welcome";
import { LanguageSelect } from "./screens/LanguageSelect";
import { Dashboard } from "./screens/Dashboard";

type Screen = "welcome" | "language" | "dashboard" | "transactions" | "settings";

function AppContent() {
  const [screen, setScreen] = useState<Screen>("welcome");

  const handleNavigate = (path: string) => {
    if (path === "dashboard" || path === "transactions" || path === "settings") {
      setScreen(path as Screen);
    }
  };

  return (
    <div className="w-full h-full bg-[#1E1E1E] text-white overflow-hidden">
      {screen === "welcome" && (
        <Welcome onGetStarted={() => setScreen("language")} />
      )}
      {screen === "language" && (
        <LanguageSelect
          onContinue={() => setScreen("dashboard")}
          onBack={() => setScreen("welcome")}
        />
      )}
      {(screen === "dashboard" ||
        screen === "transactions" ||
        screen === "settings") && <Dashboard onNavigate={handleNavigate} />}
    </div>
  );
}

export function GlassBankApp() {
  return (
    <AppModeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AppModeProvider>
  );
}
