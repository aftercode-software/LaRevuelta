import Container from "@/components/Container";
import HeroSections from "@/components/HeroSections";
import React from "react";

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSections
        url={"/images/clientes/hero.png"}
        emoji="🤝"
        titleBold="Clientes"
        desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
      />
      <Container tag="main">{children}</Container>
    </>
  );
}
