import Container from "@/components/Container";
import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Desde un diagnóstico profundo hasta la ejecución de estrategias innovadoras, nuestros clientes alcanzaron sus objetivos y superaron sus expectativas. Ahora es tu turno.",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSections
        url={"/hero/clientes.webp"}
        emoji="🤝"
        titleBold="Clientes"
        desc="Desde un diagnóstico profundo hasta la ejecución de estrategias innovadoras, nuestros clientes alcanzaron sus objetivos y superaron sus expectativas. Ahora es tu turno."
      />
      <Container tag="main">{children}</Container>
    </>
  );
}
