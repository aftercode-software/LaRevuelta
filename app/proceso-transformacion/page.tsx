import HeroSections from "@/components/HeroSections";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import TransformationComplete from "@/components/transformacion/TrasnformationComplete";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Proceso de Transformación",
  description:
    "Conocé cómo llevamos a tu empresa al siguiente nivel. Desde un diagnóstico profundo hasta la creación de estrategias innovadoras, te acompañamos en cada etapa para alcanzar el éxito y más allá.",
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
