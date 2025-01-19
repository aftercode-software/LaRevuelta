import HeroSections from "@/components/HeroSections";
import TransformationComplete from "@/components/transformacion/TrasnformationComplete";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Proceso de transformación - La Revuelta",
  description:
    "Descubre cómo llevamos tu empresa al siguiente nivel con analítica interna, investigación de mercado y estrategias personalizadas. Potencia tu negocio y expande tu visión con La Revuelta.",
  keywords:
    "proceso de transformación empresarial, analítica interna, investigación de mercado, estrategias personalizadas, marketing estratégico, optimización de procesos, crecimiento empresarial, expansión de mercados, agencia de marketing disruptivo",
};

export default function Page() {
  return (
    <>
      <HeroSections
        url={"/hero/transformacion.webp"}
        emoji="🛠️"
        title="Proceso de "
        titleBold="transformación"
        desc="Conocé cómo llevamos a tu empresa al siguiente nivel. Desde un diagnóstico profundo hasta la creación de estrategias innovadoras, te acompañamos en cada etapa para alcanzar el éxito y más allá."
      />
      <div>
        <TransformationComplete />
      </div>
    </>
  );
}
