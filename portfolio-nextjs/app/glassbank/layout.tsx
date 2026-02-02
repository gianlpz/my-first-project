import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlassBank Case Study | Gian Pierre Lopez Manzano",
  description:
    "An inclusive mobile banking experience designed with accessibility and clarity at its core.",
};

export default function GlassBankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
