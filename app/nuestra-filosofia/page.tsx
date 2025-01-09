import HeroSections from "@/components/HeroSections";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nuestra filosofía",
  description:
    "Conoce nuestra filosofía y los valores que nos impulsan a ofrecer lo mejor.",
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
