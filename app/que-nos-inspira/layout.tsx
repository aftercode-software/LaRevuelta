import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Que nos inspira",
  description:
    "Conoce nuestra filosofía y los valores que nos impulsan a ofrecer lo mejor.",
};

export default function InspirationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSections
        url={"/inspiracion/hero-inspiracion.webp"}
        emoji="💡"
        title="Qué nos "
        titleBold="inspira"
        desc="Desde los rebeldes del deporte hasta los visionarios de la música y el arte, nos inspiran quienes rompen moldes, cambian las reglas y transforman lo cotidiano en algo extraordinario."
      />
      <main>{children}</main>
    </>
  );
}
