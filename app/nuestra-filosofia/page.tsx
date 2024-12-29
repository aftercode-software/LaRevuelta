import CirculoRecursivo from "@/components/nuestra-filosofia/CirculoRecursivo";
import CirculoVirtuoso from "@/components/nuestra-filosofia/CirculoVirtuoso";
import Empresas from "@/components/nuestra-filosofia/Empresas";
import Necesidades from "@/components/nuestra-filosofia/Necesidades";
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
      <CirculoRecursivo />
      <div className="h-[50vh] w-full bg-white">Spacer</div>
    </div>
  );
}
