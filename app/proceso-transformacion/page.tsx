import HeroSections from "@/components/HeroSections";
import TransformationComplete from "@/components/TrasnformationComplete";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Proceso de Transformación",
  description:
    "Conoce nuestra filosofía y los valores que nos impulsan a ofrecer lo mejor.",
};

export default function Page() {
  return (
    <>
      <HeroSections
        url={"/transformation/hero-transformacion.webp"}
        emoji="🛠️"
        title="Proceso de "
        titleBold="transformación"
        desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
      />
      <div>
        <TransformationComplete />
      </div>
    </>
  );
}
