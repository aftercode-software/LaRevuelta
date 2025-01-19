import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Qué nos inspira - La Revuelta",
  description:
    "En La Revuelta nos inspiran los rebeldes que transforman lo cotidiano en extraordinario. Desde Nike, The Beatles, YSY y Duki, celebramos a quienes rompen moldes y marcan nuevos caminos.",
  keywords:
    "marketing inspirado, rebeldes del deporte, Nike marketing, The Beatles innovación, marketing cultural, YSY y Duki, romper moldes, transformación empresarial, creatividad e innovación, agencia disruptiva",
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
