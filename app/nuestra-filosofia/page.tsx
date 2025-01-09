import HeroSections from "@/components/HeroSections";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  return (
    <>
      <HeroSections
        url={"/images/filosofia/filosofo.png"}
        emoji="🧠"
        title="Nuestra "
        titleBold="filosofía"
        desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
      />
      <div>
        <NuestraFilosofia />
      </div>
    </>
  );
}
