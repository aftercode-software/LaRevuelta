import CirculoVirtuoso from "@/components/nuestra-filosofia/CirculoVirtuoso";
import Empresas from "@/components/nuestra-filosofia/Empresas";
import Necesidades from "@/components/nuestra-filosofia/Necesidades";
import NeedsDiagram from "@/components/nuestra-filosofia/NeedsDiagram";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  return (
    <div>
      <div className="h-[50vh] w-full bg-white">Spacer</div>
      <Necesidades />
      <Empresas />
      <CirculoVirtuoso />
      <div className="h-[50vh] w-full bg-white">Spacer</div>
    </div>
  );
}
