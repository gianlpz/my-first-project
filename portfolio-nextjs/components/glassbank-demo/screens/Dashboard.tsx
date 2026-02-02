"use client";

import { GlassCard, GlassButton } from "../GlassCard";
import { useLanguage, useAppMode } from "../context";
import { cn } from "@/lib/utils";

// Icons
const SendIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const BillIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const AddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const CardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

// Mock transaction data
const mockTransactions = [
  {
    id: 1,
    merchant: "Starbucks",
    category: "Food & Drink",
    amount: -4.5,
    date: "Today",
    icon: "\u2615",
  },
  {
    id: 2,
    merchant: "Uber",
    category: "Transport",
    amount: -12.8,
    date: "Today",
    icon: "\ud83d\ude97",
  },
  {
    id: 3,
    merchant: "Tesco",
    category: "Shopping",
    amount: -32.45,
    date: "Yesterday",
    icon: "\ud83d\uded2",
  },
  {
    id: 4,
    merchant: "Netflix",
    category: "Entertainment",
    amount: -15.99,
    date: "Yesterday",
    icon: "\ud83c\udfac",
  },
];

interface DashboardProps {
  onNavigate: (path: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const { t } = useLanguage();
  const { isSimplified } = useAppMode();

  const balance = 2847.5;
  const spent = 1250.0;
  const budget = 2000.0;
  const spendingPercentage = (spent / budget) * 100;

  const quickActions = [
    { id: "send", label: t("sendMoney"), icon: <SendIcon /> },
    { id: "pay", label: t("payBill"), icon: <BillIcon /> },
    { id: "add", label: t("addMoney"), icon: <AddIcon /> },
    { id: "cards", label: t("viewCards"), icon: <CardIcon /> },
  ];

  return (
    <div
      className={cn(
        "min-h-full flex flex-col pb-20",
        isSimplified && "simplified-mode"
      )}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gb-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-white">GlassBank</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-white/70 hover:text-white transition-colors rounded-xl hover:bg-white/10 relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="absolute top-1 right-1 w-4 h-4 bg-[#EC4899] rounded-full text-[10px] text-white flex items-center justify-center font-medium">
              3
            </span>
          </button>
          <button
            onClick={() => onNavigate("settings")}
            className="p-2 text-white/70 hover:text-white transition-colors rounded-xl hover:bg-white/10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 px-4 space-y-4 overflow-y-auto no-scrollbar">
        {/* Balance Card */}
        <GlassCard variant="gradient" className="slide-up p-4">
          <p className="text-white/70 text-sm mb-1">{t("balance")}</p>
          <h2
            className={cn(
              "text-4xl font-bold text-white mb-4",
              isSimplified && "text-5xl"
            )}
          >
            \u00a3{balance.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
          </h2>

          {/* Spending progress */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/70">
                {t("thisMonth")} {t("spending")}
              </span>
              <span className="text-white">
                \u00a3{spent.toFixed(0)} / \u00a3{budget.toFixed(0)}
              </span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${Math.min(spendingPercentage, 100)}%` }}
              />
            </div>
            <p className="text-white/60 text-sm mt-2">
              \u00a3{(budget - spent).toFixed(0)} {t("remaining")}
            </p>
          </div>
        </GlassCard>

        {/* Quick Actions - Standard Mode */}
        {!isSimplified && (
          <div
            className="grid grid-cols-4 gap-3 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {quickActions.map((action) => (
              <GlassCard
                key={action.id}
                className="flex flex-col items-center justify-center py-4 px-2 cursor-pointer hover:bg-white/15 transition-colors"
              >
                <div className="w-10 h-10 rounded-full gb-gradient-primary flex items-center justify-center mb-2">
                  <span className="text-white [&>svg]:w-5 [&>svg]:h-5">
                    {action.icon}
                  </span>
                </div>
                <span className="text-white text-xs font-medium text-center">
                  {action.label}
                </span>
              </GlassCard>
            ))}
          </div>
        )}

        {/* Quick Actions - Simplified Mode */}
        {isSimplified && (
          <div className="space-y-3 slide-up" style={{ animationDelay: "0.1s" }}>
            {quickActions.slice(0, 3).map((action) => (
              <GlassButton
                key={action.id}
                variant="glass"
                size="lg"
                className="w-full justify-start gap-4 py-4"
              >
                <div className="w-12 h-12 rounded-xl gb-gradient-primary flex items-center justify-center">
                  {action.icon}
                </div>
                <span className="text-lg">{action.label}</span>
              </GlassButton>
            ))}
          </div>
        )}

        {/* Recent Transactions */}
        <div className="slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex justify-between items-center mb-4">
            <h3
              className={cn(
                "text-lg font-semibold text-white",
                isSimplified && "text-xl"
              )}
            >
              {t("recentTransactions")}
            </h3>
            <button
              onClick={() => onNavigate("transactions")}
              className="text-[#7B3FF2] text-sm font-medium"
            >
              {t("seeAll")}
            </button>
          </div>

          <GlassCard className="divide-y divide-white/10 p-0 overflow-hidden">
            {mockTransactions.map((tx) => (
              <div
                key={tx.id}
                className={cn(
                  "flex items-center gap-4 py-3 px-4 cursor-pointer hover:bg-white/5 transition-colors",
                  isSimplified && "py-5"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  {tx.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-white font-medium truncate",
                      isSimplified && "text-lg"
                    )}
                  >
                    {tx.merchant}
                  </p>
                  <p className="text-white/50 text-sm">
                    {tx.category} \u00b7 {tx.date}
                  </p>
                </div>
                <span
                  className={cn(
                    "text-white font-semibold",
                    tx.amount < 0 ? "text-white" : "text-green-400",
                    isSimplified && "text-lg"
                  )}
                >
                  {tx.amount < 0 ? "-" : "+"}
                  \u00a3{Math.abs(tx.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </GlassCard>
        </div>
      </main>

      {/* Bottom Nav */}
      <BottomNav currentPath="dashboard" onNavigate={onNavigate} />
    </div>
  );
}

// Bottom Navigation Component
function BottomNav({
  currentPath,
  onNavigate,
}: {
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const { t } = useLanguage();
  const { isSimplified } = useAppMode();

  const navItems = isSimplified
    ? [
        { id: "dashboard", label: t("home"), icon: HomeIcon },
        { id: "transactions", label: t("transactions"), icon: TransactionsIcon },
        { id: "settings", label: t("more"), icon: MoreIcon },
      ]
    : [
        { id: "dashboard", label: t("home"), icon: HomeIcon },
        { id: "transactions", label: t("transactions"), icon: TransactionsIcon },
        { id: "cards", label: t("cards"), icon: CardsIcon },
        { id: "automations", label: t("automations"), icon: AutomationsIcon },
        { id: "settings", label: t("more"), icon: MoreIcon },
      ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 gb-glass-card-strong border-t border-white/10 z-10">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = currentPath === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200",
                isActive ? "text-white" : "text-white/50 hover:text-white/70",
                isSimplified && "py-3 px-6"
              )}
            >
              <span
                className={cn(
                  "transition-all duration-200",
                  isActive && "text-[#7B3FF2]",
                  isSimplified && "scale-125"
                )}
              >
                <Icon />
              </span>
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive && "text-[#7B3FF2]",
                  isSimplified && "text-sm"
                )}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-[#7B3FF2] mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// Nav Icons
function HomeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}

function CardsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  );
}

function AutomationsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </svg>
  );
}
