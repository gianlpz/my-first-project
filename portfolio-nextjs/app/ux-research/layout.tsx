import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Research App Case Study | Gian Pierre Lopez Manzano",
  description:
    "An AI-powered UX research assistant with 6 tools for personas, empathy maps, user flows, pain points, accessibility audits, and heuristic evaluations.",
};

export default function UxResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
