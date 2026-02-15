import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching App Case Study | Gian Pierre Lopez Manzano",
  description:
    "An evidence-based mobile coaching platform helping people grow in career, relationships, and personal development.",
};

export default function CoachingAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
