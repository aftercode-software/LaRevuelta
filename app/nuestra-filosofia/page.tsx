import HeroSections from "@/components/HeroSections";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nuestra filosofía - La Revuelta",
  description:
    "Explorá nuestra filosofía basada en satisfacer necesidades humanas y potenciar el impacto de las empresas. Creamos un círculo virtuoso donde todos ganan.",
  keywords:
    "filosofía La Revuelta, marketing con propósito, necesidades humanas, impacto empresarial, círculo virtuoso, agencias con valores, propuestas de valor, transformación positiva, progreso económico",
};

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  return (
    <>
      <HeroSections
        url={"/hero/filosofia.webp"}
        emoji="🧠"
        title="Nuestra "
        titleBold="filosofía"
        desc="Conoce nuestra filosofía y los valores que nos impulsan a ofrecer lo mejor."
      />
      <div>
        <NuestraFilosofia />
      </div>
    </>
  );
}
