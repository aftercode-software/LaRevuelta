import Container from "@/components/Container";
import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Clientes - La Revuelta",
  description:
    "Conoce los casos de éxito de nuestros clientes. Creamos estrategias personalizadas para llevar sus empresas al siguiente nivel. ",
  keywords:
    "casos de éxito, clientes La Revuelta, IPC Pools marketing, Nutriterra estrategias, agencia de marketing disruptiva, crecimiento empresarial, marketing personalizado, resultados empresariales",
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
