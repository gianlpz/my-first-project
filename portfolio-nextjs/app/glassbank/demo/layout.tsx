import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlassBank Demo | Gian Pierre Lopez Manzano",
  description:
    "Interactive demo of the GlassBank mobile banking app prototype.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout overrides the root layout's nav/footer for the demo page
  return <>{children}</>;
}
