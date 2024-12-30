import CirculoRecursivo from "@/components/nuestra-filosofia/CirculoRecursivo";
import CirculoVirtuoso from "@/components/nuestra-filosofia/CirculoVirtuoso";
import Empresas from "@/components/nuestra-filosofia/Empresas";
import Necesidades from "@/components/nuestra-filosofia/Necesidades";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  return <NuestraFilosofia />;
}
