"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";

// App Mode Context
type AppMode = "standard" | "simplified";

interface AppModeContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  isSimplified: boolean;
}

const AppModeContext = createContext<AppModeContextType | undefined>(undefined);

export function AppModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AppMode>("standard");

  return (
    <AppModeContext.Provider
      value={{
        mode,
        setMode,
        isSimplified: mode === "simplified",
      }}
    >
      {children}
    </AppModeContext.Provider>
  );
}

export function useAppMode() {
  const context = useContext(AppModeContext);
  if (!context) {
    throw new Error("useAppMode must be used within an AppModeProvider");
  }
  return context;
}

// Language Context
type Language = "en" | "es" | "pl" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    welcome: "Welcome to GlassBank",
    getStarted: "Get Started",
    selectLanguage: "Select Your Language",
    continue: "Continue",
    back: "Back",
    home: "Home",
    transactions: "Transactions",
    cards: "Cards",
    automations: "Automations",
    more: "More",
    balance: "Balance",
    sendMoney: "Send Money",
    payBill: "Pay Bill",
    addMoney: "Add Money",
    viewCards: "Cards",
    recentTransactions: "Recent Transactions",
    seeAll: "See All",
    thisMonth: "This Month",
    spending: "Spending",
    remaining: "Remaining",
    settings: "Settings",
    notifications: "Notifications",
  },
  es: {
    welcome: "Bienvenido a GlassBank",
    getStarted: "Comenzar",
    selectLanguage: "Selecciona Tu Idioma",
    continue: "Continuar",
    back: "Atr\u00e1s",
    home: "Inicio",
    transactions: "Transacciones",
    cards: "Tarjetas",
    automations: "Automatizaciones",
    more: "M\u00e1s",
    balance: "Saldo",
    sendMoney: "Enviar Dinero",
    payBill: "Pagar Factura",
    addMoney: "Agregar Dinero",
    viewCards: "Tarjetas",
    recentTransactions: "Transacciones Recientes",
    seeAll: "Ver Todo",
    thisMonth: "Este Mes",
    spending: "Gastos",
    remaining: "Restante",
    settings: "Configuraci\u00f3n",
    notifications: "Notificaciones",
  },
  pl: {
    welcome: "Witamy w GlassBank",
    getStarted: "Rozpocznij",
    selectLanguage: "Wybierz Sw\u00f3j J\u0119zyk",
    continue: "Kontynuuj",
    back: "Wstecz",
    home: "G\u0142\u00f3wna",
    transactions: "Transakcje",
    cards: "Karty",
    automations: "Automatyzacje",
    more: "Wi\u0119cej",
    balance: "Saldo",
    sendMoney: "Wy\u015blij Pieni\u0105dze",
    payBill: "Zap\u0142a\u0107 Rachunek",
    addMoney: "Dodaj Pieni\u0105dze",
    viewCards: "Karty",
    recentTransactions: "Ostatnie Transakcje",
    seeAll: "Zobacz Wszystko",
    thisMonth: "Ten Miesi\u0105c",
    spending: "Wydatki",
    remaining: "Pozosta\u0142o",
    settings: "Ustawienia",
    notifications: "Powiadomienia",
  },
  zh: {
    welcome: "\u6b22\u8fce\u6765\u5230 GlassBank",
    getStarted: "\u5f00\u59cb\u4f7f\u7528",
    selectLanguage: "\u9009\u62e9\u60a8\u7684\u8bed\u8a00",
    continue: "\u7ee7\u7eed",
    back: "\u8fd4\u56de",
    home: "\u9996\u9875",
    transactions: "\u4ea4\u6613",
    cards: "\u94f6\u884c\u5361",
    automations: "\u81ea\u52a8\u5316",
    more: "\u66f4\u591a",
    balance: "\u4f59\u989d",
    sendMoney: "\u8f6c\u8d26",
    payBill: "\u4ed8\u8d26\u5355",
    addMoney: "\u5b58\u6b3e",
    viewCards: "\u94f6\u884c\u5361",
    recentTransactions: "\u6700\u8fd1\u4ea4\u6613",
    seeAll: "\u67e5\u770b\u5168\u90e8",
    thisMonth: "\u672c\u6708",
    spending: "\u652f\u51fa",
    remaining: "\u5269\u4f59",
    settings: "\u8bbe\u7f6e",
    notifications: "\u901a\u77e5",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const SUPPORTED_LANGUAGES: {
  code: Language;
  name: string;
  flag: string;
}[] = [
  { code: "en", name: "English", flag: "\ud83c\uddec\ud83c\udde7" },
  { code: "es", name: "Espa\u00f1ol", flag: "\ud83c\uddea\ud83c\uddf8" },
  { code: "pl", name: "Polski", flag: "\ud83c\uddf5\ud83c\uddf1" },
  { code: "zh", name: "\u4e2d\u6587", flag: "\ud83c\udde8\ud83c\uddf3" },
];
