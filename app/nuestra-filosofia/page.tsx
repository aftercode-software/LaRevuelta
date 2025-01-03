import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  return <NuestraFilosofia />;
}
