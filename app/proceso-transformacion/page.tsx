import HeroSections from "@/components/HeroSections";
import TransformationComplete from "@/components/TrasnformationComplete";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSections
        url={"/transformation/hero-transformacion.webp"}
        emoji="🛠️"
        tittle="Proceso de "
        tittleBold="transformación"
        desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
      />
      <div>
        <TransformationComplete />
      </div>
    </>
  );
}
