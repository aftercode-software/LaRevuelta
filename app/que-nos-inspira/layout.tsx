import HeroSections from "@/components/HeroSections";
import React from "react";

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
        desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
      />
      <main className="">{children}</main>
    </>
  );
}
