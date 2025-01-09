import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Que nos inspira",
  description:
    "Desde los rebeldes del deporte hasta los visionarios de la música y el arte, nos inspiran quienes rompen moldes, cambian las reglas y transforman lo cotidiano en algo extraordinario.",
};

export default function InspirationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSections
        url={"/hero/inspiracion.webp"}
        emoji="💡"
        title="Qué nos "
        titleBold="inspira"
        desc="Desde los rebeldes del deporte hasta los visionarios de la música y el arte, nos inspiran quienes rompen moldes, cambian las reglas y transforman lo cotidiano en algo extraordinario."
      />
      <div className="min-h-[50vh]">{children}</div>
    </>
  );
}
